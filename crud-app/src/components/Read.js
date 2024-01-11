import axios from 'axios'
import { Link, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react'

const Read = () => {
    const [data, setData] = useState([]);
    const getData = () => {
        axios.get('https://64b635d1df0839c97e152290.mockapi.io/users')
            .then((res) => {
                // console.log(res);
                setData(res.data);
            })

    }
    const handleDelete = (id) => {
        axios.delete(`https://64b635d1df0839c97e152290.mockapi.io/users/${id}`)
            .then(() => getData());

    }
    const setToLocalStorage = (id, name, age, city) => {
        localStorage.setItem("id", id);
        localStorage.setItem("name", name);
        localStorage.setItem("age", age);
        localStorage.setItem("city", city);
    }
    useEffect(() => {
        getData();
    }, [])
    const location = useLocation();
    return (
        <div><div className="xs:mx-6 p-4 md:mx-20 ">
            <div className="">
                <div className="">
                    <div className='flex justify-between border-b-2 p-2 border-blue-500  my-4'>
                        <h1 className='text-2xl '>View All Data{location.state.id} </h1><Link to={'/'}> <button className='mx-4 px-2 py-1 bg-gray-500 text-white rounded'>Create</button></Link>
                    </div>
                    <div className="overflow-x-auto  p-2 ">
                        <table className="min-w-full   text-start text-sm font-light">
                            <thead className="border-b font-medium border-neutral-500">
                                <tr className=''>
                                    <th className=" text-start py-4">#</th>
                                    <th className=" text-start py-4">Name</th>
                                    <th className="text-start py-4">Age</th>
                                    <th className="text-start py-4">City</th>
                                    <th className='text-center py-4' colSpan={2}>Action</th>
                                </tr>
                            </thead>
                            {data.map((eachData) => {
                                return (
                                    <>
                                        <tbody>
                                            <tr className="border-b border-neutral-700 font-medium">
                                                <td className="whitespace-nowrap py-4 ">{eachData.id}</td>
                                                <td className="whitespace-nowrap py-4 ">{eachData.name}</td>
                                                <td className="whitespace-nowrap py-4">{eachData.age}</td>
                                                <td className="whitespace-nowrap py-4">{eachData.city}</td>
                                                <td className='text-center py-4 '>
                                                    <Link to='/update'>
                                                        <button className='bg-green-600 px-4 py-1 rounded text-white' onClick={() => { setToLocalStorage(eachData.id, eachData.name, eachData.age, eachData.city) }}>Edit</button>
                                                    </Link>
                                                <button className='bg-red-600 mx-2 px-4 py-1 rounded text-white' onClick={() => handleDelete(eachData.id)}>Delete</button>

                                                </td>
                                            </tr>
                                        </tbody>
                                    </>
                                )
                            })

                            }
                        </table>
                    </div>
                </div>
            </div>
        </div>
    
        </div>
    )
}

export default Read