"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isVisibility = exports.isWeather = exports.isDate = exports.isString = void 0;
const types_1 = require("../types");
const isString = (string) => {
    return typeof string !== 'string';
};
exports.isString = isString;
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
exports.isDate = isDate;
const isWeather = (param) => {
    return Object.values(types_1.Weather).includes(param);
};
exports.isWeather = isWeather;
const isVisibility = (param) => {
    return Object.values(types_1.Visibility).includes(param);
};
exports.isVisibility = isVisibility;
const parseComment = (commentFromRequest) => {
    if (!(0, exports.isString)(commentFromRequest)) {
        throw new Error('Incorrect or missing comment');
    }
    return commentFromRequest;
};
const parseDate = (dateFromRequest) => {
    if (!(0, exports.isString)(dateFromRequest) || !(0, exports.isDate)(dateFromRequest)) {
        throw new Error('Incorrect or missing date');
    }
    return dateFromRequest;
};
const parseWeather = (weatherFromRequest) => {
    if (!(0, exports.isString)(weatherFromRequest) || !(0, exports.isWeather)(weatherFromRequest)) {
        throw new Error('Incorrect or missing Weather');
    }
    return weatherFromRequest;
};
const parseVisibility = (visibilityFromRequest) => {
    if (!(0, exports.isString)(visibilityFromRequest) || !(0, exports.isVisibility)(visibilityFromRequest)) {
        throw new Error('Incorrect or missing Visibility');
    }
    return visibilityFromRequest;
};
const toNewDiaryEntry = (object) => {
    const newEntry = {
        comment: parseComment(object.comment),
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility)
    };
    return newEntry;
};
exports.default = toNewDiaryEntry;
