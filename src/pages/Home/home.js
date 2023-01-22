//import { useSelector, useDispatch } from "react-redux";
import React, { useRef } from "react";
import Image from "../../components/image/image";
import Grid from "@mui/material/Grid";
import display from "./assets/babarDisplay.jpg";
import useWindowSize from "../../hooks/windowResize";
import constants from "../../constants";
import "./home.css";

export const Home = () => {
  const [isInfoClicked, setClicked] = React.useState(true);
  const pRef = useRef();
  React.useEffect(() => {
    //To render click me button after 4 seconds
    setTimeout(() => {
      setClicked(false);
    }, 4000);
  }, []);

  const size = useWindowSize();
  var i = 0;
  var txt = constants.Introduction; /* The text */
  var speed = 20; /* The speed/duration of the effect in milliseconds */

  function typeWriter() {
    if (i < txt.length) {
      pRef.current.innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
    setClicked(true);
  }

  return (
    <Grid
      style={{
        marginTop: "10%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "",
      }}
      container
      rowSpacing={0.5}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      <Grid className="center-img" item xs={size?.width < 900 ? 12 : 4}>
        <Image height="300px" width="50%" animation={true} src={display} />
      </Grid>
      <Grid item xs={size?.width < 800 ? 12 : 6}>
        <div className="animate-text">Babar Khan</div>
        <h2>Full Stack developer..</h2>
        {/* To disappear click me button after it is clicked */}
        {!isInfoClicked ? (
          <h1 class="kreep">
            <button onClick={typeWriter} class="button button5">
              <b>Click Me</b>
            </button>
          </h1>
        ) : (
          ""
        )}
        {/* created ref in order to append the text when the button click me is clicked */}
        <p className="about-intro" ref={pRef}>
          {" "}
        </p>
      </Grid>
      <Grid item className="divider" xs={12} />
    </Grid>
  );
};
