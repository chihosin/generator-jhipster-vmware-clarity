const chalk = require('chalk');
const shelljs = require('shelljs');
const BaseGenerator = require('generator-jhipster/generators/generator-base');
const utils = require('generator-jhipster/generators/utils');
const constants = require('generator-jhipster/generators/generator-constants');
const packagejs = require('../../package.json');
const semver = require('semver');
const _ = require('lodash');

const ANGULAR_VERSION = '5.2.8';
const CLARITY_ANGULAR_VERSION = '^0.11.15';
const CLARITY_ICONS_VERSION = '^0.11.15';
const CLARITY_UI_VERSION = '^0.11.15';
const WEB_COMPONENTS_VERSION = '^1.1.0';
const WEB_ANIMATIONS_VERSION = '^2.3.1';
const MAIN_SRC_DIR = constants.CLIENT_MAIN_SRC_DIR;
const TEST_SRC_DIR = constants.CLIENT_TEST_SRC_DIR;
const ANGULAR_DIR = constants.ANGULAR_DIR;
const files = {
    sass: [
        {
            condition: generator => generator.config.useSass,
            path: MAIN_SRC_DIR,
            templates: [
                'content/scss/global.scss',
                'content/scss/vendor.scss'
            ]
        }
    ],
    angularApp: [
        {
            path: ANGULAR_DIR,
            templates: [
                'app.module.ts',
                'app-routing.module.ts',
                'vendor.ts',
            ]
        }
    ],
    angularMain: [
        {
            path: ANGULAR_DIR,
            templates: [
                // entities
                'entities/entity.module.ts',
                'entities/entity.route.ts',
                // layouts
                'layouts/index.ts',
                'layouts/main/main.component.ts',
                'layouts/main/main.component.html',
                {
                    file: 'layouts/navbar/navbar.component.ts',
                    method: 'processJs'
                },
                {
                    file: 'layouts/navbar/navbar.component.html',
                    method: 'processHtml'
                },
                {
                    file: 'layouts/sidebar/sidebar.component.ts',
                    method: 'processJs'
                },
                {
                    file: 'layouts/sidebar/sidebar.component.html',
                    method: 'processHtml'
                },
                'layouts/sidebar/sidebar.route.ts'
            ]
        },
        {
            condition: generator => generator.useSass,
            path: ANGULAR_DIR,
            templates: [
                'layouts/sidebar/sidebar.scss'
            ]
        },
        {
            condition: generator => !generator.useSass,
            path: ANGULAR_DIR,
            templates: [
                'layouts/sidebar/sidebar.css'
            ]
        },
    ],
    angularAccountModule: [
        {
            path: ANGULAR_DIR,
            condition: generator => generator.authenticationType !== 'oauth2',
            templates: [
                'account/index.ts',
                {
                    file: 'account/account.route.ts',
                    method: 'processJs'
                },
                'account/account.module.ts',
                {
                    file: 'account/login/login.route.ts',
                    method: 'processJs'
                },
                {
                    file: 'account/login/login.component.ts',
                    method: 'processJs'
                },
                {
                    file: 'account/login/login.component.html',
                    method: 'processHtml'
                }
            ]
        }
    ],
    angularShared: [
        {
            path: ANGULAR_DIR,
            templates: [
                'shared/index.ts',
                'shared/shared-libs.module.ts',
                'shared/constants/load.constants.ts',
                // alert service code
                'shared/alert/alert.component.ts',
                'shared/alert/alert-error.component.ts'
            ]
        }
    ]
};

module.exports = class extends BaseGenerator {
    get initializing() {
        return {
            init(args) {
                // do something when argument is 'default'
            },
            readConfig() {
                this.config = this.getJhipsterAppConfig();
                if (!this.config) {
                    this.error('Can\'t read .yo-rc.json');
                }

                // setup config
                utils.copyObjectProps(this, this.config);
                this.useConfigurationFile = false;
                this.env.options.appPath = this.appPath || constants.CLIENT_MAIN_SRC_DIR;
                this.capitalizedBaseName = _.upperFirst(this.baseName);
                this.cacheProvider = this.config.cacheProvider || this.config.hibernateCache || 'no';
                this.enableHibernateCache = this.config.enableHibernateCache || (this.config.hibernateCache !== undefined && this.config.hibernateCache !== 'no');
                this.websocket = this.config.websocket === 'no' ? false : this.config.websocket;
                this.databaseType = this.config.databaseType || this.getDBTypeFromDBValue(this.options.db);
                this.prodDatabaseType = this.config.prodDatabaseType || this.options.db;
                this.devDatabaseType = this.config.devDatabaseType || this.options.db;
                this.searchEngine = this.config.searchEngine === 'no' ? false : this.config.searchEngine;
                this.messageBroker = this.config.messageBroker === 'no' ? false : this.config.messageBroker;
                this.jhiPrefixDashed = _.kebabCase(this.jhiPrefix);
                this.jhiPrefixCapitalized = _.upperFirst(this.jhiPrefix);
                this.jhiTablePrefix = this.getTableName(this.jhiPrefix);
                // backward compatibility on testing frameworks
                if (this.testFrameworks === undefined) {
                    this.testFrameworks = ['gatling'];
                }
                this.protractorTests = this.testFrameworks.includes('protractor');
                this.gatlingTests = this.testFrameworks.includes('gatling');
                this.cucumberTests = this.testFrameworks.includes('cucumber');

                if (!this.clientFramework) {
                    this.clientFramework = 'angularX';
                }
                if (!this.clientPackageManager) {
                    if (this.useYarn) {
                        this.clientPackageManager = 'yarn';
                    } else {
                        this.clientPackageManager = 'npm';
                    }
                }

                this.skipClient = this.applicationType === 'microservice' || this.options['skip-client'] || this.config.skipClient;
                this.skipServer = this.options['skip-server'] || this.config.skipServer;

                this.angularAppName = this.getAngularAppName(this.baseName);
                this.angularXAppName = this.getAngularXAppName(this.baseName);
                this.jhipsterConfigDirectory = '.jhipster';
                this.mainClass = this.getMainClassName(this.baseName);
                this.microserviceAppName = '';

                this.filename = `${this.jhipsterConfigDirectory}/${this.entityNameCapitalized}.json`;
                if (shelljs.test('-f', this.filename)) {
                    this.log(chalk.green(`\nFound the ${this.filename} configuration file, entity can be automatically generated!\n`));
                    this.useConfigurationFile = true;
                    this.fromPath = this.filename;
                }
            },
            readPackageJson() {
                const fromPath = 'package.json';
                this.libAngularVersion = ANGULAR_VERSION;
                if (shelljs.test('-f', fromPath)) {
                    const fileData = this.fs.readJSON(fromPath);
                    if (fileData && fileData.dependencies) {
                        if (fileData.dependencies['@angular/common']) {
                            this.libAngularVersion = fileData.dependencies['@angular/common'];
                        }
                        if (fileData.dependencies['@angular/animations']) {
                            this.libAngularAnimationsVersion = fileData.dependencies['@angular/animations'];
                        }
                        if (fileData.dependencies['@clr/angular']) {
                            this.libClrAngularVersion = fileData.dependencies['@clr/angular'];
                        }
                        if (fileData.dependencies['@clr/icons']) {
                            this.libClrIconsVersion = fileData.dependencies['@clr/icons'];
                        }
                        if (fileData.dependencies['@clr/ui']) {
                            this.libClrUiVersion = fileData.dependencies['@clr/ui'];
                        }
                        if (fileData.dependencies['@webcomponents/custom-elements']) {
                            this.libWebComponentsVersion = fileData.dependencies['@webcomponents/custom-elements'];
                        }
                        if (fileData.dependencies['web-animations-js']) {
                            this.libWebAnimationsVersion = fileData.dependencies['web-animations-js'];
                        }
                    }
                }
            },
            displayLogo() {
                this.log('');
                this.log(`${chalk.blue('██████╗ ')}${chalk.red('██')}${chalk.blue('╗ ██████╗ ██████╗ ██╗   ██╗ ██████╗ ')}`);
                this.log(`${chalk.blue('██╔══██╗██║██╔════╝ ██╔══██╗██║   ██║██╔════╝ ')}`);
                this.log(`${chalk.blue('██████╔╝██║██║  ███╗██████╔╝██║   ██║██║  ███╗')}`);
                this.log(`${chalk.blue('██╔══██╗██║██║   ██║██╔══██╗██║   ██║██║   ██║')}`);
                this.log(`${chalk.blue('██████╔╝██║╚██████╔╝██████╔╝╚██████╔╝╚██████╔╝')}`);
                this.log(`${chalk.blue('╚═════╝ ╚═╝ ╚═════╝ ╚═════╝  ╚═════╝  ╚═════╝ ')}`);
                this.log(chalk.white(`Running ${chalk.bold.blue('JHipster VMware Clarity')} Generator! ${chalk.yellow(`v${packagejs.version}\n`)}`));
            },
            checkclientFramework() {
                if (this.config.skipClient) {
                    this.env.error(`${chalk.red.bold('ERROR!')} This module works only for client.`);
                }
                if (this.config.clientFramework !== 'angular5' && this.config.clientFramework !== 'angularX') {
                    this.env.error(`${chalk.red.bold('ERROR!')} This module works only for Angular5.`);
                }
            },
            checkJhipster() {
                const currentJhipsterVersion = this.config.jhipsterVersion;
                const minimumJhipsterVersion = packagejs.dependencies['generator-jhipster'];
                if (!semver.satisfies(currentJhipsterVersion, minimumJhipsterVersion)) {
                    this.warning(`\nYour generated project used an old JHipster version (${currentJhipsterVersion})... you need at least (${minimumJhipsterVersion})\n`);
                }
            }
        };
    }

    writing() {
        // utils.copyObjectProps(this, this.config);
        // this.angularXAppName = this.getAngularXAppName();
        // this.jhiPrefixCapitalized = _.upperFirst(this.config.jhiPrefix);

        // init all variables
        this.anyError = false;

        // add dependencies
        try {
            if (this.libAngularAnimationsVersion) {
                this.replaceContent(
                    'package.json',
                    `"@angular/animations": "${this.libAngularAnimationsVersion}"`,
                    `"@angular/animations": "${this.libAngularVersion}"`
                );
            } else {
                this.addNpmDependency('@angular/animations', `${this.libAngularVersion}`);
            }
            if (this.libClrAngularVersion) {
                this.replaceContent(
                    'package.json',
                    `"@clr/angular": "${this.libClrAngularVersion}"`,
                    `"@clr/angular": "${CLARITY_ANGULAR_VERSION}"`
                );
            } else {
                this.addNpmDependency('@clr/angular', `${CLARITY_ANGULAR_VERSION}`);
            }
            if (this.libClrIconsVersion) {
                this.replaceContent(
                    'package.json',
                    `"@clr/icons": "${this.libClrIconsVersion}"`,
                    `"@clr/icons": "${CLARITY_ICONS_VERSION}"`
                );
            } else {
                this.addNpmDependency('@clr/icons', `${CLARITY_ICONS_VERSION}`);
            }
            if (this.libClrUiVersion) {
                this.replaceContent(
                    'package.json',
                    `"@clr/ui": "${this.libClrUiVersion}"`,
                    `"@clr/ui": "${CLARITY_UI_VERSION}"`
                );
            } else {
                this.addNpmDependency('@clr/ui', `${CLARITY_UI_VERSION}`);
            }
            if (this.libWebComponentsVersion) {
                this.replaceContent(
                    'package.json',
                    `"@webcomponents/custom-elements": "${this.libWebComponentsVersion}"`,
                    `"@webcomponents/custom-elements": "${WEB_COMPONENTS_VERSION}"`
                );
            } else {
                this.addNpmDependency('@webcomponents/custom-elements', `${WEB_COMPONENTS_VERSION}`);
            }
            if (this.libWebAnimationsVersion) {
                this.replaceContent(
                    'package.json',
                    `"web-animations-js": "${this.libWebAnimationsVersion}"`,
                    `"web-animations-js": "${WEB_ANIMATIONS_VERSION}"`
                );
            } else {
                this.addNpmDependency('web-animations-js', `${WEB_ANIMATIONS_VERSION}`);
            }
        } catch (e) {
            this.log(`${chalk.red.bold('ERROR!')}`);
            this.log('  Problem when adding the new librairies in your package.json');
            this.log('  You need to add manually:\n');
            this.log(`  "@angular/animations": "${this.libAngularVersion}",`);
            this.log(`  "@clr/angular": "${CLARITY_ANGULAR_VERSION}",`);
            this.log(`  "@clr/icons": "${CLARITY_ICONS_VERSION}",`);
            this.log(`  "@clr/ui": "${CLARITY_UI_VERSION}",`);
            this.log(`  "@webcomponents/custom-elements": "${WEB_COMPONENTS_VERSION}",`);
            this.log(`  "web-animations-js": "${WEB_ANIMATIONS_VERSION}",`);
            this.log('');
            this.anyError = true;
        }

        // write angular and above files
        this.writeFilesToDisk(files, this, false, 'angular');
        this.removeFile(`${MAIN_SRC_DIR}content/scss/_bootstrap-variables.scss`);
        this.removeFile(`${ANGULAR_DIR}layouts/profiles/page-ribbon.component.ts`);
        this.removeFile(`${ANGULAR_DIR}layouts/profiles/page-ribbon.scss`);
        this.removeFolder(`${ANGULAR_DIR}layouts/footer`);
    }

    install() {
        const logMsg =
            `To install your dependencies manually, run: ${chalk.yellow.bold(`${this.config.clientPackageManager} install`)}`;

        const injectDependenciesAndConstants = (err) => {
            if (err) {
                this.warning('Install of dependencies failed!');
                this.log(logMsg);
            }
        };
        const installConfig = {
            npm: this.config.clientPackageManager !== 'yarn',
            yarn: this.config.clientPackageManager === 'yarn',
            bower: false,
            callback: injectDependenciesAndConstants
        };
        if (this.options['skip-install']) {
            this.log(logMsg);
        } else {
            this.installDependencies(installConfig);
        }
    }

    end() {
        this.log('End of vmware-clarity generator');
    }
};
