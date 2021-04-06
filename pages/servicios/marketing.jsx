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

const Marketing = () => {

    const router = useRouter();
    const classes = useStyles();

    return ( 
        <ThemeProvider theme={theme}>
            <Navbar />
            <Box ml={5} mr={5} mb={5}>
                <Box pt={10}>
                    <h3 className={classes.title}>Marketing / Multimedia</h3>
                </Box>
                <Box className={classes.responsive}>
                    <Box className={classes.boxSize}>
                        <p>OBJETIVO: Sirve para vincular en una relación directa los propósitos de la 
                        organización con el interlocutor planteado, sus tácticas, como acción inmediata 
                        de la estrategia acordada. Muchas de estas acciones, aplicadas en plataformas 
                        multimedias o acciones de marketing, tienen la ventaja de romper las barreras o 
                        limitaciones de acceso para relacionarse con sus destinatarios (Distancia, costos,
                        herramientas y métodos). El principal enunciador es el Producto/Servicio o marcas 
                        que la organización comercializa.</p>
                        <p>SOPORTES (EJEMPLOS DE EJECUCIÓN): </p>
                        <ul>
                            <li>Campaña en medios (tradicionales y no tradicionales)</li>
                            <li>Marketing digital (redes sociales/ Google Adwords)</li>
                            <li>Generar audiencia o público objetivo</li>
                            <li>Desarrollo de contenido. Delimitar la cantidad de información que irá en 
                                nuestros sitios y su impacto en el público</li>
                            <li>Actualización. Para ser dinámico, un sitio debe tener un promedio de 2 actualizaciones 
                                semanales</li>
                            <li>Planificación</li>
                            <li>Elección de formatos. El diseño y la estética de los sitios deben 
                                coincidir con los criterios organizacionales. Y deben ser de fácil 
                                acceso y navegación.</li>
                            <li>Canales de distribución</li>
                            <li>Medición / métricas</li>
                        </ul>
                    </Box>
                    <Box>
                        <Image 
                            src="/images/marketing.png" alt="organica" 
                            width={295} 
                            height={305} 
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
 
export default Marketing;

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