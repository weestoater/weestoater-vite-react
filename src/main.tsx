import ReactDOM from "react-dom/client";
import { SaltProviderNext } from "@salt-ds/core";

import { App } from "./App.tsx";

import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/300-italic.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/400-italic.css";
import "@fontsource/open-sans/500.css";
import "@fontsource/open-sans/500-italic.css";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/600-italic.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/open-sans/700-italic.css";
import "@fontsource/open-sans/800.css";
import "@fontsource/open-sans/800-italic.css";
import "@fontsource/pt-mono";

import "@salt-ds/theme/index.css";
import "@salt-ds/theme/css/theme-next.css";
import "./scss/style.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <SaltProviderNext corner="rounded" accent="teal">
    <App />
  </SaltProviderNext>
);
