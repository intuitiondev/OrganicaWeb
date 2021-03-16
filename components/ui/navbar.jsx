import React from 'react';
import Logo from './logo';
import Menu from './menu';

import {
    Box
} from '@material-ui/core';

const Navbar = props => {
    return ( 
        <>
            <Box>
                <Logo />
                <Menu />
            </Box>

            <main>
                {props.children}
            </main>
        </>
     );
}
 
export default Navbar;