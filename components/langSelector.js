import React from "react";
import { useRouter } from "next/router";
import { Button } from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  langselector: {
    color: "darkgrey",
    fontSize: "1.1rem",
    padding: "5px 0.5rem 5px 0.5rem",
    border: "none",
    fontWeight: "none",

    '&:hover': {
        color: "rgb(99, 169, 142)",
        padding: "5px 0.5rem 5px 0.5rem",
    }
  },
  button: {
    backgroundColor: "rgb(99, 169, 142)",
    border: "solid 2px rgb(99, 169, 142)",
    borderRadius: "10px",
    color: "#fff",
    fontSize: "1.1rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    marginLeft: ".5rem",
    marginTop: "1rem",
    paddingLeft: ".8rem",
    paddingRight: ".8rem",
    textTransform: "uppercase",

    '&:hover': {
      color: "rgb(99, 169, 142)",
      background: "none",
    }
  },
});

export default function LangSelector() {
  const classes = useStyles();
  const router = useRouter();
  const changeLang = (e) => {
    router.push(router.pathname, router.pathname, {
      locale: e.target.value,
    });
  };
  return (
    <>
        <select 
          className={classes.langselector}
          onChange={changeLang}
          style={{marginLeft: "2rem"}}
        >
          <option value="es">Español</option>
          <option value="en">English</option>
        </select>
        <button 
          type="button"
          className={classes.button}
        >Ok</button>
    </>
  );
}
