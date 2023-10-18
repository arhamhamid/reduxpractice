import React from 'react'
import { useSelector } from 'react-redux'
export const Home = () => {
  const username = useSelector((state)=>state.user.value.username)

  return (
    <div>
      home {username}
    </div>
  )
}

