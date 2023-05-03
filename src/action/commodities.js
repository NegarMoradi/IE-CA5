import { commoditiesConstants } from '../constants';
import { commoditiesService } from '../server';

export const commoditiesActions = {
    getCommoditiesList,
};

function getCommoditiesList(id) {
    return dispatch => {
        dispatch(request())
        commoditiesService.getCommoditiesList(id)
            .then(
                res => {
                    console.log("commodities received")
                    dispatch(success(res.data));
                },
                error => {
                    dispatch(failure(error.toString()));
                    console.log("occur error");
                    console.log(error.toString());
                }
            );
    };

    function request() { console.log("into request"); return { type: commoditiesConstants.GET_DETAILS_LIST_REQUEST } }
    function success(data) { console.log("into success"); return { type: commoditiesConstants.GET_DETAILS_LIST_SUCCESS, data } }
    function failure(error) { return { type: commoditiesConstants.GET_DETAILS_LIST_FAILURE, error } }
}
