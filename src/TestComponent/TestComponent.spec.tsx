import React from "react";
import { render } from "@testing-library/react";
import {
  TestComponent,
  TestComponentProps,
  TestComponentTheme,
} from "./TestComponent";

describe("Test Component", () => {
  let props: TestComponentProps;

  beforeEach(() => {
    props = {
      text: "lalala",
      theme: TestComponentTheme.primary,
    };
  });

  const renderComponent = () => render(<TestComponent {...props} />);

  it("should have primary className with default props", () => {
    const { getByTestId } = renderComponent();

    const testComponent = getByTestId("test-component");

    expect(testComponent).toHaveClass("test-component-primary");
  });

  it("should have secondary className with theme set as secondary", () => {
    props.theme = TestComponentTheme.secondary;
    const { getByTestId } = renderComponent();

    const testComponent = getByTestId("test-component");

    expect(testComponent).toHaveClass("test-component-secondary");
  });
});
