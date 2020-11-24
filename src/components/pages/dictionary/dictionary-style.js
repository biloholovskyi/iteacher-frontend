import styled from 'styled-components';

const DictionaryContainer = styled.div`
  padding: 120px 48px;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  background-color: #F8F9FB;
`
const Title = styled.h1`
  color: var(--mainBlack);
  font-weight: 700;
  font-size: 28px;
  margin-bottom: 28px;
`
const Settings = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`
const Search = styled.form`
  max-width: 318px;
  position: relative;
  button {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0px;
    left: 4px;
    width: 45px;
    height: 45px;
    background: transparent;
    border: none;
    cursor: pointer;
  }
  #search {
    background-color: var(--mainGrey20);
    border-radius: 8px;
    padding: 13px 13px 13px 50px;
    border: none;
    width: 381px;
    font-size: 16px;
    font-weight: 400;
  }
`
const Sort = styled.div`
  display: flex;
  align-items: center;
  .sort {
    font-size: 16px;
    font-weight: 400;
    margin: 0 11px;
    color: var(--mainGrey60);
  }
  .alf {
    font-size: 16px;
    font-weight: 400;
    margin-right: 15px;
    color: var(--mainBlack);
  }
`
export {
  DictionaryContainer,
  Title, Settings, Search, Sort,
}