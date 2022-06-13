require('dotenv').config()
const { NODE_ENV } = process.env
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
    api.setBaseURL(
      // NODE_ENV === "production"

      // ? ""
      'http://localhost:8080'
    )

    // Inject to context as $api
    inject('api', api)
  }
}
