import {saveUserInfo, getUserInfo, getServerAddress, saveServerAddress} from '../utils/storage'

export const state = () => {
    return {
        userInfo: getUserInfo(), // 用户信息
        serverAddress: getServerAddress(), //服务器地址
    };
};

export const getters = {
    userName(state) {
        return state.userInfo.userName
    },
    serverName(state) {
        return state.serverAddress.serverName
    }
}
export const mutations = {
    setUserInfo(state, info) {
        state.userInfo = Object.assign(state.userInfo, info)
    },
    setServerAddress(state, info) {
        state.serverAddress = Object.assign(state.serverAddress, info)
    }
}
export const actions = {
    saveUserInfo({commit}, info) {
        commit('setUserInfo', saveUserInfo(info))
    },
    saveServerAddress({commit}, info) {
        commit('setServerAddress', saveServerAddress(info))
    }
}
