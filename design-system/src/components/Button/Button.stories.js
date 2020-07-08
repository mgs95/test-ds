import Button, { BUTTON_THEMES } from './Button';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';

import React from 'react';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Button',
  component: Button,
};

export const Text = () => (
  <Button label='Hello Button' onClick={action('clicked')} primary />
);

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
