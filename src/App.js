import React, {useState} from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import SaveUsername from './components/SaveUsernameForm/saveUsernameForm';
import GetUsernameForm from './components/GetUsernameForm/getUsernameForm';

import './App.css';


function App() {
  const dispatch = useDispatch();
  const count = useSelector( state => state.count);

  const onClickIncrement = () => {
    dispatch({type: "INCREMENT", payload: 1})
  }

  const onClickDecrement = () => {
    dispatch({type: "DECREMENT", payload: 1})
  }

  const [isColor, setIsColor] = useState(false);
  const onClick = () => {
    setIsColor(!isColor);
  }
  return (
      <div className="Wrapper">
        <h1 className={ classNames("FirstStyleH1", {["SecondStyleH1"]:isColor} )}>
          Задание на практику МЭИ
        </h1>
        <button onClick={onClick}>
          Изменить цвет заголовка
        </button>
        <div>
          <SaveUsername />
          <GetUsernameForm />
        </div>
        <ul>
          <li>Структура web-сайта</li>
          <li>Серверная часть</li>
          <li>Клиентская часть</li>
        </ul>
        <div className="CountClickWrapper">
          Счетчик:
          <div className="Count">
            Количество: {count}
          </div>
          <div className="CountIncrementButton">
            <button 
              className="IncrementBtn"
              onClick={onClickIncrement}
            >
              Инкремент
            </button>
          </div>
          <div className="CountDecrementButton">
            <button 
              className="DecrementBtn"
              onClick={onClickDecrement}
            >
              Декремент
            </button>
          </div>
        </div>
        <div className="Container">
          Текст на зелёном фоне
        </div>
        <a href="https://mpei.ru">Ссылка на сайт МЭИ</a>
      </div>
  );
}

export default App;

