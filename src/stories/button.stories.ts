import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "./button";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Gray: Story = {
  args: {
    text: "Hello",
    variant: "gray"
  },
};

export const Blue: Story = {
  args: {
    text: "Hello",
    variant: "blue"
  },
};

