import moment from 'moment';

export const getDateNowFull = () => `${moment().format('YYYY-MM-DDTHH:mm:ss')}Z`;
