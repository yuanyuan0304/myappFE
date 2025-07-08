import moment from 'moment';

export const toFixedNoRound = (num: string, fixed: number): string => {
  if (!num) return num;
  let tempNum = num.split(',').join('');

  const reg = new RegExp('^-?\\d+(?:\\.\\d{0,' + fixed + '})?', 'g');

  const a = tempNum.toString().match(reg);
  let b = a && a.length !== 0 ? a[0] : '';

  const dot = b.indexOf('.');
  if (dot === -1) {
    // integer, insert decimal dot and pad up zeros
    return b + '.' + '0'.repeat(fixed);
  }
  const result = fixed - (b.length - dot) + 1;
  return (result > 0 ? a + '0'.repeat(result) : a)?.toString() ?? '';
};

export const thousandsSeparate = (num: string) => {
  if (!num) return num;

  var tempNum = num.toString().split(',').join('');

  var splitData = tempNum.toString().split('.');
  var result = splitData[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  if (splitData.length > 1) result += '.' + splitData[1];

  return result;

  // return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '.00';
};

export const deepMerge = (current: any = {}, updates: any = {}) => {
  const keys = updates && Object.keys(updates);

  if (keys) {
    for (let i = 0; i < keys.length; i++) {
      if (!current.hasOwnProperty(keys[i]) || typeof updates[keys[i]] !== 'object') {
        if (current[keys[i]] === updates[keys[i]]) {
        } else current[keys[i]] = updates[keys[i]];
      } else deepMerge(current[keys[i]], updates[keys[i]]);
    }
  }

  return current;
};

export const formatDate = (input: any, outputFormat: string, inputFormat: any = '') => {
  if (!input) return '';
  let date = moment(input, inputFormat).format(outputFormat);
  if (moment(date, outputFormat).isValid()) {
    return date;
  } else return '';
};

export const replaceAt = (str: string, index: number, replacement: string) => {
  return str.substr(0, index) + replacement + str.substr(index + replacement.length);
};

export const getCurrentTmSet = () => {
  const date = new Date();
  const offset = date.getTimezoneOffset();
  let tms = moment(date).format('yyyyMMDDHHmmssSSS');

  return {
    date: date,
    tms: tms,
    hour: tms.substring(8, 10),
    min: tms.substring(10, 12),
    sec: tms.substring(12, 14),
    mSec: tms.substring(14),
    offset: offset,
  };
};

export const lengthFormatter = (text: string, maxLength: number) => {
  if (maxLength && text.length > maxLength) {
    return text.slice(0, maxLength);
  }

  return text;
};

export const isNull = (input: any) => {
  if (typeof input == undefined || input == null || !input) return true;
  else return false;
};
