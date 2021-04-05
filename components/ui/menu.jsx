import React from 'react';
import Link from "next/link";
import LangSelector from "../langSelector";
import { makeStyles } from '@material-ui/core/styles';
import theme from "./theme";

import {
    Box
} from '@material-ui/core';

const Menu = () => {

    const classes = useStyles();

    return ( 
        <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
            <p className={classes.hovermenu} style={{color: "rgb(99, 169, 142)", fontWeight: "600"}}><Link href="/">Home</Link></p>
            <p className={classes.hovermenu}><Link href="/nosotros">Nosotrxs</Link></p>
            <Link href="/servicios"><div className="dropdown">
                <div className={classes.hovermenu}>Servicios</div>
                <div className="dropdown-content">
                        <Link href="/servicios/#diagnostico"><a>Diagnóstico</a></Link>
                        <Link href="/servicios/#marketing"><a>Marketing / Multimedia</a></Link>
                        <Link href="/servicios/#interna"><a>Comunicación Interna</a></Link>
                        <Link href="/servicios/#periodismo"><a>Relaciones Vinculadas con el periodismo</a></Link>
                        <Link href="/servicios/#empresas"><a>Comunicación entre Empresas / Profesionales</a></Link>
                        <Link href="/servicios/#financiero"><a>Comunicación ambito financiero</a></Link>
                        <Link href="/servicios/#comunitarias"><a>Relaciones institucionales y comunitarias</a></Link>
                        <Link href="/servicios/#politica"><a>Relaciones gubernamentales (comunicación política)</a></Link>
                        <Link href="/servicios/#disenio"><a>Diseño</a></Link>
                </div>
            </div></Link>
            <p className={classes.hovermenu}><Link href="/trabajosRealizados">Trabajos Realizados</Link></p>
            <p className={classes.hovermenu}><Link href="/contacto">Contacto</Link></p>
            {/*<LangSelector />*/}
        </Box>
     );
}
 
export default Menu;

const useStyles = makeStyles({
    hovermenu: {
     [theme.breakpoints.up('md')]: {

        color: "darkgrey",
        fontSize: "1.1rem",
        padding: "5px 1rem 7px 1rem",

        '&:hover': {
            color: "rgb(99, 169, 142)",
            borderBottom: "solid 2px rgb(99, 169, 142)",
            paddingTop: "5px",
            paddingBottom: "5px"
        }
    },
        [theme.breakpoints.down('sm')]: {
        display: "none",
        }
    }, 
});