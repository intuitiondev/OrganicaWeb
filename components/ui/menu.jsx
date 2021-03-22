import React from 'react';
import Link from "next/link";
import LangSelector from "../langSelector";
import { makeStyles } from '@material-ui/core/styles';

import {
    Box
} from '@material-ui/core';

const useStyles = makeStyles({
    hovermenu: {
        color: "darkgrey",
        fontSize: "1.1rem",
        padding: "5px 0.5rem 7px 0.5rem",

        '&:hover': {
            color: "rgb(99, 169, 142)",
            borderBottom: "solid 2px rgb(99, 169, 142)",
            paddingTop: "5px",
            paddingBottom: "5px"
        }
    },    
});

const Menu = () => {

    const classes = useStyles();

    return ( 
        <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
            <p className={classes.hovermenu} style={{color: "rgb(99, 169, 142)", fontWeight: "600"}}><Link href="/">Home</Link></p>
            <p className={classes.hovermenu}><Link href="/nosotros">Nosotros</Link></p>
            <div className="dropdown">
                <div className={classes.hovermenu}>Servicios</div>
                <div className="dropdown-content">
                    <Link href="#"><a>Link 1</a></Link>
                    <Link href="#"><a>Link 2</a></Link>
                    <Link href="#"><a>Link 3</a></Link>
                </div>
            </div>
            <p className={classes.hovermenu}><Link href="/trabajosRealizados">Trabajos Realizados</Link></p>
            <p className={classes.hovermenu}><Link href="/contacto">Contacto</Link></p>
            <LangSelector />
        </Box>
     );
}
 
export default Menu;