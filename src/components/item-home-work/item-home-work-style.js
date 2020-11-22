import styled from 'styled-components';

const ItemHomeWorkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 2px 2px 0px rgba(105, 112, 119, 0.12);
  background-color: var(--mainWhite);
  padding: 19px 24px;
  border-radius: 8px;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  -ms-border-radius: 8px;
  -o-border-radius: 8px;
  margin-bottom: 9px;
`
const Left = styled.div`
`
const Title = styled.div`
  * {
    display: inline-block;
    font-weight: 400;
    font-size: 16px;
    color: var(--mainBlack);
  }
  .title {
    margin-left: 5px;
  }
`
const DateContainer = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: var(--mainGrey60);
`
const Right = styled.div`
  display: flex;
  align-items: center;
`
const Button = styled.div`
  max-width: 232px;
  border-radius: 6px;
  padding: 12px 20px;
  background-color: ${props=>!props.action ? "transparent" : "var(--mainBlue)"};
  margin-left: 32px;
  ${props=>!props.action ? "border: 1px solid var(--mainGrey20);" : null};
  cursor: pointer;
  span {
    font-weight: 600;
    font-size: 16px;
    color: ${props=>!props.action ? "var(--mainBlue)" : "var(--mainWhite)"};
    margin-left: 13px;
  }
`
const Procent = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: var(--mainBlue);
`

export {
  ItemHomeWorkContainer,
  Left,
  Title,
  DateContainer,
  Right,
  Button,
  Procent
}