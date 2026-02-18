import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLayout from './Admin/layout/AdminLayout'
import Dashboard from './Admin/pages/Dashboard'

const App = () => {
  return (
    <Routes>

       <Route path ="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
       </Route>

    </Routes>
  )
}

export default App