import React from 'react'
import { Outlet } from 'react-router-dom'

const Content = () => {
  return (
    <section className="Content p-8">
      <Outlet />
    </section>
  )
}

export default Content