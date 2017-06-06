export default class ApiUsers {

  static getList(action) {
    const timeout = 1000; //1 second delay
    return new Promise(resolve=>{
      setTimeout(() => {
        //build some dummy users list
        let users = [];
        for(let x=1; x < 28; x++) {
          users.push({
            id: x,
            username: 'Jhony ' + x,
            job: 'Employee ' + x,
          });
        }
        resolve(users);
      }, timeout);
    });
  }

  static add(action) {
    //call some api url
  }

  static edit(action) {
    //call some api url
  }

  static delete(action) {
    //call some api url
  }

}
