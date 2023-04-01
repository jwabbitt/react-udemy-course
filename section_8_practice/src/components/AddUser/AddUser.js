import React, { useState } from 'react';

import Card from '../UI/Card';
import ErrorModal from '../Modal/ErrorModal';
import styles from './AddUser.module.css';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [errorPresent, setErrorPresent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('Something went wrong!');

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value)
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log('user submit triggered');

    const userData = {
      username: enteredUsername,
      age: enteredAge,
      id: Math.random().toString()
    }

    if(userData.username === '' && userData.age === '') {
      setErrorPresent(true);
      setErrorMessage('Please enter a valid name and age (non-empty values).')
    } else if (userData.username === '') {
      setErrorPresent(true);
      setErrorMessage('Please enter a valid name (non-empty value).')
    } else if (userData.age === '') {
      setErrorPresent(true);
      setErrorMessage('Please enter a valid age (non-empty value).')
    } else if (userData.age < 0) {
      setErrorPresent(true);
      setErrorMessage('Please enter a valid age (positive number).')
    } else {
      props.addUser(userData);
      setEnteredUsername('');
      setEnteredAge('');
    }

  };

  const dismissErrorHandler = () =>{
    setErrorPresent(false);
  };


  return (
    <div>
      <Card className={styles.div}>
        <form onSubmit={submitHandler}>
          <div className={styles['add-user__controls']}>
            <div className={styles['add-user__control']}>
              <label>Username</label>
              <input
                type='text'
                value={enteredUsername}
                onChange={usernameChangeHandler}
              />
            </div>
            <div className={styles['add-user__control']}>
              <label>Age (Years)</label>
              <input type='number' value={enteredAge} onChange={ageChangeHandler} />
            </div>
            <button type="submit">Add User</button>
          </div>
        </form>
      </Card>
      <ErrorModal message={errorMessage} displayModal={errorPresent} dismissError={dismissErrorHandler}/>
    </div>
  );
};

export default AddUser;
