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
      <div class="shutter">
        <Typical
          steps={["Thank you coming!", 400]}
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
            <p style={{ color: "white" }}>JUNYA KURAMOCHI</p>
          </div>
          <div
            style={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
            }}
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
                    fontSize="small"
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
                    fontSize="small"
                  ></InstagramIcon>
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
                <IconButton
                  variant="outlined"
                  href="https://twitter.com/JUNY4_"
                >
                  <TwitterIcon color="primary" fontSize="small"></TwitterIcon>
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
                  <TwitterIcon color="primary" fontSize="small"></TwitterIcon>
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
