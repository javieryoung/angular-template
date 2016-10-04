Date.prototype.database = function() {
  var mm = this.getMonth() + 1; // getMonth() is zero-based
  var dd = this.getDate();
  return this.getFullYear() + '-' + (mm < 10 ? '0' : '') + mm + '-' + (dd < 10 ? '0' : '') + dd
};

Date.prototype.database_datetime = function() {
  var mm = this.getMonth() + 1; // getMonth() is zero-based
  var dd = this.getDate();
  var hh = this.getHours();
  var min = this.getMinutes();
  return this.getFullYear() + '-' + (mm < 10 ? '0' : '') + mm + '-' + (dd < 10 ? '0' : '') + dd + ' ' + (hh<10? '0' : '') +hh + ':' + (min<10? '0' : '') + min
};

Date.prototype.visual = function() {
  var mm = this.getMonth() + 1; // getMonth() is zero-based
  var dd = this.getDate();
  return (dd < 10 ? '0' : '') + dd + '/' + (mm < 10 ? '0' : '') + mm + '/' +  this.getFullYear() 
};


Date.prototype.visual_datetime = function() {
  var mm = this.getMonth() + 1; // getMonth() is zero-based
  var dd = this.getDate();
  var hh = this.getHours();
  var min = this.getMinutes();
  return (dd < 10 ? '0' : '') + dd + '/' + (mm < 10 ? '0' : '') + mm + '/' +  this.getFullYear() + ' ' + (hh<10? '0' : '') +hh + ':' + (min<10? '0' : '') + min
};

function RailsDate(string) {
    arr = string.split(' ');
    date = arr[0].split('-');
    time = arr[1].split(':');
    d = new Date(date[0], date[1] - 1, date[2], time[0], time[1]);
    return d;
}