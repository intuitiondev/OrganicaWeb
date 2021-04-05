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

const Comunitarias = () => {

    const router = useRouter();
    const classes = useStyles();

    return ( 
        <ThemeProvider theme={theme}>
            <Navbar />
            <Box ml={5} mr={5} mb={5}>
                <Box pt={10}>
                    <h3 className={classes.title}>RELACIONES INSTITUCIONALES Y COMUNITARIAS</h3>
                </Box>
                <Box className={classes.responsive}>
                    <Box className={classes.boxSize}>
                        <p>OBJETIVO: Su objetivo es establecer relaciones de calidad entre la institución y los 
                            públicos a los que se dirige, para darse a conocer socialmente y proyectar una imagen 
                            pública adecuada a sus fines y actividades términos generales. Busca visibilizar los 
                            vínculos a destacar con la comunidad y hacer un balance social sobre eso. </p>
                        <p>SOPORTES (EJEMPLOS DE EJECUCIÓN): </p>
                        <ul>
                            <li>Establecer en distintos soportes un conjunto de conductas, reglas y normas 
                                sociales. Elaboración de códigos de ética y manejo de asuntos legales</li>
                            <li>Generar canales y espacios de participación conjunta</li>
                            <li>Estrategia relacionada al Balance Social </li>
                            <li>Reconocer aspectos RECIBIDOS a la organización y APORTADOS a la comunidad</li>
                        </ul>
                    </Box>
                    <Box>
                        <Image 
                            src="/images/comunitarias.png" alt="organica" 
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
 
export default Comunitarias;

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
    },
});