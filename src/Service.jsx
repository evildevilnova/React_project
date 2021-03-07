import React from 'react';
import Cards from './Cards'
import web from '../src/'
import Sdata from './Sdata';

const Service = () => {
  return (
    <>
     <div className="my-3">
       <h3 className="text-center">Our Services</h3>
     </div>
     <div className="container-fluid nav_bg mb-4">
        <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-5">
                {
                  Sdata.map((val, ind) => {
                    return <Cards key={ind} web={val.img} title={val.title} />
                  })
                }
              </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Service;
