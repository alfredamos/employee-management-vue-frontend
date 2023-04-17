import axios from "axios";

interface Entity {
  id: number;
}

export default class ApiService<T extends Entity> {
  constructor(public url: string) {}

  create(resource: T) {
    return axios.post(this.url, resource);
  }

  edit(resource: T) {
    console.log("resource : ", resource);

    return axios.put(`${this.url}/${resource.id}`, resource);
  }

  findAll() {
    return axios.get(this.url);
  }

  findOne(id: number) {
    return axios.get(`${this.url}/${id}`);
  }

  remove(id: number) {
    return axios.delete(`${this.url}/${id}`);
  }
}
