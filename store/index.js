import {saveUserInfo, getUserInfo} from '../utils/storage'

export const state = () => {
    return {
        userInfo: getUserInfo(), // 用户信息
    };
};

export const getters = {
    userName(state) {
        return state.userInfo.userName
    },
}
export const mutations = {
    setUserInfo(state, info) {
        state.userInfo = Object.assign(state.userInfo, info)
    }
}
export const actions = {
    saveUserInfo({commit}, info) {
        commit('setUserInfo', saveUserInfo(info))
    }
}
