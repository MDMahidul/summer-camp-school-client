import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import axios from 'axios';

/* create base url */
const axiosSecure = axios.create({baseURL: `${import.meta.env.VITE_API_URL}`})

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const {logOut} = useContext(AuthContext);

    useEffect(()=>{
        /* intercept request send to server */
        axiosSecure.interceptors.request.use(config=>{
            const token = `Bearer ${localStorage.getItem('access-token')}`;
            if(token){
                config.headers.Authorization = token;
            }
            return config;
        })

        /* intercept response server to client */
        axiosSecure.interceptors.response.use(
            response=>response,async error=>{
                if(error.response && error.response.status === 401 || error.response.status === 403){
                    await logOut();
                    navigate('/signin');
                }
                return Promise.reject(error)
            }
        )
    },[logOut,navigate])

    return [axiosSecure];
};

export default useAxiosSecure;