import {BoundaryJSClient} from "./basclient";

let userServiceClient = new BoundaryJSClient(process.env.REACT_APP_API_BASE_URL + '/api');

export default {

    getAll() {
        return userServiceClient.get('/users');
    },

    editUser(data) {
        return userServiceClient.put('/user' + data.id, data);
    }
}