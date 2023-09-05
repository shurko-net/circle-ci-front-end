import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'MitrBold';
        src: url('./fonts/Mitr-Bold.ttf');
    }
    @font-face {
        font-family: 'MitrExtraLight';
        src: url('./fonts/Mitr-ExtraLight.ttf');
    }
    @font-face {
        font-family: 'MitrLight';
        src: url('./fonts/Mitr-Light.ttf');
    }
    @font-face {
        font-family: 'MitrMedium';
        src: url('./fonts/Mitr-Medium.ttf');
    }
    @font-face {
        font-family: 'MitrRegular';
        src: url('./fonts/Mitr-Regular.ttf');
    }
    @font-face {
        font-family: 'MitrSemiBold';
        src: url('./fonts/Mitr-SemiBold.ttf');
    }
`;

export default GlobalStyle;
