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

const Empresas = () => {

    const router = useRouter();
    const classes = useStyles();

    return ( 
        <ThemeProvider theme={theme}>
            <Navbar />
            <Box ml={5} mr={5} mb={5}>
                <Box pt={10}>
                    <h3 className={classes.title}>Comunicación entre Empresas / Profesionales</h3>
                </Box>
                <Box className={classes.responsive}>
                    <Box className={classes.boxSize}>
                        <p>OBJETIVO: Dentro del territorio de un mismo rubro, se centra más en los contenidos 
                            técnicos que en la difusión masiva. Busca conocer y aprender de sus pares y poder 
                            establecer parámetros de medición. </p>
                        <p>SOPORTES (EJEMPLOS DE EJECUCIÓN):</p>
                        <ul>
                            <li>Congresos</li>
                            <li>Informes procesados. Materiales técnicos para el rubro y otros profesionales</li>
                            <li>Infografías / Manuales</li>
                            <li>Web</li>
                        </ul>
                    </Box>
                    <Box>
                        <Image 
                            src="/images/empresas.png" alt="organica" 
                            width={295} 
                            height={280} 
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
 
export default Empresas;

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