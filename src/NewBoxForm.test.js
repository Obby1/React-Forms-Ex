import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

it("renders without crashing", function() {
    render(<NewBoxForm />);
  });
  
it("matches snapshot", function() {
    const { asFragment } = render(<NewBoxForm />);
    expect(asFragment()).toMatchSnapshot();
  });


test('submits entered data', () => {
  const mockAddBox = jest.fn();
  render(<NewBoxForm addBox={mockAddBox} />);

  const widthInput = screen.getByLabelText('Width:');
  const heightInput = screen.getByLabelText('Height:');
  const backgroundColorInput = screen.getByLabelText('Background Color:');
  const addButton = screen.getByText('Add Box');

  fireEvent.change(widthInput, { target: { value: '100' } });
  fireEvent.change(heightInput, { target: { value: '100' } });
  fireEvent.change(backgroundColorInput, { target: { value: 'red' } });
  fireEvent.click(addButton);

  expect(mockAddBox).toHaveBeenCalledTimes(1);
  expect(mockAddBox).toHaveBeenCalledWith(
    expect.objectContaining({
      width: '100',
      height: '100',
      backgroundColor: 'red',
    })
  );
});
