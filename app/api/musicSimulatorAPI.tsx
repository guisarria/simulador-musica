import axios from 'axios'

export const getResultAxios = async (body: any) => {
  try {
    const response = await axios.post('https://endpoint-heroku-here.herokuapp.com/result/json', body)
    return response.data
  } catch (error) {
    console.error(`Error fetching data`)
    throw new Error('Failed to fetch data')
  }
}
