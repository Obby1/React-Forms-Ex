import React from 'react';
import { render } from "@testing-library/react";
import App from './App';

// it('renders without crashing', function() {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });


it("renders without crashing", function() {
  render(<App />);
});
