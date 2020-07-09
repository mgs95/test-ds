import Button, { BUTTON_THEMES } from './Button';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';

import React from 'react';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Button',
  parameters: {
    component: Button,
    componentSubtitle: 'Regular button component',
  },
};

export const Text = () => (
  <Button label='Hello Button' onClick={action('clicked')} primary />
);

export const styles = () => (
  <div>
    <Button label='CLICK ME' theme={BUTTON_THEMES.GREY} />
    <Button label='CLICK ME' theme={BUTTON_THEMES.DARK} />
    <Button label='CLICK ME' primary />
    <Button label='CLICK ME' border />
  </div>
);
styles.story = {
  parameters: { docs: { storyDescription: '4 styles are supported.' } },
};

export const knobs = () => (
  <Button
    label='CLICK ME'
    loading={boolean('Loading')}
    theme={select('Size', Object.values(BUTTON_THEMES))}
  />
);

knobs.story = {
  decorators: [withKnobs],
};
