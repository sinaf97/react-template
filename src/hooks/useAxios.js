import axios from "axios";
import { useState } from "react";
// import { Cookies } from "react-cookie";

export const useAxios = (progressHandler = () => {}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const headers = {};
  //   const headers = { "X-CSRFToken": new Cookies().get("csrftoken") };
  //   if (process.env.NODE_ENV === "development" && new Cookies().get("JWT")) {
  //     headers.Authorization = `JWT ${new Cookies().get("JWT")}`;
  //   }

  const _p = (url) => process.env.REACT_APP_API_URL + url;

  const get = (url, queryParams) => {
    setLoading(true);
    axios
      .get(`_p(url)?${queryParams}`)
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const post = (url, data) => {
    setLoading(true);
    axios
      .post(_p(url), data, {
        headers,
        withCredentials: true,
        onUploadProgress: progressHandler,
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const put = (url, data) => {
    setLoading(true);
    axios
      .put(_p(url), data, {
        headers,
        withCredentials: true,
        onUploadProgress: progressHandler,
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const patch = (url, data) => {
    setLoading(true);
    axios
      .patch(_p(url), data, {
        headers,
        withCredentials: true,
        onUploadProgress: progressHandler,
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const _delete = (url) => {
    setLoading(true);
    axios
      .delete(_p(url), {
        headers,
        withCredentials: true,
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { loading, data, error, get, post, put, patch, remove: _delete };
};
