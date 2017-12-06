//state argumetn is not application state
// it is only the part of state reducer responsible for
// here it is active book reducer
export default function (state = null, action){
  switch (action.type) {
    case 'BOOK_SELECTED':
      console.log(action.payload)
      return action.payload
  }

  return state
}
