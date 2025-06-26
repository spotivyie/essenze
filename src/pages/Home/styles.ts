import styled from "styled-components"

export const StickyHeaderWrapper = styled.div`
    position: sticky;
    top: 0;
    z-index: 10;
    background: ${({ theme }) => theme.colors["black"]};
`