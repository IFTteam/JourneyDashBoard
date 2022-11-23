import http from "../http-common";

class JourneyDataService {
  getAll() {
    return http.get(`/journey/all`);
  }


  // update(id, data) {
  //   return http.put(`/tutorials/${id}`, data);
  // }

  // delete(id) {
  //   return http.delete(`/tutorials/${id}`);
  // }

  // deleteAll() {
  //   return http.delete(`/tutorials`);
  // }


}

export default new JourneyDataService();