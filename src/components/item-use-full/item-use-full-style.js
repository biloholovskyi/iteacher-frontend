import styled from 'styled-components';

const ItemUseFullWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
const ItemUseFullContainer = styled.div`
  width: 32%;
  border-radius: 8px;
  box-shadow: 0px 2px 2px 0px rgba(105, 112, 119, 0.12);
  overflow: hidden;
  background-color: var(--mainWhite);
  margin-bottom: 24px;
  .img {
    width: 100%;
    height: 324px;
    overflow: hidden;
    img {
      width: 100%;
      object-fit: cover;
      position: relative;
      top: 0;
      height: 100%;
    }
  }
  .description {
    margin: 16px;
    font-size: 16px;
    font-weight: 400;
    color: var(--mainBlack);
  }
  .like-date {
    display: flex;
    justify-content: space-between;
    margin: 0 16px 16px;
    font-size: 14px;
    font-weight: 500;
    color: var(--mainGrey60);
    .like {
      display: flex;
      align-items: center;
      svg {
        margin-right: 10px;
      }
    }
  }
`
export {
  ItemUseFullWrapper,
  ItemUseFullContainer
}