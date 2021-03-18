import React from 'react';
import Link from "next/link";

import HoverMenu from './hovermenu';
import {
    Box
} from '@material-ui/core';

const Menu = () => {
    return ( 
        <Box display="flex" flexDirection="row" justifyContent="space-between">
            <HoverMenu style={{color: "rgb(99, 169, 142)"}}><Link href="/">Home</Link></HoverMenu>
            <HoverMenu><Link href="/nosotros">Nosotros</Link></HoverMenu>
            <HoverMenu><Link href="/servicios">Servicios</Link></HoverMenu>
            <HoverMenu><Link href="/trabajosrealizados">Trabajos Realizados</Link></HoverMenu>
            <HoverMenu><Link href="/contacto">Contacto</Link></HoverMenu>
        </Box>
     );
}
 
export default Menu;