import sendRequest from '@/api/index'

export const teamTask = {
  state: {
    tasks: [],
  },
  mutations: {
    SET_TASKS: (state, tasks) => {
      state.tasks = tasks
    },
  },
  actions: {
    queryTeamTask({ commmit }, requestData) {
      return new Promise((resolve, reject) => {
        sendRequest('queryTeamTask', requestData)
          .then((response) => {
            const { data } = response
            if (data.isSuccess) commmit('SET_TASKS', data.tasks)
            resolve(response)
          })
          .catch((error) => reject(error))
      })
    },
  },
}
