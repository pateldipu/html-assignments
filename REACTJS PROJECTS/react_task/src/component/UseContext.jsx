import React, { useContext } from "react";
import styled from "styled-components";

const themes = {
  Dark: {
    background: "gray",
    foreground: "pink",
  },
  Light: {
    background: "blue",
    foreground: "red",
  },
};
const ThemeContext = React.createContext(themes.Dark);
const StyledContainer = styled.div`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.foreground};
  // other styles 
`;

function UseContext(props) {
  const theme = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme == themes.Light ? themes.Dark : themes.Light;
    ThemeContext.Provider.value = newTheme;
    console.log(newTheme);
  };
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <StyledContainer theme={theme}>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus ea eius, perspiciatis voluptate, delectus illum animi
                quasi sed possimus maxime necessitatibus iusto eos, aperiam
                totam obcaecati pariatur in ratione laborum eveniet voluptatibus
                sunt nostrum? Mollitia magnam aspernatur vitae quaerat dolorum
                aut maiores dignissimos? Aliquid neque numquam minima
                perspiciatis amet dicta vel dolores magni accusantium mollitia
                quae, reiciendis nisi, autem ea iure sequi rem ipsam sed velit!
                Velit, ducimus. Pariatur quod aliquam eius voluptates quas
                laborum aperiam commodi vero dicta consectetur eveniet labore,
                dignissimos molestias cupiditate modi? Asperiores, veniam quia?
                Accusantium ullam error aspernatur rem eaque possimus.
                Voluptates consectetur et facilis nam aperiam aliquid earum
                quam. Dolorem, eius. Omnis sint harum quidem reprehenderit optio
                commodi maxime repellendus animi consectetur ipsum facilis,
                voluptate non quia ipsam dicta?
              </p>
            </StyledContainer>
            <ThemeContext.Provider value={theme}>
              <div>
                <button onClick={toggleTheme}>Toggle Theme</button>
                {/* Render other components */}
              </div>
            </ThemeContext.Provider>
          </div>
        </div>
      </div>
      <style>
        
      </style>
    </>
  );
}

export default UseContext;
