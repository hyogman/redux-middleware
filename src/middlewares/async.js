export default function ({ dispatch }) {
  return next => action => {
    // if action does not have payload or .then property then send it on
    if(!action.payload || !action.payload.then) {
      return next(action);
    }
    // make sure the action's promise is resovled
    action.payload.then(response => {
      // create a new action with old type, but
      // replace the promise with response date
      const newAction = { ...action, payload: response };
      dispatch(newAction);
    })
  };
}
