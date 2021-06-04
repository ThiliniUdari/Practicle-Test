import http from "../http-common";

class UserDataService{
    getAll(){
        return http.get("/users");
    }
    get(email) {
        return http.get(`/users/${email}`);
      }
}
export default new UserDataService;