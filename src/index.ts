import fse from 'fs-extra';
import path from 'path';
import yargs from 'yargs';
import chalk from 'chalk';
import nodegit from 'nodegit';
import shell from 'shelljs';
import inquirer from 'inquirer';

const { v } = yargs(process.argv).argv;

const clone = nodegit.Clone.clone;
const cloneOptions = new nodegit.CloneOptions();

const questions = () => {
  const questions = [
    {
      name: 'appName',
      type: 'input',
      message: 'Please enter app name:',
    },
    {
      name: 'INSTALL',
      type: 'confirm',
      message: 'Do you want to install packages?',
    },
  ];
  return inquirer.prompt(questions);
};

cloneOptions.checkoutBranch = 'main';

async function start() {
  try {
    if (v) {
      const { version } = JSON.parse(
        fse.readFileSync(path.resolve(__dirname, '../package.json'), 'utf-8'),
      );

      console.log(`${chalk.green(`v${version}`)}`);
    } else {
      const { INSTALL, appName } = await questions();

      // 删除templates目录
      await fse.removeSync(path.resolve(__dirname, '../templates'));
      // 克隆
      await clone(
        'https://github.com/brightestPeng/react-typescript-cli.git',
        path.resolve(__dirname, '../templates'),
        cloneOptions,
      );

      await fse.copy(
        path.resolve(__dirname, '../templates'),
        path.resolve(process.cwd(), appName),
      );

      if (INSTALL) {
        await shell.cd(path.resolve(process.cwd(), appName));
        await shell.exec('yarn install');
      }

      console.log(`\n\n${chalk.green(`success!`)}\n`);
      if (INSTALL) {
        console.log(`${chalk.green(`cd ${appName}`)}`);
        console.log(`${chalk.green(`npm start || yarn start`)}`);
      } else {
        console.log(`${chalk.green(`cd ${appName}`)}`);
        console.log(`${chalk.green(`npm install || yarn instll`)}`);
        console.log(`${chalk.green(`npm start || yarn start`)}`);
      }
      console.log(`\n\n`);
    }
  } catch (error) {
    throw new Error(error);
  }
}

start();
