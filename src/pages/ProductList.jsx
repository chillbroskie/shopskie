import React from 'react'
import styled from "styled-components";
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Footer from '../components/Footer'

const Container = styled.div`

`;

const Title = styled.h1`
  margin: 20px;

`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;

`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;


const Option = styled.option`
  
`;

const ProductList = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement />
      <Title>Art</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products</FilterText>
          <Select>
            <Option disabled selected>
              pokemon
            </Option>
            <Option>twitch</Option>
            <Option>games</Option>
            <Option>nike</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (dec)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default ProductList
