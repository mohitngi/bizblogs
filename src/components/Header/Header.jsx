import React, { useState } from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]

  return (
    <header className='shadow bg-gray-500 h-20 flex items-center justify-center px-4 md:px-20'>
      <Container className='flex items-center justify-between w-full'>
        <nav className='flex items-center justify-between w-full'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo />
            </Link>   
          </div>
          
          {/* Mobile menu button */}
          <button 
            className='md:hidden sm:block text-white cursor-pointer' 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <ul className='hidden md:flex space-x-4'>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <button onClick={() => navigate(item.slug)}
                  className='inline-bock px-6 py-2 duration-200 hover:bg-slate-400 rounded-full cursor-pointer'>
                {item.name}
                </button>
              </li>
            ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <ul className='absolute top-20 left-0 right-0 bg-gray-500 p-4 md:hidden sm:block flex flex-col items-center'>
              {navItems.map((item) => 
              item.active ? (
                <li key={item.name} className='py-2 w-full flex justify-center'>
                  <button onClick={() => {
                    navigate(item.slug)
                    setIsMenuOpen(false)
                  }}
                    className='px-6 py-2 duration-200 hover:bg-slate-400 rounded-full cursor-pointer'>
                  {item.name}
                  </button>
                </li>
              ) : null
              )}
              {authStatus && (
                <li className='py-2 w-full flex justify-center'>
                  <LogoutBtn />
                </li>
              )}
            </ul>
          )}
        </nav>
      </Container>
    </header>
  )
}

export default Header