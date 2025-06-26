import { Route, Routes } from "react-router-dom"
//pages
import { DefaultLayout } from "./DefaultLayout"
import { HomePage } from "./pages/Home"
import { CompleteOrderPage } from "./pages/CompleteOrder"
import { OrderConfirmedPage } from "./pages/OrderConfirmed"
import Login from "./pages/Login"
import Register from "./pages/Register"
import { PerfumesGeneric } from "./pages/AllPerfumes"
import { ProductDetails } from "./pages/ProductDetails"


export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/completeOrder" element={<CompleteOrderPage />} />
                <Route path="/orderConfirmed" element={<OrderConfirmedPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                <Route path="/perfumes" element={<PerfumesGeneric />} />
                <Route path="/perfumes/:category" element={<PerfumesGeneric />} />
                <Route path="/product/:id" element={<ProductDetails />} />
            </Route>
        </Routes>
    )
}
