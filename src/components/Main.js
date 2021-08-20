import React from 'react'
import styled from "styled-components";
import Categories from './Categories';
import Slider from './Slider';

const Container = styled.div`
    display:grid;
    height:100%;
    width: 100%;
    grid-template-rows:1fr 1.9fr;
    grid-template-areas:
        "slider"
        "categories";
    text-align:center;
    transition: all 0.25s ease-in-out;
    @media (max-width: 550px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 2.5fr;
        grid-template-areas:
          "slider"
          "categories";
      }
`;

const SliderContent = styled.div`
    grid-area:slider;
    margin-top: 10px;
`

const CategoriesContent = styled.div`
    grid-area:categories;
`;

export default function Main() {
    return (
        <Container>
            <SliderContent>
                <Slider />
            </SliderContent>
            <CategoriesContent>
                <Categories />
            </CategoriesContent>
        </Container>
        
    )
}
