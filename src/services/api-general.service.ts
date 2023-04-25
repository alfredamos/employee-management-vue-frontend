import Axios from "@/utils/axios-interceptor.util";

export class ApiGeneral{
      static get(url: string){
            return Axios.get(url);
      }

      static remove(url: string){
            return Axios.delete(url);
      }
}