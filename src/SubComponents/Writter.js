import React from "react";
import Typewriter from "typewriter-effect";

const WType = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "MERN Stack Developer",
              "Open Source Contributor",
              "Web Developer",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      )
}

export default WType;