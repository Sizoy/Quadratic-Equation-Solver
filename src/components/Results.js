import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "./../App.css";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const Results = (props) => {
  const classes = useStyles();
  const [d, setD] = useState(0);
  const [x1, setX1] = useState(0);
  const [x2, setX2] = useState(0);
  let a = parseFloat(props.a);
  let b = parseFloat(props.b);
  let c = parseFloat(props.c);

  const showDiscriminant = () => {
    setD(Math.pow(b, 2) - 4 * a * c);
  };
  const showX = () => {
    if (d > 0) {
      if (a != 0) {
        setX1((-b + Math.sqrt(d)) / (2 * a));
        setX2((-b - Math.sqrt(d)) / (2 * a));
      } else {
        setX1(-c / b);
        setX2(-c / b);
      }
    } else if (d == 0) {
      if (a !== 0) {
        setX1(-b / (2 * a));
        setX2(-b / (2 * a));
      } else {
        setX1(-c / b);
        setX2(-c / b);
      }
    } else {
      setX1("No result");
      setX2("No result");
    }
  };

  return (
    <div>
      <div className="discriminant">
        <Button
          className="discriminant__button"
          variant="outlined"
          color="secondary"
          onClick={showDiscriminant}
        >
          Show Discriminant
        </Button>
        <div className="discriminant__value">
          D= <span>{d}</span>
        </div>
      </div>

      <div className="results">
        <Button
          className="results__button"
          variant="outlined"
          color="primary"
          onClick={showX}
        >
          Show Result
        </Button>
        <div className="results__value">
          <span>
            x<sub>1</sub> = <span>{x1}</span>
          </span>
          <span>
            x<sub>2</sub> = <span>{x2}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Results;
