import styled from "styled-components"
import { breakpoints } from "../../../../styles/global"

export const PerfumesCartCardContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    border-bottom: 1px solid ${({ theme }) => theme.colors["base-button"]};
    padding-bottom: 2rem;
    margin-bottom: 2rem;

    > div {
        display: flex;
        align-items: center;
        gap: 1.75rem;

        img {
            width: 5rem;
            height: 5rem;
            object-fit: cover;
        }
    }

    @media (max-width: ${breakpoints.tablet}) {
        >p {
            text-align: end;
        }
    }

    @media (max-width: ${breakpoints.phone}) {
        display: block;
        align-items: center;
        text-align: center;

        > div {
            display: block;
            align-items: center;
            gap: 1.25rem;
    
            img {
                width: 4rem;
                height: 4rem;
                margin-bottom: 20px;
            }
        }
    }
`

export const Text = styled.div`
    > p{
        padding-top: 8px;
    }
`

export const ActionsContainer = styled.div`
    margin-top: 0.5rem;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;

    @media (max-width: ${breakpoints.phone}) {
        justify-content: center;
        margin-top: 10px;
    }
`

export const RemoveButton = styled.button`
    display: flex;
    align-items: center;
    gap: 0.25rem;
    color: ${({ theme }) => theme.colors["base-text"]};
    font-size: 0.75rem;
    height: 100%;
    border: none;
    background: ${({ theme }) => theme.colors["base-button"]};
    padding: 1.5rem;
    border-radius: 6px;
    transition: 0.4s;

    svg {
        color: ${({ theme }) => theme.colors["black"]};
    }

    &:hover {
        background: ${({ theme }) => theme.colors["base-hover"]};
    }
`
