import styled from "styled-components"
import { breakpoints } from "../../../../styles/global"

export const OurPerfumesContainer = styled.section`
    background-color: ${({ theme }) => theme.colors["page"]};
    padding: 40px 0px;

    h3 {
        line-height: 130%;
        color: ${({ theme }) => theme.colors["black"]};
        font-size: 30px;
        text-align: center;

        @media (max-width: ${breakpoints.phone}) {
            font-size: 24px;
        }
    }

    p {
        font-size: 20px;
        text-align: center;
        padding-top: 10px;
        color: ${({ theme }) => theme.colors["base-label"]};

        @media (max-width: ${breakpoints.phone}) {
            font-size: 16px;
        }
    }
`

export const PerfumesList = styled.div`
    max-width: 1224px;
    margin: 0 auto;
`

export const BestSellers = styled.div`
    max-width: 1224px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.tablet}) {
        padding-top: 3rem;
        padding-left: 20px;
        padding-right: 20px;
    }

    @media (max-width: ${breakpoints.phone}) {
        padding: 40px 12px;
    }
`

export const ShowMoreButton = styled.button`
    margin: 2rem auto 0;
    padding: 0;
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors["black"]};
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    transition: color 0.3s ease;

    &:hover {
        color: ${({ theme }) => theme.colors["darkGray"]};
    }

    @media (max-width: ${breakpoints.tablet}) {
        font-size: 1rem;
    }

    @media (max-width: ${breakpoints.phone}) {
        font-size: 0.95rem;
    }
`
