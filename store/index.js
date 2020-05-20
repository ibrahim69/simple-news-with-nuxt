const initState = {
    article: {}
}

export const state = () => initState

export const mutations = {
    setArticle (state, data) {
        state.article =  data
    }
}