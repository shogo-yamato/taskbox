import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      { id: '1', title: 'ヨーグルトを買う', state: 'TASK_INBOX' },
      { id: '2', title: '銀行に寄る', state: 'TASK_INBOX' },
      { id: '3', title: '筋トレ', state: 'TASK_INBOX' },
      { id: '4', title: '水回りの掃除', state: 'TASK_INBOX' }
    ]
  },
  mutations: {
    ARCHIVE_TASK(state, id) {
      state.tasks.find((task) => task.id === id).state = 'TASK_ARCHIVED'
    },
    PIN_TASK(state, id) {
      state.tasks.find((task) => task.id === id).state = 'TASK_PINNED'
    }
  },
  actions: {
    archiveTask({ commit }, id) {
      commit('ARCHIVE_TASK', id)
    },
    pinTask({ commit }, id) {
      commit('PIN_TASK', id)
    }
  }
})
