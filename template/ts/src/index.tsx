import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  return <div>Hello, React</div>;
}

const domNode = document.getElementById('root');
if (domNode) {
  const root = createRoot(domNode);
  root.render(<App />);
}
