import React from 'react';

import Card from '../UI/Card';
import styles from './ErrorModal.module.css';

const ErrorModal = (props) => {
  const dismissHandler = () => {
    props.dismissError();
  }

  return (
    <div className={props.displayModal ? styles.modal : styles.hideModal}>
      <Card className={styles.div}>
        <h1>Invalid Input</h1>
        <div className={styles.content}>
          <p>{props.message}</p>
          <div className={styles['btn-holder']}>
            <button onClick={dismissHandler}>Okay</button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default ErrorModal;