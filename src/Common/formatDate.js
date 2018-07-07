import format from 'date-fns/format';

export default (date) => {
  if (date) return format(date, 'D MMM YYYY');
  return undefined;
};
