import React from "react";
import style from "../styles/forpartner.module.css";
import { partnersimage } from "../images/svgexports";
import { Stack } from "@mui/system";
import { Grid } from "@mui/material";

function Forparent() {
  return (
    <Stack sx={{ width: "100%" }}>
      <Grid
        container
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Grid item lg={6} md={6} xs={12} sm={12} className={style.image}>
          {partnersimage}
        </Grid>
        <Grid
          item
          lg={6}
          md={6}
          xs={12}
          sm={12}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Stack className={style["partner-features"]}>
            {" "}
            <div className={style.partnernm}
              // style={{ fontSize: "30px", fontWeight: "600", color: "#5D2EAB"  }}
            >
              For Partners
            </div>
            <div className={style.feature}>Feature #1</div>
            <div className={style.feature}>Feature #1</div>
            <div className={style.feature}>Feature #1</div>
            <div className={style["cnt-btn"]}>Let's Connect</div>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default Forparent;
