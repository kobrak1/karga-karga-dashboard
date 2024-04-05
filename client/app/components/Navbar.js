import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between bg-gray-200 py-6 px-6'>
            <div className='flex items-center justify-center font-italic'>kargakarga</div>
            <div>
                <button onClick={() => handleLogout()} >logout</button>
            </div>
        </nav>
    )
}

export default Navbar