import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddCoffee = e => {
        e.preventDefault();

        const name = e.target.name.value;
        const chef = e.target.chef.value;
        const supplier = e.target.supplier.value;
        const taste = e.target.taste.value;
        const category = e.target.category.value;
        const details = e.target.details.value;
        const photo = e.target.photo.value;

        const newCoffee = { name, chef, supplier, taste, category, details, photo }
        // console.log(newCoffee);

        // using axios

        axios.post('https://coffee-server-xi-nine.vercel.app/coffee', newCoffee)
        .then(data =>{
          console.log(data.data);
        })

        // send data to the server and database
        // fetch('https://coffee-server-xi-nine.vercel.app/coffee', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(newCoffee)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.insertedId) {
        //             console.log('successfully added');
        //             Swal.fire({
        //                 title: 'Success!',
        //                 text: 'Coffee added successfully',
        //                 icon: 'success',
        //                 confirmButtonText: 'Ok'
        //             });
        //             e.target.reset();
        //         }
        //     })

    }

    return (
        <div className='lg:w-3/4 mx-auto'>
        <div className="text-center p-10">
          <h1 className="text-4xl font-semibold" style={{ fontFamily: 'cursive' }}>Add New Coffee</h1>
          <p className="py-6 text-gray-600">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <div className="card bg-[#f3f3f3] w-full shadow-xl p-10 rounded-lg">
          <form onSubmit={handleAddCoffee} className="card-body">
            {/* Form first row */}
            <div className='w-full flex flex-col lg:flex-row gap-5'>
              <div className="w-full gap-15 form-control justify-between flex">
                <label className="label">
                  <span className="label-text font-semibold">Name</span>
                </label>
                <input type="text" name='name' placeholder="Enter coffee name" className="input w-full input-bordered" required />
              </div>
              <div className="w-full gap-15 form-control justify-between flex">
                <label className="label">
                  <span className="label-text font-semibold">Chef</span>
                </label>
                <input type="text" name='chef' placeholder="Enter coffee chef" className="w-full input input-bordered" required />
              </div>
            </div>
            {/* Form second row */}
            <div className='w-full flex flex-col lg:flex-row gap-5'>
              <div className="w-full gap-15 form-control justify-between flex">
                <label className="label">
                  <span className="label-text font-semibold">Supplier</span>
                </label>
                <input type="text" name='supplier' placeholder="Enter coffee supplier" className="input w-full input-bordered" required />
              </div>
              <div className="w-full gap-15 form-control justify-between flex">
                <label className="label">
                  <span className="label-text font-semibold">Taste</span>
                </label>
                <input type="text" name='taste' placeholder="Enter coffee taste" className="input w-full input-bordered" required />
              </div>
            </div>
            {/* Form third row */}
            <div className='w-full flex flex-col lg:flex-row gap-5'>
              <div className="w-full gap-15 form-control justify-between flex">
                <label className="label">
                  <span className="label-text font-semibold">Category</span>
                </label>
                <input type="text" name='category' placeholder="Enter coffee category" className="input w-full input-bordered" required />
              </div>
              <div className="w-full gap-15 form-control justify-between flex">
                <label className="label">
                  <span className="label-text font-semibold">Details</span>
                </label>
                <input type="text" name='details' placeholder="Enter coffee details" className="input w-full input-bordered" required />
              </div>
            </div>
            {/* Photo URL row */}
            <div className='w-full flex flex-col lg:flex-row gap-5'>
              <div className="w-full gap-15 form-control justify-between flex">
                <label className="label">
                  <span className="label-text font-semibold">Photo</span>
                </label>
                <input type="text" name='photo' placeholder="Enter photo URL" className="input w-full input-bordered" required />
              </div>
            </div>
            {/* Submit button */}
            <div className="form-control mt-6">
              <button className="btn bg-[#c49a6c] text-white w-full">Add Coffee</button>
            </div>
          </form>
        </div>
      </div>
    
    );
  };
  
  export default AddCoffee;
  