import Grid from "@mui/material/Grid";
import TestimonialCard from "material-testimonial-card";
import useWindowSize from "../../hooks/windowResize";
import hammad_pic from "./assets/hammad.jpg";
import jawadPic from "./assets/jawad.jpg";
import muneebPic from "./assets/muneeb.jpg";
import constants from "../../constants";
import "./about.css";

const About = () => {
  const size = useWindowSize();
  const winSize = size.width;
  return (
    <Grid container rowSpacing={0.5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid className="center-content" item xs={12}>
        <div>
          <h1 className="mono-font">Babar Khan</h1>
          <div className="title">Web-Developer</div>
        </div>
      </Grid>
      <Grid className="divider" item xs={12} />
      <Grid item xs={12}>
        <p className="about-intro">
          Hi, I am Babar khan from Pakistan. I have started my career 5 years
          ago as a Javascript developer. I am an enthusiast who like to tackle
          different problems. I am good a team player and currently leading a
          team of five in my organisation, I have my specialised expertise in
          React Node which I prefer to use for development. These days I am
          learning Next JS and GO lang in order to keep myself up to date with
          market and learning some new technologies to play around with the
          problems more efficiently.
        </p>
      </Grid>

      <Grid item xs={12}>
        <p className="about-intro">
          I have been an instructor to many young individuals who wants to kick
          start their career in JS. I have helped a lot of young talent to land
          their dream job in market. I have done that completely free and just
          for sake of greater good or betterment of the society where everyone
          should be able to earn for themselves and their families. I aim the
          best of best I am not a perfectionist but I try to atleast push
          everything to that certain level.
        </p>
      </Grid>
      <Grid xs={12} className="divider" />

      <Grid className="center-content wrapper" item xs={winSize < 900 ? 12 : 4}>
        <TestimonialCard
          name={"Hammad Imran"}
          image={hammad_pic}
          content={constants.testimonials.hammad}
          project={"Testimonial card"}
        />
      </Grid>
      <Grid
        className="center-content wrapper"
        item
        xs={size?.width < 900 ? 12 : 4}
      >
        <TestimonialCard
          name="Muneeb Afridi"
          image={muneebPic}
          content={constants.testimonials.muneed}
          project={"Testimonial card"}
        />
      </Grid>
      <Grid
        className="center-content wrapper"
        item
        xs={size?.width < 900 ? 12 : 4}
      >
        <TestimonialCard
          name={"Jawad Khan"}
          image={jawadPic}
          content={constants.testimonials.jawad}
          project={"Testimonial card"}
        />
      </Grid>
    </Grid>
  );
};

export default About;
