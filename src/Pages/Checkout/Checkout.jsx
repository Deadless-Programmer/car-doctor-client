import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Checkout = () => {
  const service = useLoaderData();
  const { title, price , _id, img} = service;
  const {user}=useContext(AuthContext);
  const handleBookService =(event)=>{
            event.preventDefault();
            const form = event.target;
            const name = form.name.value;
            const email = user?.email;
            const date = form.date.value;
            const booking = {
                customerName : name,
                email,
                img,
                date,
                service: title,
                service_id:_id,
                price:price
            }
            console.log(name, email,booking, date);

            fetch('http://localhost:5000/bookings', {
                method : 'POST',
                headers :{
                        'content-type': 'application/json'
                },
                body : JSON.stringify(booking)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.insertedId){
                    alert('Your booking successfully add')
                }
            })
  }
  return (
    <div>
      <h2 className="text-center text-3xl font-semibold">Book service : {title} </h2>

      <form onSubmit={handleBookService}>
      <div className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name ="name"
                defaultValue={user?.displayName}
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                name ="date"
                className="input input-bordered"
              />
            </div>
          </div>
          <div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                defaultValue={user?.email}
                placeholder="email"
                name ="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Due amout</span>
              </label>
              <input
                type="text"
                name='amount'
                defaultValue={'$'+ price}
                className="input input-bordered"
              />
            </div>
          </div>
        </div>
        <div className="btn bg-amber-600 hover:bg-green-500 border-0 ">
          <input type="submit" value="Order Confirm" />
        </div>
      </div>
      </form>
    </div>
  );
};

export default Checkout;
