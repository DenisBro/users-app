export default function users(state = {}, action){
  let new_state;
  switch (action.type) {
    case 'users.modalDeleteShow':
      new_state = JSON.parse(JSON.stringify(state));
      new_state.modal = new_state.modal ? new_state.modal : {};
      new_state.modal.list_delete = {
        show: true,
        id: action.id,
        username: action.username,
      }
      return new_state;

    case 'users.modalDeleteHide':
      new_state = JSON.parse(JSON.stringify(state));
      new_state.modal.list_delete = {
        show: false,
        id: 0,
        username: '',
      }
      return new_state;

    case 'users.delete':
      new_state = JSON.parse(JSON.stringify(state));
      for(const index in new_state.list){
        if(new_state.list[index].id === action.id){
          new_state.list.splice(index, 1);
          break;
        }
      }
      return new_state;

    case 'users.add':
      new_state = JSON.parse(JSON.stringify(state));
      //set the user id or generate a new id
      const id = action.id ? action.id : Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
      //add the user
      new_state.list.push({
        id: id,
        username: action.username,
        job: action.job,
      });
      return new_state;

    case 'users.edit':
    new_state = JSON.parse(JSON.stringify(state));
      for(const user of new_state.list){
        if(user.id === action.id){
          Object.assign(user, {
            username: action.username,
            job: action.job,
          });
          break;
        }
      }
      return new_state;
    //the users list saga fetching was a success
    case 'users.fetchListSuccess':
      new_state = JSON.parse(JSON.stringify(state));
      new_state.list = action.users;
      return new_state;

    default: return state;
  }
}
