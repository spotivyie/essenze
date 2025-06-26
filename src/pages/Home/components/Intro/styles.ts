import styled from "styled-components"
import { breakpoints } from "../../../../styles/global"
import { TitleText } from "../../../../components/Typography"

interface IntroContainerProps {
    $bgImage: string
}

export const IntroContainer = styled.section<IntroContainerProps>`
    width: 100%;
    height: 50rem;
    display: flex;
    align-items: center;
    justify-content: center;

    background: 
        linear-gradient(135deg, ${({ theme }) => theme.colors["rose"]}AA, ${({ theme }) => theme.colors["page"]}AA),
        url(${props => props.$bgImage}) no-repeat center/cover;

    position: relative;

    @media (max-width: ${breakpoints.tablet}) {
        height: 28rem;
    }

    @media (max-width: ${breakpoints.phone}) {
        height: 30rem;
    }
`

export const ContentWrapper = styled.div`
    width: 100%;
    max-width: 1120px;      
    padding: 0 20px;       
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    align-items: flex-start; 
`

export const TextOverlay = styled.section`
    color: ${({ theme }) => theme.colors["base-title"]};

    display: flex;
    flex-direction: column;

    width: 100%;

    @media (max-width: ${breakpoints.phone}) {
        font-size: 90%;
    }
`

export const IntroTitle = styled(TitleText)`
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors["base-title"]};
    font-family: ${({ theme }) => theme.fonts.intro};
`
