import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import { createStore } from 'redux'
import './styles.css';
import {timerReducer, changeSeconds, restart} from './timerReducer.js';
import RoundButton, { RESTART_SIGN } from './components/RoundButton';
import Timer from './components/Timer';
import Sandglass from './components/Sandglass';

/**
    Отрефактори приложение так, чтобы оно использовало Redux, а затем расширь его функционал.

    1. Переизобретать Redux не нужно.
    Просто создай appStore с помощью createStore из Redux и используй импортированный timerReducer.

    2. timerReducer, а также пару action creator'ов changeSeconds и restart еще предстоит написать.
    Так как timerReducer - это чистая функция, то ее удобно тестировать модульно.
    Все необходимые тесты уже есть: запускай с помощью команды `npm run test-sandglass` в терминале.
    Реализуй timerReducer, changeSeconds и restart так, чтобы тесты проходили.
    Выдели значения type'ов действий в качестве const в начале файла.
    Разбивать timerReducer на несколько файлов не нужно.

    3. Пришло время воспользоваться appStore.
    Передай его внутрь компонента App через props. Не забудь отредактировать App.propTypes.
    Сделай так, чтобы state инициализировался с помощью getState из store.
    Затем сделай так, чтобы вместо setState вызывался store.dispatch с нужным action.
    Далее, подпишись на обновление состояния в componentDidMount.
    Для этого вызови this.props.store.subscribe со своим обработчиком (подойдет стрелочная функция без параметров).
    Наконец, отпишись от обновлений состояния в componentWillUnmount.
    Для этого вызови функцию, которую возвращает subscribe.

    4. Визуализация состояния может происходить разными способами.
    Пусть приложение сразу после Timer отрисовывает компонент Sandglass, также передавая ему секунды из state.

    5. Изменения состояния приложения могут происходить вне React.
    Сделай так, чтобы каждые 250 мс поисходил dispatch с changeSeconds(-0.25). Для этого тебе пригодится setInterval.
    Теперь даже без нажатий на кнопки время потихоньку тикает.

    6. Изменения состояния могут происходить из-за разных действий.
    Добавь под песочные часы кнопку RoundButton, в качестве content используй RESTART_SIGN.
    Нажатие на получившуюся кнопку должно стартовать отсчет времени заново.
 */

// const appStore = ...;

class App extends React.Component {
  state = {seconds: 15};

  handleDecrease = () => {
    this.setState(prevState => ({seconds: prevState.seconds - 1}));
  }

  handleIncrease = () => {
    this.setState(prevState => ({seconds: prevState.seconds + 1}));
  }

  render() {
    return (
      <div className="app">
        <Timer seconds={this.state.seconds}
          onDecrease={this.handleDecrease} onIncrease={this.handleIncrease}
        />
      </div>
    );
  }
}

App.propTypes = {
  //store: PropTypes.object.isRequired,
};

ReactDom.render(<App />, document.getElementById('app'));
