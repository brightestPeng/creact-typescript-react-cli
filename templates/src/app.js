"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var root_1 = require("react-hot-loader/root");
var react_1 = __importStar(require("react"));
function todoList(state, action) {
    switch (action.type) {
        case "add":
            state.todoList.push(action.item);
            break;
        case "delete":
            state.todoList = state.todoList.filter(function (item) { var _a; return item.id !== ((_a = action.item) === null || _a === void 0 ? void 0 : _a.id); });
            break;
    }
    return { todoList: state.todoList };
}
var App = function () {
    var inputRef = react_1.useRef(null);
    var _a = react_1.useReducer(todoList, {
        todoList: [],
    }), state = _a[0], dispatch = _a[1];
    var addItem = function () {
        dispatch({
            type: "add",
            item: {
                id: Date.now(),
                title: inputRef.current.value,
            },
        });
    };
    var deleteItem = function (id) {
        dispatch({
            type: "delete",
            item: {
                id: id,
            },
        });
    };
    return (<div>
      <input ref={inputRef} type="text"/>
      <button onClick={addItem}>添加</button>
      <div>
        <ul>
          {state.todoList.map(function (item) { return (<li key={item.id}>
              {item.title}
              <span onClick={function () { return deleteItem(item.id); }} style={{ cursor: "pointer" }}>
                X
              </span>
            </li>); })}
        </ul>
      </div>
    </div>);
};
exports.default = root_1.hot(App);
