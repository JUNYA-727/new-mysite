/** @format */

import React from "react";
import "./App.css";
import Typical from "react-typical";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton } from "@mui/material";
function Home() {
  return (
    <> 
    <body style={{backgroundColor:'blue'}}>
      <div class="shutter">
        <Typical
          steps={["Thank you for visiting!", 400]}
          loop={1}
          className="home-p"
        ></Typical>
      </div>
      <div class="main-home">
        <div
          style={{
            justifyContent: "center",
            textAlign: "center",
            paddingTop: "70%",
          }}
        >
          <div>
            <p style={{ color: "white" }} className="fadeup-home1">
              JUNYA KURAMOCHI
            </p>
          </div>
          <div
            style={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
            }}
            className="fadeup-home2"
          >
            <div style={{ paddingRight: "2%" }}>
              <div
                style={{
                  borderRadius: "20%",
                  border: "solid 2px white",
                }}
              >
                <IconButton
                  variant="outlined"
                  href="https://github.com/JUNYA-727"
                >
                  <GitHubIcon
                    style={{ color: "white" }}
                    fontSize="medium"
                  ></GitHubIcon>
                </IconButton>
              </div>
            </div>
            <div style={{ paddingLeft: "2%", paddingRight: "2%" }}>
              <div
                style={{
                  borderRadius: "20%",
                  border: "solid 2px white",
                }}
              >
                <IconButton
                  variant="outlined"
                  href="https://www.instagram.com/junyq_/"
                >
                  <InstagramIcon
                    color="secondary"
                    fontSize="medium"
                  ></InstagramIcon>
                </IconButton>
              </div>
            </div>
            <div style={{ paddingLeft: "2%", paddingRight: "2%" }}>
              <div
                style={{
                  borderRadius: "20%",
                  border: "solid 2px white",
                }}
              >
                <IconButton
                  variant="outlined"
                  href="https://twitter.com/JUNY4_"
                >
                  <TwitterIcon color="primary" fontSize="medium"></TwitterIcon>
                </IconButton>
              </div>
            </div>
            <div style={{ paddingLeft: "2%" }}>
              <div
                style={{
                  borderRadius: "20%",
                  border: "solid 2px white",
                }}
              >
                <IconButton variant="outlined" href="/mysite">
                  <LanguageIcon
                    color="success"
                    fontSize="medium"
                  ></LanguageIcon>
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      </body>
    </>
  );
}
export default Home;
