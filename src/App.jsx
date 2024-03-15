import Navbar from "./components/Navbar";
import Content2 from "./components/Content2";
import Content3 from "./components/Content3";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
// import Typewriter from "typewriter-effect";
import { Typewriter } from "react-simple-typewriter";

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
            position: "relative",
            overflow: "hidden",
          }}
          className="flex items-center justify-center"
        >
          <video
            src="
            /media/content_720.mp4"
            autoPlay
            loop
            muted
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 10,
            }}
          />
          <div className="max-w-[60%] h-[25rem] font-primary font-bold z-50 text-[9rem] text-center text-primary">
            <Typewriter
              words={["Welcome to sFitness"]}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={2000}
              className="text-[9rem] text-center text-primary"
            />
          </div>
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
