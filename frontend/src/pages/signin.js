import React,{useState} from 'react'

const Signin = () => {
  const [formData,setformData] = useState({
    email:'',
    password:''
  })

  function handleSubmit(){
    console.log("Logined Sucessfully")
    console.log(formData)
  }
  const handleChange=(e)=>{
    setformData({ ...formData, [e.target.name]: e.target.value });
  }
  return (
    
    <div className="flex justify-center items-center h-screen mx-3 ">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-12 pt-6 pb-6 mb-4">
        <div className="mb-4 font-bold text-black-700 text-2xl text-center"> SignUp Page </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="********"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center justify-between">
        <button
            className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
        >
            Sign In
        </button>
        </div>
      </form>
    </div>
  )
}

export default Signin