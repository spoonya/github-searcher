import * as ReposActionCreators from './repos.action';
import * as UserActionCreators from './user.action';

const ActionsObj = {
  ...ReposActionCreators,
  ...UserActionCreators,
};

export default ActionsObj;
