import chalk from "chalk";
import { exec } from "child_process";
import util from "util";

const execPromisified = util.promisify(exec);

export async function runCommand(command, debug = false) {
  if (debug) {
    console.log(chalk.grey("Running command:", command));
  }
  try {
    const { stdout, stderr } = await execPromisified(command);
    if (debug) {
      console.log(chalk.grey("stdout:", stdout));
      console.error(chalk.grey("stderr:", stderr));
    }
  } catch (error) {
    console.error(chalk.redBright("Error running command:", error));
  }
}
