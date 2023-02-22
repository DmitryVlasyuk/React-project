import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import { SearchComponent } from '../Functions/RIMFunction';

export const AsideComponent = () => {
    return (
        <aside>
            <Box className ="aside" sx={{ bgcolor: 'primary.main', padding: 5, mr: 3, ml: 3 }}>
            <TabComponent article="Article1" text="Text 1" />
            <TabComponent article="Article2" text="Text 2" />
            <SearchComponent />
            </Box>
        </aside>
    )
}

const TabComponent = ({ article, text }) => {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>{article}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {text}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}



            // {/* <div className="dropdown">
            //     <button className="dropdown__dropbtn">Dropdown1</button>
            //     <select name="language" size="5" className="dropdown__content">
            //         <option value="JS" selected="selected">JavaScript</option>
            //         <option value="Java">Java</option>
            //         <option value="CS">C#</option>
            //         <option value="CPP">C++</option>
            //     </select>
            // </div>
            // <div className="dropdown">
            //     <button className="dropdown__dropbtn">Dropdown2</button>
            //     <form name="myForm" className="dropdown__content">
            //         <select name="language" size="5">
            //             <option value="JS" selected="selected">JavaScript</option>
            //             <option value="Java">Java</option>
            //             <option value="CS">C#</option>
            //             <option value="CPP">C++</option>
            //         </select>
            //     </form>
            // </div> */}