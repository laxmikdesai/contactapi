import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../Component/NewLogin'
import ContactApiLayout from '../pages/ContactApiLayout'
import AddContact from '../Component/AddContact'

const ContactApiRoutes = () => {
  return (
<Routes>
    <Route path="/" element={<LoginPage/>} />     

<Route path="/dashboard" element={<ContactApiLayout/>} >
<Route path="addContact" element={<AddContact/>} />
</Route>

</Routes>
  )
}

export default ContactApiRoutes

