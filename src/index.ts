import { 
    AxiosRequestConfig,
} from 'axios'

import { Axios } from 'axios/lib/axios'
import defaults from 'axios/lib/defaults'
import merge from 'lodash/merge'


export class Corios extends Axios {
    constructor(config?: AxiosRequestConfig) {
        super(merge(defaults, config))
    }    
}

export default new Corios()
