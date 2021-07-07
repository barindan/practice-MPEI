import React, { useState } from 'react';

import { get_user } from '../../API';

import styles from './getUsernameForm.module.css'


const GetUsernameForm = () => {
    const [id, setId] = useState();
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');

    const onInput = (e) => {
        setId(e.currentTarget.value);
        setUsername("");
        setError("");
    }

    const onClick = () => {
        if (!id) {
            setError('Введите ID');
        } else {
            const res = get_user(id);
            res.then(result => {
                if (!result["error"]){
                    setUsername(result.username);
                    setError("");
                } else {
                    setError(`Username с id=${id} не найден`);
                }
            });
            setId("");
        }
    }

    return (
        <div className={ styles.Wrapper }>
            <div>
                <input 
                    onInput={onInput}
                    type='Number'
                    className={styles.InputId}
                />
                <button
                    onClick={onClick}
                >Получить username</button>
            </div>
            <div>
                {error && <div>{error}</div>}
                {username && <div>Найден username: {username}</div>}
            </div>
        </div>
    );
}

export default GetUsernameForm;