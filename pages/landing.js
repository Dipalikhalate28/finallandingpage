import React, { useEffect, useState } from "react";
import AppDrawer from "../components/AppDrawer";
import { Grid } from "@mui/material";
import Converge from "../components/Converge";
import Services from "../components/Services";
import Browse from "../components/Browse";
import CreateAccount from "../components/CreateAccount";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Forpartner from "../components/Forpartner";
import Forclient from "./Forclient";
import Browsebycategory from "../components/Browsebycategory";
const landing = () => {
  const [scroll, setScroll] = useState(0);
  const [width, setWidth] = useState(true);

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  }, []);
  const updateWidthAndHeight = () => {
    console.log(window.innerWidth)
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);
  return (
    <>
      {width > "400" ?  <AppDrawer />  : <Navbar scroll={scroll} /> }

       <Grid container direction={"column"} alignItems="center" spacing={2}>
        <Grid 
        // sx={{ width: "100%" }} item lg={12} xs={12} md={12}
        >
          <Converge width={width} />
        </Grid>
        <Grid item lg={12} xs={12}>
          <Services />
        </Grid>
        <Grid item lg={12} xs={12} sx={{ width: "100%" }} >
          <Forpartner />
        </Grid>
        <Grid item lg={12} xs={12} sx={{ width: "100%" }} >
          <Forclient />
        </Grid>
        <Grid item lg={12} xs={12}>
          <CreateAccount /></Grid>
        <Grid item lg={12} xs={12}>
          <Browsebycategory />
        </Grid>
        <Grid item md ={12} lg={12} xs={12} sx={{ width: "100%" }}>
          <Footer />
        </Grid>
      </Grid> 
    </>
  );
};

export default landing;
