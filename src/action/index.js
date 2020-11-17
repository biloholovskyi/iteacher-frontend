const lessonsLoaded = (newLessons) => {
  return {
    type: 'LESSONS_LOADED',
    payload: newLessons
  }
}
export {
  lessonsLoaded
}