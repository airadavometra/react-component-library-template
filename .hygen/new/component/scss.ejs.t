---
to: <%= absPath %>/<%= component_name %>.scss
---
@import "../variables.scss";
@import "../typography.scss";

.foo-bar {
  @include font-defaults;
}