import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

// styling for Title of "YOUR BAG"
const Title = styled.h1`
  // makes the font bolder
  font-weight: 300;
  // makes the title center of the screen
  text-align: center;
`;

// styling for div that holds the buttons / text
const Top = styled.div`
  // allows items to be places horizontally
  display: flex;
  // places items from the center of the screen
  align-items: center;
  // provides equal space between each element
  justify-content: space-between;
`;

// styling for the Continue Shopping button / CheckOut Now
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
`;
const TopTexts = styled.div``;

// styling for the Shopping Bag / Wishlist texts
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div``;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton>CheckOut Now</TopButton>
        </Top>
        <Bottom></Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
