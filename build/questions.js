"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = __importDefault(require("inquirer"));
var askQuestions = function () {
    var questions = [
        {
            name: "INSTALL",
            type: "confirm",
            message: "Do you want install packages?",
        },
    ];
    return inquirer_1.default.prompt(questions);
};
exports.default = askQuestions;
