---
to: <%= absPath %>/<%= component_name %>.tsx
---
import React from 'react';
import './<%= component_name %>.scss';

export type <%= component_name %>Props = {
  foo: string;
};

export const <%= component_name %>: React.FC<<%= component_name %>Props> = (props) => {
  return <div data-testid="<%= component_name %>"></div>;
};