import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
//components
import { Header } from "../../components/Header"
import { InfoWithIcon } from "../../components/InfoWithIcon"
import { RegularText, TitleText } from "../../components/Typography"
//styles
import { OrderConfirmedContainer, OrderDetailsContainer, InfoSection } from "./styles"
//components
import { OrderData } from "../CompleteOrder"
import { paymentMethods } from "../CompleteOrder/components/CompleteOrderForm/PaymentMethodOptions"

interface LocationType {
    state: OrderData
}

export function OrderConfirmedPage() {
    const navigate = useNavigate()
    const location = useLocation() as unknown as LocationType
    const state = location.state

    useEffect(() => {
        if (!state) {
        navigate("/")
        }
    }, [navigate, state])

    if (!state) return null

    return (
        <>
        <Header />
            <OrderConfirmedContainer className="container">
                <OrderDetailsContainer>
                    <header>
                        <TitleText size="l">
                            Pedido confirmado!
                        </TitleText>
                        <RegularText size="l" color="subtitle">
                            Agora é só aguardar que logo chegará até você.
                        </RegularText>
                    </header>

                    <InfoSection>
                        <InfoWithIcon
                            text={
                                <RegularText>
                                    Entrega em <strong>{state.street}, {state.number}</strong>
                                    <br />
                                    {state.district} - {state.city}, {state.uf}
                                </RegularText>
                            }
                        />

                        <InfoWithIcon
                            text={
                                <RegularText>
                                    Previsão de entrega
                                    <br />
                                    <strong>13 dias úteis</strong>
                                </RegularText>
                            }
                        />

                        <InfoWithIcon
                            text={
                                <RegularText>
                                    Pagamento realizado
                                    <br />
                                    <strong>{paymentMethods[state.paymentMethod]?.label}</strong>
                                </RegularText>
                            }
                        />
                    </InfoSection>

                    <footer>
                        <RegularText color="subtitle">
                            {state.paymentMethod === "credit" && (
                                <>
                                A liberação do código de ativação ocorrerá após a aprovação da transação pela operadora do cartão. Você receberá o código no e-mail cadastrado em nossa loja.
                                </>
                            )}
                            {state.paymentMethod === "debit" && (
                                <>
                                O pagamento será debitado diretamente da sua conta bancária e confirmado em poucos minutos.
                                </>
                            )}
                            {state.paymentMethod === "boleto" && (
                                <>
                                O boleto será gerado após a finalização do pedido e poderá ser pago até a data de vencimento.
                                </>
                            )}
                        </RegularText>
                        <br />
                        <RegularText color="subtitle">
                            Pedimos que verifique sua caixa de entrada e a pasta de spam para garantir que receba nossa comunicação. Caso tenha dúvidas, entre em contato com nosso suporte.
                        </RegularText>
                        <br />
                        <RegularText color="subtitle">
                            Agradecemos por escolher a Essenze e esperamos que goste do seu perfume!
                        </RegularText>
                    </footer>
                </OrderDetailsContainer>
            </OrderConfirmedContainer>
        </>
    )
}
