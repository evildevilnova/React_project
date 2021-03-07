import React from 'react';

const Cards = (props) => {
  return (
    <>
        <div className="col-md-4 col-10  mx-auto">
            <div className="card shadow grow" style={{width: "18rem"}}>
            <img className="card-img-top" height="150pt" src={props.web} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make.</p>
                <a href="#" className="btn btn-primary">Visit</a>
            </div>
            </div>
        </div>
    </>
  );
}

export default Cards;
