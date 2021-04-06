import React, { useState } from "react";
import Link from "next/link";
import LangSelector from "../langSelector";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  [theme.breakpoints.up("md")]: {
    hovermenu: {
      color: "darkgrey",
      fontSize: "1.1rem",
      padding: "5px 0.5rem 7px 0.5rem",

      "&:hover": {
        color: "rgb(99, 169, 142)",
        borderBottom: "solid 2px rgb(99, 169, 142)",
        paddingTop: "5px",
        paddingBottom: "5px",
      },
    },
    burguer: { display: "none" },
  },
  [theme.breakpoints.down("md")]: {
    main: { display: "none" },
  },
}));

const Menu = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List style={{ marginTop: "45px" }}>
        {[
          "Home",
          "Nosotros",
          "Servicios",
          "Trabajos Realizados",
          "Contacto",
        ].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        className={classes.main}
      >
        <p
          className={classes.hovermenu}
          style={{ color: "rgb(99, 169, 142)", fontWeight: "600" }}
        >
          <Link href="/">Home</Link>
        </p>
        <p className={classes.hovermenu}>
          <Link href="/nosotros">Nosotros</Link>
        </p>
        <div className="dropdown">
          <div className={classes.hovermenu}>Servicios</div>
          <div className="dropdown-content">
            <Link href="#">
              <a>Link 1</a>
            </Link>
            <Link href="#">
              <a>Link 2</a>
            </Link>
            <Link href="#">
              <a>Link 3</a>
            </Link>
          </div>
        </div>
        <p className={classes.hovermenu}>
          <Link href="/trabajosRealizados">Trabajos Realizados</Link>
        </p>
        <p className={classes.hovermenu}>
          <Link href="/contacto">Contacto</Link>
        </p>
        <LangSelector />
      </Box>
      <Box className={classes.burguer}>
        <IconButton>
          <MenuIcon onClick={toggleDrawer("right", true)}></MenuIcon>
        </IconButton>
        <div>
          {["right"].map((anchor) => (
            <React.Fragment key={anchor}>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </div>
      </Box>
    </>
  );
};

export default Menu;
