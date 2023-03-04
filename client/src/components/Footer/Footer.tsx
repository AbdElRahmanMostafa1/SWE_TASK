import React from "react";
import classes from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={`p-2 text-center ${classes.footer} `}>
      This task is made by AbdElRahman Mostafa. All copyrights &copy; are
      reserved
    </footer>
  );
};

export default Footer;
