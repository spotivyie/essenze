import styled from "styled-components"
import { breakpoints } from "../../styles/global"

export const CompleteOrderContainer = styled.form`
    width: 100%;
    margin-top: 4.5rem;
    margin-bottom: 4.5rem;
    display: flex;
    justify-content: space-between;
    gap: 6rem;

    @media (max-width: ${breakpoints.tablet}){
        display: block;
        align-items: center;
    }
`

export const SectionBaseStyle = styled.div`
    width: 100%;
    background: ${({ theme }) => theme.colors["base-card"]};

    @media (max-width: ${breakpoints.tablet}) {
        width: 80%;
    }
`
