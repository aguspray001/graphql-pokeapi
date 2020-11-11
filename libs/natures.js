import { PokedexInstance, handleError } from './utils'

export const getNaturesList = async () => {
  try {
    const response = await PokedexInstance.getNaturesList()
    if (response && response.results) {
      return { ...response, results: response.results, status: true, message: '' }
    }
    return { ...response, status: true, message: '' }
  } catch (error) {
    console.error('> Error api getNaturesList()', error)
    return handleError(error)
  }
}

export const getNatureByName = async (name = '') => {
  try {
    const response = await PokedexInstance.getNatureByName(name)
    return { response, status: true, message: '' }
  } catch (error) {
    console.error(`> Error api getNatureByName(${name})`, error)
    return handleError(error)
  }
}
