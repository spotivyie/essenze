import { createContext, ReactNode, useEffect, useState } from "react"
import { produce } from "immer"
import { Menu } from "../pages/Home/components/PerfumeCard"

export interface CartItem extends Menu {
    quantity: number
}

interface CartContextType {
    cartItems: CartItem[]
    cartQuantity: number
    cartItemsTotal: number
    addPerfumeToCart: (perfumes: CartItem) => void
    changeCartItemQuantity: (
        cartItemId: number,
        type: "increase" | "decrease"
    ) => void
    removeCartItem: (cartItemId: number) => void
    cleanCart: () => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
    children: ReactNode
}

const PERFUMES_ITEMS_STORAGE_KEY = "perfumesDelivery:cartItems"

export function CartContextProvider({ children }: CartContextProviderProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        const storedCartItems = localStorage.getItem(PERFUMES_ITEMS_STORAGE_KEY)
        if (storedCartItems) {
        return JSON.parse(storedCartItems)
        }
        return []
    })

    const cartQuantity = cartItems.length

    const cartItemsTotal = cartItems.reduce((total, cartItem) => {
        return total + cartItem.price * cartItem.quantity
    }, 0)

    function addPerfumeToCart(perfumes: CartItem) {
        const perfumesAlreadyExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === perfumes.id
        )

        const newCart = produce(cartItems, (draft) => {
        if (perfumesAlreadyExistsInCart < 0) {
            draft.push(perfumes);
        } else {
            draft[perfumesAlreadyExistsInCart].quantity += perfumes.quantity
        }
        })

        setCartItems(newCart)
    }

    function changeCartItemQuantity(
        cartItemId: number,
        type: "increase" | "decrease"
    ) {
        const newCart = produce(cartItems, (draft) => {
        const perfumesExistsInCart = cartItems.findIndex(
            (cartItem) => cartItem.id === cartItemId
        )

        if (perfumesExistsInCart >= 0) {
            const item = draft[perfumesExistsInCart];
            draft[perfumesExistsInCart].quantity =
            type === "increase" ? item.quantity + 1 : item.quantity - 1;
        }
        })

        setCartItems(newCart)
    }

    function removeCartItem(cartItemId: number) {
        const newCart = produce(cartItems, (draft) => {
        const perfumesExistsInCart = cartItems.findIndex(
            (cartItem) => cartItem.id === cartItemId
        )

        if (perfumesExistsInCart >= 0) {
            draft.splice(perfumesExistsInCart, 1);
        }
        })

        setCartItems(newCart)
    }

    function cleanCart() {
        setCartItems([])
    }

    useEffect(() => {
        localStorage.setItem(PERFUMES_ITEMS_STORAGE_KEY, JSON.stringify(cartItems))
    }, [cartItems])

    return (
        <CartContext.Provider
        value={{
            cartItems,
            addPerfumeToCart,
            cartQuantity,
            changeCartItemQuantity,
            removeCartItem,
            cartItemsTotal,
            cleanCart,
        }}
        >
            {children}
        </CartContext.Provider>
    )
}
