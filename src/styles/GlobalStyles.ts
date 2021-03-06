import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
    }

    *, button, input{
        font-family: Helvetica, sans-serif, sans-serif;
    }
    
    body{
        height: 100vh;
        background: #141414;
        color: #fff;
        font-family: Helvetica,Arial,sans-serif;        
        font-size: 100%;
        line-height: 1.2;
        user-select: none;
        overflow-x: hidden;
        cursor: default;
    }

`;