import { Container, Grid } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <React.Fragment>
      <Container style={{ textAlign: "center" }}>
        <Grid container justifyContent="center">
          <Grid item md={6}>
            <h1>Home</h1>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item md="6">
            <h3>A template to start react applications using react 18</h3>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Home;
