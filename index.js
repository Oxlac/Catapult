#!/usr/bin/env node
import { Command } from "commander";
import { LaunchCommand } from "./src/commands/launch.js";

const cli = new Command();

cli.version("1.0.0").description("Catapult CLI");

cli.addCommand(LaunchCommand);

cli.parse(process.argv);
