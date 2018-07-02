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
                            }.component.html`,
                },
                {
                    file: 'entities/entity-management.component.ts',
                    method: 'processJs',
                    template: true,
                    renameTo: generator =>
                        `entities/${generator.entityFolderName}/${
                            generator.entityFileName
                            }.component.ts`,
                },
                {
                    file: 'entities/entity-management.route.ts',
                    method: 'processJs',
                    template: true,
                    renameTo: generator =>
                        `entities/${generator.entityFolderName}/${
                            generator.entityFileName
                            }.route.ts`,
                },
                {
                    file:
                        'entities/entity-management-delete-dialog.component.ts',
                    method: 'processJs',
                    template: true,
                    renameTo: generator =>
                        `entities/${generator.entityFolderName}/${
                            generator.entityFileName
                            }-delete-dialog.component.ts`,
                },
                {
                    file:
                        'entities/entity-management-delete-dialog.component.html',
                    method: 'processHtml',
                    template: true,
                    renameTo: generator =>
                        `entities/${generator.entityFolderName}/${
                            generator.entityFileName
                            }-delete-dialog.component.html`,
                },
                {
                    file: 'entities/entity-management-detail.component.ts',
                    method: 'processJs',
                    template: true,
                    renameTo: generator =>
                        `entities/${generator.entityFolderName}/${
                            generator.entityFileName
                            }-detail.component.ts`,
                },
                {
                    file: 'entities/entity-management-detail.component.html',
                    method: 'processHtml',
                    template: true,
                    renameTo: generator =>
                        `entities/${generator.entityFolderName}/${
                            generator.entityFileName
                            }-detail.component.html`,
                },
                {
                    file: 'entities/entity-management-update.component.ts',
                    method: 'processJs',
                    template: true,
                    renameTo: generator =>
                        `entities/${generator.entityFolderName}/${
                            generator.entityFileName
                            }-update.component.ts`,
                },
                {
                    file: 'entities/entity-management-update.component.html',
                    method: 'processHtml',
                    template: true,
                    renameTo: generator =>
                        `entities/${generator.entityFolderName}/${
                            generator.entityFileName
                            }-update.component.html`,
                },
                {
                    file: 'entities/entity-management.module.ts',
                    method: 'processJs',
                    template: true,
                    renameTo: generator =>
                        `entities/${generator.entityFolderName}/${
                            generator.entityFileName
                            }.module.ts`,
                },
                {
                    file:
                        'entities/entity-management-select-dialog.component.html',
                    method: 'processHtml',
                    template: true,
                    renameTo: generator =>
                        `entities/${generator.entityFolderName}/${
                            generator.entityFileName
                            }-select-dialog.component.html`,
                },
                {
                    file:
                        'entities/entity-management-select-dialog.component.ts',
                    method: 'processJs',
                    template: true,
                    renameTo: generator =>
                        `entities/${generator.entityFolderName}/${
                            generator.entityFileName
                            }-select-dialog.component.ts`,
                },
                {
                    file:
                        'entities/entity-management-select-dialog.component.scss',
                    method: 'processHtml',
                    template: true,
                    renameTo: generator =>
                        `entities/${generator.entityFolderName}/${
                            generator.entityFileName
                            }-select-dialog.component.scss`,
                },
                {
                    file: 'entities/entity.service.ts',
                    method: 'processJs',
                    template: true,
                    renameTo: generator =>
                        `entities/${generator.entityFolderName}/${
                            generator.entityFileName
                            }.service.ts`,
                },
            ],
        },
    ],
};

module.exports = class extends BaseGenerator {
    get initializing() {
        return {
            readConfig() {
                this.entityConfig = this.options.entityConfig;
                this.jhipsterAppConfig = this.getJhipsterAppConfig();
                if (!this.jhipsterAppConfig) {
                    this.error("Can't read .yo-rc.json");
                }
            },
            displayLogo() {
                this.log('');
                this.log(
                    `${chalk.blue('██████╗ ')}${chalk.red('██')}${chalk.blue(
                        '╗ ██████╗ ██████╗ ██╗   ██╗ ██████╗ '
                    )}`
                );
                this.log(
                    `${chalk.blue(
                        '██╔══██╗██║██╔════╝ ██╔══██╗██║   ██║██╔════╝ '
                    )}`
                );
                this.log(
                    `${chalk.blue(
                        '██████╔╝██║██║  ███╗██████╔╝██║   ██║██║  ███╗'
                    )}`
                );
                this.log(
                    `${chalk.blue(
                        '██╔══██╗██║██║   ██║██╔══██╗██║   ██║██║   ██║'
                    )}`
                );
                this.log(
                    `${chalk.blue(
                        '██████╔╝██║╚██████╔╝██████╔╝╚██████╔╝╚██████╔╝'
                    )}`
                );
                this.log(
                    `${chalk.blue(
                        '╚═════╝ ╚═╝ ╚═════╝ ╚═════╝  ╚═════╝  ╚═════╝ '
                    )}`
                );
                this.log(
                    chalk.white(
                        `Running ${chalk.bold.blue(
                            'JHipster VMware Clarity'
                        )} Generator! ${chalk.yellow(
                            `v${packagejs.version}\n`
                        )}`
                    )
                );
            },
            checkclientFramework() {
                if (this.jhipsterAppConfig.skipClient) {
                    this.env.error(
                        `${chalk.red.bold(
                            'ERROR!'
                        )} This module works only for client...`
                    );
                }
                if (
                    this.jhipsterAppConfig.clientFramework !== 'angular5' &&
                    this.jhipsterAppConfig.clientFramework !== 'angularX'
                ) {
                    this.env.error(
                        `${chalk.red.bold(
                            'ERROR!'
                        )} This module works only for Angular5...`
                    );
                }
            },
            validate() {
                // this shouldn't be run directly
                if (!this.entityConfig) {
                    this.env.error(
                        `${chalk.red.bold(
                            'ERROR!'
                        )} This sub generator should be used only from JHipster and cannot be run directly...\n`
                    );
                }
            },
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
            },
        };
    }

    end() {
        this.log(
            `\n${chalk.bold.green(
                'Entity has been modify for VMware Clarity.'
            )}`
        );
    }
};
