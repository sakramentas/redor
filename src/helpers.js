import moment from 'moment';

export const getDateNowFull = () => `${moment().format('YYYY-MM-DDTHH:mm:ss')}Z`;
export const transformDateFull = dateTime => `${moment(dateTime).format('dddd, h:mm a')}`;
export const transformTimefull = dateTime => `${moment(dateTime).format('LT')}`;
