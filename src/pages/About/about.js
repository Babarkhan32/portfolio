import Grid from "@mui/material/Grid";
import TestimonialCard from "material-testimonial-card";
import useWindowSize from "../../hooks/windowResize";
import hammad_pic from "./assets/hammad.jpg";
import jawadPic from "./assets/jawad.jpg";
import muneebPic from "./assets/muneeb.jpg";
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
          content={
            "Under the internship of Sir Babar khan I have mastered few skills of JS which helped in my career a lot, Currently I am earning six figures and living a happy life, The credit goes to Sir Babar Khan"
          }
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
          content="After three months of internship with Sir Babar khan I was able to tackle complex problems. Sir Babar khan not only helped me technically but also taught me how to act professionally"
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
          content={
            "After my graduation I got lucky to have 3 months of internship with Sir Babar Khan, Free of cost and not a single penny was charged, I groomed technically and professionally very well. All thanks to Sir Babar khan"
          }
          project={"Testimonial card"}
        />
      </Grid>
    </Grid>
  );
};

export default About;
