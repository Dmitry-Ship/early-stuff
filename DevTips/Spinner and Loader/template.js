$(function () {

  var list = ['border-width', 'border-radius', 'max-width'];

  for (var i = 0; i < list.length; i++) {
    var item = list[i].split('');
    var dash = item.indexOf('-');
    item[dash+1] = item[dash+1].toUpperCase();
    item.splice(dash,1);
    var joined = item.join('');
    list[i] = joined;
  }

  var newList = list.map(function (n) {
    item = n.split('');
    var dash = item.indexOf('-');
    item[dash+1] = item[dash+1].toUpperCase();
    item.splice(dash,1);
    var final = item.join('');
    return final;
  });








});
