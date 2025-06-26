import { PerfumesPage } from "../PerfumesPage"
import { OurPerfumesContainer } from "../styles"
//components
import { Intro2 } from "../../Intro2"
import PurchaseInfo from "../../../../../components/PurchaseInfo"
//images
import introImg from "../../../../../assets/perfume4.png"
import intro from "../../../../../assets/perfume1.png"

export function AllFragance() {
    return (
        <OurPerfumesContainer>
            <PerfumesPage
                title="A mistura perfeita"
                description="compre nossa ampla seleção de aromas"
            />
            <PurchaseInfo />
            <PerfumesPage 
                title="Coleções femininas" 
                categoryFilter="femininos" 
            />
            <Intro2
                bgImage={introImg}
                titleXL="Sinta a essência"
                titleLG="notas marcantes para momentos únicos"
                titleMD="transforme sua presença com fragrâncias icônicas"
            />
            <PerfumesPage 
                title="Coleções masculinas" 
                categoryFilter="masculinos" 
            />
            <Intro2
                bgImage={intro}
                titleXL="Encontre o perfume perfeito"
                titleLG="fragrâncias que inspiram seu dia a dia"
                titleMD="sinta a elegância em cada gota"
            />
        </OurPerfumesContainer>
    )
}
