import React, { useState } from "react";
import styled from "styled-components";
import Router from "./Router";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@1,900&display=swap');
a{
  text-decoration: none;
  color: inherit;
}
*{
  box-sizing: border-box;
}
html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
a, dl, dt, dd, ol, ul, li, form, label, table{
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 10px;
  vertical-align: baseline;
}
body{
  font-family: 'Noto Sans KR', sans-serif;
  margin-bottom: 100px;
  background-color:#1c1f24;
}
ol, ul{
  list-style: none;
}
button {
  border: 0;
  background: transparent;
  cursor: pointer;
}

img{
  max-width: 100%;
  vertical-align:top;
  height: auto;
}
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router />
    </div>
  );
}

export default App;
