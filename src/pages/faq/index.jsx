import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Header} from "@/components/Header/header";
import Footer from "@/components/Footer";
import styles from './faq.module.scss';
import {ContactForm} from "@/components/contact/contact";

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
                                <div className={styles.name_block_title}>Customer Database
                                </div>
                            </AccordionSummary>
                            <AccordionDetails classes={{root: styles.accordion_details_root}}>
                                <div className={styles.details_content}>
                                    CoinSender is a platform for distributing tokens and making multi-transaction
                                    payouts in cryptocurrency. It allows you to send cryptocurrency payments quickly and
                                    securely.
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className={styles.accordion_main_content}>
                            <AccordionSummary
                                expandIcon={
                                    <ExpandMoreIcon className={styles.expand_more_icon}/>
                                }
                                className={styles.accordion_name_block}
                            >
                                <div className={styles.name_block_title}>Is my transaction secure?
                                </div>
                            </AccordionSummary>
                            <AccordionDetails classes={{root: styles.accordion_details_root}}>
                                <div className={styles.details_content}>
                                    CoinSender is a platform for distributing tokens and making multi-transaction
                                    payouts in cryptocurrency. It allows you to send cryptocurrency payments quickly and
                                    securely.
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className={styles.accordion_main_content}>
                            <AccordionSummary
                                expandIcon={
                                    <ExpandMoreIcon className={styles.expand_more_icon}/>
                                }
                                className={styles.accordion_name_block}
                            >
                                <div className={styles.name_block_title}>For whom could it be beneficial?
                                </div>
                            </AccordionSummary>
                            <AccordionDetails classes={{root: styles.accordion_details_root}}>
                                <div className={styles.details_content}>
                                    CoinSender is a platform for distributing tokens and making multi-transaction
                                    payouts in cryptocurrency. It allows you to send cryptocurrency payments quickly and
                                    securely.
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className={styles.accordion_main_content}>
                            <AccordionSummary
                                expandIcon={
                                    <ExpandMoreIcon className={styles.expand_more_icon}/>
                                }
                                className={styles.accordion_name_block}
                            >
                                <div className={styles.name_block_title}>How do I get started with CoinSender?
                                </div>
                            </AccordionSummary>
                            <AccordionDetails classes={{root: styles.accordion_details_root}}>
                                <div className={styles.details_content}>
                                    CoinSender is a platform for distributing tokens and making multi-transaction
                                    payouts in cryptocurrency. It allows you to send cryptocurrency payments quickly and
                                    securely.
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className={styles.accordion_main_content}>
                            <AccordionSummary
                                expandIcon={
                                    <ExpandMoreIcon className={styles.expand_more_icon}/>
                                }
                                className={styles.accordion_name_block}
                            >
                                <div className={styles.name_block_title}>Can I cancel a transaction once it has been
                                    sent?
                                </div>
                            </AccordionSummary>
                            <AccordionDetails classes={{root: styles.accordion_details_root}}>
                                <div className={styles.details_content}>
                                    CoinSender is a platform for distributing tokens and making multi-transaction
                                    payouts in cryptocurrency. It allows you to send cryptocurrency payments quickly and
                                    securely.
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className={styles.accordion_main_content}>
                            <AccordionSummary
                                expandIcon={
                                    <ExpandMoreIcon className={styles.expand_more_icon}/>
                                }
                                className={styles.accordion_name_block}
                            >
                                <div className={styles.name_block_title}>Does CoinSender offer customer support?
                                </div>
                            </AccordionSummary>
                            <AccordionDetails classes={{root: styles.accordion_details_root}}>
                                <div className={styles.details_content}>
                                    CoinSender is a platform for distributing tokens and making multi-transaction
                                    payouts in cryptocurrency. It allows you to send cryptocurrency payments quickly and
                                    securely.
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    </div>
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
                        <Accordion className={styles.accordion_main_content}>
                            <AccordionSummary
                                expandIcon={
                                    <ExpandMoreIcon className={styles.expand_more_icon}/>
                                }
                                className={styles.accordion_name_block}
                            >
                                <div className={styles.name_block_title}>How much does CoinSender cost?
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
                        <Accordion className={styles.accordion_main_content}>
                            <AccordionSummary
                                expandIcon={
                                    <ExpandMoreIcon className={styles.expand_more_icon}/>
                                }
                                className={styles.accordion_name_block}
                            >
                                <div className={styles.name_block_title}>Can I use CoinSender for personal transactions?
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
                        <Accordion className={styles.accordion_main_content}>
                            <AccordionSummary
                                expandIcon={
                                    <ExpandMoreIcon className={styles.expand_more_icon}/>
                                }
                                className={styles.accordion_name_block}
                            >
                                <div className={styles.name_block_title}>What is the maximum number of wallets that I
                                    can send tokens to in one transaction?
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
                        <Accordion className={styles.accordion_main_content}>
                            <AccordionSummary
                                expandIcon={
                                    <ExpandMoreIcon className={styles.expand_more_icon}/>
                                }
                                className={styles.accordion_name_block}
                            >
                                <div className={styles.name_block_title}>How long does it take for a transaction to be
                                    processed?
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
                        <Accordion className={styles.accordion_main_content}>
                            <AccordionSummary
                                expandIcon={
                                    <ExpandMoreIcon className={styles.expand_more_icon}/>
                                }
                                className={styles.accordion_name_block}
                            >
                                <div className={styles.name_block_title}>Is CoinSender available in my country?
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
                </div>
            </div>
            <ContactForm/>
            <Footer/>
        </>
    )
}