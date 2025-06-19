import React from "react";
import ReactDOM from "react-dom/client";
import Greeting from "./components/greeting";

// Mount islands by selector
const islands = [
  {
    selector: '[data-island="greeting"]',
    component: Greeting,
    propsAttr: "data-props",
  },
];

for (const island of islands) {
  document.querySelectorAll(island.selector).forEach((el) => {
    const props = el.getAttribute(island.propsAttr || "");
    const parsed = props ? JSON.parse(props) : {};
    ReactDOM.createRoot(el).render(React.createElement(island.component, parsed));
  });
}
