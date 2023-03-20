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
                            This policy is based on the following data protection principles:
                        </div>
                        <ul className={styles.list_content}>
                            <li>The processing of personal data shall take place in a lawful, fair and transparent
                                way;
                            </li>

                            <li>The collecting of personal data shall only be performed for specified, explicit and
                                legitimate purposes and not further processed in a manner that is incompatible with
                                those purposes;
                            </li>

                            <li>The collecting of personal data shall be adequate, relevant and limited to what is
                                necessary in relation to the purpose for which they are processed;
                            </li>

                            <li>The personal data shall be accurate and where necessary, kept up to date;</li>

                            <li>Every reasonable step shall be taken to ensure that personal data that are inaccurate
                                having regard to the purposes for which they are processed, are erased or rectified
                                without delay;
                            </li>

                            <li>Personal data shall be kept in a form which permits identification of the data subject
                                for no longer than it is necessary for the purpose for which the personal data are
                                processed;
                            </li>

                            <li> All personal data shall be kept confidential and stored in a manner that ensures
                                appropriate security;
                            </li>

                            <li>Personal data shall not be shared with third parties except when necessary in order for
                                them to provide services upon agreement;
                            </li>

                            <li> Data subjects shall have the right to request access to and rectification or erasure of
                                personal data, or restriction of processing, or to object to processing as well as the
                                right of data portability.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}