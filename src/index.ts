import fs from "fs-extra";
import path from "path";
import yargs from "yargs";
import chalk from "chalk";

const appName = yargs(process.argv).argv._[2] as string;

async function start() {
  try {
    await fs.mkdirSync(path.resolve(process.cwd(), appName));
    fs.copy(
      path.resolve(__dirname, "../templates"),
      path.resolve(process.cwd(), appName)
    ).then(() => {
      console.log(`${chalk.green(`success!`)}`);
    });
  } catch (error) {
    throw new Error(error);
  }
}

start();
