import React from "react";
import style from "../styles/converge.module.css";
import { convergeimg } from "../images/svgexports";
import { Card, Grid, Stack } from "@mui/material";
function Converge({ width }) {


  return (
    <Stack
      // sx={{ width: "100%", }}
      // style={width > "670" ? { marginTop: "1%" } : { marginTop: "1px" }}
    >
      <Grid
        container
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid
          item
          lg={6}
          sm={12}
          md={6}
          xs={12}
          className={style.containeritem}
        >
          <div className={style.convergefirst}>
            <div className={style.convergenm}>Converge</div>
            <div>
              <span className={style.byhumancloud}>by </span>&nbsp;
              <span className={style.human}> human</span>
              <span className={style.cloud}>cloud</span>
            </div>
          </div>
        </Grid>
        <Grid
          item
          lg={6}
          sm={12}
          md={6}
          xs={12}
          // sx={{ display: "flex", justifyContent: "center" }}
        >
          <div className={style.image}>{convergeimg}</div>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default Converge;
