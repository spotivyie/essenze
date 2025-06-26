import { useFormContext } from "react-hook-form"
//styles
import { PaymentMethodOptionsContainer } from "./styles"
import { CreditCard, Bank, Barcode } from "@phosphor-icons/react"
//components
import { PaymentMethodInput } from "../PaymentMethodInput"
import { RegularText } from "../../../../components/Typography"

export const paymentMethods = {
    credit: {
        label: "Cartão de crédito",
        icon: <CreditCard size={16} />,
    },
    debit: {
        label: "Cartão de débito",
        icon: <Bank size={16} />,
    },
    boleto: {
        label: "Boleto bancário",
        icon: <Barcode size={16} />,
    },
}

export function PaymentMethodOptions() {
    const {
        register,
        formState: { errors },
    } = useFormContext()

    const paymentMethodError = errors?.paymentMethod
        ?.message as unknown as string

    return (
        <PaymentMethodOptionsContainer>
            {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
                <PaymentMethodInput
                    key={label}
                    id={key}
                    icon={icon}
                    label={label}
                    value={key}
                    {...register("paymentMethod")}
                />
            ))}

            {paymentMethodError && <RegularText>{paymentMethodError}</RegularText>}
        </PaymentMethodOptionsContainer>
    )
}
