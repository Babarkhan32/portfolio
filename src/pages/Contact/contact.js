import { Grid } from "@mui/material";
import Card from "../../components/card/card";
import useWindowSize from "../../hooks/windowResize";

import "./contact.css";
import constants from "../../constants";
const Contact = () => {
  const size = useWindowSize();
  const winSize = size.width;
  return (
    <Grid style={{ backgroundColor: "#f8f8f8" }} container>
      <Grid className="contact-bot-mrg" item xs={12}>
        <div>
          <h2 className="title-span">Please get in touch... </h2>
        </div>
      </Grid>
      {constants.contact.map((contact) => {
        return (
          <>
            <Grid
              style={{ marginLeft: "5%", marginTop: "5%" }}
              item
              xs={winSize > 1200 ? 3 : 12}
            >
              <Card
                username={contact.username}
                message={contact.message}
                socialCard={true}
                image={contact.image}
                src={contact.src}
              ></Card>
            </Grid>
          </>
        );
      })}{" "}
      <Grid className="divider" xs={12}></Grid>
      <p className="about-intro">
        I will love to get in contact with you guys. Up above is my contact
        information, I am 24/7 active on these platforms and try my best to
        reach back to the messages that I recieve. If you have any unique idea
        that you want to implement, I would love to hear and help you guys
        achieve that. I love to code and that is why connections are very
        important for me. So please be mu guest, Be my connection. Once we get
        to know each other, I believe we will start building something really
        cool
      </p>
      <p className="about-intro">
        If you are a student and looking for help, I provide my guidance free of
        cost. I believe skills that helps you earn should be accessible to
        everyone, Everyone deserve to earn a good fortune. So feel free to
        contact me if you want help with MERN, MEAN , MEVN, AWS GO LANG and many
        more technologies. I will try my best to respond and help as much as I
        can.
      </p>
      <Grid className="divider" xs={12}></Grid>
    </Grid>
  );
};
export default Contact;
