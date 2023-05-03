import axios from 'axios';

export const commoditiesService = {
    getCommoditiesList,
};

function getCommoditiesList(id) {    
    return axios
        .get(`https://api.digikala.com/v1/product/${id}/`)
        .then(res => {
            console.log("data >> "); console.log(res.data);
            return res.data
        })
        .catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
            }
        });
}