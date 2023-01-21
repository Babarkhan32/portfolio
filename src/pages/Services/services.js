import Card from "../../components/card/card";
import Grid from "@mui/material/Grid";
import useWindowSize from "../../hooks/windowResize";
import "./services.css";
import "../About/about.css";
const Services = () => {
  const size = useWindowSize();
  const winSize = size?.width;

  return (
    <Grid
      style={{ backgroundColor: "#f8f8f8" }}
      container
      justifyContent="space-evenly"
      rowSpacing={0.5}
      columnSpacing={1}
    >
      <Grid item xs={12}>
        {" "}
        <div>
          <h1 className="title-span"> Services</h1>
          <h3 className="heading">What I do?</h3>
        </div>
      </Grid>
      <Grid xs={1.5} />
      {[
        {
          title: "Web-Design",
          description:
            "I can create your website using Html and Css, I can work well with Css3, Css5. I have nice knowledge of Css libraries like Mui, Bootstrap, Antd...",
          number: "01",
        },
        {
          title: "Frontend",
          description:
            "I can create your website using React and Vue, I can work well with Next. I have nice knowledge of Ssr/Scg which I can achieve with NextJS",
          number: "02",
        },
        {
          title: "Backend",
          description:
            "I can create your website using Node and GoLang, I can work well with both. I have nice knowledge of Database design i-e NoSQL/SQL",
          number: "03",
        },
      ].map((service) => {
        return (
          <>
            <Grid className="center-content" item xs={winSize > 1200 ? 3 : 12}>
              <Card
                title={service.title}
                description={service.description}
                number={service.number}
                socialCard={false}
              ></Card>
            </Grid>
          </>
        );
      })}{" "}
      <Grid xs={1.5}> </Grid>
      <Grid xs={1.5} />
      {[
        {
          title: "Cloud Services",
          description:
            "I can host and maintain your website, I can work well with Aws. I have nice knowledge of scaling and improving application performance",
          number: "04",
        },
        {
          title: "Gaming",
          description:
            "I love to play e-games. If you are stuck at a level or want to achieve a higher Rank in any game. Just ping me up. I am the right guy for that job.",
          number: "05",
        },
        {
          title: "Chess",
          description:
            "This is the only service that I don't charge for. I love to play chess. If you are bored. Ping me up, as per my availaiblity I can play chess with you",
          number: "06",
        },
      ].map((service) => {
        return (
          <>
            <Grid className="center-content" item xs={winSize > 900 ? 3 : 12}>
              <Card
                title={service.title}
                description={service.description}
                number={service.number}
                socialCard={false}
              ></Card>
            </Grid>
          </>
        );
      })}{" "}
      <Grid xs={1.5}> </Grid>
    </Grid>
  );
};

export default Services;
