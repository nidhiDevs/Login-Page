import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Create = () => {
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [city, setCity] = useState();
    const history = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(
            'https://64b635d1df0839c97e152290.mockapi.io/users',
            {name:name, age:age, city:city}
            )
            .then(()=>{history('/read')})           
        // console.log('clicked');
    }
    return (
        <div className='flex justify-center p-2 items-center h-screen bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-yellow-500 via-purple-500 to-blue-500 '>
            <form className="bg-white text-start w-96 shadow-md shadow-gray-700 rounded px-8 pt-6 pb-8 mb-4 ">
               <div className='flex justify-between'><h1 className='font-semibold  text-2xl'>Create</h1><Link to={'/read'}> <button className='px-2 py-1 bg-gray-600 mt-2 text-white rounded'>Show</button></Link></div>
                <div className="my-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2"  htmlFor=''>
                        Name:
                    </label>
                    <input onChange={(e) => setName(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your Name" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2"  htmlFor=''>
                        Age:
                    </label>
                    <input onChange={(e) => setAge(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Age" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor=''>
                        City:
                    </label>
                    <input onChange={(e) => setCity(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="City" />
                </div>
               
                <div className='flex mt-6'>
                    <button type='submit' onClick={handleSubmit} className='bg-blue-600 text-white px-2 py-1 rounded w-full'>Submit</button>
                </div>
                
            </form>
        </div>
    )
}

export default Create