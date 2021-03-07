import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../src/svg/rocket.svg';

const Home = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center" style={{height: "85vh"}} >
        <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                      <div className="row">
                        <div className="col-md-6 pt-5 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h1>Grow your business with <strong className="brand-name"> Nishant Enterprises</strong></h1>
                            <h4 className=" text-muted">We are the team of talented Developer.</h4>
                            <div className="my-3">
                              <NavLink to="/service" className="btn btn-outline-primary">Get Start</NavLink>
                            </div>
                        </div>
                        <div className="col-lg-6 py-5 order-1 order-lg-2 header-img">
                            <img src={web} width="95%" height="95%" className="animate"/>
                        </div>
                      </div>
                    </div>
                </div>
            </div> 
      </section>
    </>
  );
}

export default Home;
