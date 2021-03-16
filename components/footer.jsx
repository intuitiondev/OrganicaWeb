import React from 'react';

import {
    Grid
} from '@material-ui/core';

const Footer = () => {
    return ( 
        <Grid container ml={5} mr={5}>
            <Grid container items sm="4" justify="center">
                Location
            </Grid>
            <Grid container items sm="4" justify="center">
                Whatsapp
            </Grid>
            <Grid container items sm="4" justify="center">
                Social Media
            </Grid>
        </Grid>
     );
}
 
export default Footer;