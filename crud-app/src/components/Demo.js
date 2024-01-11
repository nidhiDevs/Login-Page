import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Demo = () => {
  const [user, setUser] = useState([]);
  // console.log('hiii');
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        // console.log(res)
        setUser(res.data);
      })
  }, []);

  const data = { fname: '', lname: '' }
  const [inputData, setInputData] = useState(data);

  const handleData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value })
  }
  const history = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://jsonplaceholder.typicode.com/users', inputData)
      .then((res) => {
        // console.log(res);
        history('/read')
      })
  }
  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`https://jsonplaceholder.typicode.com/users/1`, inputData)
      .then((res) => {
        console.log(res);
        history('/demo')
      })
  }
  
  return (
    <div>
      <div>
        <form>
          <div className="my-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" >
              Name:
            </label>
            <input name='fname' value={inputData.fname} onChange={handleData} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your Name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Age:
            </label>
            <input name='lname' value={inputData.lname} onChange={handleData} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Age" />
          </div>
          <button type='submit' onClick={handleSubmit}>Submit</button>
          <button type='submit' className='mx-10' onClick={handleUpdate}>update</button>
        </form>
      </div>     
    </div>
  )
}

export default Demo