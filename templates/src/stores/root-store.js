"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var todo_store_1 = __importDefault(require("./todo-store"));
var RootStore = /** @class */ (function () {
    function RootStore() {
        this.todoStore = new todo_store_1.default();
    }
    return RootStore;
}());
exports.default = RootStore;
