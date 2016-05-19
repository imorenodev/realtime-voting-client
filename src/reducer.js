import { Map, List } from 'immutable';

function setState(state, newState) {
  return state.merge(newState);
}

function vote(state, entry) {
  const currentPair = state.getIn(['vote', 'pair']);
  if (currentPair && currentPair.includes(entry)) {
    return state.set('hasVoted', entry);
  } 
  return state;
}

function resetVote(state) {
  const hasVoted = state.get('hasVoted');
  const currentPair = state.getIn(['vote', 'pair'], List());
  // if state contains a hasVoted property BUT 
  // the current pair doesn't include the movie title the client
  // had voted on previously, then it's a new vote and 
  // remove hasVoted property from state
  if (hasVoted && !currentPair.includes(hasVoted)) {
    return state.remove('hasVoted');
  }
  return state;
}

export default function(state = Map(), action) {
  switch (action.type) {
    case 'SET_STATE' :
      // composing functions, set the state and then reset vote if client already voted
      return resetVote(setState(state, action.state));
    case 'VOTE' :
      return vote(state, action.entry);
    default :
      return state;
  }
}
