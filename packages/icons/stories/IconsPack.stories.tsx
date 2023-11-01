import React from "react";

// Import required components.
import dedent from "dedent";
import docs from "./IconsPack.mdx";

export default {
  title: "Icons/Page",
  parameters: {
    layout: "fullscreen",
    docs: {
      page: docs,
    },
    interactions: {
      disabled: true,
    },
  },
};

const Page = ({ category, search }) => {
  return (
    <div className="">
      <div className="">
        <ul className="csb-icons">Test</ul>
      </div>
    </div>
  );
};

Page.storyName = "Icons Pack";
Page.args = {
  category: "all",
  search: "",
};
Page.argTypes = {
  category: {
    name: "Category",
    control: {
      type: "select",
      options: {
        "All Categories": "all",
        Products: "products",
        "Summary Box": "summary-box",
        Status: "status",
        Action: "action",
        State: "state",
        Navigation: "navigation",
        "Social Media": "social",
        Global: "global",
      },
    },
  },
  search: {
    name: "Keyword Search",
    control: {
      type: "text",
    },
  },
};

export { Page };
