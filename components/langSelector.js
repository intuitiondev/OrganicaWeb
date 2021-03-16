import React from "react";
import { useRouter } from "next/router";
import { Button } from "@material-ui/core";

export default function LangSelector() {
  const router = useRouter();
  const changeLang = (e) => {
    router.push(router.pathname, router.pathname, {
      locale: e.target.value,
    });
  };
  return (
    <>
      <select onChange={changeLang}>
        <option value="es">Español</option>
        <option value="en">Inglés</option>
      </select>
      <Button color="primary">fkeffkfl</Button>
    </>
  );
}
