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

const Politica = () => {

    const router = useRouter();
    const classes = useStyles();

    return ( 
        <ThemeProvider theme={theme}>
            <Navbar />
            <Box ml={5} mr={5} mb={5}>
                <Box pt={10}>
                    <h3 className={classes.title}>RELACIONES GUBERNAMENTALES (Comunicación política)</h3>
                </Box>
                <Box className={classes.responsive}>
                    <Box className={classes.boxSize}>
                        <p>OBJETIVO: Buscar acciones eficaces en relación con la cohesión y la estabilidad social, 
                            como también poner a disposición, de quién lo requiera, los manuales y protocolos de 
                            relaciones. Deja de lado intereses particulares de partidos y personajes políticos y 
                            se centra en la gestión y administración pública. Su objetivo es el consenso.</p>
                        <p>SOPORTES (EJEMPLOS DE EJECUCIÓN): </p>
                        <ul>
                            <li>Establecer en distintos soportes un conjunto de conductas, reglas y normas sociales.</li>
                            <li>Determina la agenda de gestión de instituciones, actitudes y procesos</li>
                            <li>Relaciones diplomáticas</li>
                            <li>Conocimiento de las reparticiones públicas.</li>
                            <li>Lobbies / Operadores</li>
                            <li>Agrupaciones partidarias</li>
                        </ul>
                    </Box>
                    <Box>
                        <Image 
                            src="/images/politica.png" alt="organica" 
                            width={295} 
                            height={250} 
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
 
export default Politica;

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