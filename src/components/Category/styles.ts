import styled from "styled-components"
import { breakpoints } from '../../styles/global'

export const Category = styled.div`
    width: 32px;
    padding-left: 10px;
    margin-left: 10px;
    cursor: pointer;
    padding-bottom: 20px;
    position: relative;
    z-index: 100;


    @media (min-width: ${breakpoints.tablet}) {
        display: none;
    }

    @media (max-width: ${breakpoints.tablet}) {
        margin-left: auto;
        margin-right: 20px;
    }

    span {
        height: 2px;
        display: block;
        width: 100%;
        background-color: ${({ theme }) => theme.colors["white"]};
        margin-bottom: 4px;
    }
`

export const NavMobile = styled.nav`
    display: none;
    padding: 10px 0;
    margin-top: 20px;

    &.is-open {
        display: block;
        width: 100%;
        padding: 10px;
        position: absolute;
        background: ${({ theme }) => theme.colors["black"]};
        top: 3.5rem; 
        left: 0;
        z-index: 20;
    }

    @media (min-width: 768px) {
        display: flex;
        position: static;
        background: transparent;
        padding: 0;
        margin-top: 0;
        width: auto;
    }

    a {
        color: ${({ theme }) => theme.colors["nude"]};
        text-decoration: none;

        p {
            margin: 0;
            color: ${({ theme }) => theme.colors["nude"]};
        }

        &:hover {
            color: ${({ theme }) => theme.colors["bege"]};
            p {
                color: ${({ theme }) => theme.colors["bege"]};
            }
        }
    }
`

export const NavItems = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    padding-bottom: 20px;

    @media (max-width: ${breakpoints.tablet}) {
        align-items: flex-end; 
        padding-right: 10px;
    } 

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: flex-end;
        gap: 24px;
    }
`

export const Perfumes = styled.div`
    padding: 16px 0;

    @media (min-width: 768px) {
        padding: 0;
    }

    p {
        color: ${({ theme }) => theme.colors["black"]};

        @media (min-width: 768px) {
        color: ${({ theme }) => theme.colors["nude"]};
        }
    }
`
