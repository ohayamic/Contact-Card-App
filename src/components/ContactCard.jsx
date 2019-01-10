import React from "react";
import "./ContactCard.css";

function ContactCard(props) {
  return (
    <div>
      <img src={props.imgLink} alt={Image} />
      <h3>{props.name}</h3>
      <p>Phone: {props.phone}</p>
      <p>Email: {props.email}</p>
    </div>
  );
}
export default ContactCard;
