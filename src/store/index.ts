import { createStore } from 'vuex'

//定义一个state的接口
export interface State {
    count: number
}

const store = createStore<State>({
    state() {
        return {
            count: 0
        }
    },
    mutations: {
        // 累加功能
        increment(state) {
            state.count++
        }
    }
})
export default store