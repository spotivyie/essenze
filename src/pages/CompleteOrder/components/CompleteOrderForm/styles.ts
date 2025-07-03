import styled from "styled-components";
import { SectionBaseStyle } from "../../styles";
import { breakpoints } from "../../../../styles/global";

export const CompleteOrderFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    width: 40rem;

    @media (max-width: ${breakpoints.tablet}){
        align-items: center;
        width: 100%;
    }

    @media (max-width: ${breakpoints.phone}){
        width: 100%;
    }
`

export const FormSectionContainer = styled(SectionBaseStyle)`
    display: flex;
    flex-direction: column;

    @media (max-width: ${breakpoints.tablet}){
        padding-top:20px;
    }
`

export const AddressFormContainer = styled.div`
    width: 100%;
    display: grid;
    column-gap: 0.75rem;
    row-gap: 1rem;
    margin-top: 20px;
    margin-bottom: 20px;

    @media (max-width: ${breakpoints.tablet}){
        display: block;
    }
`

export const PaymentMethodOptionsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;

    > p {
        grid-column: span 3;
        color: ${({ theme }) => theme.colors["base-error"]};
    }
    
    @media (max-width: ${breakpoints.tablet}){
        grid-template-columns: repeat(2, 1fr);
    }
    
    @media (max-width: ${breakpoints.phone}){
        display: block;
    }
`

export const Row = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 12.5rem 17.25rem 3.75rem;
    column-gap: 0.75rem;
    row-gap: 1rem;
    grid-auto-flow: dense;

    .street {
        grid-column: span 2;
    }

    .complement {
        grid-column: span 2;
    }

    @media (max-width: ${breakpoints.tablet}) {
        display: block;

        .cep {
        max-width: 100%;
        }
    }
`
