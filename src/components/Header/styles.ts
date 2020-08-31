import styled from 'styled-components';
import { AiOutlineSearch, AiOutlineGift } from 'react-icons/ai';
import { BsBell } from "react-icons/bs";

export const Content = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  padding:  0 45px;
  background-color: rgb(20, 20, 20);


  display: flex;
  align-items:center;

  @media (max-width: 700px) {
    justify-content: space-between;
  }

`;

export const Logo = styled.img`
    padding: 10px 0;
    width: 7vw;
    height: 7vh;
    cursor: pointer;
`;

export const NaviBar = styled.nav`
    flex-grow: 2;

    a{
      margin-left: 1.3vw;
      color: white;
      text-decoration: none;
      cursor: pointer;
    }

    @media (max-width: 700px) {
    display: none;
  }
`;

export const Utilities = styled.div`
  width: 15vw;
  
  display: flex;
  justify-content: space-around;
  align-items: center;

`;

export const SearchIcon = styled(AiOutlineSearch)`
    
    height: 7vh;
    width: 2vw;
    cursor: pointer;
    
`;

export const GiftIcon = styled(AiOutlineGift)`
    
    height: 7vh;
    width: 2vw;
    cursor: pointer;
`;

export const BellIcon = styled(BsBell)`
    height: 7vh;
    width: 2vw;
    cursor: pointer;
`;

export const ProfileIcon = styled.div`
    cursor: pointer;  
    img{
    height: 4.5vh;
      width: 2.5vw;
    }
`;