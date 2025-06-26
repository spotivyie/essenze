import styled from "styled-components";
import { breakpoints } from "../../styles/global";

export const ProductContainer = styled.section`
  max-width: 1224px;
  margin: 80px auto;
  padding: 0 24px;
  display: flex;
  gap: 60px;
  align-items: flex-start;

  img {
    width: 100%;
    max-width: 480px;
    border-radius: 12px;
    object-fit: cover;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    gap: 40px;

    img {
      max-width: 100%;
    }
  }

  @media (max-width: ${breakpoints.phone}) {
    margin: 40px auto;
    padding: 0 16px;
  }
`;

export const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
  text-align: left;

  h1 {
    font-size: 32px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors["black"]};
    margin-bottom: 8px;

    @media (max-width: ${breakpoints.phone}) {
      font-size: 26px;
    }
  }
`;

export const ButtonReadMore = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors["primary"] || "#007bff"};
  cursor: pointer;
  font-size: 14px;
  padding: 0;
  margin-top: -10px;

  &:hover {
    text-decoration: underline;
  }
`

export const Description = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors["base-label"]};
`

export const Price = styled.p`
  font-size: 28px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors["black"]};
  margin-top: 10px;
`

export const Installments = styled.p`
  font-size: 1rem;
  color: #666;
  margin-top: 4px;
  margin-bottom: 16px;
`

export const ChooseQuantity = styled.p`
  font-weight: bold;
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; 
  width: 100%;                   
  gap: 16px;

  @media (max-width: ${breakpoints.phone}) {
    align-items: stretch;
    gap: 12px;
  }
`
export const ButtonAddCart = styled.button`
  background-color: ${({ theme }) => theme.colors["black"]};
  color: ${({ theme }) => theme.colors["white"]};
  border: none;
  padding: 12px 24px;
  font-weight: 600;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors["gray"]};
  }

  @media (max-width: ${breakpoints.phone}) {
    width: 100%;
  }
`

