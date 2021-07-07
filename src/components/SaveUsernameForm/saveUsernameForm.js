import React, { useState } from 'react';

import { save_user } from '../../API';

import styles from './saveUsernameForm.module.css'

const SaveUsername = () => {
    const [username, setUsername] = useState('');

    const [savingValue, setSavingValue] = useState('');

    const onClick = () => {
        const result = save_user(username);
        setUsername('');
        result.then(res => {
            setSavingValue(res.username)
        })
    }

    const onInput = (event) => {
        setUsername(event.currentTarget.value);
        setSavingValue('');
    }

    return (
        <div className={ styles.Wrapper }>
            {savingValue && <div className={ styles.Message }>
                    Username: {savingValue} сохранен
                </div>}
            <input
                type='text'
                onInput={ onInput }
                value={ username }
                className={ styles.InputUsername }
            />
            <button
                onClick={onClick}
            >Сохранить username</button>
        </div>
    );
}

export default SaveUsername;