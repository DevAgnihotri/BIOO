"use client"

import React from 'react'

const Generate = () => {
  return (
    <div className='min-h-screen grid grid-cols-2'>
      <div className="col1 w-full max-w-md mx-auto flex flex-col items-center justify-center px-4 gap-4">
        <h1 className='text-5xl'>ADD YOUR LINKS HERE</h1>
        <form onSubmit={(e) => e.preventDefault()} className="w-full max-w-sm mx-auto flex flex-col items-center gap-4">
          <label htmlFor="handle" className="text-lg font-medium text-center w-full">Step 1: Claim your handle</label>
          <input
            id="handle"
            name="handle"
            type="text"
            placeholder="Claim your handle name"
            className="w-full rounded-md border border-gray-300 bg-white text-black px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
          />

          <label htmlFor="linkText" className="text-lg font-medium text-center w-full">Step 2: Add Links</label>
          <input
            id="linkText"
            name="linkText"
            type="text"
            placeholder="Link text (e.g. My Blog)"
            className="w-full rounded-md border border-gray-300 bg-white text-black px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
          />

          <input
            id="linkUrl"
            name="linkUrl"
            type="text"
            placeholder="Link URL (e.g. https://...)"
            className="w-full rounded-md border border-gray-300 bg-white text-black px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
          />

          <label htmlFor="photo" className="text-lg font-medium text-center w-full">Step 3: Add Picture and Finalize</label>
          <input
            id="photo"
            name="photo"
            type="text"
            placeholder="Image URL or upload"
            className="w-full rounded-md border border-gray-300 bg-white text-black px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
          />

          <button
            type="submit"
            className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold px-4 py-2 rounded-md mt-2"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="col2 flex items-center justify-center bg-amber-200 h-full">

      </div>
    </div>
  )
}

export default Generate