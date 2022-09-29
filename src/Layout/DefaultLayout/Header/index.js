import React, { } from "react";
import { NavBar } from "../../../components"
// import fpt from '../../../asset/fpt.jpeg'


import Image from '../../../asset/fpt.jpeg'; // Import using relative path


const styles = {
  paperContainer: {
    backgroundImage: `url(${Image})`
  }
};

//style={styles.paperContainer}

export default function Example() {


  return (
    <>
      <div >
        <NavBar />
      </div>

    </>
  );
}
