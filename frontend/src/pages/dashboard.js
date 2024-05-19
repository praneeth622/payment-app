import React from 'react'
import Balance from '../components/Balance'
import { Users } from '../components/Users'
import Navbar from '../components/Navbar'

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Balance />
      <Users />
    </div>
  )
}

export default Dashboard