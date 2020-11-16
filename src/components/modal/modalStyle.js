import styled from "styled-components";

 const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  transition: 0.5s;
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  -ms-transition: 0.5s;
  -o-transition: 0.5s;
  width: 350px;
  height: 100%;
  left: ${props => props.activeModal ? 0 : "-350px;"};
  background-color: var(--mainWhite);
  padding: 24px;
  box-sizing: border-box;
  z-index: 10;
  ${props=>props.activeModal ? "box-shadow: 19px 0px 38px 0px rgba(105, 112, 119, 0.16)" : null}
  .modal_top {
    border-bottom: 1px solid var(--mainGrey20);
    padding-bottom: 24px;
  }
  .modal_description a {
    display: block;
    margin-top: 10px;
  }
  .modal_material {
    &-video {
      border: 1px solid var(--mainGrey20);
      box-sizing: border-box;
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 16px;
      cursor: pointer;
      span {
        margin-left: 20px;
      }
    }
    .images {
      margin-top: 16px;
      display: flex;
      justify-content: space-between;
      img {
        width: 30%;
      }
    }

  }
  .homework_item {
    display: flex;
    align-items: center;
    padding-top: 18px;
    cursor: pointer;
  }
`
const Title = styled.h2`
  font-weight: 600;
  font-size: 20px;
  color: var(--mainBlack);
  margin: 0;
`
const TitleSpan = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: var(--mainGrey60);
`
const MiniTitleH4 = styled.h4`
  font-weight: 600;
  font-size: 16px;
  color: var(--mainBlack);
  margin: 24px 0;
`
const Icon = styled.span`
  position: relative;
  width: 20px;
  height: 20px;
  margin-right: 20px;
  border-radius: 50%;
  border: 1px solid ${props => props.activeIcon ? "var(--mainGreen)" : "var(--mainGrey20)"};
  box-sizing: border-box;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  ${props=>props.activeIcon ? "background-color: var(--mainGreen);" : null}
  span {
    box-sizing: border-box;
    width: 10px;
    height: 5px;
    border-bottom: 1px solid var(--mainWhite);
    border-left: 1px solid var(--mainWhite);
    position: absolute;
    top: 5px;
    right: 3px;
    transform: rotate(-45deg);
  }
`
export {
  ModalContainer,
  Title,
  TitleSpan,
  MiniTitleH4,
  Icon
}