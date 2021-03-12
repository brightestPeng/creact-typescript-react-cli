"use strict";
// import React from 'react';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// interface ButtonProps {
//     size: 'small' | 'middle' | 'large';
// }
// const Button: React.FC<ButtonProps> = (
//     props: ButtonProps,
// ) => {
//     const { size } = props;
//     return <div className={`btn-${size}`}>Button</div>;
// };
var react_1 = __importDefault(require("react"));
var App = function () {
    // 不能将类型“number”分配给类型“"small" | "middle" | "large"”
    return <Button size={1}/>;
};
exports.default = App;
