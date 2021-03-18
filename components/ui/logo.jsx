import React from 'react';
import Link from "next/link";
import Organica from '../../public/images/logo.png'


import {
    Box
} from '@material-ui/core';

const Logo = () => {
    return ( 
        <Box display="flex" flexDirection="row" alignItems="center">
            <Box>
                <a>
                    <Link href="/">
                        <img 
                            src={Organica} 
                            alt=""
                            style={{
                                width: "2.5rem",
                                cursor: "pointer"
                            }}
                        ></img>     
                    </Link>  
                </a>    
            </Box>
            <Box>
                <h1 
                    style={{
                        fontSize: "1.2rem",
                        textTransform: "uppercase"
                    }}
                >
                    <Link href="/">rgánica</Link>
                </h1>
            </Box>
        </Box>
     );
}
 
export default Logo;