import React from 'react';
import Link from "next/link";
import Image from 'next/image';

import Whatsapp from '../public/images/whatsapp.png';
import Linkedin from '../public/images/linkedin.png';
import Youtube from '../public/images/youtube.png';
import Skype from '../public/images/skype.png';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

import { makeStyles } from '@material-ui/core/styles';
import {
    Box,
    Grid,
    Typography
} from '@material-ui/core';

const Footer = () => {

    const classes = useStyles();

    return ( 
<Box pl={5} pr={5} pb={4} pt={5} className={classes.boxstyle}> 
            <Grid container>
                <Grid item sm={8}>
                    <Box mb={2} display="flex">
                        <Link href="/">
                            <Image 
                                src="/images/logo.png" alt="organica" 
                                width={85} 
                                height={60} 
                                objectFit="cover" 
                                quality={100}
                                className={classes.imagepointer}
                            />
                        </Link>
                        <p className={classes.logoText}>rgánica</p>
                    </Box>
                    <Box mb={3} className={classes.footertext} style={{maxWidth: "750px"}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis laboriosam ut 
                        quaerat exercitationem itaque? Vel cumque perferendis obcaecati impedit molestias 
                        ipsam iusto reiciendis velit, distinctio necessitatibus amet asperiores dolorem 
                        atque?
                    </Box>
                    <Box display="flex">
                        <Box mr={2}>
                            <Link href="/#"><FacebookIcon className={classes.iconpointer}/></Link>
                        </Box>
                        <Box>
                            <Link href="/#"><InstagramIcon className={classes.iconpointer}/></Link>
                        </Box>
                    </Box>
                </Grid>
                <Grid item sm={4}>
                    <Box mb={3} className={classes.contact}>Contact</Box>
                    <Box className={classes.footertext}>Street</Box>
                    <Box className={classes.footertext}>City</Box>
                    <Box mb={2} className={classes.footertext}>Location, Country</Box>
                    <Box mb={0.5} className={classes.phone}>Phone number</Box>
                    <Box mb={0.5} className={classes.mail}>lorem@lorem.com.ar</Box>
                    <Box className={classes.aviso}>Aviso Legal</Box>
                </Grid>
            </Grid>
        </Box>
     );
}
 
export default Footer;

const useStyles = makeStyles({
    boxstyle: {
        backgroundColor: "rgb(99, 169, 142)",
    },
    imagepointer: {
        cursor: "pointer",
    },
    logoText: {
        fontSize: "1.4rem",
        textTransform: "uppercase"
    },
    footertext: {
        color: "#fff",
        fontSize: "1rem",
    },
    iconpointer: {
        cursor: "pointer",
        color: "#fff"
    },
    contact: {
        color: "#fff",
        fontSize: "1.1rem",
        fontWeight: "bold",
    },
    phone: {
        color: "#fff",
        fontSize: "1rem",
        maxWidth: "200px",
    },
    mail: {
        color: "#fff",
        fontSize: "1rem",
    },
    aviso: {
        color: "#fff",
        fontSize: "1rem",
        cursor: "pointer",
        "&:hover": {
            color: "#fff",
        }
    }
  });