import React, { CSSProperties } from 'react'
import { Routes, Route, Outlet, Link } from 'react-router-dom'

import SideBar from 'src/components/SideBar'
import Feed from 'src/pages/Feed'
import Profile from 'src/pages/Profile'
import Direct from 'src/pages/Direct'
import Reels from 'src/pages/Reels'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Feed />} />
        <Route path="/*" element={<Profile />} />
        <Route path="/direct/inbox" element={<Direct />} />
        <Route path="/reels" element={<Reels />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  )
}

function Layout() {
  return (
    <div style={LayoutStyle}>
      <SideBar />
      <Outlet />
    </div>
  )
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  )
}

const LayoutStyle: CSSProperties = {
  minHeight: '100vh',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: '56px',
}
