const chalk = require('chalk');
const BaseGenerator = require('generator-jhipster/generators/generator-base');
const utils = require('generator-jhipster/generators/utils');
const constants = require('generator-jhipster/generators/generator-constants');
const packagejs = require('../../package.json');

const ANGULAR_DIR = `${constants.ANGULAR_DIR}`;
const CLIENT_NG2_TEMPLATES_DIR = 'angular';

const angularFiles = {
    client: [
        {
            path: ANGULAR_DIR,
            templates: [
                {
                    file: 'entities/entity-management.component.html',
                    method: 'processHtml',
                    template: true,
                    renameTo: generator =>
                        `entities/${generator.entityFolderName}/${
                            generator.entityFileName
                        }.component.html`
                },
                {
                    file: 'entities/entity-management.component.ts',
                    method: 'processJs',
                    template: true,
                    renameTo: generator =>
                        `entities/${generator.entityFolderName}/${
                            generator.entityFileName
                        }.component.ts`
                },
                {
                    file: 'entities/entity-management.route.ts',
                    method: 'processJs',
                    template: true,
                    renameTo: generator =>
                        `entities/${generator.entityFolderName}/${
                            generator.entityFileName
                        }.route.ts`
                },
                {
                    file:
                        'entities/entity-management-delete-dialog.component.ts',
                    method: 'processJs',
                    template: true,
                    renameTo: generator =>
                        `entities/${generator.entityFolderName}/${
                            generator.entityFileName
                        }-delete-dialog.component.ts`
                },
                {
                    file:
                        'entities/entity-management-delete-dialog.component.html',
                    method: 'processHtml',
                    template: true,
                    renameTo: generator =>
                        `entities/${generator.entityFolderName}/${
                            generator.entityFileName
                        }-delete-dialog.component.html`
                },
                {
                    file:
                        'entities/entity-management-delete-dialog.service.ts',
                    method: 'processJs',
                    template: true,
                    renameTo: generator =>
                        `entities/${generator.entityFolderName}/${
                            generator.entityFileName
                        }-delete-dialog.service.ts`
                },
                {
                    file: 'entities/entity-management-detail.component.html',
                    method: 'processHtml',
                    template: true,
                    renameTo: generator =>
                        `entities/${generator.entityFolderName}/${
                            generator.entityFileName
                        }-detail.component.html`
                },
                {
                    file: 'entities/entity-management-update.component.ts',
                    method: 'processJs',
                    template: true,
                    renameTo: generator =>
                        `entities/${generator.entityFolderName}/${
                            generator.entityFileName
                        }-update.component.ts`
                },
                {
                    file: 'entities/entity-management-update.component.html',
                    method: 'processHtml',
                    template: true,
                    renameTo: generator =>
                        `entities/${generator.entityFolderName}/${
                            generator.entityFileName
                        }-update.component.html`
                },
                {
                    file: 'entities/entity-management.module.ts',
                    method: 'processJs',
                    template: true,
                    renameTo: generator =>
                        `entities/${generator.entityFolderName}/${
                            generator.entityFileName
                        }.module.ts`
                },
                {
                    file: 'entities/entity-management-filter.component.html',
                    method: 'processHtml',
                    template: true,
                    renameTo: generator =>
                        `shared/datagrid/filter/${generator.microserviceName}-${generator.entityFileName}-filter/` +
                        `${generator.microserviceName}-${generator.entityFileName}-filter.component.html`
                },
                {
                    file: 'entities/entity-management-filter.component.ts',
                    method: 'processJs',
                    template: true,
                    renameTo: generator =>
                        `shared/datagrid/filter/${generator.microserviceName}-${generator.entityFileName}-filter/` +
                        `${generator.microserviceName}-${generator.entityFileName}-filter.component.ts`
                },
                {
                    file: 'entities/entity-management-filter.component.scss',
                    method: 'processHtml',
                    template: true,
                    renameTo: generator =>
                        `shared/datagrid/filter/${generator.microserviceName}-${generator.entityFileName}-filter/` +
                        `${generator.microserviceName}-${generator.entityFileName}-filter.component.scss`
                },
                {
                    file:
                        'entities/entity-management-select-dialog.component.html',
                    method: 'processHtml',
                    template: true,
                    renameTo: generator =>
                        `entities/${generator.entityFolderName}/${
                            generator.entityFileName
                        }-select-dialog.component.html`
                },
                {
                    file:
                        'entities/entity-management-select-dialog.component.ts',
                    method: 'processJs',
                    template: true,
                    renameTo: generator =>
                        `entities/${generator.entityFolderName}/${
                            generator.entityFileName
                        }-select-dialog.component.ts`
                },
                {
                    file:
                        'entities/entity-management-select-dialog.component.scss',
                    method: 'processHtml',
                    template: true,
                    renameTo: generator =>
                        `entities/${generator.entityFolderName}/${
                            generator.entityFileName
                        }-select-dialog.component.scss`
                },
                {
                    file: 'entities/entity-management-select-dialog.service.ts',
                    method: 'processJs',
                    template: true,
                    renameTo: generator =>
                        `entities/${generator.entityFolderName}/${
                            generator.entityFileName
                        }-select-dialog.service.ts`
                }
            ]
        }
    ]
};

module.exports = class extends BaseGenerator {
    get initializing() {
        return {
            readConfig() {
                this.entityConfig = this.options.entityConfig;
                this.jhipsterAppConfig = this.getJhipsterAppConfig();
                if (!this.jhipsterAppConfig) {
                    this.error('Can\'t read .yo-rc.json');
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
                if (this.jhipsterAppConfig.skipClient) {
                    this.env.error(`${chalk.red.bold('ERROR!')} This module works only for client...`);
                }
                if (
                    this.jhipsterAppConfig.clientFramework !== 'angular5' &&
                    this.jhipsterAppConfig.clientFramework !== 'angularX'
                ) {
                    this.env.error(`${chalk.red.bold('ERROR!')} This module works only for Angular5...`);
                }
            },
            validate() {
                // this shouldn't be run directly
                if (!this.entityConfig) {
                    this.env.error(`${chalk.red.bold('ERROR!')} This sub generator should be used only from JHipster and cannot be run directly...\n`);
                }
            }
        };
    }

    get writing() {
        return {
            writeFiles() {
                utils.copyObjectProps(this, this.entityConfig.options);
                utils.copyObjectProps(this, this.entityConfig);
                this.writeFilesToDisk(
                    angularFiles,
                    this,
                    false,
                    CLIENT_NG2_TEMPLATES_DIR
                );

                if (this.enableTranslation) {
                    const languages =
                        this.languages || this.getAllInstalledLanguages();
                    languages.forEach((language) => {
                        this.copyI18n(language);
                    });
                }

                // added, shared-common.module import select filter dialog
                function convert(str) {
                    return str.replace(/^\\-/, '').replace(/\\-(\w)(\w+)/g, (a, b, c) => b.toUpperCase() + c.toLowerCase());
                }
                try {
                    const microserviceName = convert(this.entityConfig.microserviceName);
                    const filePath = 'src/main/webapp/app/shared/shared-common.module.ts';
                    const filterComponentName = this.stripMargin(`${microserviceName.substr(0, 1).toUpperCase()}${microserviceName.substr(1)}${this.entityConfig.entityAngularName}FilterComponent`);
                    const filterComponentImport = `import { ${filterComponentName} } from 'app/shared/datagrid/filter/${this.entityConfig.microserviceName}-${this.entityConfig.entityServiceFileName}-filter/${this.entityConfig.microserviceName}-${this.entityConfig.entityServiceFileName}-filter.component';`;
                    utils.rewriteFile({
                        file: filePath,
                        needle: 'jhipster-needle-add-entity-filter-import',
                        splicable: [
                            filterComponentImport
                        ]
                    }, this);
                    utils.rewriteFile({
                        file: filePath,
                        needle: 'jhipster-needle-add-entity-filter',
                        splicable: [
                            `${filterComponentName},`
                        ]
                    }, this);
                } catch (e) {
                    this.log('error: shared-common.module.ts lack of markers. (jhipster-needle-add-entity-filter-import or jhipster-needle-add-entity-filter)');
                    throw e;
                }
            }
        };
    }

    end() {
        this.log(`\n${chalk.bold.green('Entity has been modify for VMware Clarity.')}`);
    }
};
