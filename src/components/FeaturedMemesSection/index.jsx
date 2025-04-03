import FeaturedMemeCard from "../FeaturedMemeCard";
import styles from "./FeaturedMemesSection.module.css";

const FeaturedMemesSection = () => {
  return (
    <section className={styles.featuredSection}>
            <h2 className={styles.sectionTitle}>Memes em Destaque</h2>
            <div className={styles.featuredGrid}>
              {featuredMemes.map((meme) => (
                // COMPONENTE: FeaturedMemeCard
                <FeaturedMemeCard />
                // FIM COMPONENTE: FeaturedMemeCard
              ))}
            </div>
          </section>
  );
};

export default FeaturedMemesSection;
