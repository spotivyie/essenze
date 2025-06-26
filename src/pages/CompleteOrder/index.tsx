import { useNavigate } from "react-router-dom"
import { useForm, FormProvider } from "react-hook-form"
import * as S from './styles'
//components
import { CompleteOrderForm } from "./components/CompleteOrderForm"
import { SelectedPerfumes } from "./components/SelectedPerfumes"
//zod
import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
//hooks
import { useCart } from "../../hooks/useCart"
//components
import { Header } from "../../components/Header"

enum PaymentMethods {
    credit = "credit",
    debit = "debit",
    boleto = "boleto",
}

const confirmOrderFormValidationSchema = zod.object({
    cep: zod.string().min(1, "Informe o CEP"),
    street: zod.string().min(1, "Informe o Rua"),
    number: zod.string().min(1, "Informe o Número"),
    complement: zod.string().optional(),
    district: zod.string().min(1, "Informe o Bairro"),
    city: zod.string().min(1, "Informe a Cidade"),
    uf: zod.string().min(1, "Informe a UF"),
    paymentMethod: zod.nativeEnum(PaymentMethods, {
        errorMap: () => ({ message: "Informe o método de pagamento" }),
    }),
    cardOwner: zod.string().optional(),
    cpfCardOwner: zod.string().optional(),
    cardDisplayName: zod.string().optional(),
    cardNumber: zod.string().optional(),
    expiresMonth: zod.string().optional(),
    expiresYear: zod.string().optional(),
    cardCode: zod.string().optional(),
    }).refine(
    (data) => {
        if (data.paymentMethod === "boleto") return true 
        return (
        data.cardOwner?.length! > 0 &&
        data.cpfCardOwner?.length! > 0 &&
        data.cardDisplayName?.length! > 0 &&
        data.cardNumber?.length! > 0 &&
        data.expiresMonth?.length! > 0 &&
        data.expiresYear?.length! > 0 &&
        data.cardCode?.length! > 0
        )
    },
    {
        message: "Preencha todos os dados do cartão",
        path: ["cardOwner"],
    }
)

    export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>

    type ConfirmOrderFormData = OrderData

    export function CompleteOrderPage() {
    const confirmOrderForm = useForm<ConfirmOrderFormData>({
        resolver: zodResolver(confirmOrderFormValidationSchema),
        defaultValues: {
        paymentMethod: undefined,
        },
    })

    const { handleSubmit } = confirmOrderForm

    const navigate = useNavigate()
    const { cleanCart } = useCart()

    function handleConfirmOrder(data: ConfirmOrderFormData) {
        navigate("/orderConfirmed", {
        state: data,
        })
        cleanCart()
    }

    return (
        <FormProvider {...confirmOrderForm}>
        <Header />
            <S.CompleteOrderContainer
                className="container"
                onSubmit={handleSubmit(handleConfirmOrder)}
            >
                <CompleteOrderForm />
                <SelectedPerfumes />
            </S.CompleteOrderContainer>
        </FormProvider>
    )
}
