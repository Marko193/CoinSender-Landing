import styles from "./title-desc.module.css"

export default function TitleDescriptionHelper(props) {
    return (
        <div className={styles.header}>
            <div className={styles.header_title}>
                {props.title}
            </div>
            <div className={styles.header_description}>
                {props.description}
            </div>
        </div>
    )
}