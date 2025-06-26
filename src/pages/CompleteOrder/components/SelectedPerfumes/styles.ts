import styled from "styled-components"
import { SectionBaseStyle } from "../../styles"
import { breakpoints } from "../../../../styles/global"

export const SelectedPerfumesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    width: 40rem;

    @media (max-width: ${breakpoints.tablet}) {
        width: 100%;
        padding-top: 60px;
        align-items: center;
    }
`

export const DetailsContainer = styled(SectionBaseStyle)`
    display: flex;
    flex-direction: column;

    @media (max-width: ${breakpoints.tablet}) {
        display: block;
    }
`

export const ConfirmationSectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`

export const Button = styled.button`
    padding: 0.75rem 2.8rem;
    color: ${({ theme }) => theme.colors["white"]};
    font-weight: 700;
    background: ${({ theme }) => theme.colors["gray"]};
    font-size: ${({ theme }) => theme.textSizes["components-button-g"]};
    border: none;
    border-radius: 6px;
    margin-top: 0.7rem;
    text-transform: uppercase;
    transition: 0.4s;
    line-height: 1.3rem;

    &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    }

    &:not(:disabled):hover {
        background: ${({ theme }) => theme.colors["black"]};
    }
`