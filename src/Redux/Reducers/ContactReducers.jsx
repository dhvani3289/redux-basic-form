
import { ADD_CONTACT, DELETE, UPDATE_CONTACT } from "../ActionType";

let getContact = JSON.parse(localStorage.getItem("contact"));

const initialValue = {
    contact: getContact ? getContact : []
}

export const ContactReducers = (state = initialValue, action) => {
    console.log("state", state.contact);
    // {name: 'dhvani', contact: '7264223'}


    switch (action.type) {
        case ADD_CONTACT:
            let setContact = [...state.contact, action.payload];
            localStorage.setItem("contact", JSON.stringify(setContact))
            return {
                ...state, contact: setContact
            }

        case DELETE:
            let undeletedData = state.contact.filter((v, i) => {
                if (i != action.payload) {
                    return v
                }
            })
            localStorage.setItem("contact", JSON.stringify(undeletedData));
            return { ...state, contact: undeletedData }

        case UPDATE_CONTACT:
             state.contact.map((v, i) => {
                if (i == action.payload.pos) {
                    state.contact[i] = action.payload.data
                }
            })
            console.log(state.contact, ".....");

            localStorage.setItem("contact", JSON.stringify(state.contact));
            return { ...state, contact: state.contact }

        default:
            return state;
    }
}