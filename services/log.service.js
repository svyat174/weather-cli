import chalk from 'chalk';
import dedent from 'dedent-js';

export const printError = (error) => {
  console.log(chalk.bgRed('ERROR') + ' ' + error);
};

export const printSuccess = (message) => {
  console.log(chalk.bgGreen('SUCCESS') + ' ' + message);
};

export const printHelp = () => {
  console.log(
    dedent`${chalk.bgCyan('HELP')}
		Without parameters - output weather
		-s [CITY] for setup city
		-h for output help
		-t [API_KEY] for setup token
		`
  );
};
