import React from "react";
import {render, fireEvent, screen} from '@testing-library/react';
import App from "./App";
//import getProducts from "./helpers/getProducts";


//const mockPullNewItems = (getProducts = jest.fn());

test('restock test click', async ()=>{
  const{getByText, getByLabelText} = render(<App />);
  const apples = getByText('Apples | $3 | 10');
  const button = getByText('ReStock Products');
  fireEvent.click(button);

  await screen.findByText('Carrots | $3 | 10');
});
