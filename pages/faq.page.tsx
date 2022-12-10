import { Accordion, AccordionSummary, Typography, AccordionDetails, Container } from '@mui/material'
import { ExpandMore } from '@mui/icons-material';
import React from 'react'
import { faqsData } from 'dh-marvel/components/faqs/faqsData';

const Faq = () => {
  return (
    <>
      <Container>
        {faqsData.map(faq => (
          <Accordion key={faq.id}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls={`panel${faq.id}a-content`}
              id={`panel${faq.id}a-header`}
            >
              <Typography>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </>
  )
}

export default Faq