import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import 'bulma/css/bulma.min.css'

import './index.css'
// HERE GOES APP COMPONENTS
import Home from './pages/HomePage'
import Video from './pages/VideoPage.jsx'
import Login from './pages/forms/Login'
import Error404 from './pages/Error404'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
	   <BrowserRouter>
	    <Routes>
	    	<Route exact path='/' element={<Home />} />
	    	<Route exact path='/login' element={<Login />} />
	    	<Route path ="/watch/:video_id" element={<Video />} />
	    	<Route path='*' element={<Error404 />} />
	    </Routes>
	  </BrowserRouter>
  </React.StrictMode>,
)
