import { useEffect, useState } from "react"
import {
    PerfumesList,
    OurPerfumesContainer,
    BestSellers,
    ShowMoreButton,
} from "./styles"
//components
import { Menu } from "../../components/PerfumeCard/index"
import { Product } from "../../components/Product/index"

interface PerfumesProps {
    title: string
    description?: string
    apiUrl?: string
    categoryFilter?: "femininos" | "masculinos"
}

export function PerfumesPage({
    title,
    description,
    apiUrl = "https://api-perf.vercel.app/perfumes",
    categoryFilter,
}: PerfumesProps) {
    const [perfumes, setPerfumes] = useState<Menu[]>([])
    const [visibleCount, setVisibleCount] = useState(8)
    const initialCount = 8

    useEffect(() => {
        fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => {
            const perfumesData = Array.isArray(data) ? data : data.perfumes || []

            const filtered = categoryFilter
            ? perfumesData.filter(
                    (p: Menu) => p.category?.toLowerCase() === categoryFilter
                )
            : perfumesData

            setPerfumes(filtered)
        })
        .catch((err) => console.error("Erro ao carregar perfumes:", err))
    }, [apiUrl, categoryFilter])

    function toggleVisibleCount() {
        if (visibleCount === perfumes.length) {
            setVisibleCount(initialCount)
        } else {
            setVisibleCount(perfumes.length)
        }
    }

    return (
        <OurPerfumesContainer>
            <BestSellers>
                <h3>{title}</h3>
                {description && <p>{description}</p>}

                <PerfumesList>
                    <Product menu={perfumes.slice(0, visibleCount)} />
                </PerfumesList>

                {perfumes.length > initialCount && (
                    <ShowMoreButton onClick={toggleVisibleCount}>
                        {visibleCount === perfumes.length ? "Mostrar Menos" : "Mostrar Mais"}
                    </ShowMoreButton>
                )}
            </BestSellers>
        </OurPerfumesContainer>
    )
}
