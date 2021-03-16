import styles from "../styles/Home.module.css";
import Navbar from '../components/ui/navbar';

import LangSelector from "../components/langSelector";
import { useRouter } from "next/router";
import Link from "next/link";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../components/ui/theme";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Navbar>
        <h1>Home</h1>
      </Navbar>

      <ThemeProvider theme={theme}>
        <LangSelector />
        <p>
          <Link href="/ejemplo" locale={router.locale}>
            Ir a ejemplo
          </Link>
        </p>
      </ThemeProvider>
    </>
  );
}
