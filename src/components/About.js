import React from 'react'
import '../Styles/About.css'
import {
  DiCss3Full,
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,

} from "react-icons/di";

import {
  SiRedux,
  SiMongodb,
  SiTypescript,
  SiHtml5,
  SiPostman,
  SiVercel
} from "react-icons/si";

import { TbBrandNextjs, TbBrandVscode } from 'react-icons/tb'
import ParticlesContainer from '../SubComponents/Particles';

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-text">
          <h1>Skillset: <br /></h1>
          <hr className="hr" />

          <div className="skill-logo">
            <div className="s-logo">
              <SiHtml5 className='logo' />
            </div>
            <div className="s-logo">
              <DiCss3Full className='logo' />
            </div>
            <div className="s-logo">
              <DiJavascript1 className='logo' />
            </div>
            <div className="s-logo">
              <DiReact className='logo' />
            </div>
            <div className="s-logo">
              <SiTypescript className='logo' />
            </div>
          </div>

          <div className="skill-logo">
            <div className="s-logo">
              <DiNodejs className='logo' />
            </div>
            <div className="s-logo">
              <SiMongodb className='logo' />
            </div>
            <div className="s-logo">
              <SiRedux className='logo' />
            </div>
            <div className="s-logo">
              <TbBrandNextjs className='logo' />
            </div>
            <div className="s-logo">
              <DiGit className='logo' />
            </div>
          </div>
        </div>

        <div className="img">
          <img src="./images/bg-bulb.png" alt="" className='bulb' />
        </div>
      </div >

      <div className="tool">
        <h1>Tool I Use: <br /></h1>
        <hr className="hr1" />

        <div className="skill-logo">
          <div className="s-logo">
            <TbBrandVscode className='logo' />
          </div>
          <div className="s-logo">
            <SiPostman className='logo' />
          </div>
          <div className="s-logo">
            <SiVercel className='logo' />
          </div>
          <div className="s-logo">
            <DiGit className='logo' />
          </div>
        </div>
      </div>

      <ParticlesContainer particleColor='#f4f725' linkColor='#47e02f' number="500" />

    </>
  );
}

export default About