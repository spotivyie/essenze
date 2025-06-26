import * as S from './styles'
//react
import { useState } from 'react'
import { useForm } from 'react-hook-form'
//zod
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
//icons
import { Eye, EyeSlash } from "@phosphor-icons/react"
//components
import { Header } from '../../components/Header'

type PasswordType = 'password' | 'text'

const loginFormValidationSchema = zod.object({
    email: zod.string().email('Digite um e-mail válido'),
    password: zod.string().nonempty('Digite a sua senha')
})

type NewLoginFormData = zod.infer<typeof loginFormValidationSchema>

const Login = () => {
    const [
        inputPasswordType,
        setInputPasswordType
    ] = useState<PasswordType>('password')

    const handleTogglePasswordType = ( type:PasswordType ) => {
        switch ( type ) {
        case 'password':
            setInputPasswordType('text')
            return
        case 'text':
        default:
            setInputPasswordType('password')
            return
        }
    }

    const loginForm = useForm<NewLoginFormData>({
        resolver: zodResolver(loginFormValidationSchema)
    })

    const { register, handleSubmit, formState, reset } = loginForm

    const { errors } = formState

    const handleLoginSubmit = (data: NewLoginFormData) => {
        console.log(data)
        reset()
    }


    return (
        <>
            <Header />
            <S.Login>
                <S.MainLogin>
                    <S.HeaderLogin>
                    <h1>Entrar</h1>
                    </S.HeaderLogin>

                    <form onSubmit={handleSubmit(handleLoginSubmit)}>
                        <S.FormLogin>
                            <label htmlFor="email">E-mail</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Digite seu e-mail"
                                {...register('email')}
                            />
                                { errors.email  && (
                                    <span > {errors.email?.message} </span>)
                                }
                        </S.FormLogin>
                        <S.FormLogin>
                            <label
                                htmlFor="password"
                            >
                                Senha
                            <a
                                href="#"
                            >
                                Esqueceu a senha?
                            </a>
                            </label>
                            <input
                                id="password"
                                type={inputPasswordType}
                                placeholder="Digite sua senha"
                                {...register('password')}
                            />
                            <button
                                type='button'
                                onClick={() => handleTogglePasswordType(inputPasswordType)}
                            >
                                { inputPasswordType === 'password' ? <EyeSlash /> : <Eye /> }
                            </button>
                            { errors.password  && (
                                <span className="text-red text-sm"> {errors.password?.message} </span>)
                            }
                        </S.FormLogin>

                        <S.LoginActions>
                            <button>
                                Entrar
                            </button>
                            <span>
                                Ainda não tem uma conta?
                                <S.StyledLink to="/register">
                                    Cadastrar
                                </S.StyledLink>
                            </span>
                        </S.LoginActions>
                    </form>
                </S.MainLogin>
            </S.Login>
        </>
    )
}

export default Login
