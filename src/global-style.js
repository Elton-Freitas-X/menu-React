import { createGlobalStyle } from "styled-components";
import Up from './assets/images/up.jpg'

const globalStyle = createGlobalStyle`

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        padding: 0;
        margin: 0;
        background: url(${Up});
        height: 100%;
        width: 100%;
    }
`

export default globalStyle;