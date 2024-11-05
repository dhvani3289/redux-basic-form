
import { ADD_CONTACT, DELETE, SORTING, UPDATE_CONTACT } from "../ActionType";

let getContact = JSON.parse(localStorage.getItem("contact"));

const initialValue = {
    contact: getContact ? getContact : []
}

export const ContactReducers = (state = initialValue, action) => {

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

        case SORTING:
            const sortBy = action.payload;
            let sortedContacts = [...state.contact];
            if (sortBy === "ascending") {
                sortedContacts.sort((a, b) => a.username.localeCompare(b.username));
            } else {
                sortedContacts.sort((a, b) => b.username.localeCompare(a.username));
            }
            return { ...state, contact: sortedContacts };

        default:
            return state;
    }
}