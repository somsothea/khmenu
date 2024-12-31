const { permission } = require('../middlewares');

const actions = {
  DELETE_ITEM: 'DELETE_ITEM',
  DELETE_USER: 'DELETE_USER',
  DELETE_STORE: 'DELETE_STORE',
  EDIT_ITEM: 'EDIT_ITEM',
  EDIT_USER: 'EDIT_USER',
  EDIT_STORE: 'EDIT_STORE',
  CREATE_ITEM: 'CREATE_ITEM',
  CREATE_USER: 'CREATE_USER',
  CREATE_STORE: 'CREATE_STORE',
  READ_ITEM: 'READ_ITEM',
  READ_USER: 'READ_USER',
  READ_STORE: 'READ_STORE',
  READ_FILE: 'READ_FILE',
};

const roles = {
  ADMIN: {
    role: 'ADMIN',
    permissions: Object.keys(actions),
  },
  USER: {
    role: 'USER',
    permissions: [
      actions.READ_USER,
      actions.READ_ITEM,  
      actions.CREATE_ITEM,
      actions.DELETE_ITEM,
      actions.EDIT_ITEM,
      actions.CREATE_STORE,
      actions.READ_STORE,
      actions.DELETE_STORE,
      actions.EDIT_STORE,    
      actions.READ_FILE, 
    ],
  },
  GUEST: {
    role: 'GUEST',
    permissions: [actions.READ_FILE, actions.READ_ITEM, actions.READ_STORE,], 
  },
};

module.exports = { actions, roles };
