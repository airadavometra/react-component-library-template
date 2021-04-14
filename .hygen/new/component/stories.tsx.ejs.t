---
to: <%= absPath %>/<%= component_name %>.stories.tsx
---
import React from 'react';
import { <%= component_name %>,<%= component_name %>Props } from './<%= component_name %>';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
    title: "<%= component_name %>"
};

export const WithBar = () => <<%= component_name %> foo="bar" />;

export const WithBaz = () => <<%= component_name %> foo="baz" />;