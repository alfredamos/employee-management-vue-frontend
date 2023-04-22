import axios from "axios";

export class ApiGeneral{
      static get(url: string){
            return axios.get(url);
      }
}