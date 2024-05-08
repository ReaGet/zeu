import React from 'react'
import { UserNav } from './user-nav'

const Header = () => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        header
        <div className="ml-auto">
          <UserNav />
        </div>
      </div>
    </div>
  )
}

export default Header