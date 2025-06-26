import styled from "styled-components"
import { breakpoints } from "../../styles/global"

export const QuantityInputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background-color: ${({ theme }) => theme.colors["base-button"] || "#f3f3f3"};
    border-radius: 8px;
    padding: 0.4rem 0.75rem;

    input {
        width: 40px;
        height: 32px;
        border: none;
        background: transparent;
        font-size: 16px;
        text-align: center;
        color: ${({ theme }) => theme.colors["base-title"]};

        &:focus {
        outline: none;
        }
    }

    @media (max-width: ${breakpoints.phone}) {
        width: 100%;
        justify-content: center;
    }
`

export const IconWrapper = styled.button.attrs({ type: "button" })`
    width: 32px;
    height: 32px;
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.colors["black"]};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    cursor: pointer;
    transition: color 0.3s ease;

    &:disabled {
        opacity: 0.4;
        cursor: not-allowed;
    }

    &:hover,
    &:focus {
        color: ${({ theme }) => theme.colors["gray"]};
        background-color: transparent;
    }
`
