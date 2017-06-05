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

    case 'userDelete':
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
      //generate a new id
      const id = Number((Math.random()*1000000).toPrecision(6));
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
    default: return state;
  }
}
