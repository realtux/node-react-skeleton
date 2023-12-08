import { Box } from '@mui/material';

const Layout = props => {
    return (
        <Box>
            <Box>
                i'm a header
            </Box>
            <Box>
                {props.children}
            </Box>
            <Box>
                i'm a footer
            </Box>
        </Box>
    );
};

export default Layout;
