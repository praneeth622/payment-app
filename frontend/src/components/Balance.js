import React from 'react'

export default function Balance({ value =10000 }) {
  return (
    <div className="flex p-5">
        <div className="font-bold text-lg">
            Your balance
        </div>
        <div className="font-semibold ml-4 text-lg">
            Rs {value}
        </div>
    </div>
  )
}
