import React from 'react';
import Navbar from '../components/ui/navbar';
import Footer from '../components/footer';

import {
    Box
} from '@material-ui/core';

import { useRouter } from "next/router";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../components/ui/theme";

const Servicios = () => {

    const router = useRouter();

    return ( 
        <ThemeProvider theme={theme}>
            <Navbar />
            <Box pt={10} mr={5} ml={5}>
                <Box>
                    <p>Pensar en todo momento de la estrategia a la creatividad como la acción de producir 
                    intencionalmente algo valioso para la organización, los distintos públicos o la sociedad.
                    En lo referido a los profesionales en comunicación estratégica es sentarse junto a la 
                    organización, medios y equipos especialistas para co-crear productos valiosos y soluciones 
                    reales.</p>
                </Box>
                <Box>
                    <ol>
                        <li id="diagnostico">DIAGNÓSTICO</li>
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

                        <li id="marketing">MARKETING / MULTIMEDIA</li>
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

                        <li id="interna">COMUNICACIÓN INTERNA</li>
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

                        <li id="periodismo">RELACIONES VINCULADAS CON EL PERIODISMO</li>
                        <p>OBJETIVO: Desarrollar un perfil óptimo para que la organización se desenvuelva 
                            de manera eficaz en el ámbito periodístico. Que pueda aportar al vínculo y 
                            nutrirse del mismo, estableciendo criterios de aplicación premeditados o de no 
                            es ese el caso, lograr sobrellevar los propósitos propios. </p>
                        <p>SOPORTES (EJEMPLOS DE EJECUCIÓN):</p>
                        <ul>
                            <li>Desarrollar Prensa y comunicación de la organización</li>
                            <li>Preparar contenido publicable con perspectiva periodística (sirve para 
                                acelerar los tiempos, es un recurso valioso para la prensa)</li>
                            <li>Gacetillas y boletines. </li>
                            <li>Generar voceros de prensa. Conferencia de prensa solo para noticias relevantes.</li>
                            <li>Confección de press book/ Coaching a voceros</li>
                            <li>Notas periodísticas y entrevistas. </li>
                            <li>Fotoperiodismo</li>
                        </ul>

                        <li id="empresas">COMUNICACIÓN ENTRE EMPRESAS / PROFESIONALES</li>
                        <p>OBJETIVO: Dentro del territorio de un mismo rubro, se centra más en los contenidos 
                            técnicos que en la difusión masiva. Busca conocer y aprender de sus pares y poder 
                            establecer parámetros de medición. </p>
                        <p>SOPORTES (EJEMPLOS DE EJECUCIÓN):</p>
                        <ul>
                            <li>Congresos</li>
                            <li>Informes procesados. Materiales técnicos para el rubro y otros profesionales</li>
                            <li>Infografías / Manuales</li>
                            <li>Web</li>
                        </ul>

                        <li id="financiero">COMUNICACIÓN AMBITO FINANCIERO</li>
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

                        <li id="comunitarias">RELACIONES INSTITUCIONALES Y COMUNITARIAS</li>
                        <p>OBJETIVO: Su objetivo es establecer relaciones de calidad entre la institución y los 
                            públicos a los que se dirige, para darse a conocer socialmente y proyectar una imagen 
                            pública adecuada a sus fines y actividades términos generales. Busca visibilizar los 
                            vínculos a destacar con la comunidad y hacer un balance social sobre eso. </p>
                        <p>SOPORTES (EJEMPLOS DE EJECUCIÓN): </p>
                        <ul>
                            <li>Establecer en distintos soportes un conjunto de conductas, reglas y normas 
                                sociales. Elaboración de códigos de ética y manejo de asuntos legales</li>
                            <li>Generar canales y espacios de participación conjunta</li>
                            <li>Estrategia relacionada al Balance Social </li>
                            <li>Reconocer aspectos RECIBIDOS a la organización y APORTADOS a la comunidad</li>
                        </ul>

                        <li id="politica">RELACIONES GUBERNAMENTALES (Comunicación política)</li>
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

                        <li id="disenio">DISEÑO</li>
                        <p>OBJETIVO: Lograr a través de elementos visuales transmitir la identidad de la organización. 
                           Representar visualmente conceptos a través de distintas herramientas cuidando la COHERENCIA 
                           EXPRESIVA en todos los soportes gráficos. Facilitar el reconocimiento, la distinción y 
                           recordación de la Organización ante sus públicos. </p>
                        <p>SOPORTES (EJEMPLOS DE EJECUCIÓN): </p>
                        <ul>
                            <li>Diseño multimedial</li>
                            <li>Diseño gráfico</li>
                            <li>Ilustración</li>
                            <li>Fotografía</li>
                        </ul>
                    </ol>
                </Box>
            </Box>

            <Footer />     
        </ThemeProvider>
     );
}
 
export default Servicios;