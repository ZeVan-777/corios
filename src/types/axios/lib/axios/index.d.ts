declare module "axios/lib/axios" {
    import { AxiosRequestConfig, AxiosInterceptorManager, AxiosResponse, AxiosPromise, AxiosStatic } from "axios";

    export class Axios {      
        constructor (config?: AxiosRequestConfig)        
     }

     export interface Axios extends AxiosStatic {

     }
}
