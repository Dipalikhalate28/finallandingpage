import React from "react";
import { Card, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Stack } from "@mui/system";
import styles from "../styles/browse.module.css"

function Browsebycategory() {
  const arr = [
    "React",
    "Python",
    "Angular",
    "NextJs",
    "Spring Boot",
    "MongoDB",
    "NodeJs",
    "MySqul",
    "Django",
    "Sql",
    "Qa",
    "JQuery",
  ];
  return (
    <Stack spacing={2}>
      <Stack>
        <div className={styles.titlebrowse}>
          Browse By Category
        </div>

      </Stack>
      <Grid container spacing={2}>
        {arr.map((ele, idx) => {
          return (
            <Grid className={styles.cardsdesign}key={idx} item xs={6} sm={2} lg={2} xl={2} md={2} >
              <Card
                sx={{
                  width: "100px",
                  height: "100px",
                  backgroundColor: "#CEB1FF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"

                }}
              >{ele}</Card>
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
}

export default Browsebycategory;
