import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`

:root {
    //Primary
    --blue: hsl(246, 80%, 60%);
    --light-red-work: hsl(15, 100%, 70%); //(work)
    --soft-blue: hsl(195, 74%, 62%); //(play)
    --light-red-study: hsl(348, 100%, 68%); //(study)
    --lime-green: hsl(145, 58%, 55%); //(exercise)
    --violet: hsl(264, 64%, 52%); //(social)
    --soft-orange: hsl(43, 84%, 65%); //(self care)

    //Neutral
    --Very-dark-blue: hsl(226, 43%, 10%);
    --Dark-blue: hsl(235, 46%, 20%);
    --Desaturated-blue: hsl(235, 45%, 61%);
    --Pale-Blue: hsl(236, 100%, 87%);


}

* { 
    margin:0;
    padding:0;
    box-sizing: border-box;
}

html {
    overflow-x: hidden;
    @media (max-width: 1080px) {
            font-size: 93.75%; //15px
        }
    @media (max-width: 720px) {
            font-size: 87.5%; //14px
        }
    @media (max-width: 340px) {
            font-size: 82.5%; 
        }
}


body {
    font-family: Rubik;
    width: calc(100vw - (100vw - 100%));
    -webkit-font-smoothing: antialiased;
}




h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
}

button {
    cursor: pointer;
}

[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
}

`