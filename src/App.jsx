import React from 'react'
import ResponsiveAppBar from './pages/ResponsiveAppBar'
import Hero from './pages/Hero'
import MyServices from './pages/MyServices'
import HappyClient from './pages/HappyClient'
import MyResume from './pages/MyResume'
import Awesome from './pages/Awesome'
import VerticalLinearStepper from './pages/Stepper'
import RecentPosts from './pages/RecentPosts'
import ContectWith from './pages/ContectWith'
import Footer from './pages/Footer'
import { Timeline } from '@mui/icons-material'
import Ltimeline from './pages/Ltimeline'
import Rest from './pages/Rest'
import Contact from './pages/Contact'
import Nav from './pages/Nav'



const App = () => {
  return <>
    {/* <VerticalLinearStepper /> */}
    <ResponsiveAppBar />
    <Hero />
    <MyServices />
    <HappyClient />
    <Ltimeline />
    <MyResume />
    <Awesome />
    <RecentPosts />
    <ContectWith />
    <Footer />

    {/* this tow is not imapotant */}
    {/* <Rest />
    <Nav /> */}
    {/* <Contact /> */}
  </>
}

export default App