import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: CabinCondensedSemiBold;
        src: url('./fonts/Cabin_Condensed-SemiBold.ttf');
    }
    @font-face {
        font-family: CabinMedium;
        src: url('./fonts/Cabin-Medium.ttf');
    }
    @font-face {
        font-family: CabinRegular;
        src: url('./fonts/Cabin-Regular.ttf');
    }
    @font-face {
        font-family: CabinSemiBold;
        src: url('./fonts/Cabin-SemiBold.ttf');
    }
`;

export default GlobalStyle;
