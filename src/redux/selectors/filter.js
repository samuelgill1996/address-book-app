import { createSelector } from "reselect";

export const filterSelector = createSelector(
    (state) => state.user,
    (_, filtered) => filtered,
    (_, fil, userLimit) => userLimit,
    (data, filtered, userLimit) => {
        if (filtered === "") {
            return data.users.slice(0, userLimit)
        }
        else {
            return data.users.filter((item) => `${item.name.title} ${item.name.first} ${item.name.last}`.toLowerCase().includes(filtered))
        }
    }
)

export const fetchMoreSelector = createSelector(
    (state) => state.user,
    (data) => {
        if (data.users.length < 1000) {
            return true;
        }
        else {
            return false;
        }
    }
)