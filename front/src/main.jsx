import React from 'react'
import ReactDOM from 'react-dom/client'
import {Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements} from 'react-router-dom'
import App from './App.jsx'
import HomeScreen from './screens/Home.jsx'

const router = createBrowserRouter (
    createRoutesFromElements(
        <Route path='/' element={<App/>}>
            <Route index={true} path='/' element={<HomeScreen/>}/>
        </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
