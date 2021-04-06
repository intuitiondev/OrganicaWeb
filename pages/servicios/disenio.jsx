import React from 'react';
import Image from 'next/image';
import Navbar from '../../components/ui/navbar';
import Footer from '../../components/footer';

import { makeStyles } from '@material-ui/core/styles';
import {
    Box
} from '@material-ui/core';

import { useRouter } from "next/router";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../../components/ui/theme";

const Diseño = () => {

    const router = useRouter();
    const classes = useStyles();

    return ( 
        <ThemeProvider theme={theme}>
            <Navbar />
            <Box ml={5} mr={5} mb={5}>
                <Box pt={10}>
                    <h3 className={classes.title}>Diseño</h3>
                </Box>
                <Box className={classes.responsive}>
                    <Box className={classes.boxSize}>
                    <p>OBJETIVO: Lograr a través de elementos visuales transmitir la identidad de la organización. 
                           Representar visualmente conceptos a través de distintas herramientas cuidando la COHERENCIA 
                           EXPRESIVA en todos los soportes gráficos. Facilitar el reconocimiento, la distinción y 
                           recordación de la Organización ante sus públicos. </p>
                        <p>SOPORTES (EJEMPLOS DE EJECUCIÓN): </p>
                        <ul>
                            <li>Diseño multimedial</li>
                            <li>Diseño gráfico</li>
                            <li>Ilustración</li>
                            <li>Fotografía</li>
                        </ul>
                    </Box>
                    <Box>
                        <Image 
                            src="/images/diseño.png" alt="organica" 
                            width={255} 
                            height={230} 
                            objectFit="cover" 
                            quality={100}
                        />
                    </Box>
                </Box>
            </Box>
            <Footer />     
        </ThemeProvider>
     );
}
 
export default Diseño;

const useStyles = makeStyles({
    title: {
        color: "rgb(99, 169, 142)",
        fontSize: "1.7rem"
    },
    responsive: {
        display: "flex",
        justifyContent: "space-between"
    },
    boxSize: {
        maxWidth: "800px"
    }
});