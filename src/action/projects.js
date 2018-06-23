import axios from 'axios';
import Config from '../Config/config';

export const allProjects = () => {
    return dispatch => {
        axios.get(`${Config.baseUrl}&q=featured&client_id=${Config.clinetId}`, {
            headers: {"Content-Type": "application/x-www-form-urlencoded", "Access-Control-Allow-Origin": '*'},
        })
            .then((response) => {
                dispatch({
                    type: 'ALL_PROJECTS',
                    payload: response.data.projects
                });
            })
            .catch((error) => {
                console.log("error", error);
            });
    }
}
