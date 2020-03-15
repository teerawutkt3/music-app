const state = {
    form: {
        id : 0,
        type: '',
        time: '',
        name: '',
        singer: '',
        belong: '',
        description: '',
    }
}
const mutations = {
    SET_MUSIC(state, payload) {
        let form = payload
        state.form = form
    },

}
const actions = {
    setMusic: ({commit}, payload) => {
        commit('SET_MUSIC', payload)
    },

}
const getters = {
    getMusic: (state) => {
        return state
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
