import CreatorCard from "../CreatorCard";
import styles from "./CreatorsSection.module.css";

const CreatorsSection = () => {
  return (
    <section className={styles.creatorsSection}>
      <h2 className={styles.sectionTitle}>Criadores em Destaque</h2>
      <div className={styles.creatorsGrid}>
        {topCreators.map((creator) => (
          // COMPONENTE: CreatorCard
          <CreatorCard />
          // FIM COMPONENTE: CreatorCard
        ))}
      </div>
    </section>
  );
};

export default CreatorsSection;
