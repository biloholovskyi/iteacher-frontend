// реакция на нажатия на урок в расписании
const hendleItemLesson = (idItem) => {
  return {
    type: 'HENDLE_ITEM_LESSON',
    payload: idItem
  }
}
// реакция на нажатия галочки дом задания в модальном окне расписания. Уточнить нужен ли он вообще??????????????????
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