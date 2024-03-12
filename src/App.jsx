import Navbar from "./components/Navbar";
import Content2 from "./components/Content2";
import Content3 from "./components/Content3";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { motion, useInView, useAnimation } from "framer-motion";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Parallax pages={3}>
        <ParallaxLayer
          offset={0}
          speed={0}
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/791763/pexels-photo-791763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            backgroundSize: "cover",
          }}
          className="flex items-center justify-center"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.25, duration: 0.5 }}
            className="align-center max-w-full mt-10 font-primary font-bold"
          >
            <p className="text-[9rem] text-center text-primary">
              Welcome to
              <br />
              sFitness
            </p>
          </motion.div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0}
          style={{ backgroundColor: "#fde047" }}
        >
          <Content2 />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={0}
          factor={1}
          style={{ backgroundColor: "#fde047" }}
        >
          <Content3 />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default App;
