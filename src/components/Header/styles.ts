import styled from "styled-components"
import { breakpoints } from '../../styles/global'

export const HeaderContainer = styled.header`
    width: 100%;
    height: 5rem;
    background: ${({ theme }) => theme.colors["black"]};
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0;

    > div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    @media (max-width: ${breakpoints.tablet}) {
        padding: 0 20px;
    }
`

export const LoginCart = styled.div`
    display: flex;
`

export const Login = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    padding-right: 20px;
    color: ${({ theme }) => theme.colors["nude"]};

    &:hover {
        color: ${({ theme }) => theme.colors["bege"]};
    }

    p {
        margin: 6px;
    }

    @media (max-width: ${breakpoints.phone}) {
        p {
            display: none;
        }
    }
`

export const HeaderButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    min-width: 2.3rem;
    height: 2.3rem;
    border-radius: 6px;
    border: none;
    padding: 0 0.5rem;
    position: relative;
    cursor: inherit;
    background: ${({ theme }) => theme.colors["nude"]};
    
    span {
        position: absolute;
        width: 1.25rem;
        height: 1.25rem;
        border-radius: 50%;
        top: calc(-1.25rem / 2);
        right: calc(-1.25rem / 2);
        color: ${({ theme }) => theme.colors["nude"]};
        background: ${({ theme }) => theme.colors["gray"]};
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.75rem;
        font-weight: 700;
    }

    &:hover {
        background: ${({ theme }) => theme.colors["bege"]};
        color: ${({ theme }) => theme.colors["black"]};
    }
`
