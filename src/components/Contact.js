import classes from "./Contact.module.css";
import ContactInfo from "./ContactInfo";
const Contact = () => {
  return (
    <section className={classes.contact}>
      <ContactInfo link='https://github.com/Nghuynh07' title='Github' />
      <ContactInfo
        link='https://www.linkedin.com/in/huynhtnguyen/'
        title='LinkedIn'
      />
      <ContactInfo link='mailto: july31nth@gmail.com' title='Email' />
    </section>
  );
};

export default Contact;
