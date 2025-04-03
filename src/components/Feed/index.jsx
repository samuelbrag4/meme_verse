import MemeCard from "../MemeCard";
import styles from "./Feed.module.css";

const Feed = ({ memes }) => {
  return (
    <section className={styles.feedSection}>
      <h2 className={styles.sectionTitle}>Memes Populares</h2>
      <div className={styles.feedGrid}>
        {memes.map((meme) => (
          <MemeCard key={meme.id} meme={meme} />
        ))}
      </div>
    </section>
  );
};

export default Feed;