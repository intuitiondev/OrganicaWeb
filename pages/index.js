import styles from "../styles/Home.module.css";
import LangSelector from "../components/langSelector";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <LangSelector />
      <div></div>
    </>
  );
}
