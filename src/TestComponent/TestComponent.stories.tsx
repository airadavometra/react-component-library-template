import React from "react";
import {
  TestComponent,
  TestComponentProps,
  TestComponentTheme,
} from "./TestComponent";
import { Meta, Story } from "@storybook/react";

export default {
  title: "TestComponent",
  component: TestComponent,
  args: {
    text: "Default",
    theme: TestComponentTheme.primary,
  },
  argTypes: {
    text: {
      control: "text",
    },
    theme: {
      control: "select",
      options: TestComponentTheme,
    },
  },
} as Meta;

export const Basic: Story<TestComponentProps> = (args) => (
  <TestComponent {...args} />
);
