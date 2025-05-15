import type { Meta, StoryObj } from "@storybook/react";

import { Colors } from "./colors";

const meta = {
  title: "Colors",
  component: Colors,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof Colors>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {
    theme: "dark",
  },
};

export const Light: Story = {
  args: {
    theme: "light",
  },
};
