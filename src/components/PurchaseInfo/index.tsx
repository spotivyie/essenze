import { HouseLine, Truck, CreditCard, Barcode } from '@phosphor-icons/react'

import * as S from './styles'

const PurchaseInfo = () => {

    return (
        <S.PurchaseContainer className="container">
            <S.TreeOn>
                <S.House>
                    <S.Circle>
                        <HouseLine size={50} />
                    </S.Circle>
                    <S.Buy>
                        <h1>
                            Compre online
                        </h1>
                        <p>
                            Receba na sua casa.
                        </p>
                    </S.Buy>
                </S.House>

                <S.House>
                    <S.Circle>
                        <Truck size={50} />
                    </S.Circle>
                    <S.Buy>
                        <h1>
                            Frete Grátis
                        </h1>
                        <p>
                            Consulte o valor para sua região.
                        </p>
                    </S.Buy>
                </S.House>

                <S.House>
                    <S.Circle>
                        <CreditCard size={50} />
                    </S.Circle>
                    <S.Buy>
                        <h1>
                            Parcele
                        </h1>
                        <p>
                            Em ate 6x sem juros.
                        </p>
                    </S.Buy>
                </S.House>

                <S.House>
                    <S.Circle>
                        <Barcode size={50} />
                    </S.Circle>
                    <S.Buy>
                        <h1>
                            Boleto
                        </h1>
                        <p>
                            Prazo de confirmação pode <br/>levar até 3 dias úteis.
                        </p>
                    </S.Buy>
                </S.House>
            </S.TreeOn>
        </S.PurchaseContainer>
    )
}

export default PurchaseInfo