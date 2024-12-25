import React from 'react';
import Menu from './components/CustomMenu/CustomMenu';

const App = () => {
  const menuItems = ['Home', 'About', 'Services', 'Contact'];

  return (
    <div className="App">
      <h1>My Custom Menu</h1>
      <Menu items={menuItems} />
    </div>
  );
};

export default App;
