import * as S from './styles'
import { Minus, Plus } from "@phosphor-icons/react"

interface QuantityInputProps {
    quantity: number
    onIncrease: () => void
    onDecrease: () => void
}

export function QuantityInput({
    onIncrease,
    onDecrease,
    quantity,
    }: QuantityInputProps) {
    return (
        <S.QuantityInputContainer>
            <S.IconWrapper onClick={onDecrease} disabled={quantity <= 1}>
                <Minus size={20} weight="bold" />
            </S.IconWrapper>
                <input type="number" readOnly value={quantity} />
            <S.IconWrapper onClick={onIncrease}>
                <Plus size={20} weight="bold" />
            </S.IconWrapper>    
        </S.QuantityInputContainer>
    )
}
