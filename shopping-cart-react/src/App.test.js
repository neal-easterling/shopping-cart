import React from "react";
import {render} from '@testing-library/react';
import App from "./App";

//mock your component here 
jest.mock ('./Components/MyComponent', () => ()=> (<div>Hello, World!</div>));

test ('mocking test', () => {
  //test contents here 
  const {container} = render(<App />);
  expect(container.textContent).toMatch('Hello, World!');
});
