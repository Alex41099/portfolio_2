import {theme} from "./Theme";

type FontPropsType = {
    family?: string
    weight?: number
    color?: string
    Fmin?: number
    Fmax?: number
}

export const font = ({family, weight, color, Fmin, Fmax}: FontPropsType) => `
    font-family: ${family || "Montserrat"};
    font-weight: ${weight || 400};
    color: ${color || theme.color.font};
    font-size: calc( (100vw - 414px)/(1440 - 414) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`

