import { createGlobalStyle } from "styled-components";
import devices from "./devices";

const GlobalStyle = createGlobalStyle`
  html {
		box-sizing: border-box;
		font-size: 10px;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    overflow-y: scroll;
    text-rendering: optimizeLegibility;
    text-size-adjust: 100%;

		@media ${devices.tablet} {
			font-size: 9px;
		}
  }
  * {
    margin: 0;
    padding: 0;
  }
	*, *:before, *:after{
		box-sizing: inherit;
	}
	body{
		padding: 0;
		margin: 0;
		font-size: 1.6rem;
		line-height: 1.6;
		font-family: -apple-system, BlinkMacSystemFont, sans-serif;
	}
	a {
		text-decoration: none;
		color: ${props => props.theme.black}
  }
  ol, ul {
    list-style: none;
  }
  input,
  select {
    font-size: 16px;
  }
  img{
    height: auto;
    max-width: 100%;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
	button{
		border: none;
		outline: none;
		line-height: inherit;
		cursor: pointer;
	}
`;

export default GlobalStyle;
