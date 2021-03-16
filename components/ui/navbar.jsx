import React from 'react';
import Logo from './logo';
import Menu from './menu';

import {
    Box
} from '@material-ui/core';

const Navbar = props => {
    return ( 
        <Box ml={3} mr={3} pt={1.5} pb={1.5}>
            <Box display="flex" flexDirection="row" justifyContent="space-between">
                <Logo />
                <Menu />
            </Box>

            <main>
                {props.children}
            </main>
        </Box>
     );
}
 
export default Navbar;