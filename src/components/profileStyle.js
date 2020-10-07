import { makeStyles } from "@material-ui/core/styles";
const Styles = makeStyles((theme) => ({
  profile_head_container: {
    display: "flex",
    justifyContent: "center",
  },
  profile_header: {
    marginTop: "50px",
    display: "flex",
    [theme.breakpoints.down("md")]: {
      display: "unset",
    },
  },
  image_grid: {
    padding: "20px",
    marginRight: "20px",
    [theme.breakpoints.down("md")]: {
      padding: "0px",
      display: "flex",
      justifyContent: "center",
      marginRight: "0px",
    },
  },
  image_header: {
    borderRadius: "50%",
    height: "150px",
    [theme.breakpoints.down("md")]: {
      height: "150px",
    },
  },
  header_name: {
    fontSize: "33px",
    fontWeight: "700",
    marginBottom: "0px",
    [theme.breakpoints.down("md")]: {
      fontSize: "29px",
      textAlign: "center",
      marginBottom: "0px",
    },
  },
  header_position_role: {
    fontSize: "20px",
    fontWeight: "700",
    marginTop: "0px",
    color: "#78767E",
    [theme.breakpoints.down("md")]: {
      fontSize: "18px",
      textAlign: "center",
      marginTop: "0px",
    },
  },
  content_item: {
    margin: "0px 15px 0px 15px",
  },
  text_basics: {
    fontSize: "22px",
    fontWeight: "400",
    textAlign: "justify",
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
      marginTop: "0px",
      lineHeight: "38px",
    },
  },
  content_item_two: {
    margin: "0px 15px 0px 15px",
    display: "flex",
    justifyContent: "space-evenly",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "space-between !important",
    },
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-evenly",
    },
  },
  nav_button: {},
  link_button: {
    padding: "16px",
    fontSize: "20px",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
      padding: "2px",
    },
  },
  content_item_3: {
    margin: "25px 15px 0px 15px",
  },
  heading_text: {
    fontSize: "29px",
    fontWeight: "600",
    [theme.breakpoints.down("md")]: {
      fontSize: "24px",
    },
  },
  skills_items: {
    display: "flex",
    margin: "25px 0px",
    [theme.breakpoints.down("md")]: {
      margin: "20px 0px",
    },
  },
  skills_text: {
    fontSize: "22px",

    textAlign: "justify",
    [theme.breakpoints.down("md")]: {
      fontSize: "12px",
      marginTop: "0px",
      lineHeight: "38px",
      fontWeight: "600",
    },
  },
  content_item_4: {
    margin: "15px 15px 0px 15px",
  },
  checkbox_items: {
    display: "flex",
    margin: "25px 0px 8px 0px",
    [theme.breakpoints.down("md")]: {
      margin: "15px 0px 4px 0px",
    },
  },
  studies_heading: {
    fontSize: "24px",
    margin: "0px",
    lineHeight: "24px",
    fontWeight: "600",
    [theme.breakpoints.down("md")]: {
      fontSize: "18px",
      lineHeight: "unset",
    },
  },
  checkbox_content_text: {
    fontSize: "22px",
    margin: "0px",
    textAlign: "justify",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
      lineHeight: "unset",
    },
  },
  content_item_5: {
    margin: "30px 15px 0px 15px",
  },
  about_me_item: {
    display: "flex",
    margin : "6px 0px"
  },
  about_me_text_heading: {
    fontSize: "24px",
    fontWeight: "600",
    margin: "0px",
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
    },
  },
  about_me_text :  {
    fontSize: "24px",
    // fontWeight: "600",
    margin: "0px",
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
    },
  
  }

}));
export default Styles;
