import { ADD_CONTACT, DELETE, SORTING, UPDATE_CONTACT } from "../ActionType";

export const contactDetails = (data) => {
    return {
        type: ADD_CONTACT,
        payload: data
    }
}

export const deleteContact = (position) => {
    return {
        type: DELETE,
        payload: position
    }
}

export const updateContactList = (pos, data) => {
    return {
        type: UPDATE_CONTACT,
        payload: { pos, data }
    }
}

export const sortData = (data) => {
    return {
        type: SORTING,
        payload: data
    }
}
