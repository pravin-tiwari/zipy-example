import React, { FC } from 'react';
import styles from './CardContainer.module.css';

interface CardContainerProps {
  children?: React.ReactNode
}

const CardContainer: FC<CardContainerProps> = ({ children }) => (
  <div className={styles.CardContainer} data-testid="CardContainer">
    {children}
  </div>
);

export default CardContainer;
