"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_1 = require("mobx");
var todoStore = /** @class */ (function () {
    function todoStore() {
        this.list = [];
    }
    todoStore.prototype.addItem = function () { };
    todoStore.prototype.deleteItem = function () { };
    todoStore.prototype.changeItem = function () { };
    todoStore.prototype.searchItem = function () { };
    __decorate([
        mobx_1.observable
    ], todoStore.prototype, "list", void 0);
    return todoStore;
}());
exports.default = todoStore;
