import "./public-path";
import { AppContainer } from "react-hot-loader";
import React from "react";
import ReactDOM, { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import { Provider } from "mobx-react";

// import RootState from "./stores/root-store";
import App from "./app";

function appRender(props: any) {
  const { container } = props;
  render(
    <BrowserRouter
      basename={(window as any).__POWERED_BY_QIANKUN__ ? "/react" : "/"}
    >
      <AppContainer>
        {/* <Provider {...new RootState()}> */}
          <App />
        {/* </Provider> */}
      </AppContainer>
    </BrowserRouter>,
    container
      ? container.querySelector("#root")
      : document.querySelector("#root")
  );
}

if (!(window as any).__POWERED_BY_QIANKUN__) {
  appRender({});
}

export async function bootstrap() {
  console.log("[react16] react app bootstraped");
}

export async function mount(props: any) {
  console.log("[react16] props from main framework", props);
  appRender(props);
}

export async function unmount(props: any) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(
    container
      ? container.querySelector("#root")
      : document.querySelector("#root")
  );
}
