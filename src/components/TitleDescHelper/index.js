import styles from "./title-desc.module.scss";

export default function TitleDescriptionHelper({ title, description }) {
  return (
    <div className={styles.header}>
      <div className={styles.header_title}>{title}</div>
      {description && (
        <div className={styles.header_description}>{description}</div>
      )}
    </div>
  );
}
