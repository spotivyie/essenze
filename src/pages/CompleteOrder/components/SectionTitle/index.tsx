import { SectionTitleContainer } from "./styles"
//components
import { RegularText } from "../../../../components/Typography"

interface SectionTitleProps {
    title: string
    subtitle: string
    // icon: ReactNode
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
    return (
        <SectionTitleContainer>
            <div>
                <RegularText color="subtitle">{title}</RegularText>
                <RegularText size="s">{subtitle}</RegularText>
            </div>
        </SectionTitleContainer>
    )
}
