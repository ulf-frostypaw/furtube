import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import 'bulma/css/bulma.min.css'
//import NextProgress from "next-progress"; <NextProgress delay={300} options={{ showSpinner: false }} />

import './index.css'
// HERE GOES APP COMPONENTS
import Home from './pages/HomePage'
import Trending from './pages/TrendingPage'
import Latest from './pages/LatestPage'
import Plus from './pages/Plus'
import Video from './pages/VideoPage.jsx'
import Login from './pages/forms/Login'
import Register from './pages/forms/Register'
import Error404 from './pages/Error404'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
	   <BrowserRouter>
	    <Routes>
	    	<Route exact path='/' element={<Home />} />
	    	<Route exact path='/trending' element={<Trending />} />
	    	<Route exact path='/latest' element={<Latest />} />
	    	<Route exact path='/plus' element={<Plus />} />
	    	<Route exact path='/login' element={<Login />} />
	    	<Route exact path='/register' element={<Register />} />
	    	<Route path ="/video/:video_id" element={<Video />} /> {/* DISCRIMAR SOLO PARA: A-Z a-z 0-9 -_*/}
	    	<Route path='*' element={<Error404 />} />
	    </Routes>
	  </BrowserRouter>
  </React.StrictMode>,
)
