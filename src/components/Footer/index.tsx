//styles
import * as S from './styles'
import { CreditCard, FacebookLogo, InstagramLogo, Phone } from "@phosphor-icons/react"
//images
import logo from '../../assets/essenze.png'

export function Footer() {
    return (
        <S.Footer>
            <S.FooterContainer>
                <S.FooterContent>
                    <S.ContactSocialSection >
                        <div>
                            <Phone size={32} />
                            <h1>Atendimento</h1>
                        </div>
                        <p>Segunda a sexta: 8h às 18h30</p>
                        <p>atendimento@atendimento.com</p>
                        <p>(99) 99999-9999</p>
                        <p>Rua Exemplo, 123 - Bairro Centro, Cidade - UF</p>
                        <S.Image>
                            <div>
                                <InstagramLogo size={28} />
                            </div>
                            <div>
                                <FacebookLogo size={28} />
                            </div>
                        </S.Image>
                    </S.ContactSocialSection >

                    <S.ContactSocialSection >
                        <div>
                            <CreditCard size={32} />
                            <h1>Formas de pagamento</h1>
                        </div>
                        <p>Cartão de Crédito</p>
                        <p>Cartão de Débito</p>
                        <p>Boleto</p>
                    </S.ContactSocialSection >

                    <S.LogoWrapper>
                        <img 
                            src={logo} 
                            alt="Essenze Logo" 
                            style={{ height: "70px" }} 
                        />
                    </S.LogoWrapper>
                </S.FooterContent>
            </S.FooterContainer>

            <span></span>

            <S.FooterNote>
                <p>Copyright© 2025 Essenze - Todos os direitos reservados</p>
            </S.FooterNote>
        </S.Footer>
    )
}
