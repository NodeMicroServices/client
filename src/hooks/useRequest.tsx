import axios from "axios";
import { useState } from "react";

interface IUseRequestProps {
    url: string,
    method: 'get' | 'post' | 'put' | 'delete',
    body?: { [key: string]: any },
    onSuccess?: (...args: any[]) => void;
}

const useRequest = ({ url, method, body = {}, onSuccess }: IUseRequestProps) => {
    const [errors, setErrors] = useState(null);

    const sendRequest = async () => {
        try {
            setErrors(null);
            const response = await axios[method](url, body);
            if (onSuccess) {
                onSuccess(response.data);
            }
            return response.data;
        } catch (err) {
            setErrors(
                <div className="alert alert-danger">
                    <h4>Oops...</h4>
                    <ul className="my-0">
                        {err.response.data.errors.map((e) => (
                            <li key={e.message}>{e.message}</li>
                        ))}
                    </ul>
                </div>
            );
        }
    };

    return { errors, sendRequest };
}

export default useRequest;
