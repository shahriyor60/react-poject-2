import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Container from "@mui/material/Container";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import Verification from "../../../assets/Verification.png";
import Logo from "../../../assets/Logo.png";
import Logo2 from "../../../assets/Logo2.png";
import Q from "../../../assets/Q.png";
import A from "../../../assets/A.png";
import S from "../../../assets/S.png";
import Pig from "../../../assets/Pig.png";
import R from "../../../assets/R.png";
import L from "../../../assets/L.png";

import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
export default function index() {
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
            <Grid item md={6}>
              <img src={Logo} style={{ width: "268px" }} alt="" />
            </Grid>
            <Grid item md={6}>
              <img src={Logo2} style={{ width: "268px" }} alt="" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={6} sx={{ aliginItems: "center" }}>
          <Grid container  direction="row"
  justifyContent="flex-end"
  alignItems="center">
<Grid item>
          <InsertLinkIcon sx={{ width: "30px" }} />
          <a href="" style={{ fontSize: "30px", color: "black" }}>
            Website
          </a>
          </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Container sx={{ justifyContent: "center", marginTop: "143px" }}>
        <Box
          sx={{ flexGrow: 1, justifyContent: "center", aliginItem: "center" }}
        >
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            justifyContent="center"
          >
            <Grid item xs={12} sm={4} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea
                  sx={{ justifyContent: "center", textAlign: "center" }}
                >
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ fontSize: "50px", fontWeight: "700" }}
                    >
                      <img src={Verification} alt="" />
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontWeight: "600" }}
                    >
                      Please verify you’re not a spammer by doing this quick
                      activity!
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions sx={{ marginTop: "14px" }}>
                  <Button
                    style={{
                      border: "2px solid black",
                      color: "black",
                      fontWeight: "600",
                      marginLeft: "35%",
                    }}
                  >
                    Verify
                  </Button>
                </CardActions>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  sx={{ backgroundColor: "#F1F1F1", marginTop: "35px" }}
                >
                  <Grid item xs={6}>
                    <img src={Logo} alt="" />
                  </Grid>
                  <Grid item xs={6}>
                    <img src={Q} alt="" style={{ marginLeft: "50%" }} />
                    <img src={A} alt="" style={{ marginLeft: "10px" }} />
                    <img src={S} alt="" style={{ marginLeft: "10px" }} />
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea
                  sx={{ justifyContent: "center", textAlign: "center" }}
                >
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ fontSize: "50px", fontWeight: "700" }}
                    ></Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontWeight: "600" }}
                    >
                      Please verify you’re not a spammer by doing this quick
                      activity!
                    </Typography>
                  </CardContent>
                  {/* <Grid container   direction="row"
                    justifyContent="flex-start"
                    alignItems="center">
                    <Gird item md={4}>
                      {" "} */}
                  <img src={R} alt="" />
                  {/* </Gird>  */}
                  {/* <Gird item md={4}> */}
                  <img
                    src={Pig}
                    alt=""
                    style={{
                      border: "1px solid black",
                      borderRadius: "50%",
                      width: "110px",
                    }}
                  />
                  {/* </Gird>
                    <Gird item md={4}> */}{" "}
                  <img src={L} alt="" />
                  {/* </Gird>
                  </Grid> */}
                </CardActionArea>

                <CardActions sx={{ marginTop: "14px" }}>
                  <Button
                    style={{
                      border: "2px solid black",
                      color: "black",
                      fontWeight: "600",
                      marginLeft: "40%",
                    }}
                  >
                    Done
                  </Button>
                </CardActions>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  sx={{ backgroundColor: "#F1F1F1" }}
                >
                  <Grid item xs={6}>
                    <img src={Logo} alt="" />
                  </Grid>
                  <Grid item xs={6}>
                    <img src={Q} alt="" style={{ marginLeft: "50%" }} />
                    <img src={A} alt="" style={{ marginLeft: "10px" }} />
                    <img src={S} alt="" style={{ marginLeft: "10px" }} />
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea
                  sx={{ justifyContent: "center", textAlign: "center" }}
                >
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ fontSize: "50px", fontWeight: "700" }}
                    ></Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontWeight: "600" }}
                    >
                      Please verify you’re not a spammer
                    </Typography>
                  </CardContent>
                  <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    <Grid item md={6}>
                      {" "}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nesciunt, rerum.{" "}
                    </Grid>
                    <Grid item md={6}>
                      <img
                        src={Pig}
                        alt=""
                        style={{
                          border: "1px solid black",
                          borderRadius: "50%",
                          width: "110px",
                        }}
                      />
                    </Grid>
                  </Grid>
                </CardActionArea>
                <CardActions sx={{ marginTop: "14px" }}>
                  <Button
                    style={{
                      border: "2px solid black",
                      color: "black",
                      fontWeight: "600",
                      marginLeft: "40%",
                    }}
                  >
                    Verify
                  </Button>
                </CardActions>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  sx={{ backgroundColor: "#F1F1F1", marginTop: "35px" }}
                >
                  <Grid item xs={6}>
                    <img src={Logo} alt="" />
                  </Grid>
                  <Grid item xs={6}>
                    <img src={Q} alt="" style={{ marginLeft: "50%" }} />
                    <img src={A} alt="" style={{ marginLeft: "10px" }} />
                    <img src={S} alt="" style={{ marginLeft: "10px" }} />
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea
                  sx={{ justifyContent: "center", textAlign: "center" }}
                >
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ fontSize: "50px", fontWeight: "700" }}
                    ></Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontWeight: "600" }}
                    >
                      Please verify you’re not a spammer by doing this quick
                      activity!
                    </Typography>
                  </CardContent>
                  <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    <Grid item md={4}>
                      {" "}
                      <img src={R} alt="" />
                    </Grid>
                    <Grid item md={4}>
                      {" "}
                      <img
                        src={Pig}
                        alt=""
                        style={{
                          border: "1px solid black",
                          borderRadius: "50%",
                          width: "110px",
                        }}
                      />
                    </Grid>
                    <Grid item md={4}>
                      {" "}
                      <img src={L} alt="" />
                    </Grid>
                  </Grid>
                </CardActionArea>

                <CardActions sx={{ marginTop: "14px" }}></CardActions>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  sx={{ backgroundColor: "#F1F1F1", marginTop: "35px" }}
                >
                  <Grid item xs={6}>
                    <img src={Logo} alt="" />
                  </Grid>
                  <Grid item xs={6}>
                    <img src={Q} alt="" style={{ marginLeft: "50%" }} />
                    <img src={A} alt="" style={{ marginLeft: "10px" }} />
                    <img src={S} alt="" style={{ marginLeft: "10px" }} />
                  </Grid>
                </Grid>
              </Card>
              <Button
                sx={{
                  width: "345px",
                  marginTop: "20px",
                  backgroundColor: "blue",
                  color: "white",
                }}
              >
                Submit
              </Button>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea
                  sx={{ justifyContent: "center", textAlign: "center" }}
                >
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ fontSize: "50px", fontWeight: "700" }}
                    ></Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontWeight: "600" }}
                    >
                      Please verify you’re not a spammer by doing this quick
                      activity!
                    </Typography>
                  </CardContent>
                  <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    <Grid item md={4}>
                      {" "}
                      <img src={R} alt="" />
                    </Grid>
                    <Grid item md={4}>
                      {" "}
                      <img
                        src={Pig}
                        alt=""
                        style={{
                          border: "1px solid black",
                          borderRadius: "50%",
                          width: "110px",
                        }}
                      />
                    </Grid>
                    <Grid item md={4}>
                      {" "}
                      <img src={L} alt="" />
                    </Grid>
                  </Grid>
                </CardActionArea>

                <CardActions sx={{ marginTop: "14px" }}>
                  <Button
                    style={{
                      border: "none",
                      color: "white",
                      backgroundColor: "blue",
                      fontWeight: "600",
                      marginLeft: "40%",
                    }}
                  >
                    Done
                  </Button>
                </CardActions>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  sx={{ backgroundColor: "#F1F1F1" }}
                >
                  <Grid item xs={6}>
                    <img src={Logo} alt="" />
                  </Grid>
                  <Grid item xs={6}>
                    <img src={Q} alt="" style={{ marginLeft: "50%" }} />
                    <img src={A} alt="" style={{ marginLeft: "10px" }} />
                    <img src={S} alt="" style={{ marginLeft: "10px" }} />
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
