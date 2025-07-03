import styled, { css } from "styled-components"
import { breakpoints } from "../../../../styles/global"

export const PaymentMethodContainer = styled.div`
    input {
        visibility: hidden;
        appearance: none;
    }

    padding-bottom: 20px;

    input:checked + label div {
        ${({ theme }) => css`
            background: ${theme.colors["lightGray"]};
            border-color: ${theme.colors["base-label"]};

            &:hover {
                background: ${theme.colors["base-hover"]};
            }
        `}
    }

    @media (max-width: ${breakpoints.tablet}) {
        padding-bottom: 0px;
    }
`

export const ContentContainer = styled.div`
    padding: 0 1rem;
    background: ${({ theme }) => theme.colors["base-button"]};
    color: ${({ theme }) => theme.colors["base-text"]};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.75rem;
    font-size: 0.75rem;
    text-transform: uppercase;
    border-radius: 6px;
    height: 3rem;
    border: 1px solid ${({ theme }) => theme.colors["base-button"]};
    transition: 0.4s;

    svg {
        color: ${({ theme }) => theme.colors["black"]};
    }

    &:hover {
        background: ${({ theme }) => theme.colors["base-hover"]};
    }

    user-select: none;
`
