export const goToDetails = (history, pokeName) => {
    history.push(`/details/${pokeName}`)
}

export const goToDetailsPokedex = (history, pokeName) => {
    history.push(`/pokedex/details/${pokeName}`)
}

export const goToHome = (history) => {
    history.push('/')
}

export const goToPokedex = (history) => {
    history.push('/pokedex')
}

export const goToFight = (history, pokeName) => {
    history.push(`/battle/${pokeName}`)
}

export const goBack = (history) => {
    history.goBack()
}