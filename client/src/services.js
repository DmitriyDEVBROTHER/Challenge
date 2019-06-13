import axios from 'axios';

const requestGet = (url) => {
  return axios.get(url,
    {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Basic YWxhZGRpbjpvcGVuc2VzYW1l'
      }
    })
    .then((response) => { return { status: true, data: response.data } })
    .catch((error) => { return { status: false, data: 'Error in load page, please refresh', error: error } });
}

export { requestGet };
