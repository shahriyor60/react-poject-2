import React from "react";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CheckIcon from "@mui/icons-material/Check";
import LinkIcon from "@mui/icons-material/Link";
import Logo3 from "../../../assets/Logo3.png";
import Logo4 from "../../../assets/Logo4.png";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import Email from "@mui/icons-material/Email";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import LockIcon from "@mui/icons-material/Lock";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import GroupB from "../../../assets/GroupB.png";
import CircleIcon from "@mui/icons-material/Circle";
import M from "../../../assets/M.png"
import Puzel from "../../../assets/Puzel.png"

export default () => {
  return (
    <div>
      <Grid
        container
        sx={{ backgroundColor: "#F2F6FA", padding: "40px 50px" }}
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid item md={6}>
          <Grid container>
            <Grid item md={2}>
              <img src={Logo3} style={{ width: "70px" }} alt="" />
            </Grid>
            <Grid item md={10}>
              <img src={Logo4} style={{ width: "268px" }} alt="" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={6} sx={{ aliginItems: "center" }}>
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Grid item>
              <InsertLinkIcon sx={{ width: "30px" }} />
              <a href="" style={{ fontSize: "30px", color: "black" }}>
                Website
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Container maxWidth="md" sx={{ marginTop: "100px" }}>
        <Grid container>
          <Grid item md={6}></Grid>
          <Grid item md={6} sm={12} xs={12}>
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 290,
              }}
            >
              <IconButton
                sx={{
                  p: "10px",
                  backgroundColor: "#F6F9FC",
                  borderRadius: "none",
                }}
                aria-label="menu"
              >
                <Email sx={{ borderRadius: "none" }} />
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="hello@email.com"
                inputProps={{ "aria-label": "search google maps" }}
              />
            </Paper>
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 290,
                marginTop: "12px",
              }}
            >
              <IconButton sx={{ p: "10px" }} aria-label="menu">
                <LockIcon />
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="******"
                inputProps={{ "aria-label": "search google maps" }}
              />
              <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
                <RemoveRedEyeIcon />
              </IconButton>
            </Paper>
            <Button
              variant="contained"
              sx={{
                background: "none",
                color: "black",
                width: "300px",
                marginTop: "20px",
              }}
              endIcon={<SendIcon sx={{ marginLeft: "50%" }} />}
              startIcon={
                <CircleIcon sx={{ fontSize: "30px", color: "#2488FF" }} />
              }
            >
              Send
            </Button>
            <Button sx={{width:"300px",backgroundColor:"#D5DBEB",height:"44px",marginTop:"40px",color:"white"}}>
              Sing in
            </Button>
            <Box sx={{marginTop:"150px"}}>
              <img src={M} alt="" style={{zIndex:"-1"}}/>
              <img src={Puzel} alt="" style={{marginTop:"-180px",marginLeft:"25px"}}/>
            </Box>
          </Grid> 
        </Grid>
      </Container>
    </div>
  );
};
