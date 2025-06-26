import { useEffect, useState } from 'react'
import { useFormContext } from "react-hook-form"
import * as S from './styles'
//hooks & utils
import { maskCPF, maskCardNumber, maskCVV, maskExpire } from '../../../../utils/mask/insputMask'
import { formatMoney } from '../../../../utils/formatMoney'
import { useCart } from '../../../../hooks/useCart'
//components
import { Input } from "../../../../components/Input"

interface ErrorsType {
    errors: {
        [key: string]: {
            message: string
        }
    }
}

type Installment = {
    quantity: number
    amount: string
    formattedAmount: string
}

export function Payment() {
    const { register, formState, watch } = useFormContext()
    const { errors } = formState as unknown as ErrorsType
    const paymentMethod = watch("paymentMethod")

    const [installments, setInstallments] = useState<Installment[]>([])
    const { cartItemsTotal } = useCart()
    const PRICE = 13.5
    const cartTotal = PRICE + cartItemsTotal

    useEffect(() => {
        if (cartTotal > 0) {
        const calculated = Array.from({ length: 6 }, (_, i) => {
            const quantity = i + 1
            const amount = cartTotal / quantity
            return {
                quantity,
                amount: formatMoney(amount),
                formattedAmount: formatMoney(amount),
            }
        })
        setInstallments(calculated)
        }
    }, [cartTotal])

    // Nenhum método selecionado ainda
    if (!paymentMethod) return null

    const isCard = paymentMethod === "credit" || paymentMethod === "debit"

    return (
        <>
            {/* Campos de Cartão (Débito ou Crédito) */}
            {isCard && (
                <>
                <S.Row>
                    <S.InputGroup>
                        <Input
                            placeholder="Nome do titular do cartão"
                            type="text"
                            className="cardOwner"
                            {...register("cardOwner")}
                            error={errors.cardOwner?.message}
                        />
                    </S.InputGroup>
                    <S.InputGroup>
                        <Input
                            placeholder="CPF do titular do cartão"
                            type="tel"
                            className="cpfCardOwner"
                            {...register("cpfCardOwner")}
                            error={errors.cpfCardOwner?.message}
                            onChange={(event) => {
                                event.target.value = maskCPF(event.target.value)
                            }}
                        />
                    </S.InputGroup>
                </S.Row>

                <S.Row>
                    <S.InputGroup>
                        <Input
                            placeholder="Nome no cartão"
                            type="text"
                            className="cardDisplayName"
                            {...register("cardDisplayName")}
                            error={errors.cardDisplayName?.message}
                        />
                    </S.InputGroup>
                    <S.InputGroup>
                        <Input
                            placeholder="Número do cartão"
                            type="tel"
                            className="cardNumber"
                            {...register("cardNumber")}
                            error={errors.cardNumber?.message}
                            onChange={(event) => {
                                event.target.value = maskCardNumber(event.target.value)
                            }}
                        />
                    </S.InputGroup>
                </S.Row>

                <S.Row>
                    <S.InputGroup>
                        <Input
                            placeholder="Mês de expiração"
                            type="text"
                            className="expiresMonth"
                            {...register("expiresMonth")}
                            error={errors.expiresMonth?.message}
                            onChange={(event) => {
                                event.target.value = maskExpire(event.target.value)
                            }}
                        />
                    </S.InputGroup>
                    <S.InputGroup>
                        <Input
                            placeholder="Ano de expiração"
                            type="text"
                            className="expiresYear"
                            {...register("expiresYear")}
                            error={errors.expiresYear?.message}
                            onChange={(event) => {
                                event.target.value = maskExpire(event.target.value)
                            }}
                        />
                    </S.InputGroup>
                    <S.InputGroup>
                        <Input
                            placeholder="CVV"
                            type="text"
                            className="cardCode"
                            {...register("cardCode")}
                            error={errors.cardCode?.message}
                            onChange={(event) => {
                                event.target.value = maskCVV(event.target.value)
                            }}
                        />
                    </S.InputGroup>
                </S.Row>

                {/* Parcelamento só para Cartão de Crédito */}
                {paymentMethod === "credit" && (
                    <S.Row>
                        <S.InputGroup>
                            <label htmlFor="installments">Parcelamento</label>
                            <S.InstallmentsSelect id="installments" {...register("installments")}>
                                {installments.map((installment) => (
                                    <option key={installment.quantity} value={installment.quantity}>
                                        {installment.quantity}x de {installment.formattedAmount}
                                    </option>
                                ))}
                            </S.InstallmentsSelect>
                        </S.InputGroup>
                    </S.Row>
                )}
                </>
            )}

            {/* Campos de Boleto */}
            {paymentMethod === "boleto" && (
                <>
                    <S.Row>
                        <S.InputGroup>
                            <Input
                                placeholder="CPF do comprador"
                                type="tel"
                                className="cpfBoleto"
                                {...register("cpfBoleto")}
                                error={errors.cpfBoleto?.message}
                                onChange={(event) => {
                                    event.target.value = maskCPF(event.target.value)
                                }}
                            />
                        </S.InputGroup>
                    </S.Row>
                    <S.Row>
                        <S.InputGroup>
                            <p>O boleto será gerado após a finalização do pedido. Você poderá pagá-lo até a data de vencimento informada.</p>
                        </S.InputGroup>
                    </S.Row>
                </>
            )}
        </>
    )
}
