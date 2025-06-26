import { Card, CardLink, Name, Price, AddCartWrapper, Button } from './styles'
//hooks
import { useCart } from "../../../../hooks/useCart"
//utils
import { formatMoney } from "../../../../utils/formatMoney"

export interface Menu {
    id: string
    name: string
    image: string
    price: number
    category?: string
    description?: string
    inStock?: boolean
}

interface PerfumesProps {
    perfume: Menu
}

export const PerfumeCard = ({ perfume }: PerfumesProps) => {
    const { addPerfumeToCart } = useCart()
    const formattedPrice = formatMoney(perfume.price)

    function handleAddToCart(e: React.MouseEvent) {
        e.stopPropagation()
        addPerfumeToCart({ ...perfume, quantity: 1 })
    }

    return (
        <Card>
            <CardLink to={`/product/${perfume.id}`}>
                <img src={perfume.image} alt={perfume.name} />
                <Name>{perfume.name}</Name>
            </CardLink>

            <AddCartWrapper>
                <Price>{formattedPrice}</Price>
                <Button onClick={handleAddToCart}>Comprar</Button>
            </AddCartWrapper>
        </Card>
    ) 
}
