#!/usr/bin/env node

/**
 * Creates a new catapult react native project template
 */
import chalk from "chalk";
import { input, confirm } from "@inquirer/prompts";
import ora from "ora";
import { runCommand } from "../helpers/runCommand.js";
import shell from "shelljs";
import { Command } from "commander";
import cliProgress from "cli-progress";

const MODULE_PATH =
  import.meta.url
    .toString()
    .replace("src/commands/launch.js", "")
    .replace("file://", "") + "template/";
const WORKING_DIR = process.cwd();

const EXTRA_PACKAGES = [
  "@gorhom/bottom-sheet@^4",
  "@react-native-firebase/app",
  "@react-native-firebase/analytics",
  "@react-native-firebase/remote-config",
  "@react-native-community/netinfo",
  "react-native-notifier",
  "react-native-encrypted-storage",
  "react-native-modal",
  "react-native-haptic-feedback",
];

export const LaunchCommand = new Command("launch")
  .description("Creates a new catapult react native boilerplate")
  .option("-d, --debug", "display debugging output")
  .option("-r, --run", "run the project after creation")

  .action(async (options, command) => {
    console.log(chalk.cyan("Welcome to Catapult React Native!"));
    console.log(chalk.green("Created and Used by the Oxlac Team"));
    // Get project information
    const appName = await input({
      message: "What is your App Name?",
      default: "MyApp",
    });
    const bundle = await input({
      message: "App Bundle Identifier?",
      default: "com.oxlac." + appName.toLowerCase(),
      validate: (value) => {
        // check if the identifier starts with com
        if (!value.startsWith("com.")) {
          return "It is good practice to start your bundle identifier with com.";
        }
        return true;
      },
    });
    const git = await confirm({
      message: "Do you want to initialize a git repository?",
      transformer: (value) => (value ? "Yes" : "No"),
      default: true,
    });
    const prebuild = await confirm({
      message: "Generate ios and android folders (expo prebuild)?",
      transformer: (value) => (value ? "Yes" : "No"),
      default: true,
    });

    // confirm project information
    if (appName === undefined || bundle === undefined) {
      console.log(chalk.red("Aborting"));
      process.exit(1);
    }
    console.log(chalk.yellow("Creating new project in " + WORKING_DIR));
    // create the default ignite template
    const loader = ora("Creating ignite template").start();
    await runCommand(
      `npx ignite-cli@latest new ${appName} --bundle=${bundle} --git=false --overwrite --installDeps=false --targetPath . --workflow=cng --removeDemo --yes` +
        (options.debug ? " --debug" : ""),
      options.debug
    );
    loader.succeed("ignite template created");
    // cd into the directory again
    shell.cd(WORKING_DIR);

    // setup nativewind
    loader.start("Setting up nativewind and installing node modules(slow)");
    await runCommand("npm install nativewind", options.debug);
    await runCommand("npm install --save-dev tailwindcss@3.3.2", options.debug);
    await runCommand("npx tailwindcss init", options.debug);
    // add the components
    // serach for content array using regex
    shell.sed(
      "-i",
      `content: \\[\\]`,
      "content: ['./app/**/*.{js,jsx,ts,tsx}', './ignite/**/*.{js,jsx,ts,tsx}']",
      "./tailwind.config.js"
    );
    // update the babel config
    shell.sed(
      "-i",
      '"@babel/plugin-proposal-export-namespace-from",',
      '"@babel/plugin-proposal-export-namespace-from", "nativewind/babel",',
      "./babel.config.js"
    );
    // copy the typescript config
    shell.cp(
      MODULE_PATH + "nativewind/nativewind-env.d.ts",
      WORKING_DIR + "/types/"
    );
    loader.succeed("nativewind setup complete");
    // Adding Extra Packages
    // loader.start("Adding Extra Packages");
    // we run each command one by one to show the progress
    const bar1 = new cliProgress.SingleBar(
      {
        format: "{bar}" + "| {percentage}% || {value}/{total}",
      },
      cliProgress.Presets.legacy
    );
    console.log(chalk.yellow("Adding Extra Packages"));
    bar1.start(EXTRA_PACKAGES.length, 0);
    for (const packageName of EXTRA_PACKAGES) {
      bar1.increment();
      await runCommand("npm install " + packageName, options.debug);
    }
    bar1.stop();
    // loader.succeed("Extra Packages Added");
    // copy over our extra files
    loader.start("Copying Starter Files");
    // app file
    shell.cp(MODULE_PATH + "app.tsx", WORKING_DIR + "/app/app.tsx");
    shell.cp(
      MODULE_PATH + "models/getRootStore.ts",
      WORKING_DIR + "/app/models/helpers/getRootStore.ts"
    );
    shell.cp(
      MODULE_PATH + "models/RootStores.ts",
      WORKING_DIR + "/app/models/RootStores.ts"
    );
    shell.cp(
      MODULE_PATH + "models/setupRootStore.ts",
      WORKING_DIR + "/app/models/helpers/setupRootStore.ts"
    );
    shell.cp(
      MODULE_PATH + "models/useStores.ts",
      WORKING_DIR + "/app/models/helpers/useStores.ts"
    );
    // services
    shell.cp(
      MODULE_PATH + "services/InAppNotifier.ts",
      WORKING_DIR + "/app/services/InAppNotifier.ts"
    );
    shell.cp(
      MODULE_PATH + "services/Vibrator.ts",
      WORKING_DIR + "/app/services/Vibrator.ts"
    );
    // components
    shell.cp(
      MODULE_PATH + "componenets/CustomAlert.tsx",
      WORKING_DIR + "/app/components/CustomAlert.tsx"
    );
    // utils
    shell.cp(
      MODULE_PATH + "utils/encryptedstorage.ts",
      WORKING_DIR + "/app/utils/storage/"
    );
    // readme
    shell.cp(MODULE_PATH + "README.md", WORKING_DIR);
    loader.succeed("Starter Files Copied");
    // downgrading expo (temporary fix for an upstream bug)
    loader.start(
      "Downgrading expo to 50.0.0 (temporary fix for an upstream bug)"
    );
    await runCommand("npm install expo@~50.0.0", options.debug);
    await runCommand("npm install react-native@0.73.6", options.debug);
    await runCommand(
      "npm install expo-modules-autolinking@~1.10.0",
      options.debug
    );
    await runCommand("npx expo install --fix", options.debug);
    loader.succeed("Downgraded expo");
    // prebuild
    if (prebuild) {
      loader.start("Prebuilding");
      await runCommand("expo prebuild", options.debug);
      loader.succeed("Prebuild Complete");
      // remove the package tag from the android manifest using regex and sed
      shell.sed(
        "-i",
        'package="' + bundle + '"',
        "",
        "./android/app/src/main/AndroidManifest.xml"
      );
      // fix the namespace defined inside the manifest file
      shell.sed(
        "-i",
        'namespace "' + bundle.split(".")[0] + "." + bundle.split(".")[2] + '"',
        'namespace "' + bundle + '"',
        "./android/app/build.gradle"
      );
    }

    // git repo
    if (git) {
      loader.start("Initializing git repository");
      await runCommand("git init", options.debug);
      await runCommand("git add .", options.debug);
      await runCommand("git commit -m 'Initial commit'", options.debug);
      loader.succeed("Git Repository Initialized");
    }
    // run
    if (options.run) {
      loader.start("Building Android APK (slow)");
      console.log(chalk.green("Press Ctrl+C to stop"));
      await runCommand("npx expo run:android --variant debug", options.debug);
      loader.succeed("Android APK Built");
      console.log(chalk.green("Opening Emulator and deploying APK"));
    }
  });
