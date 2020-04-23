//import '../actions/MinuteurActions';

export const initialState = {
  time: { m: 0, s: 30 },
  repos: { m: 0, s: 30 },
  timeLeft: { m: 0, s: 30 },
  laps: 10,
  sessionName: 'Travail',
  count: 0,
  isActive: false,
  isMinute: false,
};

const MinuteurReducer = (state, action) => {
  switch (action.type) {
    case 'WORK_MINUTE':
      return {
        ...state,
        time: { ...state.time, m: action.value },
        timeLeft: { ...state.timeLeft, m: action.value },
      };
    case 'WORK_SECONDE':
      return {
        ...state,
        time: { ...state.time, s: action.value },
        timeLeft: { ...state.timeLeft, s: action.value },
      };
    case 'REPOS_MINUTE':
      return { ...state, repos: { ...state.repos, m: action.value } };
    case 'REPOS_SECONDE':
      return { ...state, repos: { ...state.repos, s: action.value } };
    case 'TIMELEFT_MINUTE':
      return { ...state, timeLeft: { m: state.timeLeft.m - 1, s: 60 - 1 } };
    case 'TIMELEFT_SECONDE':
      return {
        ...state,
        timeLeft: { ...state.timeLeft, s: state.timeLeft.s - 1 },
      };
    case 'INIT_TIMELEFT_WORK':
      return { ...state, timeLeft: { ...state.time } };
    case 'INIT_TIMELEFT_REPOS':
      return { ...state, timeLeft: { ...state.repos } };
    case 'LAPS_NUMBER':
      return { ...state, laps: action.value };
    case 'INC_LAPS':
      return { ...state, laps: state.laps + 1 };
    case 'DEC_LAPS':
      return { ...state, laps: state.laps - 1 };
    case 'COUNT':
      return { ...state, count: state.count + 1 };
    case 'RESET_COUNT':
      return { ...state, count: 0 };
    case 'SESSION_TRAVAIL':
      return { ...state, sessionName: 'Travail', timeLeft: { ...state.time } };
    case 'SESSION_REPOS':
      return { ...state, sessionName: 'Repos', timeLeft: { ...state.repos } };
    case 'IS_ACTIVE':
      return { ...state, isActive: !state.isActive };
    case 'IS_MINUTE':
      return { ...state, isMinute: !state.isMinute };
    case 'RESET':
      return {
        ...state,
        time: { m: 0, s: 30 },
        repos: { m: 0, s: 30 },
        timeLeft: { m: 0, s: 30 },
        laps: 10,
        sessionName: 'Travail',
        count: 0,
        isActive: false,
        isMinute: false,
      };
    default:
      return state;
  }
};

export default MinuteurReducer;
