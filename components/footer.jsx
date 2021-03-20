import React from 'react';
import Link from "next/link";

import Whatsapp from '../public/images/whatsapp.png';
import Linkedin from '../public/images/linkedin.png';
import Youtube from '../public/images/youtube.png';
import Skype from '../public/images/skype.png';

import { makeStyles } from '@material-ui/core/styles';
import {
    Box,
    Grid,
    Typography
} from '@material-ui/core';

const useStyles = makeStyles({
    icons: {
        width: "2.5rem",
        verticalAlign: "middle",
        marginRight: "0.5rem",
    },
    
});

const Footer = () => {

    const classes = useStyles();

    return ( 
        <Box pt={7} style={{backgroundColor: "rgb(99, 169, 142)"}}>
            <Grid container>
                <Grid container item sm={4} justify="center">
                    <Box flexDirection="column" mb={6}>
                        <Typography 
                            component="h3" 
                            style={{
                                color: "#fff", 
                                fontWeight: "bold", 
                                fontSize: "1.6rem"
                            }}
                        >Location</Typography>
                        <Link href="https://www.google.com/maps/place/Hurlingham,+Provincia+de+Buenos+Aires/@-34.5910172,-58.6557366,14z/data=!3m1!4b1!4m5!3m4!1s0x95bcb9254c083df5:0x87b633dca0937bac!8m2!3d-34.589571!4d-58.6275502">
                            <Typography component="p" style={{color: "#fff"}}>Hurlingham, Bs.As., Argentina</Typography>
                        </Link>
                    </Box>
                </Grid>
                <Grid container item sm={4} justify="center">
                    <Box mb={6}>
                        <Link href="#">
                            <Typography component="p" style={{fontWeight:"bold", color: "#fff"}}>
                                <img 
                                    src={Whatsapp}
                                    alt="whatsapp" 
                                    className={classes.icons}
                                ></img>
                                +54 11 5006 3891 
                            </Typography>
                        </Link>
                    </Box>
                </Grid>
                <Grid container item sm={4} justify="center">
                    <Box mb={6}>
                        <Link href="https://www.linkedin.com/in/dominguezmatiasadrian/">
                            <img 
                                src={Linkedin}
                                alt="linkedin" 
                                className={classes.icons}
                            ></img>
                        </Link>
                        <Link href="https://github.com/Lirico">
                            <img 
                                src={Youtube} 
                                alt="youtube"
                                className={classes.icons}
                            ></img>
                        </Link>
                        <Link href="mailto:dominguezmatiasadrian@gmail.com">
                            <img
                                src={Skype}
                                alt="Skype" 
                                className={classes.icons}
                            ></img>
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </Box>
     );
}
 
export default Footer;