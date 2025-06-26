import styled from "styled-components"
import { breakpoints } from "../../../../styles/global"
import { Link } from "react-router-dom"

export const CardLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    display: block;

    &:hover {
        opacity: 0.95;
    }
`

export const Card = styled.div`
    background-color: ${({ theme }) => theme.colors["white"]};
    color: ${({ theme }) => theme.colors["black"]};
    border: 1px solid ${({ theme }) => theme.colors["base-hover"]};
    border-radius: 6px;
    display: inline-block;
    position: relative;
    text-decoration: none;
    margin: 4px;

    img {
        width: 100%;
        height: 350px;
        display: block;
        object-fit: cover;
        margin-top: 10px;
    }

    @media (max-width: ${breakpoints.phone}){
        img{
            padding: 0px;
        }
    }
`

export const Name = styled.div`
    font-size: 14px;
    margin: 20px 10px;
    text-align: start;

    @media (max-width: ${breakpoints.phone}){
        text-align: center;
    }
`

export const AddCartWrapper = styled.div`
    display: flex;
    justify-content: space-between; 
    align-items: center;
    gap: 12px;
    margin: 20px 10px;

    @media (max-width: ${breakpoints.phone}) {
        flex-direction: column;        
        align-items: center;           
        text-align: center;
        gap: 8px;
    }
`

export const Price = styled.p`
    font-weight: bold;
`

export const Button = styled.button`
    background-color: ${({ theme }) => theme.colors["nude"]};
    border: 1px solid ${({ theme }) => theme.colors["nude"]};
    color: ${({ theme }) => theme.colors["white"]};
    font-weight: bold;
    padding: 8px;
    margin-top: 10px;
    border-radius: 6px;
    font-size: 14px;
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.colors["bege"]};
    }
`