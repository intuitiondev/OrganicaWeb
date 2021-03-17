import React from 'react';

import {
    Box,
    Grid
} from '@material-ui/core';

const Contact = () => {
    return ( 
        <Box ml={5} mr={5}>
            <Grid container>
                <Grid item sm={6}>
                    Texto
                </Grid>
                <Grid item sm={6}>
                    Formuarlio
                </Grid>
            </Grid>
        </Box>
     );
}
 
export default Contact;