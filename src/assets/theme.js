import { DefaultTheme } from 'react-native-paper';

const turquoise = '#336d8b';
const white = '#ffffff';
const gray = '#666666';
const black = '#000000';

export const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: turquoise,
        accent: gray,
        background: white,
        text: black
    }
};

