import styled from "styled-components";

const InfoContainer = styled.div`
  height: fit-content;
  width: 25%;
`
const Container = styled.div`
  background-color: var(--mainWhite);
  border-radius: 8px;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  -ms-border-radius: 8px;
  -o-border-radius: 8px;
  box-shadow: 0px 4px 4px 0px rgba(105, 112, 119, 0.16);
  padding: 24px;
  height: fit-content;
  margin-bottom: 24px;
  h2 {
    font-weight: 600;
    font-size: 20px;
    color: var(--mainBlack);
    margin: 0;
  }
`
const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid var(--mainGrey20);
  font-size: 14px;
  font-weight: 400;
  color: var(--mainGrey60);
  padding: 18px 0;
  .right {
    color: var(--mainBlack)
  }
`
const Button = styled.div`
  background-color: var(--mainBlue);
  border-radius: 6px;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  -ms-border-radius: 6px;
  -o-border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    color: var(--mainWhite);
    font-size: 16px;
    font-weight: 600;
    padding: 14px;
    cursor: pointer;
  }
`
const Teacher = styled.div`
  display: grid;
  margin: 24px 0;
  grid-template-columns: auto 1fr;
  grid-template-areas: "foto name"
                       "foto star";
  .teacher-foto {
    grid-area: foto;
    width: 40px;
    height: 40px;
    margin-right: 12px;
  }
  .teacher-foto {
    grid-area: foto;
    width: 40px;
    height: 40px;
    margin-right: 12px;
  }
  .teacher-name {
    grid-area: name;
  }
  .teacher-star {
    grid-area: star;
  }
`

export {
  InfoContainer,
  Container,
  Item,
  Button,
  Teacher
}