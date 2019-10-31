export const formatDate = date => {
  let myDate = new Date(date);
  let newDate = new Date(myDate.getTime() + Math.abs(myDate.getTimezoneOffset() * 60000)),
    month = "" + (newDate.getMonth() + 1),
    day = "" + newDate.getDate(),
    year = newDate.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};
