import React from 'react';
import { createContext, useContext, useState } from 'react';
const ThemeContext = createContext('light');

function Context(props) {
    const [theme, setTheme] = useState('light');
    return (
       <>
        <ThemeContext.Provider value={theme}>
        <Form />
        </ThemeContext.Provider>
        <Button onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
      }}>
        Toggle theme
      </Button>
       </>
    );
}

function Form({ children }) {
    return (
      <Panel title="Welcome">
       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius perspiciatis quos ab nemo quas ipsum 
        reprehenderit quae nihil quibusdam facilis. Illum dolore, minima veniam saepe quisquam excepturi eius harum esse?</p>
      </Panel>
    );
  }
  
  function Panel({ title, children }) {
    const theme = useContext(ThemeContext);
    const className = 'panel-' + theme;
    return (
      <section className={className}>
        <h1>{title}</h1>
        {children}
      </section>
    )
  }
  
  function Button({ children, onClick }) {
    const theme = useContext(ThemeContext);
    const className = 'button-' + theme;
    return (
      <button className={className} onClick={onClick}>
        {children}
      </button>
    );
  }
  

export default Context;