import styled from "styled-components";

const StudentEmptyWrap = styled.div`
      width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    min-height: 100vh;
    padding-top: 122px;
    img {
      width: 350px;
      height: 350px;
      object-position: center;
      object-fit: cover;
      margin-bottom: 30px;
    }
    p {
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 42px;
    letter-spacing: -0.01em;
    color: #697077;
    max-width: 450px;
    text-align: center;
    margin-bottom: 16px;
    }
    .smallTitle {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.01em;
    color: #697077;
    }
`
export {StudentEmptyWrap}
