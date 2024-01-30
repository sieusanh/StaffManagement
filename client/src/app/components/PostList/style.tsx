'use client';
import styled from 'styled-components';


const GridContainer = styled.div`
    display: grid;
    // align-items: center;
    // justify-content: center;
    grid-gap: 40px;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 200px;
`;

const GridCell = styled.div`
    width: 100%;
    justify-self: center;
    align-self: center;
    border-color: red;
`;

export { GridContainer, GridCell };
