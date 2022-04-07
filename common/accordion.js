import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { Add, HorizontalRule } from '@mui/icons-material';
import styleConstants from '../styles/constants.json';

const AccordionComponent = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Accordion
      disableGutters
      square
      expanded={expanded === 'panel1'}
      onChange={handleChange('panel1')}
      className="shadow-none"
    >
      <AccordionSummary
        sx={{
          borderBottom: 1,
          borderColor: styleConstants.primary.blue[200],
          '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
            transform: 'rotate(0deg)',
          },
          '& .MuiAccordionSummary-expandIconWrapper': {
            marginTop: '12px',
            position: 'absolute',
            bottom: '0',
            right: '0',
          },
          '& .MuiAccordionSummary-content': {
            margin: '0',
          },
        }}
        className="font-bold p-0"
        expandIcon={
          expanded ? (
            <HorizontalRule className="text-primary-white bg-primary-blue-200 text-4xl p-2" />
          ) : (
            <Add className="text-primary-white bg-primary-blue-200 text-4xl p-2" />
          )
        }
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <p className="text-primary-black text-2xl w-[95%]">Accordion Title</p>
      </AccordionSummary>
      <AccordionDetails className="border-none">
        <p>
          Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus
          est, id dignissim quam.
        </p>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionComponent;
