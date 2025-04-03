import EventCard from "../EventCard";
import PremiumCard from "../PremiumCard";
import TagCloud from "../TagCloud";
import styles from "./Sidebar.module.css";

const Sidebar = ({ upcomingEvents }) => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarSection}>
        <h3 className={styles.sidebarTitle}>Eventos Próximos</h3>
        {upcomingEvents.map((event) => (
          <EventCard event={event} key={event.id} />
        ))}
      </div>

      <div className={styles.sidebarSection}>
        <h3 className={styles.sidebarTitle}>MemeVerse Premium</h3>
        <PremiumCard />
      </div>

      <div className={styles.sidebarSection}>
        <h3 className={styles.sidebarTitle}>Tags Populares</h3>
        <TagCloud />
      </div>
    </aside>
  );
};

export default Sidebar;