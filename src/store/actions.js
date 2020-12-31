import axios from 'axios'
import config from '@/config'


export default {
    /**
     * GET ALL UNVERIFIED USERS
     *
     * @param {Function} commit send data to mutate
     */
    getUnvUsers: ({ commit }) => {
        const header = config.setHeader()
        axios.get(config.apiUrl + 'host/list?per_page=100&page=1&param=unverified', header)
            .then(response => {
                commit('SET_UNVERIFIED_USERS', response.data.data)
            })
            .catch( error => {
                const err = {
                    status: true,
                    msg: error
                }
                commit('SET_ERR_MSG', err)
            })
            .finally(() => {
                commit('SET_LOADED', true)
            })
    },
    /**
     * GET USER DATA BY ID
     *
     * @param {Function} commit send data to mutate
     * @param {String} uid user id
     */
    getUserByID: ({ commit }, uid) => {
        axios.get(config.apiUrl + 'host/get/gets/' + uid)
            .then(response => {
                commit('SET_USER_DATA', response.data.data)
            })
            .catch( error => {
                const err = {
                    status: true,
                    msg: error
                }
                commit('SET_ERR_MSG', err)
            })
            .finally(() => {
                commit('SET_LOADED', true)
            })
    },
    /**
     * GET HOST DATA BY ID
     *
     * @param {Function} commit send data to mutate
     * @param {String} hid host id
     */
    getHostByID: ({ commit }, hid) => {
        axios.get(config.apiUrl + 'host/get/' + hid)
            .then(response => {
                commit('SET_HOST_DATA', response.data.data)
            })
            .catch( error => {
                const err = {
                    status: true,
                    msg: error
                }
                commit('SET_ERR_MSG', err)
            })
            .finally(() => {
                commit('SET_LOADED', true)
            })
    },
    /**
     * UPDATE VERIFICATION REQUEST DATA
     *
     * PATCH verification data with approval or rejection. The user/host will be verified if apporoved
     * @param {Function} commit
     * @param {Object} payload
     */
    patchVerificationData: ({ commit }, payload) => {
        commit('LOADING_STATUS', true)
        const header = config.setHeader()
        axios.patch(config.apiUrl + 'hosts/api/verification/status', payload, header)
            .then(response => {
                commit('UPDATE_UNVERIFIED_USERS', {response, payload})
            })
            .catch( error => {
                const err = {
                    status: true,
                    msg: error
                }
                commit('SET_ERR_MSG', err)
            })
            .finally(() => {
                commit('LOADING_STATUS', false)
                commit('PROCESS_COMPLETED', true)
            })
    },
    /**
     * SET PROCESS STATUS INTO STARTED/NOT COMPLETED
     *
     * @param {Function} commit
     */
    processStarted: ({ commit }) => {
        commit('PROCESS_COMPLETED', false);
    }
}