import { useRequest } from 'alita';
import type { FC } from 'react';
import React from 'react';
import styles from './index.css';
import { query } from './service';

interface PropertyPageProps {}

const PropertyPage: FC<PropertyPageProps> = () => {
  const { data } = useRequest(query);
  return <div className={styles.center}>Hello {data?.text}</div>;
};

export default PropertyPage;
