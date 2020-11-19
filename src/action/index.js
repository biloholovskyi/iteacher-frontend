const hendleItemLesson = (idItem) => {
  return {
    type: 'HENDLE_ITEM_LESSON',
    payload: idItem
  }
}
const hendleHomeWork = (idItem) => {
  return {
    type: 'HENDLE_ITEM_HW',
    payload: idItem
  }
}
export {
  hendleItemLesson,
  hendleHomeWork
}