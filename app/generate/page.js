// ...existing code...
import React from 'react'

const Generate = () => {
  return (
    <div className='min-h-screen grid grid-cols-2'>
      <div className="col1 w-full max-w-md mx-auto flex flex-col items-center justify-center px-4 gap-4">
        <h1 className='text-5xl'>ADD YOUR LINKS HERE</h1>
        <div className="w-full max-w-sm mx-auto flex flex-col items-center gap-4">
          <label htmlFor="handle" className="text-lg font-medium text-center w-full">Step 1: Claim your handle</label>
          <input
            id="handle"
            type="text"
            placeholder="Claim your handle name"
            className="w-full rounded-md border border-gray-300 bg-white text-black px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
          />

          <label htmlFor="linkText" className="text-lg font-medium text-center w-full">Step 2: Add Links</label>
          <input
            id="linkText"
            type="text"
            placeholder="Link text (e.g. My Blog)"
            className="w-full rounded-md border border-gray-300 bg-white text-black px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
          />

          <input
            id="linkUrl"
            type="text"
            placeholder="Link URL (e.g. https://...)"
            className="w-full rounded-md border border-gray-300 bg-white text-black px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
          />

          <label htmlFor="photo" className="text-lg font-medium text-center w-full">Step 3: Add Picture and Finalize</label>
          <input
            id="photo"
            type="text"
            placeholder="Image URL or upload"
            className="w-full rounded-md border border-gray-300 bg-white text-black px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>
      </div>
      <div className="col2 flex items-center justify-center bg-amber-200 h-full">

      </div>
    </div>
  )
}

export default Generate