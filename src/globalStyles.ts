import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: InterBlack;
        src: url('/fonts/Inter-Black.ttf');
    }
    @font-face {
        font-family: InterBold;
        src: url('/fonts/Inter-Bold.ttf');
    }
    @font-face {
        font-family: InterMedium;
        src: url('/fonts/Inter-Medium.ttf');
    }
    @font-face {
        font-family: InterRegular;
        src: url('/fonts/Inter-Regular.ttf');
    }
    @font-face {
        font-family: InterSemiBold;
        src: url('/fonts/Inter-Semi-Bold.ttf');
    }
`;

export default GlobalStyle;
