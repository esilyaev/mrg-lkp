import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Welcome } from './Welcome'
import { Contracts } from './Contracts'
import { Manage } from './Manage'
import { NotFound } from './NotFound'

export const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={'Loading...'}>
        <Routes>
          <Route path="" element={<Welcome />} />
          <Route path="/contracts" element={<Contracts />} />
          <Route path="/manage" element={<Manage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
