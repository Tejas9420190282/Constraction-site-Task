
// HomePage.jsx

import React from 'react'
import Navbar from './Navbar'
import ScrollingLogos from './ScrollingLogos'
import Background_Video from './Background_Video'
import Vision from './Vision'

import { Timeline } from "../../component/ui/Timeline";



import launchTimelineData from '../../data/launchTimelineData'
import Post_Launch_Line_Data from './Post_Launch_Line_Data'
import { PostTimeLine } from '../ui/PostTimeLine'


function HomePage() {
    return (
        <>
            <Navbar />
            <Background_Video/>
            <ScrollingLogos /> 
            
            <Vision />          

            <Timeline data={launchTimelineData} />

            <PostTimeLine data={Post_Launch_Line_Data} />
        </>
    )
}

export default HomePage




