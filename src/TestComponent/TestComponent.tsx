import React from "react";
import "./TestComponent.scss";

export interface TestComponentProps {
  theme: TestComponentTheme;
  text: string;
}
export enum TestComponentTheme {
  primary = "primary",
  secondary = "secondary",
}

export const TestComponent: React.FC<TestComponentProps> = ({
  theme,
  text,
}) => (
  <div
    data-testid="test-component"
    className={`test-component test-component-${theme}`}
  >
    <h1 className="heading">{text}</h1>
  </div>
);
