import styled from 'styled-components';

const ItemDictinaryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 2px 2px 0px rgba(105, 112, 119, 0.12);
  background-color: var(--mainWhite);
  padding: 16px 23px;
  border-radius: 8px;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  -ms-border-radius: 8px;
  -o-border-radius: 8px;
  margin-bottom: 9px;
`
const Left = styled.div`
  display: flex;
  align-items: center;
  .volume {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: var(--mainGrey20);
    cursor: pointer;
  }
  .img {
    width: 48px;
    height: 48px;
    overflow: hidden;
    border-radius: 8px;
    margin: 0 24px;
    img {
      position: relative;
      top: 0;
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }
  .translate {
    text-transform: capitalize;
    .word {
      font-size: 16px;
      font-weight: 400;
      color: var(--mainBlack);
    }
    .tran {
      font-size: 14px;
      font-weight: 400;
      color: var(--mainGrey60);
    }
  }
`
const Right = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  span {
    display: inline-block;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: var(--mainGrey60);
  }
  span:nth-child(2) {
    margin: 0 2px;
  }
`
export {
  ItemDictinaryContainer,
  Left,
  Right
}