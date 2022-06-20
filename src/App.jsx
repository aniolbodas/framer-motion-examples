import { motion } from "framer-motion";
import { useState } from "react";

import "./App.css";

function App() {
  const [visibility, setVisibility] = useState("visible");

  const visibilityVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0, scale: 3, y: -500 },
    hover: { scale: 2 },
  };

  const crossVisibilityVariant = {
    visible: { color: "#000000" },
    hidden: { color: "#ff0000" },
  };

  return (
    <>
      <motion.div
        initial={"visible"}
        animate={visibility}
        transition={{ y: { type: "tween" }, delay: 0.2 }}
        variants={visibilityVariants}
        className="item"
        whileHover="hover"
      >
        <motion.p
          initial={"visible"}
          animate={visibility}
          variants={crossVisibilityVariant}
          onClick={() => {
            setVisibility("hidden");
          }}
          className="cross-btn"
        >
          X
        </motion.p>
      </motion.div>
      <motion.p onClick={() => setVisibility("visible")} className="show-btn">
        Show
      </motion.p>
    </>
  );
}

export default App;
