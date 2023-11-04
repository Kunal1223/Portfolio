import {Particles} from "react-tsparticles";
import { loadFull } from "tsparticles";
import React , {useCallback} from "react";

const ParticlesContainer = ({ particleColor, linkColor , number}) => {

  const ParticlesInit = useCallback(async(engine) =>{
    await loadFull(engine);
  }, []);

  const particlesLoad = useCallback(async () => {} , []);

  return (
    <Particles  
      className="particles-container"
      id='tsparticles'
      init={ParticlesInit} loaded={particlesLoad}
      options={{
        fullScreen : { enable:false},
        background :{
          color:{
            value:'',
          },
        },

        fpsLimit:number,
        interactivity:{
           events:{
            onClick:{
              enable:false,
              mode:'push',
            },
            onHover:{
              enable:true,
              mode:'repulse'
            },
            resize:true,
           },
        modes: {
          push:{
              quantity:90,
          },
          repulse:{
            distance:100,
            duration:0.4,
          },
        },
      },
      particles:{
        color:{
          value: particleColor,
        },
        links:{
          color:linkColor,
          distance:150,
          enable:true,
          opacity:0.5,
          width:1
        },
        collisions:{
          enable:true,
        },
        move :{
          direction:'none',
          enable: true,
          outModes:{
            default:'bounce',
          },
          random:false,
          speed:1,
          straight:false
        },
        number:{
          density:{
            enable:true,
            area:600
          },
          value:80,
        },
        opacity:{
          value:0.5,
        },
        shape:{
          type:'circle',
        },
        size:{
          value:{min:1 , max:6},
        },
      },
      detectRetinae:true,
      }}
    />
  );
};

export default ParticlesContainer;
