const { permission } = require('../middlewares');

const actions = {
  DELETE_ITEM: 'DELETE_ITEM',
  DELETE_FILE: 'DELETE_FILE',
  DELETE_USER: 'DELETE_USER',
  EDIT_ITEM: 'EDIT_ITEM',
  EDIT_FILE: 'EDIT_FILE',
  EDIT_USER: 'EDIT_USER',
  CREATE_ITEM: 'CREATE_ITEM',
  CREATE_FILE: 'CREATE_FILE',
  CREATE_USER: 'CREATE_USER',
  READ_ITEM: 'READ_ITEM',
  READ_FILE: 'READ_FILE',
  READ_USER: 'READ_USER',
};

const roles = {
  ADMIN: {
    role: 'ADMIN',
    permissions: Object.keys(actions),
  },
  USER: {
    role: 'USER',
    permissions: [
      actions.READ_ITEM,
      actions.READ_USER,
      actions.READ_FILE,
      actions.CREATE_FILE,
      actions.CREATE_ITEM,
    ],
  },
  GUESS: {
    role: 'GUESS',
    permissions: [actions.READ_FILE],
  },
};

module.exports = { actions, roles };
