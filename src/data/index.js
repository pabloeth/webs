import { data } from './webs'

const joinCategories = data.map(web => web.categories).join().split(',')
const deleteRepeats = new Set(joinCategories)

const categories = [...deleteRepeats].sort()
const webs = data.sort((a, b) => a.name > b.name ? 1 : -1)

export {
  categories,
  webs
}
