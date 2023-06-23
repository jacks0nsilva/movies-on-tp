// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        borderRadius: string;
        colors: {
            black: string;
            secondary: string;
            purple: string;
            white: string;
            lightgray: string;
        };
    }
}
