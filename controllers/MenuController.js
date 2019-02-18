const inquirer = require("inquirer");
const moment = require("moment");

module.exports = class MenuController {
  constructor() {
    this.mainMenuQuestions = [
      {
        type: "list",
        name: "mainMenuChoice",
        message: "Please choose from an option below: ",
        choices: ["Add new Contact", "Exit", "Show Current Date & Time"]
      }
    ];
    this.contacts = [];
  }

  main() {
    console.log("Welcome to AddressBloc!");
    inquirer
      .prompt(this.mainMenuQuestions)
      .then(response => {
        switch (response.mainMenuChoice) {
          case "Add new Contact":
            this.addContact();
            break;
          case "Exit":
            this.exit();
            break;
          case "Show Current Date & Time":
            this.getDate();
            break;
          default:
            console.log("Invalid Input");
            this.main();
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  clear() {
    console.log("\x1Bc");
  }

  addContact() {
    this.clear();
    console.log("addContact Called");
    this.main();
  }

  exit() {
    console.log("Thanks for using AddressBloc!");
    process.exit();
  }

  getDate() {
    console.log(moment().format("MMMM Do YYYY, h:mm:ss a"));
    this.main();
  }
};
