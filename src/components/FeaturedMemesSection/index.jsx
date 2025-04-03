import FeaturedMemeCard from "../FeaturedMemeCard";
import styles from "./FeaturedMemesSection.module.css";

const FeaturedMemesSection = ({ featuredMemes }) => {
  return (
    <section className={styles.featuredSection}>
      <h2 className={styles.sectionTitle}>Memes em Destaque</h2>
      <div className={styles.featuredGrid}>
        {featuredMemes.map((meme) => (
          <FeaturedMemeCard key={meme.id} meme={meme} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedMemesSection;