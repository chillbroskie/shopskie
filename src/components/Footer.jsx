import { AlternateEmail, GitHub, LinkedIn, Phone, Twitter } from '@material-ui/icons';
import React from 'react'
import styled from "styled-components";

const Container = styled.div`
  display: flex;

`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;

`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color:white;
  background-color: #${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;

`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;


const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>ChillBroskie</Logo>
        <Desc>
          My name is Matthew Evans. I'm a Full Stack Web & Mobile Developer. It's a passion of mine to help build and create simple/sleek user experiences on the client-side as well as how to support that on the backend server-side.
        </Desc>
        <SocialContainer>
          <SocialIcon color="0077b5">
            <LinkedIn />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="4078c0">
            <GitHub />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Casual</ListItem>
          <ListItem>Active</ListItem>
          <ListItem>Gear</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem><Phone style={{marginRight:"10px"}}/>+1 724-771-1111</ContactItem>
        <ContactItem><AlternateEmail style={{marginRight:"10px"}}/>maevans724@gmail.com</ContactItem>
      </Right>
    </Container>
  )
}

export default Footer
