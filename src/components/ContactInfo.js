import React from "react";
import classes from "./ContactInfo.module.css";
const ContactInfo = ({ link, title }) => {
  return (
    <div>
      <a href={link} className={classes.contactInfo}>
        {title}
      </a>
    </div>
  );
};

export default ContactInfo;
