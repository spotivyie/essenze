import styled from "styled-components"
import { breakpoints } from "../../../../styles/global"

export const Row = styled.div`
    display: flex;
    column-gap: 14px;
    padding-bottom: 16px;

    @media (max-width: ${breakpoints.tablet}) {
        display: block;
    }
`

export const InputGroup = styled.div`
    flex: auto;

    label {
        font-size: 16px;
        margin: 18px 0;
        display: block;
        font-weight: 400;
    }

    select {
        width: 24%;
        padding: 10px;
        border: 1px solid ${({ theme }) => theme.colors["base-button"]};
        background: ${({ theme }) => theme.colors["base-input"]};
    }

    p {
        font-size: 14px;
        color: ${({ theme }) => theme.colors["base-text"]};
        line-height: 1.4;
    }

    @media (max-width: ${breakpoints.phone}) {
        select {
            width: 60%;
        }
    }
`

export const InstallmentsSelect = styled.select`
    width: 100%;
    max-width: 250px;
    padding: 12px 16px;
    border-radius: 8px;
    border: 1.5px solid ${({ theme }) => theme.colors["base-button"]};
    background-color: ${({ theme }) => theme.colors["base-input"]};
    color: ${({ theme }) => theme.colors["base-text"]};
    cursor: pointer;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        border-color: ${({ theme }) => theme.colors["black"]};
    }

    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors["black"]};
        box-shadow: 0 0 0 1px ${({ theme }) => theme.colors["black"]};
    }
    
    option {
        color: ${({ theme }) => theme.colors["base-text"]};
    }
    
    @media (max-width: ${breakpoints.phone}) {
        max-width: 100%;
    }
`
