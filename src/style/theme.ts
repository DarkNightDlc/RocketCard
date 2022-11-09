import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    fonts:{
        heading: 'Prompt',
        body: 'Prompt', 
    },
    colors:{
        'bg': '#000000',
        'bgCard': '#0E1218',
        'text': '#F1F1F1',
        purple:{
            100: '#8257E5',
        },
        'buttons': '#FFF',
        'borderButton': '#1A1A1A',
    },
    styles: {
        global: {
            body: {
                bg: 'bgCard',
                color: 'text'
            },
        },
    },
})