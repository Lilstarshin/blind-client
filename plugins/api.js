// require('dotenv').config()
// const { NODE_ENV } = process.env
export default function ({ $axios }, inject) {
  // Create a custom axios instance
  if (process.browser) {
    const token = localStorage.getItem('token')
    const api = $axios.create({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    // Set baseURL to something different
    api.setBaseURL('https://www.lilstarshin.com')

    // Inject to context as $api
    inject('api', api)
  }
}
