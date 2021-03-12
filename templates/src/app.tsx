import { hot } from "react-hot-loader/root";
import React, { useReducer, useRef } from "react";

interface IItem {
  id: number;
  title?: string;
}

interface IStateType {
  todoList: Array<IItem>;
}

interface IActionType {
  type: "add" | "delete";
  item?: IItem;
}

function todoList(state: IStateType, action: IActionType) {

  switch (action.type) {
    case "add":
      state.todoList.push(action.item!);
      break;
    case "delete":
      state.todoList = state.todoList.filter(
        (item) => item.id !== action.item?.id
      );
      break;
  }

  return { todoList: state.todoList };
}

const App = () => {
  const inputRef = useRef(null);
  const [state, dispatch] = useReducer(todoList, {
    todoList: [],
  });

  const addItem = () => {
    dispatch({
      type: "add",
      item: {
        id: Date.now(),
        title: (inputRef.current! as any).value,
      },
    });
  };

  const deleteItem = (id: number) => {
    dispatch({
      type: "delete",
      item: {
        id: id,
      },
    });
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={addItem}>添加</button>
      <div>
        <ul>
          {state.todoList.map((item) => (
            <li key={item.id}>
              {item.title}
              <span
                onClick={() => deleteItem(item.id)}
                style={{ cursor: "pointer" }}
              >
                X
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default hot(App);
