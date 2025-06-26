import {StickyHeaderWrapper} from './styles'
//components
import { Category } from "../../components/Category"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Intro } from "./components/Intro"
import { AllFragance } from "./components/Perfumes/AllFragance"

export function HomePage() {
    return (
        <div>
            <StickyHeaderWrapper>
                <Header />
                <Category/>
            </StickyHeaderWrapper>
            <Intro />
            <AllFragance />
            <Footer />
        </div>
    )
}