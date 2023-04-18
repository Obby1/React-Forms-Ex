import React from 'react';
import { render, fireEvent} from '@testing-library/react';
import BoxList from './BoxList';
import '@testing-library/jest-dom/extend-expect';



it("renders without crashing", function() {
    render(<BoxList />);
  });
  
it("matches snapshot", function() {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
  });

test('renders BoxList component', () => {
//   render(<BoxList />);
    const {getByTestId} = render(<BoxList />);
    const newBoxFormElement = getByTestId('new-box-form');
  expect(newBoxFormElement).toBeInTheDocument();
});

test('adds and removes a box', () => {
  const {getByLabelText, getByText, getByTestId} = render(<BoxList />);
  const widthInput = getByLabelText('Width:');
  const heightInput = getByLabelText('Height:');
  const backgroundColorInput = getByLabelText('Background Color:');
  const addButton = getByText('Add Box');

  fireEvent.change(widthInput, { target: { value: '100' } });
  fireEvent.change(heightInput, { target: { value: '100' } });
  fireEvent.change(backgroundColorInput, { target: { value: 'red' } });
  fireEvent.click(addButton);

  const boxElement = getByTestId('box');
  expect(boxElement).toBeInTheDocument();

  const removeButton = getByText('X');
  fireEvent.click(removeButton);
  expect(boxElement).not.toBeInTheDocument();
});


