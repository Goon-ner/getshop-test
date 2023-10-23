import axios from 'axios'

const numVerify = ({ number }) => {
  axios.get('http://apilayer.net/api/validate', {
    params: {
      number: { number },
      country_code: 'RU',
      format: '1',
    },
  })
}
export default numVerify
