import React from 'react'

export default function Form() {
  return (
    <div className="flex justify-center mt-5">
      <input type="text" className="border border-gray-400 p-2 rounded mr-3" />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Add
      </button>
    </div>
  )
}
