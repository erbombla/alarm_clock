$( function(){
  function refresh() {
    hour = moment().format('h')
    minute = moment().format('mm')
    second = moment().format('ss')
    suffix = moment().format('a')
    time = moment().format('h:mm:ss a')
    $('#time').text(time);
  }
  setInterval(refresh, 1000);
});
