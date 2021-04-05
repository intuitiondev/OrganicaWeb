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

const Financiero = () => {

    const router = useRouter();
    const classes = useStyles();

    return ( 
        <ThemeProvider theme={theme}>
            <Navbar />
            <Box ml={5} mr={5} mb={5}>
                <Box pt={10}>
                    <h3 className={classes.title}>COMUNICACIÓN AMBITO FINANCIERO</h3>
                </Box>
                <Box className={classes.responsive}>
                    <Box className={classes.boxSize}>
                    <p>OBJETIVO: Hacer referencia en su contenido (explícita o implícitamente) a los 
                            atributos referidos con el balance de la organización, lectura y resultados de 
                            análisis en esa área. Responde al orden organizacional. Combina argumentos técnicos 
                            financieros con la comunicación e imagen corporativa</p>
                        <p>SOPORTES (EJEMPLOS DE EJECUCIÓN):</p>
                        <ul>
                            <li>Recursos gráficos</li>
                            <li>Redacción (introducciones)</li>
                            <li>Armado de Presentaciones </li>
                        </ul>
                    </Box>
                    <Box>
                        <Image 
                            src="/images/financiero.png" alt="organica" 
                            width={225} 
                            height={315} 
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
 
export default Financiero;

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