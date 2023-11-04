import React from 'react'

const ProjectCart = ({ description, img, tittle, link }) => {
    return (
        <>
            <div className="container">
                <div className="cart-img">
                    <img src={img} alt="" className='cart-pic'/>
                </div>
                <div className="cart-heading">
                    <h1>{tittle}</h1>
                </div>
                <div className="description">
                    <h3>{description}</h3>
                </div>
                <button className='btn1'><a href="https://github.com/Kunal1223/Generative_ai">Github</a></button>
            </div>
        </>
    ); 
}

export default ProjectCart