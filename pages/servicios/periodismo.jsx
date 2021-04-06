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

const Periodismo = () => {

    const router = useRouter();
    const classes = useStyles();

    return ( 
        <ThemeProvider theme={theme}>
            <Navbar />
            <Box ml={5} mr={5} mb={5}>
                <Box pt={10}>
                    <h3 className={classes.title}>Relaciones vinculadas con el periodismo</h3>
                </Box>
                <Box className={classes.responsive}>
                    <Box className={classes.boxSize}>
                        <p>OBJETIVO: Desarrollar un perfil óptimo para que la organización se desenvuelva 
                            de manera eficaz en el ámbito periodístico. Que pueda aportar al vínculo y 
                            nutrirse del mismo, estableciendo criterios de aplicación premeditados o de no 
                            es ese el caso, lograr sobrellevar los propósitos propios. </p>
                        <p>SOPORTES (EJEMPLOS DE EJECUCIÓN):</p>
                        <ul>
                            <li>Desarrollar Prensa y comunicación de la organización</li>
                            <li>Preparar contenido publicable con perspectiva periodística (sirve para 
                                acelerar los tiempos, es un recurso valioso para la prensa)</li>
                            <li>Gacetillas y boletines. </li>
                            <li>Generar voceros de prensa. Conferencia de prensa solo para noticias relevantes.</li>
                            <li>Confección de press book/ Coaching a voceros</li>
                            <li>Notas periodísticas y entrevistas. </li>
                            <li>Fotoperiodismo</li>
                        </ul>
                    </Box>
                    <Box>
                        <Image 
                            src="/images/periodismo.png" alt="organica" 
                            width={170} 
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
 
export default Periodismo;

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