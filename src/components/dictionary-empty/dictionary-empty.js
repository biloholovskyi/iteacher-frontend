import React from 'react';
import styled from 'styled-components';

const DictionaryEmpty = () => {
  return (
    <DictionaryEmptyContainer>
      <Dictionary>
        <div className="border"></div>
        <div className="title">Ваш словарь пуст</div>
        <div className="desription">Добавьте  первое слово</div>
        <Button>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 0H8V8L0 8V10H8V18H10V10H18V8L10 8V0Z" fill="white"/>
          </svg>
          <span>Добавить курс</span>
        </Button>
      </Dictionary>
    </DictionaryEmptyContainer>
  );
};
const DictionaryEmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #F8F9FB;
`
const Dictionary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .border {
    border-radius: 16px;
    width: 360px;
    height: 360px;
    border: 2px dashed var(--mainGrey20);
  }
  .title {
    color: var(--mainGrey60);
    font-weight: 400;
    font-size: 32px;
    text-align: center;
    margin-top: 36px;
  }
  .desription {
    color: var(--mainGrey60);
    font-weight: 400;
    text-align: center;
    margin-top: 16px;
    font-size: 16px;
  }
`
const Button = styled.div`
  display: flex;
  align-items: center;
  max-width: 192px;
  border-radius: 6px;
  padding: 14px 20px;
  background-color: var(--mainBlue);
  margin-top: 32px;
  cursor: pointer;
  span {
    font-weight: 600;
    font-size: 16px;
    color: var(--mainWhite);
    margin-left: 11px;
  }
`
export default DictionaryEmpty;