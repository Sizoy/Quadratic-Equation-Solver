import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import { useState } from "react";
import Results from "./Results";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 30,
    },
  },
}));

export default function Inputs() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);

  const onAChange = (e) => {
    setA(e.target.value);
  };
  const onBChange = (e) => {
    setB(e.target.value);
  };
  const onCChange = (e) => {
    setC(e.target.value);
  };
  const classes = useStyles();

  return (
    <>
      <form className={classes.root} noValidate autoComplete="off">
        <Input placeholder=" A" type="number" required onChange={onAChange} />X
        <sup>2</sup>+
        <Input placeholder=" B" onChange={onBChange} />
        X+
        <Input placeholder=" C" onChange={onCChange} />= 0
      </form>
      <Results a={a} b={b} c={c} />
    </>
  );
}
