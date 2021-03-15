import styles from "../styles/Home.module.css";
import LangSelector from "../components/langSelector";
import { useRouter } from "next/router";
import Link from "next/link";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../components/ui/theme";

export default function Home() {
  const router = useRouter();
  return (
    <>
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
