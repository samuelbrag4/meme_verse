import styles from "./TagCloud.module.css";

const TagCloud = ({ tags = [] }) => {
  return (
    <div className={styles.tagCloud}>
      {tags.map((tag, index) => (
        <span key={index} className={styles.tag}>
          {tag}
        </span>
      ))}
    </div>
  );
};

export default TagCloud;