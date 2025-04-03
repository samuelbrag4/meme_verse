import styles from "./EventCard.module.css";

const EventCard = ({ event }) => {
  if (!event) return null; // Verifica se o evento foi passado

  return (
    <div className={styles.eventCard}>
      <h4 className={styles.eventTitle}>{event.title}</h4>
      <p className={styles.eventDate}>{event.date}</p>
      <p className={styles.eventParticipants}>
        {event.participants} participantes
      </p>
      <button className={styles.eventButton}>Participar</button>
    </div>
  );
};

export default EventCard;