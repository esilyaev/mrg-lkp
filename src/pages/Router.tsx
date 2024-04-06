import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { WelcomePage } from './WelcomePage'
import { ContractsPage } from './ContractsPage'
import { ManagePage } from './ManagePage'
import { NotFoundPage } from './NotFoundPage'
import { MainLayout } from './MainLayout'

export const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={'Loading...'}>
        <Routes>
          <Route path="" element={<MainLayout />}>
            <Route path="" element={<WelcomePage />} />
            <Route path="/contracts" element={<ContractsPage />} />
            <Route path="/manage" element={<ManagePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
