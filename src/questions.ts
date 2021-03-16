import inquirer from "inquirer";

const askQuestions = () => {
  const questions = [
    {
      name: "INSTALL",
      type: "confirm",
      message: "Do you want install packages?",
    },
  ];
  return inquirer.prompt(questions);
};

export default askQuestions;
