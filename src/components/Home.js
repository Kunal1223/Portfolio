import React from 'react';
import '../Styles/Home.css';
import { fadeIn } from '../SubComponents/Varients';
import { motion } from 'framer-motion';
import ProjectBtn from '../SubComponents/ProjectBtn';
import ParticlesContainer from '../SubComponents/Particles';
import { AiOutlineDownload } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import pdf from "../SubComponents/Resume1.pdf"
import Writter from "../SubComponents/Writter"

const Home = () => {

  return (
    <>
      <div className='background-container'>
        <div className='gradient-container'>
          <div className='text-container'>
            <motion.h1 className='h2' variants={fadeIn('down', 0.2)} initial='hidden' animate='show' exit='hidden'>
              I am Kunal Kishor <br />
              <span className='text-accent'> <Writter /> </span>
            </motion.h1>
            <motion.p variants={fadeIn('down', 0.3)} initial='hidden' animate='show' exit='hidden' className='max-width-paragraph'>
            I am purusing a Bachelor's degree in Information Science and Engineering.
            Passionate about turning ideas into seamless digital experiences. Let's innovate together!
            </motion.p>

            {/* Project Button */}
            <motion.div variants={fadeIn('down', 0.2)} initial='hidden' animate='show' exit='hidden' className='hidden-for-mobile'>
              <ProjectBtn />
            </motion.div>
          </div>
        </div>

        {/* Particles Container */}
        <div className='particles-container'>
          <ParticlesContainer particleColor='#f4f725' linkColor='#47e02f' number="500" />
        </div>

        <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }} 
            className='btn'
          >
            <AiOutlineDownload />
            &nbsp;Resume
          </Button>
      </div>

    </>
  );
}

export default Home;
