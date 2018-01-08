import * as API from '../utils/API'
import * as Types from './types.js';

export const fetchCategories = () => {
  return (dispatch) => {
    API.fetchCategories().then(res => {
      dispatch({ type: Types.FETCH_CATEGORY, res })
    })
  }
}
