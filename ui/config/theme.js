import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import NextLink from 'next/link';
import { forwardRef } from 'react';

const LinkBehavior = forwardRef(function LinkBehaviour(props, ref) {
    return <NextLink ref={ref} {...props} />;
});

export const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

const theme = createTheme({
    palette: {
        mode: 'dark',
    },
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
    components: {
        MuiLink: {
            defaultProps: {
                component: LinkBehavior
            }
        },
        MuiButtonBase: {
            defaultProps: {
                LinkComponent: LinkBehavior
            }
        }
    }
});

export default theme;
