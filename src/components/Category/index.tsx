import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import * as S from './styles'

export const Category = () => {
    const [isCategoryOpen, setCategoryOpen] = useState(false)

    return (
        <>
            {/* Ícone hamburger só no mobile, clicável */}
            <S.Category onClick={() => setCategoryOpen(!isCategoryOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </S.Category>

            {/* Navegação das categorias */}
            <S.NavMobile className={isCategoryOpen ? 'is-open' : ''}>
                <S.NavItems  className="container">
                    <S.Perfumes>
                        <NavLink to="/perfumes" onClick={() => setCategoryOpen(false)}>
                            <p>TODOS OS PERFUMES</p>
                        </NavLink>
                    </S.Perfumes>
                    <S.Perfumes>
                        <NavLink to="/perfumes/femininos" onClick={() => setCategoryOpen(false)}>
                            <p>PERFUMES FEMININOS</p>
                        </NavLink>
                    </S.Perfumes>
                    <S.Perfumes>
                        <NavLink to="/perfumes/masculinos" onClick={() => setCategoryOpen(false)}>
                            <p>PERFUMES MASCULINOS</p>
                        </NavLink>
                    </S.Perfumes>
                    <S.Perfumes>
                        <NavLink to="/perfumes/unissex" onClick={() => setCategoryOpen(false)}>
                            <p>PERFUMES UNISSEX</p>
                        </NavLink>
                    </S.Perfumes>
                    <S.Perfumes>
                        <NavLink to="/perfumes/presentes" onClick={() => setCategoryOpen(false)}>
                            <p>KIT PRESENTEÁVEIS</p>
                        </NavLink>
                    </S.Perfumes>
                </S.NavItems >
            </S.NavMobile>
        </>
    )
}
