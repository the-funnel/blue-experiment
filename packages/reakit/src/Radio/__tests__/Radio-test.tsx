import * as React from "react";
import { render } from "react-testing-library";
import { Radio } from "../Radio";

const props: Parameters<typeof Radio>[0] = {
  value: "radio",
  stopId: "radio",
  unstable_stops: [],
  currentId: null,
  unstable_pastId: null,
  unstable_register: jest.fn(),
  unstable_unregister: jest.fn(),
  move: jest.fn(),
  next: jest.fn(),
  previous: jest.fn(),
  first: jest.fn(),
  last: jest.fn()
};

test("render", () => {
  const { baseElement } = render(<Radio {...props} />);
  expect(baseElement).toMatchInlineSnapshot(`
<body>
  <div>
    <input
      aria-checked="false"
      id="radio"
      role="radio"
      tabindex="-1"
      type="radio"
      value="radio"
    />
  </div>
</body>
`);
});
