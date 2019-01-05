import React from "react";

import ContactCard from "./ContactCard";
function App() {
  return (
    <div>
      <ContactCard
        imgLink="/images/Adorable.jpeg"
        name="Mr. Ohaya Michael"
        phone="+2348066906352"
        email="ohayamic@gmail.com"
      />
      <br />
      <ContactCard
        imgLink="/images/cat1.jpeg"
        name="Mr. Dangerous Oneil"
        phone="+2348066906352"
        email="Jarn123@gmail.com"
      />{" "}
      <br />
      <ContactCard
        imgLink="/images/cuteCat.jpeg"
        name="Mr. James Badmos"
        phone="+2348066906352"
        email="JoinReact@gmail.com"
      />{" "}
      <br />
      <ContactCard
        imgLink="/images/fierceCat.jpeg"
        name="Mr. Fierce Badmos"
        phone="+2348066906352"
        email="ReactWorld@gmail.com"
      />
    </div>
  );
}
export default App;
