import React, { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import image from "../public/images/197593.png";
import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import { FormGroup, FormControlLabel } from "@material-ui/core";

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    "&$checked": {
      transform: "translateX(16px)",
      color: theme.palette.common.white,
      "& + $track": {
        backgroundColor: "#52d869",
        opacity: 1,
        border: "none",
      },
    },
    "&$focusVisible $thumb": {
      color: "#52d869",
      border: "6px solid #fff",
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"]),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

export default function LangSelector() {
  const router = useRouter();
  const [checked, setChecked] = React.useState(false);
  console.log("externo", checked);
  const toggleChecked = (e) => {
    if (checked) {
      setChecked(false);
    } else setChecked(true);
    console.log("valor", checked);
    change();
  };
  const change = () => {
    if (!checked) {
      router.push(router.pathname, router.pathname, {
        locale: "en",
      });
    } else {
      router.push(router.pathname, router.pathname, {
        locale: "es",
      });
    }
  };

  return (
    <>
      <FormGroup>
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>Español </Grid>
          <Grid item>
            <FormControlLabel
              control={<Switch checked={checked} onChange={toggleChecked} />}
            />
          </Grid>
          <Grid item>Inglés</Grid>
        </Grid>
      </FormGroup>
    </>
  );
}
