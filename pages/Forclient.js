import React from "react";
import style from "../styles/forclient.module.css";
import { clientsimage } from "../images/svgexports";
import { Stack } from "@mui/system";
import { Grid } from "@mui/material";

function Forclient() {
  return (
    <Stack sx={{ width: "100%" }}>
      <Grid container  sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Grid
          item
          lg={6}
          md={6}
          xs={12}
          sm={12}
           xl={12}
          
        >
            <Stack  className={style["client-features"]}>

           
          <div className={style.clientnm}
            // style={{ fontSize: "30px", fontWeight: "600", color: "#5D2EAB" }}
          >
            For Clients
          </div>
          <div className={style.feature}>Feature #1</div>
          <div className={style.feature}>Feature #1</div>
          <div className={style.feature}>Feature #1</div>
          <div className={style["cnt-btn"]}>Let's Connect</div>
          </Stack>
        </Grid>
        <Grid item lg={6} md={6} xs={12} sm={12} className={style.image}>
          {clientsimage}
        </Grid>
      </Grid>
    </Stack>
  );
}

export default Forclient;
