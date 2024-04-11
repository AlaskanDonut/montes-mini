import backend from './index.js'

export default async function getAssignment(id) {
  setTimeout(3000, () => {
    return `we made a call for assignment: id ${id}`
  })
}