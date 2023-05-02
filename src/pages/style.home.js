import styled from "styled-components";
import img from '../assets/backgroudn.jpg';


export const Div = styled.div`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  section{
    background: linear-gradient(rgba(0, 0,1,0), rgba(0, 0, 0,0.4)), url('${img}');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    height: 100vh;
    color: #513838;
  }
  .Cards{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    }
  
  body a {
    flex-wrap: wrap;
    color: #ffffff;
    text-decoration: none;
    transition: 0.4s;
    font-weight: bolder;
    font-size: 18px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  body ul {
    list-style: none;
  }
  .icon{
    margin-left: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    color: white;
    cursor: pointer;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  
  .Twitter:hover{
    color: rgb(66, 162, 231);
  }
  .Facebook:hover{
    color: rgb(10, 128, 236);
  }
  .Youtube:hover{
    color: red;
  }
  .Instagram:hover{
    color: purple;
  }
  
  
  .Cards{
    margin-top: 100px;
  }
  main{
    margin-top: -600px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 120px;
    color: white;
    font-size: 2rem;
    padding: 0 200px;
    gap: 20px;
    text-shadow: 0.1em 0.1em rgb(0, 0, 0);
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-style: italic;
    text-align: center;
    margin-top: 150px;
  }
  @media (max-width: 667px) {
    .Cards{
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
    main{
      font-size: 24px;
      padding: 10px 20px;
    }
    .icon{
      flex-wrap: wrap;
      margin-right: 54px;
      color: rgb(0, 0, 0);
    }
    .header-social-media a,ul,li{
      color: black;
    }
  }
   
`;
