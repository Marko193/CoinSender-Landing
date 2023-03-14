import styles from "./title-desc.module.scss"

export default function TitleDescriptionHelper({title, description, displayDescription}) {
    return (
        <div className={styles.header}>
            <div className={styles.header_title}>
                {title}
            </div>
            <div className={styles.header_description}>
                {description}
            </div>
        </div>
    )
}