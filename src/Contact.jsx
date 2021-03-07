import React,{ useState} from 'react';

const Contact = () => {
  const [state, setstate] = useState({
    fname: '',
    email: '',
    phone: '',
    msg: '',
  });


  const input1 = (event) => {
    const {name, value} = event.target; 

      setstate((preVal) => {
        return {
          ...preVal,
          [name]: value,
        };
      });
  };

  const btnclick = () => {
    alert('Form Submit is successful.')
  };

  return (
    <>
    <div style={{height: "83vh"}}>
      <div className="my-3">
        <h3 className="text-center">Contact Us</h3>
      </div>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">          
            <form>
              <div className="mb-3">
                <label for="fname" className="form-label">Full Name</label>
                <input type="text" className="form-control grow shadow" id="fname" name="fname" value={state.fname} onChange={input1} placeholder="Full Name" />
              </div>
              <div className="mb-3">
                <label for="email" className="form-label">Email address</label>
                <input type="email" className="form-control grow shadow" id="email" name="email" value={state.email} onChange={input1} placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label for="phone" className="form-label">Phone</label>
                <input type="number" className="form-control grow shadow" id="phone" name="phone" value={state.phone} onChange={input1} placeholder="Mobile No." />
              </div>
              <div className="mb-3">
                <label for="msg" className="form-label">Message</label>
                <textarea className="form-control grow shadow" id="msg" name="msg" value={state.msg} onChange={input1} rows="3"></textarea>
              </div>
              <button type="submit" class="btn btn-primary shadow grow" onClick={btnclick} >Submit</button>

            </form>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Contact;

