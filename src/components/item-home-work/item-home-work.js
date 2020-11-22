import React from 'react';
import format from 'date-fns/format'
import ruLocale from "date-fns/locale/ru";

import BackTime from '../back-time';

import { ItemHomeWorkContainer, Left, Title, DateContainer, Right, Button, Procent } from './item-home-work-style';

const ItemHomeWork = ({ itemsHomeWork }) => {
  return (
    itemsHomeWork.map((item) => {
      return <ItemHomeWorkContainer key={item.id}>
        <Left>{/*левая часть*/}
          <Title>
            <div className="number">#{item.id}</div>{/*Номер по порядку*/}
            <div className="title">{item.title}</div>{/*Название урока*/}
          </Title>
          <DateContainer>
            Надо выполнить до {format(new Date(item.date),'d LLLL',{locale: ruLocale})}, 09:00-10:00
          </DateContainer>
        </Left>
        <Right>{/*правая часть*/}
          {!item.runNow
            ? <BackTime time={item.date} HW/>// отсчет времени и флаг чтобы отобразить время красным
            : <Procent>Выполнено 88%</Procent> // надо найти зависимость??????????
          }
          <Button action={item.action}>
            <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0V14L11 7L0 0Z" fill={!item.action ? "#4F7FFF" : "#fff"}/>{/*Знак треугольника для продолжения*/}
            </svg>
            <span>{item.runNow ? "Продолжить" : "Начать выполнение"}</span>
          </Button>
        </Right>
      </ItemHomeWorkContainer>
    })
  );
};

export default ItemHomeWork;