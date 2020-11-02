import React from "react";
import { Grid, Link } from "@material-ui/core";
import Styles from "./profileStyle";
import SamirProfileImage from "../assets/image/Samirphoto.png";

import {
  WiredButton,
  WiredProgress,
  WiredDivider,
  WiredCheckbox,
  WiredCard,
  WiredFab,
  WiredIconButton,
} from "wired-elements";
export default function Profile() {
  const classes = Styles();

  return (
    <Grid container xs={12} className={classes.profile_head_container}>
      <Grid
        item={true}
        xs={12}
        sm={12}
        md={7}
        className={classes.profile_header}
      >
        <Grid className={classes.image_grid}>
          <img
            src={SamirProfileImage}
            alt="Samir_Photo"
            className={classes.image_header}
          ></img>
        </Grid>
        <Grid>
          <p className={classes.header_name}> Mohammed Samir A</p>
          <p className={classes.header_position_role}>Web Developer</p>
        </Grid>
      </Grid>
      {/* Content Grid */}
      <Grid item={true} xs={12} sm={12} md={7} className={classes.content_item}>
        {/* <p className={classes.text_basics}> in the sea of oridinary, make sure your website is set apart from the competition</p> */}
        <p className={classes.text_basics}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Break boundaries, creative
          and innovative. Doing frontend web developer in{" "}
          <Link href="https://www.crayond.com" target="_blank" rel="noopener">
            Crayon'd Technology
          </Link>
          . Working with ReactJs and NodeJs. Passion for designing beautiful and
          functional user experiences. Focus on UX/UI design, writing clean
          code, elegent and efficient. Like to became a full stack developer
          within 2020. Open to work with any project.
        </p>
      </Grid>
      {/* Buttons Grid */}
      <Grid
        item={true}
        xs={12}
        sm={12}
        md={5}
        className={classes.content_item_two}
      >
        <wired-button elevation="5" className={classes.nav_button}>
          <Link
            className={classes.link_button}
            href={require("../assets/pdf/SamirResume.pdf")}
            // download="SamirResume"
            target="_blank"
          >
            Resume
          </Link>
        </wired-button>
        <wired-button elevation="6">
          <Link
            className={classes.link_button}
            href="mailto:samirsaji13@gmail.com"
          >
            Email
          </Link>
        </wired-button>
        <wired-button elevation="4">
          {" "}
          <Link
            className={classes.link_button}
            href="https://github.com/SamirSaji"
            target="_blank"
            rel="noopener"
          >
            Github
          </Link>
        </wired-button>
      </Grid>

      <Grid
        item={true}
        xs={12}
        sm={12}
        md={7}
        className={classes.content_item_3}
      >
        <Grid>
          <p className={classes.heading_text}>Skills : </p>{" "}
        </Grid>
        <Grid item className={classes.skills_items}>
          <Grid xs={3}>
            <p className={classes.skills_text} style={{ margin: "auto" }}>
              HTML :
            </p>
          </Grid>
          <Grid xs={9} sm={9} md={8}>
            {" "}
            <wired-progress
              value="90"
              min="0"
              max="100"
              percentage
              className={classes.wired_progress_bar}
              style={{ width: "100%" }}
            ></wired-progress>
          </Grid>
        </Grid>
        <Grid item className={classes.skills_items}>
          <Grid xs={3}>
            <p className={classes.skills_text} style={{ margin: "auto" }}>
              CSS :
            </p>
          </Grid>
          <Grid xs={9} sm={9} md={8}>
            {" "}
            <wired-progress
              value="90"
              min="0"
              max="100"
              percentage
              className={classes.wired_progress_bar}
              style={{ width: "100%" }}
            ></wired-progress>
          </Grid>
        </Grid>
        <Grid item className={classes.skills_items}>
          <Grid xs={3}>
            <p className={classes.skills_text} style={{ margin: "auto" }}>
              Javascript :
            </p>
          </Grid>
          <Grid xs={9} sm={9} md={8}>
            {" "}
            <wired-progress
              value="75"
              min="0"
              max="100"
              percentage
              className={classes.wired_progress_bar}
              style={{ width: "100%" }}
            ></wired-progress>
          </Grid>
        </Grid>
        <Grid item className={classes.skills_items}>
          <Grid xs={3}>
            <p className={classes.skills_text} style={{ margin: "auto" }}>
              ReactJS :
            </p>
          </Grid>
          <Grid xs={9} sm={9} md={8}>
            {" "}
            <wired-progress
              value="70"
              min="0"
              max="100"
              percentage
              className={classes.wired_progress_bar}
              style={{ width: "100%" }}
            ></wired-progress>
          </Grid>
        </Grid>
        <Grid item className={classes.skills_items}>
          <Grid xs={3}>
            <p className={classes.skills_text} style={{ margin: "auto" }}>
              NodeJS :
            </p>
          </Grid>
          <Grid xs={9} sm={9} md={8}>
            <wired-progress
              value="60"
              min="0"
              max="100"
              percentage
              className={classes.wired_progress_bar}
              style={{ width: "100%" }}
            ></wired-progress>
          </Grid>
        </Grid>
        <Grid item className={classes.skills_items}>
          <Grid xs={3}>
            <p className={classes.skills_text} style={{ margin: "auto" }}>
              Postgres :
            </p>
          </Grid>
          <Grid xs={9} sm={9} md={8}>
            <wired-progress
              value="40"
              min="0"
              max="100"
              percentage
              className={classes.wired_progress_bar}
              style={{ width: "100%" }}
            ></wired-progress>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item={true}
        xs={12}
        sm={12}
        md={7}
        className={classes.content_item_4}
      >
        <Grid>
          <p className={classes.heading_text} style={{ margin: "0px" }}>
            Studies :{" "}
          </p>{" "}
        </Grid>
        <Grid className={classes.checkbox_items}>
          <Grid>
            <wired-checkbox
              checked
              style={{ pointerEvents: "none" }}
            ></wired-checkbox>
          </Grid>
          <Grid>
            <p className={classes.studies_heading}>
              Higher secondary school :{" "}
            </p>
          </Grid>
        </Grid>
        <p className={classes.checkbox_content_text}>
          -- Bharathi higher secondary school - Namakkal (2014 -2016)
        </p>
        <Grid className={classes.checkbox_items}>
          <Grid>
            <wired-checkbox
              checked
              style={{ pointerEvents: "none" }}
            ></wired-checkbox>
          </Grid>
          <Grid>
            <p className={classes.studies_heading}>
              Bachelor of Engineering :{" "}
            </p>
          </Grid>
        </Grid>
        <p className={classes.checkbox_content_text}>
          -- K S R Institute for Engineering and Technology - Namakkal (2016
          -2020)
        </p>
        <wired-divider
          elevation="1"
          style={{ marginTop: "30px" }}
        ></wired-divider>
      </Grid>

      <Grid
        item={true}
        xs={12}
        sm={12}
        md={7}
        className={classes.content_item_5}
      >
        <Grid>
          <p className={classes.heading_text} style={{ margin: "0px" }}>
            Experiences :{" "}
          </p>{" "}
        </Grid>
        <Grid className={classes.checkbox_items}>
          <Grid>
            <wired-checkbox
              checked
              style={{ pointerEvents: "none" }}
            ></wired-checkbox>
          </Grid>
          <Grid>
            <p className={classes.studies_heading}>Internship : </p>
          </Grid>
        </Grid>
        <p className={classes.checkbox_content_text}>
          Crayond Technology - Chennai (Sep 2019 - Feb 2020)
        </p>
        <Grid className={classes.checkbox_items}>
          <Grid>
            <wired-checkbox
              checked
              style={{ pointerEvents: "none" }}
            ></wired-checkbox>
          </Grid>
          <Grid>
            <p className={classes.studies_heading}>Frontend Developer : </p>
          </Grid>
        </Grid>
        <p className={classes.checkbox_content_text}>
          Crayond Technology - Chennai (Jun 2020 - Present)
        </p>
        <wired-divider
          elevation="1"
          style={{ marginTop: "30px" }}
        ></wired-divider>
      </Grid>
      <Grid
        item={true}
        xs={12}
        sm={12}
        md={7}
        className={classes.content_item_5}
      >
        <Grid>
          <p className={classes.heading_text} style={{ margin: "0px" }}>
            About Me :{" "}
          </p>{" "}
        </Grid>
        <Grid item className={classes.about_me_item}>
          <Grid xs={3} md={2}>
            <p className={classes.about_me_text_heading}>Name : </p>
          </Grid>
          <Grid xs={9}>
            <p className={classes.about_me_text}> Mohammed Samir</p>
          </Grid>
        </Grid>
        <Grid item className={classes.about_me_item}>
          <Grid xs={3} md={2}>
            <p className={classes.about_me_text_heading}>DOB : </p>
          </Grid>
          <Grid xs={9}>
            <p className={classes.about_me_text}> March 01, 1999</p>
          </Grid>
        </Grid>
        <Grid item className={classes.about_me_item}>
          <Grid xs={3} md={2}>
            <p className={classes.about_me_text_heading}>Address : </p>
          </Grid>
          <Grid xs={9}>
            <p className={classes.about_me_text}>
              {" "}
              2/35, Varagur, Namakkal, Tamilnadu, India
            </p>
          </Grid>
        </Grid>
        <Grid item className={classes.about_me_item}>
          <Grid xs={3} md={2}>
            <p className={classes.about_me_text_heading}>Zipcode : </p>
          </Grid>
          <Grid xs={9}>
            <p className={classes.about_me_text}> 637021</p>
          </Grid>
        </Grid>
        <Grid item className={classes.about_me_item}>
          <Grid xs={3} md={2}>
            <p className={classes.about_me_text_heading}>Email : </p>
          </Grid>
          <Grid xs={9}>
            <p className={classes.about_me_text}>
              {" "}
              <Link href="mailto:samirsaji13@gmail.com">
                samirsaji13@gmail.com
              </Link>
            </p>
          </Grid>
        </Grid>
        <Grid item className={classes.about_me_item}>
          <Grid xs={3} md={2}>
            <p className={classes.about_me_text_heading}>Phone : </p>
          </Grid>
          <Grid xs={9}>
            <p className={classes.about_me_text}>
              {" "}
              <Link href="tel:+919750937070">9750937070</Link>
            </p>
          </Grid>
        </Grid>
        <Grid item className={classes.about_me_item}>
          <Grid xs={3} md={2}>
            <p className={classes.about_me_text_heading}>LI : </p>
          </Grid>
          <Grid xs={9}>
            <p className={classes.about_me_text}>
              {" "}
              <Link href="https://www.linkedin.com/in/samirsaji">
                Mohammed Samir
              </Link>
            </p>
          </Grid>
        </Grid>
        <Grid item className={classes.about_me_item}>
          <Grid xs={3} md={2}>
            <p className={classes.about_me_text_heading}>Insta : </p>
          </Grid>
          <Grid xs={9}>
            <p className={classes.about_me_text}>
              {" "}
              <Link href="https://www.instagram.com/samir_saji/">
                samir_saji
              </Link>
            </p>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item={true}
        xs={12}
        sm={12}
        md={7}
        className={classes.content_item_5}
      >
        <wired-card elevation="5" fill="#456545">
          <p
            className={classes.text_basics}
            style={{ color: "#fff", textAlign: "center", fontWeight: "bold" }}
          >
            {" "}
            In the sea of ordinary, make sure your website is set apart from the
            competition.
          </p>
        </wired-card>
      </Grid>
      <Grid
        item={true}
        xs={12}
        sm={12}
        md={7}
        className={classes.content_item_5}
      >
        <wired-divider
          elevation="1"
          style={{ marginTop: "30px" }}
        ></wired-divider>
        <p className={classes.text_basics} style={{ textAlign: "center" }}>
          Made with <span style={{ color: "red" }}>&#10084;</span> by SamirSaji
        </p>
      </Grid>
    </Grid>
  );
}
