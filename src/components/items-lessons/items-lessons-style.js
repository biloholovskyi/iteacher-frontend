import styled from "styled-components";

const ItemLesson = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 25% 34%;
  align-items: center;
  box-shadow: ${props=>props.activeItem ? "0px 19px 38px 0px rgba(105, 112, 119, 0.16)" : "0px 2px 2px 0px rgba(105, 112, 119, 0.12)"};
  background-color: var(--mainWhite);
  padding: 22px 24px;
  border-radius: 8px;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  -ms-border-radius: 8px;
  -o-border-radius: 8px;
  margin-bottom: 9px;
  cursor: pointer;
  ${props=>props.activeItem ? "z-index: 2;" : null}
  ${props=>props.activeItem ? "position: sticky;" : null}
  .item-lesson_hwfalse {
    display: flex;
    justify-content: center;
    justify-self: right;
    align-items: center;
    font-size: 14px;
    color: var(--mainRed);
    font-weight: 400;
    background: rgba(218, 30, 40, 0.1);
    border-radius: 6px;
    padding: 10px;
    max-width: 300px;
    svg {
      margin-right: 14px;
    }
  }
`
const DateTime = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: var(--mainGrey60);
  .date {
    color: var(--mainBlack);
    text-transform: uppercase;
    font-weight: 500;
  }
`
const Title = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: var(--mainBlack);
`
export {
  ItemLesson,
  DateTime,
  Title,
}