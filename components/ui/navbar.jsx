import React from 'react';
import Logo from './logo';
import Menu from './menu';

import {
    Box
} from '@material-ui/core';

const Navbar = props => {
    return ( 
        <Box pl={3} pr={3} 
            style={{
                backgroundColor: "#fff",
                borderBottom: "solid 1px #E3E4E5",
                position: "fixed",
                width: "100%",
                zIndex: "99995"
            }}
        >
                <Box display="flex"flexDirection="row" justifyContent="space-between" alignItems="center">
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