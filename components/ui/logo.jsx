import React from 'react';
import Link from "next/link";

import {
    Box
} from '@material-ui/core';

const Logo = () => {
    return ( 
        <Box display="flex" flexDirection="row">
            <Box>
                <Link href="/">Logo</Link>
            </Box>
            <Box>
                <Link href="/">Title</Link>
            </Box>
        </Box>
     );
}
 
export default Logo;