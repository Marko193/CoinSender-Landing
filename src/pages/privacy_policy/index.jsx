import {Header} from "@/components/Header/header";
import Footer from "@/components/Footer";
import styles from './privacy_policy.module.scss'
import {ContactForm} from "@/components/contact/contact";

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
                <div className={styles.blocks_info_wrapper} style={{background: "none", border: "none"}}>
                    <div className={styles.blocks_info_content}>
                        <div className={styles.block_title}>
                            <p>Personal Data we collect from you</p>
                        </div>
                        <div className={styles.text_block}>
                            We collect the Personal Data of our employees, potential employees, clients, suppliers,
                            business contacts, shareholders and website users. If the data we collect is not listed in
                            this privacy statement, we will give data subjects (when required by law) a notice
                            describing the data which will be collected and how it will be used. Except for certain
                            information required by law, your decision to provide any personal data to us is voluntary.
                        </div>
                        <div className={styles.text_block}>
                            If you provide us with Personal Data from a third party, you are held responsible for making
                            this person aware of the information contained in this privacy statement and getting his/her
                            consent for sharing the information with CoinSender. You must make sure to obtain and
                            process personal data according to all applicable data protection laws.
                        </div>
                        <div className={styles.text_block}>
                            We collect your Personal Data when you provide us with data via the contact form on the
                            Website (i.e. name, phone, email). We may also collect some Personal Data automatically
                            (e.g. your IP address, browser type and version, information about your visit including the
                            URL clickstream to, through and from our Website, web pages you viewed or searched for,
                            length of visits to certain web pages, web page interaction etc.) through the use of
                            tracking technologies including cookies (see Section 6).
                        </div>
                    </div>
                </div>
                <div className={styles.blocks_info_wrapper}>
                    <div className={styles.block_title}>
                        <p>Purposes of collection and use of your Personal Data</p>
                    </div>
                    <div className={styles.list_block_wrapper}>
                        <div className={styles.list_title}>
                            We use Personal Data we collected from you for the following purposes:
                        </div>
                        <ul className={styles.list_content}>
                            <li>Administration of our Website and providing internal operations, including
                                troubleshooting, data analysis, testing, research, analytic and survey purposes;
                            </li>

                            <li>Processing of your inquiries and operations on the Website;</li>

                            <li>Analyzing and understanding our audience for the purpose of improving our Website;</li>

                            <li>Ensuring compliance with applicable laws and this Privacy Policy.</li>

                            <li>Communicating with you about our Website or our services;</li>

                            <li>Sending marketing materials and information for the promotion of our services
                                (newsletters, invitations to our events or other communications we think may interest
                                you).
                            </li>
                        </ul>
                    </div>
                    <div className={styles.blocks_info_content}>
                        <div className={styles.text_block}>
                            Please note: We never use your Personal Data to send you advertising and promotional
                            messages from third parties. We will not use your Personal Data for the purposes
                            incompatible with the purposes of which you have been informed, unless it is required or
                            authorized by law, or it is in your own vital interest (e.g. in case of a medical emergency)
                            to do so.
                        </div>
                    </div>
                </div>
                <div className={styles.blocks_info_wrapper} style={{background: "none", border: "none"}}>
                    <div className={styles.blocks_info_content}>
                        <div className={styles.block_title}>
                            <p>Your rights regarding Personal Data we collect from you</p>
                        </div>
                        <div className={styles.text_block}>
                            At CoinSender, we respect your privacy rights and provide you with reasonable access to the
                            Personal Data that you may have provided through your use of our Services.
                            You may withdraw your consent to receiving marketing materials and information from us at
                            any time by clicking on the unsubscribe link we provide in each CoinSender
                            communication <a href='https://coinsender.io/' target='_blank'>https://coinsender.io/</a>,
                            or you may contact us as set out in Section 11 here in.
                        </div>
                        <div className={styles.list_block_wrapper}>
                            <div className={styles.list_title}>
                                As a Data Subject, applicable data protection laws entitle you to:
                            </div>
                            <ul className={styles.list_content}>
                                <li>Request information on your Personal Data processed by us. This right entitles you
                                    to know if we hold your Personal Data and if we do, to obtain a copy of your
                                    Personal Data.
                                </li>
                                <li>Request the right to access the Personal Data we have on you. Request the
                                    rectification of your Personal Data if applicable. This right entitles you to have
                                    your Personal Data corrected if it is inaccurate or incomplete. The Right to object
                                    to the processing of your Personal Data. This right entitles you to request that
                                    CoinSender no longer processes your Personal Data. Request the erasure of your
                                    Personal Data. This right entitles you to request the erasure of your Personal Data
                                    and the right to be forgotten by CoinSender. Request the restriction of the
                                    processing of your Personal Data on legitimate grounds. This right entitles you to
                                    request that your Personal Data be processed in limited circumstances and only with
                                    your consent.
                                </li>
                                <li>The right to complain to a supervisory authority if applicable at any time.</li>
                                <li>Request to withdraw your consent at any time. Request the portability of your</li>
                            </ul>
                        </div>
                        <div className={styles.text_block}>
                            Personal Data. This right entitles you to receive a copy (in a structured, commonly used and
                            machine-readable format) of all of the Personal Data you have provided to CoinSender, or
                            request CoinSender to transmit this Personal Data to another data controller pursuant to
                            your instructions. Please note, that in accordance with Applicable
                        </div>
                        <div className={styles.text_block}>
                            Law, we also reserve the right to withhold personal data if disclosing it would adversely
                            affect the rights and freedoms of others.
                        </div>
                        <div className={styles.text_block}>
                            If you wish to access or amend any other Personal Data we hold about you, or to request that
                            we delete any information about you, you may contact us by sending an email to:
                            <a href='https://support@сoinсender.io' target='_blank'> https://support@сoinсender.io</a>.
                            We will acknowledge your request within seventy-two (72) hours and
                            handle it promptly. Company will respond to these requests within a month, with a
                            possibility to extend this period for particularly complex requests in accordance with
                            Applicable Law. We will retain your information for as long as your account is active, as
                            needed to provide you services, or to comply with our legal obligations, resolve disputes
                            and enforce our agreements.<br/>
                            Please note, that you may update, correct, or delete your Account information and
                            preferences at any time by accessing your Account. While any changes you make will be
                            reflected in active user databases instantly or within a reasonable period of time, we may
                            retain all information you submit for backups, archiving, prevention of fraud and abuse,
                            analytics, satisfaction of legal obligations, or where we otherwise reasonably believe that
                            we have a legitimate reason to do so.
                        </div>
                        <div className={styles.text_block}>
                            We may use your personal data for the purposes of automated decision-making when displaying
                            your activity and offers based on your trends and interest. When such processing takes
                            place, we will request your explicit consent and provide you with the option to opt-out. We
                            may also use automated decision making in order to fulfill obligations imposed by law, in
                            which case we will inform you of any such processing.
                        </div>
                    </div>
                </div>
                <div className={styles.blocks_info_wrapper}>
                    <div className={styles.block_title}>
                        <p>Children’s Personal Data</p>
                    </div>
                    <div className={styles.blocks_info_content}>
                        <div className={styles.text_block}>
                            Protecting the privacy of minors is especially important at CoinSender. Our Website and
                            Services are not directed to children under the age of 18, and we do not knowingly collect
                            Personal Data from children under the age of 18. If you are under 18 years of age, then
                            please do not use or access the Website or Service at any time or in any manner. While
                            individuals under the age of 18 may enter our Website, they shall do so only with the
                            involvement, supervision, and approval of a parent or legal guardian.
                        </div>
                        <div className={styles.text_block}>
                            If we learn that Personal Data has been collected on the Service from data subjects under 18
                            years of age, then we will take the appropriate steps to delete this information. If you are
                            a parent or guardian and discover that your child under 18 years of age has obtained an
                            Account on the Service, then you may alert us and request that we delete your child’s
                            Personal Data from our systems.
                        </div>
                    </div>
                </div>
                <div className={styles.blocks_info_wrapper} style={{background: "none", border: "none"}}>
                    <div className={styles.blocks_info_content}>
                        <div className={styles.block_title}>
                            <p>Use of cookies and other similar technologies</p>
                        </div>
                        <div className={styles.text_block}>
                            To ensure our Website functions properly, we may use various tracking technologies like
                            cookies. By using the Website, you provide your consent for our use of cookies and similar
                            tracking technologies under the terms herein.
                        </div>
                        <div className={styles.text_block}>
                            In particular, cookies are small data files commonly stored on your device when you browse
                            and use websites and online services. They are used to make the Website work or to work more
                            efficiently, as well as to provide reporting information and assist with service or
                            advertising personalization. Generally, Internet browsers contain controls for managing
                            cookies. These controls may enable you to delete cookies or to accept or reject certain
                            categories of cookies. If you reject or delete cookies, the performance of the related
                            features and functions of our Website may be impaired for you.
                        </div>
                    </div>
                </div>
                <div className={styles.blocks_info_wrapper}>
                    <div className={styles.block_title}>
                        <p>Transfer/disclosure of your Personal Data</p>
                    </div>
                    <div className={styles.blocks_info_content}>
                        <div className={styles.list_block_wrapper}>
                            <div className={styles.list_title}>
                                Except as described in this Policy, we will not intentionally disclose the Personal Data
                                that we collect or store on the Service to third parties without your prior explicit
                                consent. We may disclose information to third parties in the following circumstances:
                                However, CoinSender may disclose your Personal Data:
                            </div>
                            <ul className={styles.list_content}>
                                <li>if we are under a duty to disclose or share your personal data and transaction data
                                    in
                                    order to comply with any legal obligation, legal proceedings, or in order to enforce
                                    or
                                    apply our Terms and Conditions and other agreements; or to protect the rights,
                                    property,
                                    or safety of the Company, our customers, or others. This includes exchanging
                                    information
                                    with other companies and organizations for the purposes of fraud protection;
                                </li>

                                <li>In the event of an emergency involving the danger of public health, death or
                                    physical
                                    injury to a person; – to protect the rights, property or personal safety of
                                    CoinSender
                                    and its owners or employees.
                                </li>

                                <li>In the event that we sell or buy any business or assets, we may disclose your
                                    personal
                                    data and transaction data to the prospective seller or buyer of such business or
                                    assets.
                                    If substantially all of the assets of the Company are acquired by a third party,
                                    personal data and transaction data held by it about its customers will be one of the
                                    transferred assets.
                                </li>
                            </ul>
                        </div>
                        <div className={styles.text_block}>
                            Please remember this Website may be hosted outside your home country, and thus, your
                            Personal Data may be stored on a server hosted outside your home country. By supplying
                            CoinSender with your Personal Data, you permit its transfer outside the country within the
                            bounds of use of such Personal Data in accordance with the applicable law. We will use all
                            reasonable endeavors to ensure that any third party to whom we disclose your confidential
                            information is compliant with applicable data protection laws as regards its use and storage
                            of your personal information.
                        </div>
                    </div>
                </div>
                <div className={styles.blocks_info_wrapper} style={{background: "none", border: "none"}}>
                    <div className={styles.blocks_info_content}>
                        <div className={styles.block_title}>
                            <p>Links to third parties’ websites</p>
                        </div>
                        <div className={styles.text_block}>
                            Our Website may contain links to and from third parties’ websites (including social media).
                            If you follow a link to any of them, please note those websites have their own privacy
                            practices. CoinSender shall not be liable for the respective policies and any collection,
                            use or disclosure of your Personal Data in accordance thereto. Please check the third
                            parties’ policies before you submit any Personal Data to their websites.
                        </div>
                    </div>
                </div>
                <div className={styles.blocks_info_wrapper}>
                    <div className={styles.block_title}>
                        <p>Security</p>
                    </div>
                    <div className={styles.blocks_info_content}>
                        <div className={styles.text_block}>
                            We believe we use reasonable administrative, logical, physical and managerial measures to
                            safeguard your Personal Data against loss, theft and unauthorized access, use and
                            modification. However, we cannot assure you Personal Data will never be used or disclosed in
                            a manner inconsistent with this Privacy Policy. You should understand no feasible system of
                            data security is invulnerable. Accordingly, we cannot guarantee 100% security of your
                            information. When you voluntarily provide us your Personal Data, you agree to disclose all
                            Personal Data at your own risk.
                        </div>
                    </div>
                </div>
                <div className={styles.blocks_info_wrapper} style={{background: "none", border: "none"}}>
                    <div className={styles.blocks_info_content}>
                        <div className={styles.block_title}>
                            <p>Amendments to our Privacy Policy</p>
                        </div>
                        <div className={styles.text_block}>
                            Please note that this Privacy Policy may change from time to time. If we change this Privacy
                            Policy in ways that affect how we use your Personal Information, we will advise you of the
                            choices you may have as a result of those changes, and will notify you if we seek your
                            consent. We will also post a notice that this Privacy Policy has changed.
                        </div>
                    </div>
                </div>
                <div className={styles.blocks_info_wrapper}>
                    <div className={styles.block_title}>
                        <p>Contact information</p>
                    </div>
                    <div className={styles.blocks_info_content}>
                        <div className={styles.text_block}>
                            If at any time you would like to contact us with your views about our privacy practices, or
                            with any inquiry relating to your Personal Data, and or your rights as a Data Subject, you
                            can do so by using our contact from on each web page of our Website, or by sending us an
                            email at: <a href='https://support@coinsender.io'
                                         target="_blank"> https://support@coinsender.io</a>
                        </div>
                    </div>
                </div>
                <div className={styles.blocks_info_wrapper} style={{background: "none", border: "none"}}>
                    <div className={styles.blocks_info_content}>
                        <div className={styles.block_title}>
                            <p>Cookie policy</p>
                        </div>
                        <div className={styles.text_block}>
                            This Cookie Policy page explains how CoinSender and its subsidiaries (hereinafter referred
                            to as: the “Company” ‘we’, ‘us’, ‘our’, or CoinSender) use cookies, what kind of data we
                            collect, and why we collect such data.
                        </div>
                        <div className={styles.text_block}>
                            CoinSender takes great care of your privacy and allows browsing most of our web pages
                            without asking you to share any personal information. However, we still need it to
                            personalize your experience and course-correct our marketing activities to provide you with
                            the best user experience.
                        </div>
                        <div className={styles.text_block}>
                            Our Website: https://coinsender.io/ ( hereinafter referred to as: the ‘Website’) and any
                            other branded web pages, websites, or third-party platforms owned or managed by CoinSender
                            (hereinafter referred to as: CoinSender Websites’), all function according to this Cookie
                            Policy.
                        </div>
                        <div className={styles.text_block}>
                            By navigating CoinSender Websites, you accept the use of the cookies we collect. CoinSender
                            keeps the right to edit this Cookie Policy in part or in whole at any time.
                        </div>
                    </div>
                </div>
                <div className={styles.blocks_info_wrapper}>
                    <div className={styles.block_title}>
                        <p>What are Cookies</p>
                    </div>
                    <div className={styles.blocks_info_content}>
                        <div className={styles.text_block}>
                            Cookies are small text files that are placed on your computer or mobile device when you
                            access websites on the internet. Cookies help Users navigate around our website and allow us
                            to tailor the content of our site to fit the needs and preferences of Users. The cookies we
                            use typically collect anonymous identifiers associated with your device, browser, referring
                            site URLs, time or usage information, Website preferences and settings, etc. (as further
                            provided in this Policy).
                        </div>
                        <div className={styles.text_block}>
                            Cookies play an important role. Without them, using our website would be a slow, complicated
                            and frustrating experience. Cookies are standard to all company websites. So while they
                            cannot be eliminated, CoinSender remains transparent about the purpose of cookies giving you
                            the choice to consent to their use.
                        </div>
                    </div>
                </div>
                <div className={styles.blocks_info_wrapper} style={{background: "none", border: "none"}}>
                    <div className={styles.blocks_info_content}>
                        <div className={styles.block_title}>
                            <p>Why Does CoinSender use Cookies and similar technologies</p>
                        </div>
                        <div className={styles.text_block}>
                            CoinSender takes advantage of the information collected via cookies and similar technologies
                            like web beacons (embedded bits of data into targeted emails or images to keep record of
                            your actions on a web page or email body) to recognize you, improve page navigation,
                            remember your preferences, and show you relevant content. It also helps us enhance email and
                            advertising campaigns, and allows us to refine our marketing strategy.
                        </div>
                    </div>
                </div>
                <div className={styles.blocks_info_wrapper}>
                    <div className={styles.block_title}>
                        <p>What types of Cookies are used by CoinSender?</p>
                    </div>
                    <div className={styles.list_block_wrapper}>
                        <div className={styles.list_title}>
                            CoinSender makes use of various cookies including the following:
                        </div>
                        <ul className={styles.list_content}>
                            <li>Strictly necessary cookies to ensure the information you access via CoinSender Websites
                                is properly browsed and all the CoinSender Websites function properly.
                            </li>

                            <li>Performance cookies to keep a record of the CoinSender Website pages you visited and
                                URLs that brought you to CoinSender Websites.
                            </li>

                            <li>Website session cookies to keep track of your actions during a browser session. The
                                session starts the moment you access a CoinSender Website and ends right after you exit
                                the CoinSender Website. When you close the browser, our session cookies are
                                automatically deleted.
                            </li>

                            <li>Targeting cookies to accumulate analytics about CoinSender Websites usage as well as
                                third-party cookies we get via social media channels or ads placed on third-party
                                platforms.
                            </li>

                        </ul>
                    </div>
                </div>
                <div className={styles.blocks_info_wrapper} style={{background: "none", border: "none"}}>
                    <div className={styles.blocks_info_content}>
                        <div className={styles.block_title}>
                            <p>What third-party cookies does CoinSender collect?</p>
                        </div>
                        <div className={styles.text_block}>
                            Please also note that CoinSender may enable third-party services to trace Performance and
                            Targeting cookies for us to measure the effectiveness of our advertising campaigns and stay
                            informed about your online activities on CoinSender’s Websites. The third-party services may
                            include but not be limited to Google AdWords, Google Analytics, etc., and may be subject to
                            their Cookie policies, which are listed on their applicable websites.
                        </div>
                    </div>
                </div>
                <div className={styles.blocks_info_wrapper}>
                    <div className={styles.block_title}>
                        <p>Who can access the data collected by CoinSender?</p>
                    </div>
                    <div className={styles.blocks_info_content}>
                        <div className={styles.text_block}>
                            CoinSender is the only holder of the data gathered. It is kept confidential and safe under
                            the regulations described in our Privacy Policy page in the Security subsection.
                        </div>
                    </div>
                </div>
                <div className={styles.blocks_info_wrapper} style={{background: "none", border: "none"}}>
                    <div className={styles.blocks_info_content}>
                        <div className={styles.block_title}>
                            <p>What personal data do we gather?</p>
                        </div>
                        <div className={styles.text_block}>
                            For further information, please refer to our Privacy Policy page, in the Section relating
                            to: Personal Data We Collect from You Privacy Policy.
                        </div>
                    </div>
                </div>
                <div className={styles.blocks_info_wrapper}>
                    <div className={styles.block_title}>
                        <p>How to block CoinSender Websites’ cookies?</p>
                    </div>
                    <div className={styles.blocks_info_content}>
                        <div className={styles.text_block}>
                            If you want to remove all the existing and future CoinSender Websites cookies, you can do
                            this at anytime by changing your browser settings. For more guidance, please go to
                            www.allaboutcookies.org.
                        </div>
                        <div className={styles.text_block}>
                            Please note: Blocking the cookies will negatively affect your experience and navigation on
                            CoinSender Websites. Unless you block cookies in your browser before accessing CoinSender
                            Websites, we will place cookies on your computer or devices once you visit CoinSender
                            Websites or click the links leading to them.
                        </div>
                    </div>
                </div>
                <div className={styles.blocks_info_wrapper} style={{background: "none", border: "none"}}>
                    <div className={styles.blocks_info_content}>
                        <div className={styles.block_title}>
                            <p>Contact information</p>
                        </div>
                        <div className={styles.text_block}>
                            Should you have any concerns about our Cookie Policy or would like us to remove the data
                            shared, please get in touch with us either via the Website contact form or this email:
                            support@coinsender.io.
                        </div>
                    </div>
                </div>
                <ContactForm />
            </div>
            <Footer/>
        </>
    )
}