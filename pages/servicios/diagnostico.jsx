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

const Diagnostico = () => {

    const router = useRouter();
    const classes = useStyles();

    return ( 
        <ThemeProvider theme={theme}>
            <Navbar />
            <Box ml={5} mr={5} mb={5}>
                <Box pt={10}>
                    <h3 className={classes.title}>Diagnóstico</h3>
                </Box>
                <Box>
                    <Box>
                        <p>OBJETIVO: Se ocupa de obtener, procesar, archivar y tener disponible 
                        información referente a la organización que se requiera. Esta área debe 
                        administrar los medios para contar con datos correspondientes a distintos 
                        estudios. El diagnóstico es el punto inaugural para elaborar cualquier plan 
                        estratégico de comunicación, partiendo de un escenario actual hacia un escenario 
                        deseado. Aquí se determinan objetivos y propósitos de la organización, mapa de 
                        públicos, vínculos y relaciones.</p>
                        <p>SOPORTES (EJEMPLOS DE EJECUCIÓN): </p>
                        <ul>
                            <li>Cuestionarios e investigación</li>
                            <li>Entrevistas</li>
                            <li>Procesos y análisis de datos duros</li>
                            <li>Impacto de la organización en problemáticas sociales</li>
                            <li>Informe de Diagnóstico (primer entregable)</li>
                        </ul>
                    </Box>
                </Box>
            </Box>
            <Footer />     
        </ThemeProvider>
     );
}
 
export default Diagnostico;

const useStyles = makeStyles({
    title: {
        color: "rgb(99, 169, 142)",
        fontSize: "1.7rem"
    },
});