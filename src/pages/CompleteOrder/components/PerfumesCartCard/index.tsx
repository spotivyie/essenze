import * as S from './styles'
import { Trash } from "@phosphor-icons/react"
//hooks & utils
import { useCart } from "../../../../hooks/useCart"
import { formatMoney } from "../../../../utils/formatMoney"
//components
import { QuantityInput } from "../../../../components/QuantityInput"
import { RegularText } from "../../../../components/Typography"
//context
import { CartItem } from "../../../../contexts/CartContext"

interface PerfumesCartCardProps {
    perfumes: CartItem
}

export function PerfumesCartCard({ perfumes }: PerfumesCartCardProps) {
    const { changeCartItemQuantity, removeCartItem } = useCart()

    function handleIncrease() {
        changeCartItemQuantity(perfumes.id, "increase")
    }

    function handleDecrease() {
        changeCartItemQuantity(perfumes.id, "decrease")
    }

    function handleRemove() {
        removeCartItem(perfumes.id)
    }

    const perfumesTotal = perfumes.price * perfumes.quantity

    const formattedPrice = formatMoney(perfumesTotal)

    return (
        <S.PerfumesCartCardContainer>
            <div>
                <img src={perfumes.image} />
                <div>
                    <S.Text>
                        <RegularText color="subtitle">{perfumes.name}</RegularText>
                        <p><strong>{formattedPrice}</strong></p>
                    </S.Text>

                    <S.ActionsContainer>
                        <QuantityInput
                            onIncrease={handleIncrease}
                            onDecrease={handleDecrease}
                            quantity={perfumes.quantity}
                            size="small"
                        />
                        <S.RemoveButton type="button" onClick={handleRemove}>
                            <Trash size={16} />
                            REMOVER
                        </S.RemoveButton>
                    </S.ActionsContainer>
                </div>
            </div>

        </S.PerfumesCartCardContainer>
    )
}
