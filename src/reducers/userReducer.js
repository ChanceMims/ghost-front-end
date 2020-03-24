export default function reducer(
  state = { users: [], currentUser: "" },
  action
) {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return state;
    default:
      return state;
  }
}
