
// HomePage.jsx

import React from 'react'
import Navbar from './Navbar'
import ScrollingLogos from './ScrollingLogos'
import Background_Video from './Background_Video'
import Vision from './Vision'
import Sellout from './Sellout'

function HomePage() {
    return (
        <>
            <Navbar />
            <Background_Video/>
            <ScrollingLogos /> 
            
            <Vision />

            <Sellout />
        </>
    )
}

export default HomePage




