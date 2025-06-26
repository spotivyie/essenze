import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
//components
import { Product } from "../Home/components/Product"
import { Header } from "../../components/Header"
import { Category } from "../../components/Category"
import { Menu } from "../Home/components/PerfumeCard"
import { Footer } from "../../components/Footer"
//styles
import * as S from './styles'

export function PerfumesGeneric() {
    const { category } = useParams<{ category?: string }>()
    const [perfumes, setPerfumes] = useState<Menu[]>([])
    const [filteredPerfumes, setFilteredPerfumes] = useState<Menu[]>([])

    useEffect(() => {
        fetch('https://api-perf-9dhq.vercel.app/perfumes')
        .then(res => res.json())
        .then(data => setPerfumes(data))
    }, [])

    useEffect(() => {
        if (!category) {
        setFilteredPerfumes(perfumes)
        } else {
        const filtered = perfumes.filter(p =>
            p.category.toLowerCase().includes(category.toLowerCase())
        )
        setFilteredPerfumes(filtered)
        }
    }, [category, perfumes])

    function getCategoryTitle(cat?: string) {
        if (!cat) return "Todos os Perfumes"

        const mapCategory: Record<string, string> = {
            femininos: "Perfumes Femininos",
            masculinos: "Perfumes Masculinos",
            unissex: "Perfumes Unissex",
            presentes: "Kit Presenteáveis"
        }

        return mapCategory[cat.toLowerCase()] ?? "Perfumes"
    }

    return (
        <>
            <S.StickyHeaderWrapper>
                <Header />
                <Category/>
            </S.StickyHeaderWrapper>
            <S.Perfumes>
                <h1>{getCategoryTitle(category)}</h1>  
                <Product menu={filteredPerfumes} />
            </S.Perfumes>
            <Footer/>
        </>
    )
}
