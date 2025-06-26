import { AddressFormContainer, Row } from "./styles"
import { useFormContext } from "react-hook-form"
//components
import { Input } from "../../../../components/Input"
//utils
import { maskCEP } from "../../../../utils/mask/insputMask"

interface ErrorsType {
    errors: {
        [key: string]: {
        message: string
        }
    }
}

export function AddressForm() {
    const { register, formState } = useFormContext()
    const { errors } = formState as unknown as ErrorsType
    
    return (
        <AddressFormContainer>
            <Row>
                <Input
                    placeholder="CEP"
                    type="tel"
                    {...register("cep")}
                    error={errors.cep?.message}
                    onChange={(event) => {
                        const {value} = event.target
                        event.target.value = maskCEP(value)
                    }}
                />
                <Input
                    placeholder="Rua"
                    className="street"
                    {...register("street")}
                    error={errors.street?.message}
                />
            </Row>
            <Row>
                <Input
                    placeholder="Número"
                    type="number"
                    {...register("number")}
                    error={errors.number?.message}
                />
                <Input
                    placeholder="Complemento"
                    className="complement"
                    {...register("complement")}
                    error={errors.complement?.message}
                    rightText="Opcional"
                />
            </Row>
            <Row>
                <Input
                    placeholder="Bairro"
                    {...register("district")}
                    error={errors.district?.message}
                />
                <Input
                    placeholder="Cidade"
                    {...register("city")}
                    error={errors.city?.message}
                />
                <Input 
                    placeholder="UF" 
                    {...register("uf")} 
                    error={errors.uf?.message} 
                />
            </Row>
        </AddressFormContainer>
    )
}
