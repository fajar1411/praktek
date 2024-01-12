require("dotenv").config();

const { program } = require('commander');
const ora = require("ora");
const chalk = require("chalk");
const inquirer = require("inquirer");
const fs = require("fs");
const {
  LibTemplateController,
  LibTemplateModel,
  LibTemplateFilter,
  LibTemplateMiddleware,
  LibTemplateRouter,
  LibTemplateValidator,
} = require("./templates");
const {User} = require("../plugins/users/models");
const bcrypt = require("bcrypt");
const {DatabaseMongoDBConnector} = require("./databases");



const MODULE_BASE_PATH = `./${process.env.APP_MODULES}`;

const LibCLIMakeFile = (template, path, label) => {
  const spinner = ora(`[EIWA] creating ${label}...`).start();
  fs.writeFileSync(path, template);
  spinner.stop();
  console.log(chalk.greenBright(`${label} created successfully`));
};

const LibCLIMakeFolder = (modulePath, label) => {
  const spinner = ora(`[nobium] creating ${label}...`).start();
  fs.mkdirSync(modulePath);
  spinner.stop();
  console.log(chalk.greenBright(`${label} created successfully`));
};

const LibCLICheckAndGetModulePath = (moduleName) => {
  const spinner = ora(`[nobium] checking modules ${moduleName}...`).start();
  const modulePath = `${MODULE_BASE_PATH}/${moduleName}`;
  if (fs.existsSync(modulePath)) {
    spinner.stop();
    throw `module '${moduleName}' already to install.`;
  }
  spinner.stop();
  return modulePath;
};

const LibCLISanitizeName = (name) => {
  const spinner = ora(`sanitizing ${name}...`).start();
  const result = name
    .split("-")
    .map((n) => n.charAt(0).toUpperCase() + n.slice(1))
    .join("");
  spinner.stop();

  return result;
};

const LibCLICreateUserAdmin = async (answer) => {
  return new Promise((resolve, reject) => {
    answer.password = bcrypt.hashSync(answer.password, 10)
    answer.isAdmin = true;
    answer.isStaff = true;
    answer.isActive = true;

    const spinner = ora(`creating admin, please wait!\n`).start();
    const timer = setTimeout(async () => {
      try {
        console.log(chalk.greenBright(`admin created successfully`));
        await User.create(answer);
        spinner.stop();
        clearTimeout(timer);
        resolve(true)
      } catch (error) {
        reject(error);
      } finally {
        process.exit(1);
      }

    }, 1200)
  })
}

const LibCLIInputModule = async () => {
  const answer = await inquirer.prompt([
    {
      name: "name",
      message: "Enter the module name (e.g. products or employee-categories):",
      type: "input",
    },
  ]);

  return answer;
};


const LibCLIInputAdmin = async () => {
  const answer = await inquirer.prompt([
    {
      name: "username",
      message: "Enter your username:",
      type: "input",
    },
    {
      name: "password",
      message: "Enter your password:",
      type: "password",
    },
    {
      name: "email",
      message: "Enter your email:",
      type: "input",
    }
  ]);

  return answer;
}

const LibCLIModule = async (moduleName) => {
  try {
    moduleName = moduleName ? moduleName : (await LibCLIInputModule()).name
    const sanitizeName = LibCLISanitizeName(moduleName);
    const modulePath = LibCLICheckAndGetModulePath(moduleName);

    // Make module
    LibCLIMakeFolder(modulePath, "modules");

    // Make controllers
    LibCLIMakeFile(
      LibTemplateController(sanitizeName),
      `${modulePath}/controllers.js`,
      "controllers"
    );

    // Make filters
    LibCLIMakeFile(
      LibTemplateFilter(sanitizeName),
      `${modulePath}/filters.js`,
      "filters"
    );

    // Make middlewares
    LibCLIMakeFile(
      LibTemplateMiddleware(sanitizeName),
      `${modulePath}/middlewares.js`,
      "middlewares"
    );

    // Make models
    LibCLIMakeFile(
      LibTemplateModel(sanitizeName),
      `${modulePath}/models.js`,
      "models"
    );

    // Make routers
    LibCLIMakeFile(
      LibTemplateRouter(sanitizeName, moduleName),
      `${modulePath}/routers.js`,
      "routers"
    );

    // Make validators
    LibCLIMakeFile(
      LibTemplateValidator(sanitizeName),
      `${modulePath}/validators.js`,
      "routers"
    );
  } catch (error) {
    console.log(chalk.yellowBright("Warning: "), error);
    process.exit(1);
  }
};


const LibCLIMakeAdmin = async () => {
  try {
    DatabaseMongoDBConnector({hideSuccessMessage: true});
    const answer = await LibCLIInputAdmin();

    if (!answer.username || !answer.email || !answer.password) {
      throw "Data must be completed for creating admin."
    }

    await LibCLICreateUserAdmin(answer)

  } catch (error) {
    console.log(chalk.yellowBright("Warning: "), error);
    process.exit(1);
  }

}

const LibCLIRunning = () => {
  program
    .option("--make")
    .option("--module")
    .option("--token")
    .option("--admin")
    .option('-n, --name <char>')
  program.parse();

  const options = program.opts();
  console.log(options)

  if (options.make && options.module) {
    LibCLIModule(options.name)
  }

  if (options.make && options.admin) {
    LibCLIMakeAdmin()
  }
}


LibCLIRunning()
