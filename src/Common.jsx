import React from 'react';
import { NavLink } from 'react-router-dom';

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center" >
        <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                      <div className="row">
                        <div className="col-md-6 pt-5 order-2 order-lg-1  d-flex justify-content-center flex-column ">
                            <h1>{props.h1} <strong className="brand-name"> Nishant Enterprices</strong></h1>
                            <h4 className="text-muted">We are the team of talented Developer.</h4>
                            <div className="mt-3">
                              <NavLink to="" className="btn btn-outline-primary">{props.button}</NavLink>
                            </div>
                        </div>
                        <div className="col-lg-6 py-5 my-5 order-1 order-lg-2 header-img">
                            <img src={props.web} width="95%" height="95%"/>
                        </div>
                      </div>
                    </div>
                </div>
            </div> 
      </section>
    </>
  );
}

export default Common;