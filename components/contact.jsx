import React from 'react';

import {
    Box,
    Grid
} from '@material-ui/core';

const Contact = () => {
    return ( 
        <Box ml={5} mr={5}>
            <Grid container>
                <Grid container items sm="6">
                    Texto
                </Grid>
                <Grid container items sm="6">
                    Formuarlio
                </Grid>
            </Grid>
        </Box>
     );
}
 
export default Contact;