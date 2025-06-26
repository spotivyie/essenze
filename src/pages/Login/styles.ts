import { Link } from "react-router-dom"
import styled from "styled-components"

export const Login = styled.div`
    max-width: 420px;
    margin: 0 auto;
    margin-top: 80px;
    border: 1px solid ${({ theme }) => theme.colors["lightGray"]};
    border-radius: 8px;
    padding: 40px 30px;
    background-color: white;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.05);
`

export const MainLogin = styled.main``

export const HeaderLogin = styled.header`
    padding-bottom: 40px;
    text-align: center;
`

export const FormLogin = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 6px;
    padding-bottom: 20px;

    a {
        margin-left: 160px;
        color: ${({ theme }) => theme.colors["black"]};
        text-decoration: none;
        transition: color 0.3s;

        &:hover {
        color: ${({ theme }) => theme.colors["lightGray"]};
        }
    }

    input{
        border-radius: 4px;
        border: 1px solid ${({ theme }) => theme.colors["lightGray"]};
        padding: 14px;
    }

    button{
        position: absolute;
        top: 40%;
        right: 4%;
        background-color: ${({ theme }) => theme.colors["black"]};
        border: 1px solid ${({ theme }) => theme.colors["black"]};
        color: ${({ theme }) => theme.colors["white"]};
        border-radius: 4px;
        padding: 2px;
        transition: background-color 0.3s;

        &:hover {
        background-color: ${({ theme }) => theme.colors["gray"]};
        border: 1px solid ${({ theme }) => theme.colors["gray"]};
        }
    }
`

export const LoginActions = styled.footer`
    display: flex;
    flex-direction: column;

    button {
        padding: 14px;
        font-weight: 700;
        border-radius: 4px;
        background-color: ${({ theme }) => theme.colors["black"]};
        color: ${({ theme }) => theme.colors["white"]};
        cursor: pointer;
        margin-bottom: 20px;
        transition: background-color 0.3s, border 0.3s;
        
        border: 1px solid ${({ theme }) => theme.colors["black"]}; 

        &:hover {
            background-color: ${({ theme }) => theme.colors["gray"]};
            border: 1px solid ${({ theme }) => theme.colors["gray"]};
        }
    }
`

export const StyledLink = styled(Link)`
    margin-left: 8px;
    color: ${({ theme }) => theme.colors["black"]};
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
        color: ${({ theme }) => theme.colors["gray"]};
    }
`
