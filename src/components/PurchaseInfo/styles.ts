import styled from 'styled-components'
import { breakpoints } from '../../styles/global'

export const PurchaseContainer = styled.div`
    padding: 100px 0;

    @media (max-width: ${breakpoints.desktop}){
        max-width: 80%;
    }
`

export const TreeOn = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: ${breakpoints.tablet}) {
        display: grid;
        grid-template-columns: repeat( 2, 1fr);
        gap: 24px;
    }

    @media (max-width: ${breakpoints.phone}) {
        padding-bottom: 30px;
    }
`

export const House = styled.div`
    display: block;
    text-align: center;

    @media (max-width: ${breakpoints.tablet}) {
        padding-bottom: 30px;
    }
`

export const Circle = styled.div`
    border-radius: 50%;
    padding: 10px;

`

export const Buy = styled.div`
    padding-left: 10px;

    h1{
        font-size: 24px;
    }

    p{
        padding-top: 6px;
    }
`