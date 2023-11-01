import styled from "styled-components";

export const MeetWrapper = styled.div`

  max-width: 1240px;
  width: 95%;
  margin: auto;
  color: var(--site-heading, #1E2123);

  h1{

    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  h2, h3{
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 137.5% */
  }
  h6{
    color: var(--bright-blue, #6772E5);
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px; /* 116.667% */
  }
`;
export const MeetHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 124px;
  div{
    width: 294px;
  }
`;
export const SoftwareView =styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 93px; 

`;
export const SoftwareWrapper = styled.div`
  h1{
    max-width: 260px;
  }
  h2{
    max-width: 310px;
  }
  h3{
    max-width: 280px;
  }
  h2{

    margin-top: 181px !important;
  }
  img{
    width: 100%;
    margin-left: 71px;
  }
`;

export const SoftwareImageWrapper = styled.div`
  position: relative;
  width: 100%;
    border-radius: 12px;
    contain: content;
  max-width: 847px;
 
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    object-position: center;
  }
  div {
      position: absolute;
      width: 100%;
      height: 100%;
      padding: 28px 48px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      top: 0;
      left: 0;
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.34) 0%, rgba(255, 255, 255, 0.80) 63.79%);
      backdrop-filter: blur(2px);
    p {
        color: #1E2123;
        font-size: 16px;
        font-weight: 600;
        line-height: 22px; /* 137.5% */
      }
  }
`