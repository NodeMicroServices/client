import axios from "axios";
import type { GetServerSidePropsContext } from 'next'

const client = ({ req }: GetServerSidePropsContext) => {
    const serverUrl = `http://ingress-nginx-controller.ingress-nginx.svc.cluster.local`;
    return axios.create({
        baseURL: serverUrl,
        headers: req.headers
    });
}

export default client;
