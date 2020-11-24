import React from 'react';

import { ItemDictinaryContainer, Left, Right } from './item-dictinary-style';

const ItemDictinary = ({ itemsDictionary }) => {
  return (
    itemsDictionary.map((item)=>{
      return <ItemDictinaryContainer>
        <Left>
          <div className="volume">
            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.5 8C13.5 6.23 12.48 4.71 11 3.97V12.02C12.48 11.29 13.5 9.77 13.5 8ZM0 5V11H4L9 16V0L4 5H0Z" fill="#697077"/>
            </svg>
          </div>
          <div className="img">
            <img src={item.img} alt="icon"/>
          </div>
          <div className="translate">
            <div className="word">{item.wordEN}</div>
            <div className="tran">{item.wordRU}</div>
          </div>
        </Left>
        <Right>
          <span></span>
          <span></span>
          <span></span>
        </Right>
      </ItemDictinaryContainer>
    })
    
  );
};

export default ItemDictinary;