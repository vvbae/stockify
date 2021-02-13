import React, { useState } from "react";
import styles from "./button.module.css";

const Button = (props) => {
  const [bgColor, setBgColor] = useState("rgb(30, 215, 96)");
  const [txtColor, setTxtColor] = useState("rgb(0, 0, 0)");

  // const btn = {
  //   width: '200px',
  //   margin: '10px auto',
  //   padding: '10px',
  //   fontSize: '20px',
  //   // color: `${txtColor}`,
  //   // backgroundColor: `${bgColor}`,
  //   transition: '0.3s backgroundColor',
  //   outline: 'none',
  //   border: 'none',
  //   borderRadius: '5px',
  //   '&:hover': {
  //     backgroundColor: 'black'
  //   }
  // };
  function mouseEntered() {
    setBgColor("rgb(0, 0, 0)")
    setTxtColor("rgb(30, 215, 96)")
  }
  function mouseExited() {
    setBgColor("rgb(30, 215, 96)")
    setTxtColor("rgb(0, 0, 0)")
  }
  return (
      <div>
          <button
            className={styles.btn}
              // onMouseEnter={() => mouseEntered()}
              // onMouseLeave={() => mouseExited()}
          >
              {props.text}
          </button>
      </div>
  );
}

export default Button;