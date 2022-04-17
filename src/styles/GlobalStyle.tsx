import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./theme";

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
    body {
        background: ${({ theme }) => theme.variables.background};
    }

    .text-muted {
        color: ${({ theme }) => theme.variables.textMuted} !important;
    }

    .page-content {
        max-width: 1280px;
        margin: 0 auto;
    }
`;

export { GlobalStyle };
