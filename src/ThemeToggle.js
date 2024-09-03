import React from 'react';
import { Button } from 'reactstrap';

const ThemeToggle = ({ toggleTheme, theme }) => {
  return (
    <div className="my-4">
      <Button color={theme === 'light' ? 'dark' : 'light'} onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </Button>
    </div>
  );
};

export default ThemeToggle;

