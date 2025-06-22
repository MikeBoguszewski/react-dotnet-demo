"use client"
import React from "react";
import ReactDOM from "react-dom/client";
import Greeting from "./components/greeting";
import Hero from "./components/hero";
import "./index.css";
import Examples from "./components/examples";


// Mount islands by selector
const islands = [
  {
    selector: '[data-island="greeting"]',
    component: Greeting,
    propsAttr: "data-props",
  },
  {
    selector: '[data-island="hero"]',
    component: Hero,
    propsAttr: "data-props",
  },
  {
    selector: '[data-island="examples"]',
    component: Examples,
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

// Individual components can be mounted like this:
// const root = document.querySelectorAll('[data-island="framer-test"]');
// root.forEach((el) => {
//   ReactDOM.createRoot(el).render(<FramerTest />);
// });
