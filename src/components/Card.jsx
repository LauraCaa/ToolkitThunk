import styles from "../styles/Card.module.css";

const Card = ({title, url, urlToImage, content}) => {
  return(
    <div className={styles.card}>
      <img src={urlToImage} alt="news"/>
      <div className={styles.cardDetail}>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
      <div className={styles.a}> 
          <a 
            href={url} 
            rel="noreferrer" 
            target="_blank" 
            className={styles.link} 
          > Detail
          </a>
        </div>
    </div>
  )
};

export default Card;