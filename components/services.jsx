import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import {
    Box
} from '@material-ui/core';

const Services = () => {
    return ( 
        <Box ml={5} mr={5} mb={5}>
            <Box align="center" mb={4}>
                <h2 style={{color: "rgb(99, 169, 142)"}}>Nuestros Servicios</h2>
            </Box>
            <Box display="flex" justifyContent="space-around" flexWrap="wrap">
                <Box>
                    <Link href="/">
                        <Image 
                            src="/images/marketing2.png" alt="organica" 
                            width={150} 
                            height={150} 
                            objectFit="cover" 
                            quality={100}
                        />
                    </Link>
                </Box>
                <Box>
                    <Link href="/">
                        <Image 
                            src="/images/interna2.png" alt="organica" 
                            width={150} 
                            height={150}  
                            objectFit="cover" 
                            quality={100}
                        />
                    </Link>
                </Box>
                <Box>
                    <Link href="/">
                        <Image 
                            src="/images/periodismo2.png" alt="organica" 
                            width={150} 
                            height={150}  
                            objectFit="cover" 
                            quality={100}
                        />
                    </Link>
                </Box>
                <Box>
                    <Link href="/">
                        <Image 
                            src="/images/empresas2.png" alt="organica" 
                            width={150} 
                            height={150}  
                            objectFit="cover" 
                            quality={100}
                        />
                    </Link>
                </Box>
            </Box>
            <Box display="flex" justifyContent="space-around" flexWrap="wrap">
                <Box>
                    <Link href="/">
                        <Image 
                            src="/images/financiero2.png" alt="organica" 
                            width={150} 
                            height={150}  
                            objectFit="cover" 
                            quality={100}
                        />
                    </Link>
                </Box>
                <Box>
                    <Link href="/">
                        <Image 
                            src="/images/comunitarias2.png" alt="organica" 
                            width={150} 
                            height={150}  
                            objectFit="cover" 
                            quality={100}
                        />
                    </Link>
                </Box>
                <Box>
                    <Link href="/">
                        <Image 
                            src="/images/politica2.png" alt="organica" 
                            width={150} 
                            height={150} 
                            objectFit="cover" 
                            quality={100}
                        />
                    </Link>
                </Box>
                <Box>
                    <Link href="/">
                        <Image 
                            src="/images/marca2.png" alt="organica" 
                            width={150} 
                            height={150} 
                            objectFit="cover" 
                            quality={100}
                        />
                    </Link>
                </Box>
            </Box>
        </Box>
     );
}
 
export default Services;