import { useCart } from "../../../../hooks/useCart"
import { TitleText } from "../../../../components/Typography"
import { ConfirmationSection } from "./ConfirmationSection"
import { PerfumesCartCard } from "../PerfumesCartCard"
import * as S from './styles'

export function SelectedPerfumes() {
    const { cartItems } = useCart();

    return (
        <S.SelectedPerfumesContainer>
            <TitleText size="xs" color="subtitle">
                Perfumes selecionados
            </TitleText>

            <S.DetailsContainer>
                {cartItems.map((item) => (
                    <PerfumesCartCard key={item.id} perfumes={item} />
                ))}

                <ConfirmationSection />
            </S.DetailsContainer>
        </S.SelectedPerfumesContainer>
    )
}
