import { Link } from '@mui/material';
import Box from '@mui/material/Box';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Hello = () => {
    const [message, set_message] = useState('');

    useEffect(() => {
        const fn = async () => {
            let res = await axios.get('/sample/get');

            set_message(res.data.message);
        };

        fn();
    }, []);

    return (
        <Box>
            this is /hello
            {` `}
            <Link href="/">go back to homepage</Link>
            <br />
            message from api response: {message}
        </Box>
    );
};

export default Hello;
