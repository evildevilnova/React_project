import React from 'react';
import Common from './Common';
import web from '../src/svg/html_css.svg'; 

const About = () => {
  return (
    <>
      <div style={{height: "83vh"}}>
        <Common h1='This is About of' web={web} button="Connect" />   
      </div>
    </>
  );
}

export default About;
