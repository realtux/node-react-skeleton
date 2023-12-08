import Box from '@mui/material/Box';
import { Link } from '@mui/material';

const Index = () => {
    return (
        <Box>
            this is the home page
            {` `}
            <Link href="/hello">go to /hello</Link>
        </Box>
    );
};

export default Index;
