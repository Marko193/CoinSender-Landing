import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Header} from "@/components/Header/header";
import Footer from "@/components/Footer";
import styles from './faq.module.scss';

export default function FAQ() {
    return (
        <>
            <Header/>
            <div className={styles.main_wrapper}>
                <div className={styles.title_description_block}>
                    <div className={styles.title}>Frequently Asked Questions</div>
                    <div className={styles.description}>We've put together a list of frequently asked questions to help
                        address any concerns you may have about using CoinSender. If you have any additional questions,
                        please don't hesitate to reach out to our customer support team for assistance.
                    </div>
                </div>
                <div className={styles.accordions_layout}>
                    <div className={styles.accordion_column}>
                        <Accordion className={styles.accordion_main_content}>
                            <AccordionSummary
                                expandIcon={
                                    <ExpandMoreIcon className={styles.expand_more_icon}/>
                                }
                                className={styles.accordion_name_block}
                            >
                                <div className={styles.name_block_title}>What cryptocurrencies does <br/> CoinSender
                                    support?
                                </div>
                            </AccordionSummary>
                            <AccordionDetails classes={{root: styles.accordion_details_root}}>
                                <div className={styles.details_content}>
                                    CoinSender supports a wide range of popular cryptocurrencies, including Bitcoin,
                                    Ethereum, and many others. Check out the platform for the full list of supported
                                    cryptocurrencies.
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <div className={styles.accordion_column}>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls="panel1a-content"
                                className={styles.accordion_name_block}
                            >
                                <Typography>Accordion 1</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}