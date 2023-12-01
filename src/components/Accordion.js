import { React, useState } from "react";
import LineDown from '../assets/img/icons/line down.png'
import { useSpring, animated } from "react-spring";
import '../assets/css/Accordion.css'

const Accordion=({title,text})=>{
  const [open, setOpen] = useState(false);
  
  let toggleHandler = (e) => {
    setOpen(!open);
    console.log("hfg")
  };

  const openAnimation = useSpring({
    from: { opacity: "0", maxHeight: "70px" },
    to: { opacity: "1", maxHeight: open ? "250px" : "70px" },
    config: { duration: "300" }
  });

  const styles = {
    accordionHeader: {
      background: open ? "rgba(71, 64, 83, 0.2)" : "rgba(11, 9, 13, 1)"
    }
  };

  const iconAnimation = useSpring({
    from: {
      transform: "rotate(0deg)",
      color: "#ffff"
    },
    to: {
      transform: open ? "rotate(180deg)" : "rotate(0deg)",
      color: open ? "#10d6f5" : "#fff"
    },
    config: { duration: "120" }
  });

  return (
    <animated.div className="accordion__item" style={openAnimation}>
      <div style={styles.accordionHeader} className="accordion__header" onClick={toggleHandler}>
        <h4>{title}</h4>
        <animated.i style={iconAnimation}>
          <img src={LineDown}/>
        </animated.i>
      </div>
      <p className="accordion__content">{text}</p>
    </animated.div>
  );
}

export default Accordion;