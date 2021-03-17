import fse from "fs-extra";
import path from "path";
import yargs from "yargs";
import chalk from "chalk";
import nodegit from "nodegit";
import shell from "shelljs";
// import inquirer from "inquirer";

const appName = yargs(process.argv).argv._[2] as string;

const clone = nodegit.Clone.clone;
const cloneOptions = new nodegit.CloneOptions();

// const questions = () => {
//   const questions = [
//     {
//       name: "INSTALL",
//       type: "confirm",
//       message: "Do you want install packages?",
//     },
//   ];
//   return inquirer.prompt(questions);
// };

cloneOptions.checkoutBranch = "main";

async function start() {
  try {
    // 删除templates目录
    await fse.removeSync(path.resolve(__dirname, "../templates"));
    // 克隆
    await clone(
      "https://github.com/brightestPeng/react-typescript-cli.git",
      path.resolve(__dirname, "../templates"),
      cloneOptions
    );

    await fse.copy(
      path.resolve(__dirname, "../templates"),
      path.resolve(process.cwd(), appName)
    );

    // const { INSTALL } = await questions();

    // if (INSTALL) {
    await shell.cd(path.resolve(process.cwd(), appName));
    await shell.exec("yarn install");
    // }

    console.log(`\n\n${chalk.green(`success!`)}`);
    // if (INSTALL) {
    console.log(`${chalk.green(`cd ${appName}\n`)}`);
    console.log(`${chalk.green(`npm start || yarn start`)}`);
    // } else {
    //   console.log(
    //     `${chalk.green(`cd ${appName} && yarn instll && yarn start`)}`
    //   );
    // }
    console.log(`\n\n`);
  } catch (error) {
    throw new Error(error);
  }
}

start();
