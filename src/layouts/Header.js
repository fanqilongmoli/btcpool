import React from 'react'
import {Menu, Icon} from 'antd';
import Link from 'umi/link';
import styles from './Header.less'

const Header = ({location}) => {
  return (
    <div className={styles.header}>
      <span className={styles.textlogo}>Bitcoin.com矿池</span>
      <span className={styles.topbaricon}>BTC 0 H/s</span>
      <span className={styles.topbaricon}>BCH 0 H/s</span>
    </div>
  );
}

export default Header;
