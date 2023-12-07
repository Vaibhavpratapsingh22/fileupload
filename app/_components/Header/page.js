import React from 'react'

const Header = () => {
  return (
  <header className="bg-gray-50">
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between sm:gap-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Welcome,</h1>
  
       
      </div>
  
      <button
          className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
          type="button"
        >
         Login Here
        </button>
    
        </div>
      </div>
  
      

  </header>
  )
}

export default Header;