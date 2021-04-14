---
to: <%= absPath %>/<%= component_name %>.spec.tsx
---
import React from 'react';
import { render, screen } from '@testing-library/react';
import { <%= component_name %>, <%= component_name %>Props } from './<%= component_name %>';

describe("Test Component", () => {
  let props: <%= component_name %>Props;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<<%= component_name %> {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "props foo";
    const { getByTestId } = renderComponent();

    const component = getByTestId("<%= component_name %>");

    expect(component).toHaveTextContent("props foo");
  });
});
