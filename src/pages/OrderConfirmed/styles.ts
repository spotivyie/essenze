import styled from "styled-components"

export const OrderConfirmedContainer = styled.main`
    display: flex;
    justify-content: center;
    margin: 4rem;
    padding: 0 1rem;
`

export const OrderDetailsContainer = styled.section`
    background: ${({ theme }) => theme.colors["base-background"]};
    border-radius: 10px;
    padding: 2.5rem;
    max-width: 600px;
    width: 100%;
    box-shadow: 0 0 20px rgba(0,0,0,0.1);

    display: flex;
    flex-direction: column;
    gap: 2rem;

    header {
        h1, p {
        margin: 0;
        }
    }

    footer {
        margin-top: 1rem;
        color: ${({ theme }) => theme.colors["base-text"]};
    }
`

export const InfoSection = styled.div`
    margin-top: 1rem;
    
    & > * + * {
        margin-top: 2rem;
    } 
`