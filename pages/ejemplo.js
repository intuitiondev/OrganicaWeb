import React from "react";
import LangSelector from "../components/langSelector";

export default function Home(props) {
  const { ejemplo } = props;
  return (
    <>
      <LangSelector />
      <div>{ejemplo.title}</div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  const response = await import(`../translations/${locale}/global.json`);
  return {
    props: {
      ejemplo: response.default.ejemplo,
    },
  };
}
