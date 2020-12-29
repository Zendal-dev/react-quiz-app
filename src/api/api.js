import * as axios from 'axios'

const API_KEY = 'AIzaSyDJU2Hxg5mx8tMsZuw25S5xB-59MJ3XF3o'

const instance = axios.create({
   baseURL: 'https://react-quiz-app-8a8af-default-rtdb.firebaseio.com/'
})

export const apiQuiz = {
   fetchQuizzes: async () => {
      const token = localStorage.getItem('token')
      const response = await instance.get(`quizzes.json?auth=${token}`)
      return response.data
   },

   fetchQuiz: async id => {
      const token = localStorage.getItem('token')
      const response = await instance.get(`quizzes/${id}/.json?auth=${token}`)
      return response.data
   },

   setQuiz: async quiz => {
      const token = localStorage.getItem('token')
      const response = await instance.post(`quizzes.json?auth=${token}`, quiz)
      return response.data.name
   }
}

export const apiAuth = {
   signIn: async (email, password) => {
      const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, {
         email, password,
         returnSecureToken: true
      })

      return response.data
   },
   signUp: async (email, password) => {
      const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, {
         email, password,
         returnSecureToken: true
      })

      return response.data
   }
}
