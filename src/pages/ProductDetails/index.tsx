import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import * as S from "./styles"
//hooks & utils
import { useCart } from "../../hooks/useCart"
import { formatMoney } from "../../utils/formatMoney"
//components
import { QuantityInput } from "../../components/QuantityInput"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"

interface ProductType {
  id: string
  name: string
  image: string
  price: number
  description: string
  inStock: boolean
  category: string
}

export function ProductDetails() {
  const { id } = useParams<{ id: string }>()
  const [product, setProduct] = useState<ProductType | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [showFullDescription, setShowFullDescription] = useState(false)
  const { addPerfumeToCart } = useCart()

  useEffect(() => {
    fetch("https://api-perf.vercel.app/perfumes")
      .then(res => res.json())
      .then((data: ProductType[]) => {
        const found = data.find(item => item.id === id)
        if (found) setProduct(found)
      })
  }, [id])

  if (!product) return <p>Carregando produto...</p>

  const formattedPrice = formatMoney(product.price)

  const descriptionWords = product.description.split(" ")
  const isLongDescription = descriptionWords.length > 300
  const shortDescription = descriptionWords.slice(0, 300).join(" ") + "..."

  function handleAddToCart() {
    addPerfumeToCart({ ...product, quantity })
  }

  return (
    <>
      <Header />

      <S.ProductContainer>
        <img src={product.image} alt={product.name} />
        
        <S.Info>
          <h1>{product.name}</h1>

          <S.Description>
            {showFullDescription || !isLongDescription
              ? product.description
              : shortDescription}
          </S.Description>

          {isLongDescription && (
            <S.ButtonReadMore onClick={() => setShowFullDescription(prev => !prev)}>
              {showFullDescription ? "Ler menos" : "Ler mais"}
            </S.ButtonReadMore>
          )}

          <div>
            <S.Price>{formattedPrice}</S.Price>
            <S.Installments>ou 6x de {formatMoney(product.price / 6)} sem juros</S.Installments>
          </div>
          
          <S.ChooseQuantity>Escolha a quantidade</S.ChooseQuantity>
          <S.Actions>
            <QuantityInput
              quantity={quantity}
              onIncrease={() => setQuantity(q => q + 1)}
              onDecrease={() => setQuantity(q => q - 1)}
            />

            <S.ButtonAddCart onClick={handleAddToCart}>Adicionar ao carrinho</S.ButtonAddCart>
          </S.Actions>
        </S.Info>
      </S.ProductContainer>
      <Footer />
    </>
  )
}
