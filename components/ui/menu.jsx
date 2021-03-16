import React from 'react';
import Link from "next/link";

import {
    Box
} from '@material-ui/core';

const Menu = () => {
    return ( 
        <Box display="flex" flexDirection="row" justifyContent="space-between">
            <Link href="/">Home</Link>
            <Link href="/nosotros">Nosotros</Link>
            <Link href="/servicios">Servicios</Link>
            <Link href="/trabajosrealizados">Trabajos Realizados</Link>
            <Link href="/contacto">Contacto</Link>
        </Box>
     );
}
 
export default Menu;