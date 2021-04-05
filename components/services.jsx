import React from 'react';

import {
    Box
} from '@material-ui/core';

const Services = () => {
    return ( 
        <Box ml={5} mr={5}>
            <Box align="center" mb={4}>
                <h2 style={{color: "rgb(99, 169, 142)"}}>Nuestros Servicios</h2>
            </Box>
            <Box display="flex" flexDirection="row" justifyContent="space-between">
                <Box>1</Box>
                <Box>2</Box>
                <Box>3</Box>
                <Box>4</Box>
                <Box>5</Box>
            </Box>
            <Box display="flex" flexDirection="row" justifyContent="space-between">
                <Box>6</Box>
                <Box>7</Box>
                <Box>8</Box>
                <Box>9</Box>
                <Box>10</Box>
            </Box>
        </Box>
     );
}
 
export default Services;