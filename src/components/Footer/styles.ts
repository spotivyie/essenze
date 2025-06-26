import styled from 'styled-components'
import { breakpoints } from '../../styles/global'

export const Footer = styled.footer`
    background: ${({ theme }) => theme.colors["black"]};
    color: ${({ theme }) => theme.colors["nude"]};
    padding: 2rem 1rem 1rem;

    span {
        border: 1px solid ${({ theme }) => theme.colors["nude"]};
        display: block;
        margin: 1rem 0;
    }

    p {
        padding: 4px 0;
        color: ${({ theme }) => theme.colors["nude"]};
        font-size: 16px; /* aumentado de 14px */
    }
`

export const FooterContainer = styled.div`
    max-width: 1224px;
    margin: 0 auto;
`

export const FooterContent = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 2.5em;
    padding-top: 2.5em;

    @media (max-width: ${breakpoints.phone}) {
        display: block;
        padding-left: 10px;
    }
`

export const FooterNote = styled.div`
    text-align: center;

    p {
        font-size: 13px; /* levemente aumentado */
        color: ${({ theme }) => theme.colors["nude"]};
    }
`

export const ContactSocialSection = styled.div`
    div {
        display: flex;
        align-items: center;
        padding-bottom: 20px;

        h1 {
            font-size: 24px; /* aumentado de 20px */
            padding-left: 10px;
            color: ${({ theme }) => theme.colors["nude"]};
            font-family: inherit; /* remove a fonte personalizada */
        }

        svg {
            color: ${({ theme }) => theme.colors["nude"]};
        }
    }

    p {
        font-size: 16px; /* aumentado de 14px */
        color: ${({ theme }) => theme.colors["nude"]};
    }

    @media (max-width: ${breakpoints.tablet}) {
        div {
            padding: 0 10px;
        }
    }

    @media (max-width: ${breakpoints.phone}) {
        div {
            padding-top: 40px;
            padding-bottom: 10px;
        }
    }
`

export const Image = styled.p`
    display: flex;

    div {
        cursor: pointer;
        padding-right: 6px;

        svg {
            color: ${({ theme }) => theme.colors["nude"]};
            transition: color 0.3s ease;

            &:hover {
                color: ${({ theme }) => theme.colors["white"]};
            }
        }
    }

    @media (max-width: ${breakpoints.phone}) {
        justify-content: start;
    }
`

export const LogoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h2 {
        font-size: 26px; /* aumentado de 24px */
        font-family: inherit; /* remove a fonte */
        margin-bottom: 0.5rem;
        color: ${({ theme }) => theme.colors["nude"]};
    }

    p {
        font-size: 16px; /* aumentado de 14px */
        color: ${({ theme }) => theme.colors["nude"]};
    }

    @media (max-width: ${breakpoints.phone}) {
        padding-top: 40px;
    }
`
