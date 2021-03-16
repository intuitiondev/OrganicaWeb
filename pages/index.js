import styles from "../styles/Home.module.css";
import Navbar from '../components/ui/navbar';
import Carousel from '../components/carousel';
import Services from '../components/services';
import Contact from '../components/contact';
import Footer from '../components/footer';

import LangSelector from "../components/langSelector";
import { useRouter } from "next/router";
import Link from "next/link";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../components/ui/theme";

export default function Home() {
  const router = useRouter();
  return (
      <ThemeProvider theme={theme}>
        <Navbar>
        </Navbar>
        <Carousel />
        <Services />
        <Contact />
        <Footer />
        <LangSelector />
        <p>
          <Link href="/ejemplo" locale={router.locale}>
            Ir a ejemplo
          </Link>
        </p>
      </ThemeProvider>
  );
}
