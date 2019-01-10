import React, { Component } from "react";
import ContactCard from "./ContactCard";
class Blog extends Component {
  state = {};
  render() {
    return (
      <div>
        <ContactCard
          imgLink="/assets/Adorable.jpeg"
          name="Mr. Ohaya Michael"
          phone="+2348066906352"
          email="ohayamic@gmail.com"
        />
        <br />
        <ContactCard
          imgLink="/assets/cat1.jpeg"
          name="Mr. Dangerous Oneil"
          phone="+2348066906352"
          email="Jarn123@gmail.com"
        />
        <br />
        <ContactCard
          imgLink="/assets/cuteCat.jpeg"
          name="Mr. James Badmos"
          phone="+2348066906352"
          email="JoinReact@gmail.com"
        />
        <br />
        <ContactCard
          imgLink="/assets/fierceCat.jpeg"
          name="Mr. Fierce Badmos"
          phone="+2348066906352"
          email="ReactWorld@gmail.com"
        />
      </div>
    );
  }
}

export default Blog;
