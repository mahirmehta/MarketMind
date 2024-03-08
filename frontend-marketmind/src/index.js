// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const root = document.getElementById('root');

// Use createRoot instead of ReactDOM.render
const rootElement = ReactDOM.createRoot(root);
rootElement.render(<App />);
