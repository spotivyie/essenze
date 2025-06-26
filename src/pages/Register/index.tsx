import { useState } from 'react'
import { useForm } from 'react-hook-form'
//styles
import * as S from './styles'
import { Eye, EyeSlash } from "@phosphor-icons/react"
//zod
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
//components
import { Header } from '../../components/Header'

type PasswordType = 'password' | 'text'

const loginFormValidationSchema = zod.object({
    username: zod.string().nonempty("Digite seu nome").transform(username =>
        username.trim().split(' ').map(word =>
            word[0].toLocaleUpperCase() + word.substring(1)
        ).join(' ')
    ),
    email: zod.string().email('Digite um e-mail válido'),
    password: zod.string().nonempty('Digite a sua senha'),
})

type NewLoginFormData = zod.infer<typeof loginFormValidationSchema>

const Register = () => {
    const [inputPasswordType, setInputPasswordType] = useState<PasswordType>('password')

    const handleTogglePasswordType = (type: PasswordType) => {
        if (type === 'password') {
        setInputPasswordType('text')
        } else {
        setInputPasswordType('password')
        }
    }

    const loginForm = useForm<NewLoginFormData>({
        resolver: zodResolver(loginFormValidationSchema)
    })

    const { register, handleSubmit, formState, reset } = loginForm
    const { errors } = formState

    const handleRegisterSubmit = (data: NewLoginFormData, ) => {
        console.log(data)
        reset()
    }

    return (
        <>
            <Header />
            <S.Register>
                <S.MainRegister>
                    <S.HeaderRegister>
                        <h1>Cadastrar</h1>
                    </S.HeaderRegister>

                    <form onSubmit={handleSubmit(handleRegisterSubmit)}>
                        <S.FormRegister>
                            <label htmlFor="username">Nome Completo</label>
                            <input
                                type="text"
                                id="username"
                                placeholder='Digite seu nome completo'
                                {...register('username')}
                            />
                            {errors.username && <span>{errors.username.message}</span>}
                        </S.FormRegister>

                        <S.FormRegister>
                            <label htmlFor="email">E-mail</label>
                            <input
                                type="email"
                                id="email"
                                placeholder='Digite seu e-mail'
                                {...register('email')}
                            />
                            {errors.email && <span>{errors.email.message}</span>}
                        </S.FormRegister>

                        <S.FormRegister>
                            <label htmlFor="password">Senha</label>
                            <input
                                id="password"
                                type={inputPasswordType}
                                placeholder='Digite sua senha'
                                {...register('password')}
                            />
                            <button
                                type="button"
                                onClick={() => handleTogglePasswordType(inputPasswordType)}
                            >
                                {inputPasswordType === 'password' ? <EyeSlash /> : <Eye />}
                            </button>
                            {errors.password && <span>{errors.password.message}</span>}
                        </S.FormRegister>

                        <S.RegisterActions>
                            <button type="submit">
                                Cadastrar
                            </button>
                        </S.RegisterActions>

                        <S.RegisterActions>
                            <span>Já tem uma conta? 
                                <S.StyledLink to="/login">
                                    Acessar
                                </S.StyledLink>
                            </span>
                        </S.RegisterActions>
                    </form>
                </S.MainRegister>
            </S.Register>
        </>
    )
}

export default Register
