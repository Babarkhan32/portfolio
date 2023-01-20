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
      style={{ backgroundColor: "white" }}
      container
      rowSpacing={0.5}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      <Grid item xs={12}>
        {" "}
        <div>
          <h1 className="title-span center-content"> Services</h1>
          <h3 className="heading">What I do?</h3>
        </div>
      </Grid>
      {[
        {
          title: "Web-Design",
          description: "I can give design to your website via HTML,CSS,MUI",
          number: "01",
        },
        {
          title: "Front End Development",
          description:
            "I can give functionality to your website via React,Next,Vue",
          number: "02",
        },
        {
          title: "Back End Development",
          description: "I can create Apis for your website via Node and Golang",
          number: "03",
        },
        {
          title: "Cloud services",
          description: "I can host,maintain and scale your website via AWS",
          number: "04",
        },
        {
          title: "Technical Project Management",
          description: "I can manage/implement your website tasks via JIRA",
          number: "05",
        },
        {
          title: "Chess",
          description:
            "I can play chess with you, offline or even online via apps",
          number: "06",
        },
      ].map((service) => {
        return (
          <Grid item xs={winSize > 1200 ? 4 : 12}>
            <Card
              title={service.title}
              description={service.description}
              number={service.number}
            ></Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Services;
