import { FC } from 'react';
import styles from './Dashboard.module.css';

interface DashboardProps { }

const Dashboard: FC<DashboardProps> = () => (
  <div className={styles.Dashboard} data-testid="Dashboard">
    This is Dashboard
  </div>
);

export default Dashboard;
