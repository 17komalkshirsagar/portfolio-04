import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Chip, Typography } from '@mui/material';

const Ltimeline = () => {
    return (
        // <div style={{}}>
        //     <Timeline position="left">
        //         <TimelineItem>
        //             <TimelineSeparator>
        //                 <TimelineDot />
        //                 <TimelineConnector />
        //             </TimelineSeparator>
        //             <TimelineContent>
        //                 <Typography variant="h6">UI/UX Designer</Typography>
        //                 <Typography variant="body1">Google INC | New York</Typography>
        //                 <Chip sx={{ marginTop: 1, backgroundColor: "#616acd", color: "white" }} label="2013-2014" variant="outlined" />
        //                 <Typography sx={{ marginTop: 1 }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, <br></br>incididunt ut labore fkjerekj et dolore<br></br> Loremipsum , consectetur adipisicing elit.</Typography>
        //             </TimelineContent>
        //         </TimelineItem>
        //         <TimelineItem>
        //             <TimelineSeparator>
        //                 <TimelineDot />
        //                 <TimelineConnector />
        //             </TimelineSeparator>
        //             <TimelineContent>Code</TimelineContent>
        //         </TimelineItem>
        //         <TimelineItem>
        //             <TimelineSeparator>
        //                 <TimelineDot />
        //                 <TimelineConnector />
        //             </TimelineSeparator>
        //             <TimelineContent>Sleep</TimelineContent>
        //         </TimelineItem>
        //         <TimelineItem>
        //             <TimelineSeparator>
        //                 <TimelineDot />
        //             </TimelineSeparator>
        //             <TimelineContent>Repeat</TimelineContent>
        //         </TimelineItem>
        //     </Timeline>
        // </div >
        <Timeline position="alternate-reverse">
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant="h6">UI/UX Designer</Typography>
                    <Typography variant="body1">Google INC | New York</Typography>
                    <Chip sx={{ marginTop: 2, backgroundColor: "#616acd", color: "white" }} label="2013-2014" variant="outlined" />
                    <Typography sx={{ marginTop: 2 }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, <br></br>incididunt ut labore fkjerekj et dolore<br></br> Loremipsum , consectetur adipisicing elit.</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant="h6">Specialization Course</Typography>
                    <Typography variant="body1">Stanford University | New York</Typography>
                    <Chip sx={{ marginTop: 2, backgroundColor: "#616acd", color: "white" }} label="2017-2018" variant="outlined" />
                    <Typography sx={{ marginTop: 2 }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, <br></br>incididunt ut labore fkjerekj et dolore<br></br> Loremipsum , consectetur adipisicing elit.</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant="h6">Web Designe</Typography>
                    <Typography variant="body1">Facebook New York</Typography>
                    <Chip sx={{ marginTop: 2, backgroundColor: "#616acd", color: "white" }} label="2017-2018" variant="outlined" />
                    <Typography sx={{ marginTop: 2 }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, <br></br>incididunt ut labore fkjerekj et dolore<br></br> Loremipsum , consectetur adipisicing elit.</Typography>
                </TimelineContent>
            </TimelineItem>

            <Timeline >
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector style={{ marginTop: '10px' }} />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h6">Web Designe</Typography>
                        <Typography variant="body1">Facebook New York</Typography>
                        <Chip sx={{ marginTop: 2, backgroundColor: "#616acd", color: "white" }} label="2017-2018" variant="outlined" />
                        <Typography sx={{ marginTop: 2 }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, <br />incididunt ut labore fkjerekj et dolore<br /> Loremipsum , consectetur adipisicing elit.</Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </Timeline>
    )
}

export default Ltimeline;
