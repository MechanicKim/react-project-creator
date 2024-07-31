import React from 'react';
import { createRoot } from 'react-dom/client';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

function App() {
  return <div>Hello, React</div>;
}

root.render(<App />);
