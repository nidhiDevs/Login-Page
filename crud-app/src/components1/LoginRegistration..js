import React, { useEffect, useState } from 'react'

const Update = () => {
	const [active, setActive] = useState('Login');

	return (
		<>
			<div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
				<div className="relative py-3 sm:max-w-xl sm:mx-auto">
					<div
						className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 shadow-lg transform -skew-y-4 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
					</div>
					<div className="relative flex justify-center xs:w-1/2 md:w-full px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
						<div className="max-w-sm mx-auto">
							<div>
								<h1 className="text-2xl font-semibold text-center ">{active}</h1>
							</div>
							<div className="divide-y divide-gray-200">
								<div className="pt-2 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
									{active === "Sign up" ? <div className="relative">
										<input autocomplete="off" id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Name" />
										<label for="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Username</label>
									</div> : <div></div>}

									<div className="relative">
										<input autocomplete="off" id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
										<label for="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
									</div>
									<div className="relative">
										<input autocomplete="off" id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
										<label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
									</div>
									<div>
										{active === "Login" ? <div></div> : <h1 className='text-sm '>All Ready has Account? <span className='text-blue-800 font-semibold cursor-pointer' onClick={() => { setActive("Login")}}>Login</span></h1>}
									</div>
									<div className=" flex justify-between">
										<button className={active === "Sign up" ? " bg-blue-500  text-sm  text-white rounded-lg font-semibold px-4 py-1" : " bg-gray-200 text-gray-900 rounded-md text-sm px-4 py-1"} onClick={() => { setActive("Sign up") }}>Sign Up {active}</button>
										<button className={active === "Login" ? "bg-blue-500 text-sm  text-white rounded-lg font-semibold px-4 py-1" : "bg-gray-200 text-gray-900  rounded-md text-sm px-4 py-1"} onClick={() => { setActive("Login") }}>Login</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default Update