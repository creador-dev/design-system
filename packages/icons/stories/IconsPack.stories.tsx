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
    options: [
      "all",
      "status",
      "action",
      "state",
      "navigation",
      "social",
      "global",
    ],
    control: {
      type: "select",
      labels: {
        all: "All Categories",
        status: "Status",
        action: "Action",
        state: "State",
        navigation: "Navigation",
        social: "Social Media",
        global: "Global",
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
