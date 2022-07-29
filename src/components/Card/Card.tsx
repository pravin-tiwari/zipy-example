import { FC } from 'react';
import styles from './Card.module.css';

export interface CardProps {
  content?: React.ReactNode
  header?: {
    title?: string,
    subtitle?: string,
    img?: string,
  },
  footer?: {
    title?: string,
    subtitle?: string
  },
}

const Card: FC<CardProps> = ({ content, header, footer }) => (
  <div className={styles.Card} data-testid="Card">
    <div className={styles.card} >
      <div className={styles.header}>
        <img className={styles.avatar} src={header.img} />
        <div className={styles.titles}>
          <label className={styles.title}>{header.title}</label>
          <label className={styles.subtitle}>{header.subtitle}</label>
        </div>
      </div>
      <div className={styles.content}>
        {content}
      </div>
      <div className={styles.footer}>
        <label className={styles.title}>{footer.title}</label>
        <label className={styles.subtitle}>{footer.subtitle}</label>
      </div>
    </div>
  </div>
);

Card.defaultProps = {
  content: 'This is Content',
  header: {
    title: 'Header Title',
    subtitle: 'Header SubTitle',
  },
  footer: {
    title: 'Footer Title',
    subtitle: 'Footer SubTitle',
  },
}

export default Card;
