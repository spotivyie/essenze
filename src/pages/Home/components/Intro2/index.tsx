import * as S from './styles'

interface IntroProps {
    bgImage: string
    titleXL: string
    titleLG: string
    titleMD: string
}

export function Intro2({ bgImage, titleXL, titleLG, titleMD }: IntroProps) {
    return (
        <S.IntroContainer $bgImage={bgImage}>
            <S.ContentWrapper>
                <S.TextOverlay>
                    <S.IntroTitle size="xl">{titleXL}</S.IntroTitle>
                    <S.IntroTitle size="lg">{titleLG}</S.IntroTitle>
                    <S.IntroTitle size="md">
                        {titleMD}
                    </S.IntroTitle>
                </S.TextOverlay>
            </S.ContentWrapper>
        </S.IntroContainer>
    )
}