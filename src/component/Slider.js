import React from 'react';
// import Image from '../images/slider.jpg';
import './SliderScreen.css';
import Button from './Button';

const SliderScreen = () => {
  return (
    <>
        <div className="slider-content">
            <div className='slider-center'>
            <h1>Let us find your <br/> <span> Forever Food.</span> </h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br/> Nesciunt illo tenetur fuga ducimus numquam ea!</p>
            <Button borderRadius={"5px"} fontColor={"#FFFFFF"} backgroundColor={"#FF0000"} padding={"0.8rem 2.5rem"}>Search Now</Button>
            <Button borderRadius={"5px"} fontColor={"#FF0000"} backgroundColor={"#000000"} padding={"0.8rem 3.2rem"}>Know more</Button>
            </div>
        
        </div>
    </>
  )
}

export default SliderScreen

// import React from 'react'
// // import './SliderScreen.css';
// const Slider = () => {
//   return (
//     <>
//                <p>Hello</p>
    
//     </>
//   )
// }

// export default Slider
