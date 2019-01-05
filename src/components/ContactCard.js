import React from "react";

function ContactCard(props) {
  return (
    <div>
      <div>
        <img src={props.imgLink} />
        <h3>{props.name}</h3>
        <p>Phone: {props.phone}</p>
        <p>Email: {props.email}</p>
      </div>
    </div>
  );
}
export default ContactCard;
