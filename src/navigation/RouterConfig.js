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
      <nav style={{ display: 'flex' }}>
        <ul>
          <Link to='/login'>Login</Link>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/record/123abc'>Record</Link>
          </li>
          <li>
            <Link to='/result/123abc'>Result</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/record/:id" element={<Record />} />
        <Route path="/result/:id" element={<RecordResult />} />
        {/* List a generic 404-Not Found route here */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default RouterConfig