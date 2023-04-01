import React from 'react';

import Card from '../UI/Card';
import styles from './Users.module.css';

const Users = (props) => {
  if(props.userList.length === 0) {
    return '';
  }

  return(
    <Card className={styles.div}>
      <ul className={styles.ul}>
        {props.userList.map((user) => (
          <li>{user.username} ({user.age} years old)</li>
        ))}
      </ul>
    </Card>
  )
}

export default Users;