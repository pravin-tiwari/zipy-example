import { FC } from 'react';
import styles from './Account.module.css';

interface AccountProps {}

const Account: FC<AccountProps> = () => (
  <div className={styles.Account} data-testid="Account">
    Account Component
  </div>
);

export default Account;
