import axios from 'axios';

const getClient = (baseUrl = null, proxy = null) => {
    const options = {
        baseURL: baseUrl,
        proxy: proxy
    };

    const client = axios.create(options);

    // Add an interceptor for requests
    client.interceptors.request.use(
        requestConfig => requestConfig,
        (requestError) => {
            return Promise.reject(requestError);
        },
    );

    // Add an interceptor for responses

    client.interceptors.response.use(
        response => response,
        (error)=> {
            if (error.response.status >= 500) { // 500, Server had a problem.
            }

            return Promise.reject(error)
        },
    );

    // Successful run.
    return client;
};

class BoundaryJSClient {
    constructor(baseUrl = null, proxyConfig = null) {
        this.client = getClient(baseUrl, proxyConfig);
    }

    get(url, conf = {}) {
        return this.client.get(url, conf)
            .then(response => Promise.resolve(response))
            .catch(error => Promise.reject(error));
    }

    post(url, data = {}, conf = {}) {
        return this.client.post(url, data, conf)
            .then(response => Promise.resolve(response))
            .catch(error => Promise.reject(error))
    }

    delete(url, conf = {}) {
        return this.client.delete(url, conf)
            .then(response => Promise.resolve(response))
            .catch(error => Promise.reject(error))
    }
}

export { BoundaryJSClient };

export default {
    get(url, conf = {}) {

        return getClient().get(url, conf)
            .then(response => Promise.resolve(response))
            .catch(error => Promise.reject(error));
    },
    post(url, data = {}, conf = {}) {
        return getClient().post(url, data, conf)
            .then(response => Promise.resolve(response))
            .catch(error => Promise.reject(error))
    },
    delete(url, conf = {}) {
        return getClient().delete(url, conf)
            .then(response => Promise.resolve(response))
            .catch(error => Promise.reject(error))
    }
}