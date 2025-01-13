import { isEmpty as _isEmpty } from "lodash";

export const isEmpty = (data) => {
    if (data === undefined || data == null || data == "null" || typeof data === "undefined" || data == "undefined") {
        return true;
    }
    if (typeof data === "string" && data.trim() === "") {
        return true;
    }

    if (["number", "boolean", "string"].indexOf(typeof data) == -1) {
        return _isEmpty(data);
    }
    return false;
};