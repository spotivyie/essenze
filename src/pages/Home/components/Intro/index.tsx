import * as S from './styles'
import introImg from "../../../../assets/perfume3.png"

export function Intro() {
    return (
        <S.IntroContainer $bgImage={introImg}>
            <S.ContentWrapper>
                <S.TextOverlay>
                    <S.IntroTitle size="xl">
                        Encontre o perfume perfeito<br/> 
                        para qualquer hora do dia
                    </S.IntroTitle>
                    <S.IntroTitle size="lg">
                        fragrâncias que inspiram seu dia a dia<br/>
                        Sinta a elegância em cada gota
                    </S.IntroTitle>
                </S.TextOverlay>
            </S.ContentWrapper>
        </S.IntroContainer>
    )
}
