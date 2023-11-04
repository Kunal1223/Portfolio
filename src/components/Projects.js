import React from 'react'
import ProjectCart from '../SubComponents/ProjectCart';
import '../Styles/Project.css'
import ParticlesContainer from '../SubComponents/Particles';

const Projects = () => {
  return (
    <> 
      <div className="mega-box">
        <div className="cont">
          <div className="text">
            <h1>My Recent Work</h1>
            <h5>Here are a few past design projects I've worked on.</h5>
          </div>
          <div className="rotating-boll">
            <img src="./images/random.png" alt="" className='rotate' />
          </div>
        </div>

        <div className="project-container">
          <div className="project-cart">
            <ProjectCart description="AISolutionCraft is a versatile platform designed to simplify various tasks. Whether you're in the kitchen seeking culinary inspiration or facing legal questions, this innovative tool streamlines the process. For cooking enthusiasts, just input the ingredients, and let AISolutionCraft generate a detailed recipe. If legal matters are on your mind, describe your issue, and receive comprehensive legal solutions. Say goodbye to lengthy inputs—AISolutionCraft transforms simplicity into efficiency." img="./images/proj.png" tittle="AISolutionCraft" link="https://github.com/Kunal1223/Generative_ai" />
          </div>

          <div className="project-cart">
            <ProjectCart description="Empower your financial journey with the Expense Tracker, a MERN stack application meticulously crafted to manage your expenses seamlessly. Track your earnings and expenditures effortlessly, with real-time updates reflected in an intuitive graph. Experience the power of organized finance as you effortlessly add income and deduct expenses, all neatly stored and visualized through this comprehensive Expense Tracker. Take control of your money effortlessly, making informed decisions for a secure financial future." img="./images/proj1.png" tittle="Expense Tracker" link="https://github.com/Kunal1223/Mern-Tracker" />
          </div>

          <div className="project-cart">
            <ProjectCart description="Dive into a captivating online shopping experience with our E-commerce Website, meticulously developed using the powerful MERN stack. Each product comes to life with its dedicated page, showcasing comprehensive details. Stay ahead of trends with a curated selection of trending items, seamlessly adding them to your cart. The integrated checkout and tracking system ensure a smooth and secure shopping journey, making your e-commerce exploration both interactive and efficient." img="./images/proj3.png" tittle="E-commerce Website" link="https://github.com/Kunal1223/Project_ecom" />
          </div>
        </div>

        <div className="project-container1">
          <div className="project-cart">
            <ProjectCart description="Indulge in a culinary adventure with our Restaurant Website, powered by the dynamic MERN stack. Explore a diverse menu featuring an array of delectable dishes. Customize your dining experience by selecting items, adjusting quantities, and seamlessly adding them to your cart. The integrated cart system provides a snapshot of your culinary choices, while the MERN stack ensures a robust tracking feature for a delightful and efficient dining experience." img="./images/proj2.png" tittle="Restaurant Website" link="https://github.com/Kunal1223/Mern_Resturent" />
          </div>

          <div className="project-cart">
            <ProjectCart description="Elevate your productivity with our To-Do List, built using the versatility of React.js. This intuitive application allows you to create and manage tasks effortlessly. Embrace seamless data persistence as your to-do items are stored in the browser's localStorage, ensuring a consistent experience across sessions. Stay organized and focused with a user-friendly interface that dynamically fetches and displays your tasks, providing a streamlined and personalized task management solution." img="./images/proj4.png" tittle="To-Do List with React.js" link="https://github.com/Kunal1223/To-Do" />
          </div>

          <div className="project-cart">
            <ProjectCart description="Stay ahead of the weather curve with our Weather Forecasting Tracker, seamlessly integrated with real-time data through APIs. Effortlessly track and visualize current weather conditions and forecasts for any location. This dynamic tool provides up-to-the-minute information, ensuring you are well-prepared for any weather event. Experience the power of accurate weather tracking, enhancing your planning and decision-making process.Empower your daily routines." img="./images/proj6.png" tittle="Weather Forecasting" link="https://github.com/Kunal1223/Project_product_weather" />
          </div>
        </div>

        <ParticlesContainer particleColor='#2581F7' linkColor='#BC0DE8' number="1000" />
      </div>

    </>
  );
}

export default Projects