import sendRequest from "./send-request";

const BASE_URL = "/api/tips";

export function getAll () {
    return sendRequest(BASE_URL)
}

export function getTip (id) {
    return sendRequest(`${BASE_URL}/${id}`)
}

export function createTips (tip) {
    return sendRequest(BASE_URL, "POST", tip)
}

export function deleteTips(tipId) {
    return sendRequest(`${BASE_URL}/${tipId}`, "DELETE")
}

export function editTips(tip, id) {
    return sendRequest(`${BASE_URL}/${id}`, "POST", tip)
}
