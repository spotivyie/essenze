import { NavLink, useNavigate } from "react-router-dom"
//styles
import * as S from './styles'
import { ShoppingCart, UserCircle } from "@phosphor-icons/react"
//hooks
import { useCart } from '../../hooks/useCart'
//images
import logo from '../../assets/essenze.png'

export const Header = () => {
    const { cartQuantity } = useCart()

    const navigate = useNavigate()
    const goToLogin = () => {
        navigate('/login')
    }

    return (
        <S.HeaderContainer>
            <div className="container">
                <div>
                    <NavLink to="/">
                        <img 
                            src={logo} 
                            alt="Essenze Logo" 
                            style={{ height: "50px" }} 
                        />
                    </NavLink>
                </div>
                <S.LoginCart>
                    <S.Login onClick={goToLogin}>
                        <UserCircle size={28}  />
                        Minha conta
                    </S.Login>

                    <NavLink to="/completeOrder">
                        <S.HeaderButton>
                            {cartQuantity >= 1 && <span>{cartQuantity}</span>}
                            <ShoppingCart size={24} />
                        </S.HeaderButton>
                    </NavLink>
                </S.LoginCart>
            </div>
        </S.HeaderContainer>
    )
}
