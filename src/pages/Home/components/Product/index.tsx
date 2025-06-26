import { PerfumeList } from "./styles"
//components
import { PerfumeCard, Menu } from "../PerfumeCard"

export type Props = {
    menu: Menu[]
}

export const Product = ({ menu }: Props) => {

    return (
        <PerfumeList>
            {menu.map((perfumes) => (
                <PerfumeCard 
                    key={perfumes.id} 
                    perfume={perfumes} 
                />
            ))}
        </PerfumeList>
    )
}
