import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-center space-x-8">
        <Link href={'/'} className="text-white text-lg font-semibold hover:text-yellow-400 transition-all duration-200">Top</Link>
        <Link href={'/animewinter'} className="text-white text-lg font-semibold hover:text-yellow-400 transition-all duration-200">Winter</Link>
        <Link href={'/animesummer'} className="text-white text-lg font-semibold hover:text-yellow-400 transition-all duration-200">Summer</Link>
        <Link href={'/animefall'} className="text-white text-lg font-semibold hover:text-yellow-400 transition-all duration-200">Fall</Link>
        <Link href={'/animespring'} className="text-white text-lg font-semibold hover:text-yellow-400 transition-all duration-200">Spring</Link>
      </div>
    </nav>
  )
}

export default Header
