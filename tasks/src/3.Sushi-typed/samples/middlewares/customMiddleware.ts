const customMiddleWare = ({ getState, dispatch }) => next => action => {
  console.log('Middleware triggered:', action);
  return next(action);
};
