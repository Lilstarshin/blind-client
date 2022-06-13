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
    api.setBaseURL(
      // NODE_ENV === "production"

      // ? ""
      'lilstar.eba-iqidzj6g.ap-northeast-2.elasticbeanstalk.com'
    )

    // Inject to context as $api
    inject('api', api)
  }
}
