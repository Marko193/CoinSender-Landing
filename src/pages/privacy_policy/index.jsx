import {Header} from "@/components/Header/header";
import Footer from "@/components/Footer";
import styles from './privacy_policy.module.scss'

export default function PrivacyPolicy() {
    return (
        <>
            <Header/>
            <div className={styles.main_wrapper}>
                <div className={styles.main_title}>
                    Privacy policy
                </div>
                <div className={styles.blocks_info_wrapper}>
                    <div className={styles.blocks_info_content}>
                        <div className={styles.block_title}>
                            <p>General information</p>
                        </div>
                        <div className={styles.text_block}>
                            CoinSender (hereinafter referred to as: the “Company” “CoinSender”, “we,” “us”, “our”) is
                            committed to protecting and respecting your privacy. This Privacy Policy describes our
                            privacy practices with regard to your Personal Data. “Personal Data” in this Privacy Policy
                            shall mean any data that may be provided to Us which personally identifies you, such as your
                            name, email address, or billing information, or other data that can be reasonably linked to
                            such information by CoinSender This Policy covers both our online and offline data
                            collection activities, including Personal Data that We collect through our various channels
                            such as websites, social networks, exhibitions and events.
                        </div>
                        <div className={styles.text_block}>
                            Please read this Privacy Policy carefully to understand our views and practices regarding
                            your
                            Personal Data. By utilizing our Website and/or our Services, you acknowledge that you have
                            read,
                            and agree to, the terms of this Privacy Policy and that you consent to our use of your
                            Personal
                            Information for the purposes set out in this Privacy Policy. If you do not wish to provide
                            your
                            Personal Information on the basis set out in this Privacy Policy, you should not enter the
                            relevant information on the Website or provide your Personal Information to us otherwise.
                            However, if you do not provide your Personal Information, you may not be able to use all of
                            the
                            Services we offer.
                        </div>
                    </div>
                    <div className={styles.list_block_wrapper}>
                        <div className={styles.list_title}>
                            As a Data Subject, applicable data protection laws entitle you to:
                        </div>
                        <ul className={styles.list_content}>
                            <li>
                                Request information on your Personal Data processed by us. This right entitles you to
                                know if we hold your Personal Data and if we do, to obtain a copy of your Personal Data.
                            </li>
                            <li>
                                Request the right to access the Personal Data we have on you. Request the rectification
                                of your Personal Data if applicable. This right entitles you to have your Personal Data
                                corrected if it is inaccurate or incomplete. The Right to object to the processing of
                                your Personal Data. This right entitles you to request that CoinSender no longer
                                processes your Personal Data. Request the erasure of your Personal Data. This right
                                entitles you to request the erasure of your Personal Data and the right to be forgotten
                                by CoinSender. Request the restriction of the processing of your Personal Data on
                                legitimate grounds. This right entitles you to request that your Personal Data be
                                processed in limited circumstances and only with your consent.
                            </li>
                            <li>
                                The right to complain to a supervisory authority if applicable at any time.
                            </li>
                            <li>
                                Request to withdraw your consent at any time. Request the portability of your
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}