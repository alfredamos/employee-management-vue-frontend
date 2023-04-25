import Axios from "@/utils/axios-interceptor.util";

interface Entity {
  id: string;
}

export default class ApiService<T extends Entity> {
  constructor(public url: string) {}

  create(resource: T) {
    return Axios.post(this.url, resource);
  }

  edit(resource: T) {
    console.log("resource : ", resource);

    return Axios.put(`${this.url}/${resource.id}`, resource);
  }

  findAll() {
    return Axios.get(this.url);
  }

  findOne(id: string) {
    return Axios.get(`${this.url}/${id}`);
  }

  remove(id: string) {
    return Axios.delete(`${this.url}/${id}`);
  }
}
