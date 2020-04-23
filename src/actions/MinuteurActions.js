export const workMinute = (dispatch) => {
  return (e) =>
    dispatch({
      type: 'WORK_MINUTE',
      value: e.currentTarget.value,
    });
};
export const workSeconde = (dispatch) => {
  return (e) =>
    dispatch({
      type: 'WORK_SECONDE',
      value: e.currentTarget.value,
    });
};
export const reposMinute = (dispatch) => {
  return (e) =>
    dispatch({
      type: 'REPOS_MINUTE',
      value: e.currentTarget.value,
    });
};
export const reposSeconde = (dispatch) => {
  return (e) =>
    dispatch({
      type: 'REPOS_SECONDE',
      value: e.currentTarget.value,
    });
};
export const timeLeftMinute = (dispatch) => {
  return dispatch({
    type: 'TIMELEFT_MINUTE',
  });
};
export const timeLeftSeconde = (dispatch) => {
  return dispatch({
    type: 'TIMELEFT_SECONDE',
  });
};
/*
export const timeLeftWork = (dispatch) => {
  return () =>
    dispatch({
      type: 'INIT_TIMELEFT_WORK',
    });
};
export const timeLeftRepos = (dispatch) => {
  return () =>
    dispatch({
      type: 'INIT_TIMELEFT_REPOS',
    });
};*/
export const lapsNumber = (dispatch) => {
  return (e) =>
    dispatch({
      type: 'LAPS_NUMBER',
      value: e.currentTarget.value,
    });
};
export const incLaps = (dispatch) => {
  return () =>
    dispatch({
      type: 'INC_LAPS',
    });
};
export const decLaps = (dispatch) => {
  return () =>
    dispatch({
      type: 'DEC_LAPS',
    });
};
export const setCount = (dispatch) => {
  return dispatch({
    type: 'COUNT',
  });
};
export const resetCount = (dispatch) => {
  return dispatch({
    type: 'RESET_COUNT',
  });
};
export const switchTravail = (dispatch) => {
  return dispatch({
    type: 'SESSION_TRAVAIL',
  });
};
export const switchRepos = (dispatch) => {
  return dispatch({
    type: 'SESSION_REPOS',
  });
};
export const toggleActive = (dispatch) => {
  return () =>
    dispatch({
      type: 'IS_ACTIVE',
    });
};
export const toggleMinute = (dispatch) => {
  return dispatch({
    type: 'IS_MINUTE',
  });
};
export const reset = (dispatch) => {
  return () =>
    dispatch({
      type: 'RESET',
    });
};
