import React from 'react'
import Icon from "../../Background/lpg1.jpg";
import { ProductContainer,
         ProductH1,
         ProductWrapper,
         ProductCard,
         ProductH2,
         ProductIcon,
         ProductP,
           } from './ProductElements'

const Product = () => {
    return (
        <ProductContainer id ="product">
            <ProductH1>Our Product</ProductH1>
            <ProductWrapper>
                  <ProductCard>
                      <ProductIcon src={Icon} />
                      <ProductH2>Thread Pipe</ProductH2>
                      <ProductP>This pipe contains multiple layes of thread that provide durability and strenth to pipe</ProductP>                      
                  </ProductCard>
                  <ProductCard>
                      <ProductIcon src={Icon} />
                      <ProductH2>Thread Pipe</ProductH2>
                      <ProductP>This pipe contains multiple layes of thread that provide durability and strenth to pipe</ProductP>                      
                  </ProductCard>
                  <ProductCard>
                      <ProductIcon src={Icon} />
                      <ProductH2>Thread Pipe</ProductH2>
                      <ProductP>This pipe contains multiple layes of thread that provide durability and strenth to pipe</ProductP>                      
                  </ProductCard>
            </ProductWrapper>
        </ProductContainer>
    )
}

export default Product
