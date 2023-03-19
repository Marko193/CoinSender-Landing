import styles from './backend-product.module.scss'

export default function BackendProduct() {
    return (
        <>
            <div className={styles.backend_product_container}>
                <div className={styles.first_avatar_wrapper}>
                    <div className={styles.avatar_layout}>
                        <img src="/assets/mock_avatars/first.png" alt='avatar' id={styles.first_avatar}/>
                    </div>
                </div>
                <div id={styles.second_third_avatars_wrapper}>
                    <div className={styles.second_third_avatars} id={styles.second_wrapper}>
                        <div className={styles.second_animation_wrapper}>
                            <img src="/assets/mock_avatars/second.png" alt='avatar' className={styles.second_avatar}/>
                        </div>
                    </div>
                    <div className={styles.second_third_avatars} id={styles.third_avatar}>
                        <div className={styles.third_animation_wrapper}>
                            <img src="/assets/mock_avatars/third.png" alt='avatar'/>
                        </div>
                    </div>
                </div>

                <div className={styles.container_text_wrapper}>
                    <div className={styles.title}>
                        Backed by
                        <span className={styles.product_company_label}>Product Company</span>
                    </div>
                    <div className={styles.four_avatar_wrapper}>
                        <div className={styles.four_avatar_layout}>
                            <img src='/assets/mock_avatars/four.png' alt='avatar'/>
                        </div>
                    </div>
                    <div className={styles.general_description_wrapper}>
                        <div className={styles.five_image_wrapper}>
                            <img src='/assets/mock_avatars/five.png' alt='avatar'/>
                        </div>
                        <div className={styles.description_desktop}>
                            CoinSender is backed by MeGaDev, a digital transformation business at the cutting edge of
                            crypto.
                            MeGaDev has well-established technical and management teams with a wealth of experience
                            between
                            them. The MeGaDev team is proud to contribute ground-breaking products that shape the future
                            of
                            crypto, including CoinSender.
                        </div>
                        <div className={styles.description_mobile}>
                            Sign up for CoinSender today and start enjoying the benefits of fast, secure, and
                            hassle-free multi-transaction payments.
                        </div>
                        <div className={styles.six_image_wrapper}>
                            <img src='/assets/mock_avatars/six.png' alt='avatar'/>
                        </div>
                    </div>
                    <button className={styles.discover_button}>Discover</button>
                    <div className={styles.bottom_image_wrapper}>
                        <div className={styles.bottom_image_container}>
                            <img className={styles.seven_image} src='/assets/mock_avatars/eight.png' alt='avatar'/>
                        </div>
                        <div className={styles.bottom_image_container}>
                            <img className={styles.eight_image} src='/assets/mock_avatars/seven.png' alt='avatar'/>
                        </div>
                        <div className={styles.bottom_image_container} style={{justifyContent: 'end'}}>
                            <img className={styles.nine_image} src='/assets/mock_avatars/nine.png' alt='avatar'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}