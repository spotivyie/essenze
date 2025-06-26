import styled from 'styled-components'
import { breakpoints } from '../../styles/global'

export const Perfumes = styled.div`
    max-width: 1224px;
    margin: 0 auto;
    padding-top: 60px;
    padding-bottom: 100px;

    h1 {
        font-size: 2rem;
        color: ${({ theme }) => theme.colors["black"]};
        text-align: center;

        @media (max-width: ${breakpoints.tablet}) {
            font-size: 2rem;
        }

        @media (max-width: ${breakpoints.phone}) {
            font-size: 1.6rem;
            margin-bottom: 1.5rem;
        }
    }

    @media (max-width: ${breakpoints.tablet}) {
        padding: 40px 20px 100px 20px;
    }

    @media (max-width: ${breakpoints.phone}) {
        padding: 40px 12px;
    }
`

export const StickyHeaderWrapper = styled.div`
    position: sticky;
    top: 0;
    z-index: 10;
    background: ${({ theme }) => theme.colors.black};
`