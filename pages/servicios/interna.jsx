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

const Interna = () => {

    const router = useRouter();
    const classes = useStyles();

    return ( 
        <ThemeProvider theme={theme}>
            <Navbar />
            <Box ml={5} mr={5} mb={5}>
                <Box pt={10}>
                    <h3 className={classes.title}>Comunicación Interna</h3>
                </Box>
                <Box className={classes.responsive}>
                    <Box className={classes.boxSize}>
                        <p>OBJETIVO: Tiene como propósito integrar los proyectos organizacionales en el seno de la compañía. 
                        Construir y/o reforzar su  identidad. Buscar el consenso y promover actitudes entre su comunidad. 
                        Sirve como barómetro de clima interno y para medir acciones y efectos.</p>
                        <p>SOPORTES (EJEMPLOS DE EJECUCIÓN):</p>
                        <ul>
                            <li>Detección de la comunicación formal e informal dentro de la organización. </li>
                            <li>Trabajo en conjunto con el área de recursos humanos. </li>
                            <li>Focus group y entrevistas.</li>
                            <li>Auditorías. Procedimientos cualitativos (grupales).</li>
                            <li>Barómetro de clima interno. Se definen generalmente con encuestas y cuestionarios.</li>
                            <li>Cartelería en espacios comunes/ Mails Institucionales/ Presentaciones</li>
                            <li>Postales/ Sites/ Intranet</li>
                            <li>Manual de Marca</li>
                            <li>Talleres</li>
                        </ul>
                    </Box>
                    <Box>
                        <Image 
                            src="/images/interna.png" alt="organica" 
                            width={280} 
                            height={355} 
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
 
export default Interna;

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