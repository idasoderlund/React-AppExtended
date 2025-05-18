//Första component Header där har vi en h1 som representerar
//huvud rubriken och denna kommer att vara under navbar som vi ahr haft från förra uppgiften

/* FÖRSTA DELEN!!!!
### Huvudkomponent (`App.jsx`)

- Ska innehålla en **Header** överst med texten: F25D Borås YH - React kurs

*/
import { useState } from "react";

function Header() {
  return (
    <header className="header">
      <div className="headerdiv">
        <h1>F25D Borås YH - React kurs</h1>
      </div>
    </header>
  );
}
export default Header;
