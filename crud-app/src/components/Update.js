import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Link, useNavigate } from 'react-router-dom';

const Update = () => {
    const [id, setId] = useState();
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [city, setCity] = useState();
    useEffect(() => {
        setId(localStorage.getItem('id'));
        setName(localStorage.getItem('name'));
        setAge(localStorage.getItem('age'));
        setCity(localStorage.getItem('city'));
    }, []);

    const history = useNavigate();

    const handleUpdate = (e) => {
e.preventDefault();
        axios.put(
            `https://64b635d1df0839c97e152290.mockapi.io/users/${id}`,
            {
                name: name,
                age: age,
                city: city
            }
        )
            .then(() => { history('/read') });
    }
    return (
        <>
            <div className='flex justify-center p-2 items-center h-screen bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-yellow-500 via-purple-500 to-blue-500 '>
                <form className="bg-white w-96 text-start shadow-md rounded px-8 pt-6 pb-8 mb-4">
               <div className='flex justify-center '><h1 className='font-semibold text-2xl'>Update Data</h1> </div>
                   
                    <div className="my-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor=''>
                            Name:
                        </label>
                        <input onChange={(e) => setName(e.target.value)} value={name} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor=''>
                            Age:
                        </label>
                        <input onChange={(e) => setAge(e.target.value)} value={age} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Age" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor=''>
                            City:
                        </label>
                        <input onChange={(e) => setCity(e.target.value)} value={city} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="City" />
                    </div>

                    <div className='flex justify-between'>
                        <button type='submit' onClick={handleUpdate} className='bg-blue-600 text-white px-2 py-1 rounded '>Update</button>
                        <div className='flex '><Link to={'/read'}> <button className='px-3 py-1 bg-gray-700 text-white rounded'>Back</button></Link></div>
                    
                    </div>
                    
                </form>
            </div>
        </>
    )
}
export default Update