import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';

import RootLayoutContent from './RootLayoutContent';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: 'Example/Main',
  component: RootLayoutContent,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof RootLayoutContent>;

export default meta;
type Story = StoryObj<typeof RootLayoutContent>;

export const MainWithReactComponent = {
  args: {
    children: <div>Children node</div>,
  },
} satisfies Story;

export const MainWithString = {
  args: {
    children: 'String',
  },
} satisfies Story;

// More on interaction testing: https://storybook.js.org/docs/7.0/react/writing-tests/interaction-testing
export const MainWithHomeLink: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const homeButton = (await canvas
      .getAllByRole('link', {
        name: /Accueil/i,
      })
      .at(1)) as HTMLElement;

    await userEvent.click(homeButton);
  },
} satisfies Story;
