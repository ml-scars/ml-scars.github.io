import Vue from 'vue';
import Vuex from 'vuex';
import cases from 'cases';

Vue.use(Vuex);

let menuTimer;

export default new Vuex.Store({
  state: {
    cases,
    activeGroup: {},
    activeCase: {},
  },

  mutations: {
    setState: (state, newState) => Object.assign(state, newState),
  },

  getters: {

  },

  actions: {
    selectGroup({ commit }, g) {
      clearTimeout(menuTimer);
      commit('setState', { activeGroup: g });
    },

    queueCancelGroup({ commit }) {
      clearTimeout(menuTimer);
      menuTimer = setTimeout(() => {
        commit('setState', { activeGroup: {} });
      }, 300);
    },

    selectCase({ commit }, c) {
      commit('setState', {
        activeGroup: {},
        activeCase: c,
      });
    },

    selectCaseByRepo({ state, commit }, repo) {
      for (const i in state.cases) {
        const { repos } = state.cases[i];
        for (const j in repos) {
          const c = repos[j];
          if (c.repo.replace(/\//g, '-') === repo) {
            commit('setState', { activeCase: c });
            return;
          }
        }
      }
    },

    selectFirstRepo({ state, dispatch }) {
      dispatch('selectCase', state.cases[0].repos[0]);
    },
  },
});
