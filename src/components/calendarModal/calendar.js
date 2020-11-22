import React, {Component} from 'react';
import classnames from 'classnames';
import * as calendar from './date';
// styled
import calendars from '../../assets/media/icon/calendar.svg';
import {CalendarWrap} from './CalendarStyled';
import calendarArrow from '../../assets/media/icon/calendarArrow.svg';
export default class Calendar extends Component {
  static defaultProps = {
    date: new Date(),
    years: [2020, 2021, 2022, 2023, 2024, 2025],
    monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    weekDayNames: ['Пн', 'Вт', 'Ср', 'Чт' , 'Пт', 'Сб', 'Вс'],
    onChange: Function.prototype
  };

  state = {
    date: this.props.date,
    currentDate: new Date(),
    selectedDate: null
  };

  get year() {
    return this.state.date.getFullYear();
  }

  get month() {
    return this.state.date.getMonth();
  }

  get day() {
    return this.state.date.getDate();
  }
  // change prev month in calendar
  handlePrevMonthButtonClick = () => {
    const date = new Date(this.year, this.month - 1);

    this.setState({ date });
  };
// change next month in calendar
  handleNextMonthButtonClick = () => {
    const date = new Date(this.year, this.month + 1);

    this.setState({ date });
  };

  handleSelectChange = () => {
    const year = this.yearSelect.value;
    const month = this.monthSelect.value;

    const date = new Date(year, month);

    this.setState({ date });
  };

  handleDayClick = date => {
    this.setState({ selectedDate: date });

    this.props.onChange(date);
  };

  render() {
    const { years, monthNames, weekDayNames } = this.props;
    const { currentDate, selectedDate } = this.state;
    const { date } = this.state;

    const monthData = calendar.getMonthData(this.year, this.month);

    return (
      <CalendarWrap>
        <header>
          <img src={calendars} alt="icon"/>
          <div>
            {monthNames[date.getMonth()]},
            {date.getFullYear()}
          </div>
          {/*<select*/}
          {/*  ref={element => this.monthSelect = element}*/}
          {/*  value={this.month}*/}
          {/*  onChange={this.handleSelectChange}*/}
          {/*>*/}
          {/*  {monthNames.map((name, index) =>*/}
          {/*    <option key={name} value={index}>{name}</option>*/}
          {/*  )}*/}
          {/*</select>*/}

          {/*<select*/}
          {/*  ref={element => this.yearSelect = element}*/}
          {/*  value={this.year}*/}
          {/*  onChange={this.handleSelectChange}*/}
          {/*>*/}
          {/*  {years.map(year =>*/}
          {/*    <option key={year} value={year}>{year}</option>*/}
          {/*  )}*/}
          {/*</select>*/}
          <button onClick={this.handlePrevMonthButtonClick}><img className={'prev'} src={calendarArrow} alt="icon"/></button>
          <button onClick={this.handleNextMonthButtonClick}><img className={'next'} src={calendarArrow} alt="icon"/></button>
        </header>

        <table>
          <thead>
          <tr>
            {weekDayNames.map(name =>
              <th key={name}>{name}</th>
            )}
          </tr>
          </thead>

          <tbody>
          {monthData.map((week, index) =>
            <tr key={index} className="week">
              {week.map((date, index) => date ?
                <td
                  key={index}
                  className={classnames('day', {
                    'today': calendar.areEqual(date, currentDate),
                    'selected': calendar.areEqual(date, selectedDate)
                  })}
                  onClick={() => this.handleDayClick(date)}
                ><div>{date.getDate()}</div></td>
                :
                <td key={index} className={'disable'} ></td>
              )}
            </tr>
          )}
          </tbody>
        </table>
      </CalendarWrap>
    );
  }
}