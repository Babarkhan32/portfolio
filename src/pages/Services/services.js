import Card from "../../components/card/card";
import Grid from "@mui/material/Grid";
import useWindowSize from "../../hooks/windowResize";
import constants from "../../constants";
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
      {constants.primaryServices.map((service) => {
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
      {constants.secondaryServices.map((service) => {
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
    </Grid>
  );
};

export default Services;
