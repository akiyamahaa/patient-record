import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Record from '../pages/Record'
import RecordResult from '../pages/RecordResult'
import NotFound from '../pages/Error'


const RouterConfig = (props) => {
  return (
    <>
      <Routes
      >
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/record/:userId" element={<Record />} />
        <Route path="/result/:userId" element={<RecordResult />} />
        {/* List a generic 404-Not Found route here */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default RouterConfig