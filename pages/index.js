import styles from "../styles/Home.module.css";
import Navbar from '../components/ui/navbar';
import ImageSlider from '../components/ImageSlider';
import { SliderData } from '../components/data/SliderData';
import Services from '../components/services';
import Contact from '../components/contact';
import Footer from '../components/footer';

import { useRouter } from "next/router";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../components/ui/theme";

export default function Home() {
  
  return (
      <ThemeProvider theme={theme}>
        <Navbar />
        <ImageSlider slides={SliderData} />
        <Services />
        <Contact />
        <Footer />
        {/*<p>
          <Link href="/ejemplo" locale={router.locale}>
            Ir a ejemplo
          </Link>
        </p> */}
      </ThemeProvider>
  );
}
