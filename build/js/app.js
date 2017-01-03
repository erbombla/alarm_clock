(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$(function(){
  checkTimeInterval = 0;
  $('form').submit(function(event) {
    event.preventDefault();
    $('form').hide();
    alarmTime = $('input[name=time]').val()
    alarmTimeNumber = numberTime(alarmTime)
    $('#alarmTime').text(convertTime(alarmTime));
    setInterval(checkTime, 1000);
  });
  $('#disable').click(function() {
    $('#alarmTime').text('');
    $('#alarmTime').removeClass('flash');
    $('form').show();
    $('input[name=time]').val('');
    clearInterval(checkTimeInterval);
  })
});

function checkTime() {
  if(refresh() >= alarmTimeNumber) {
    $('#alarmTime').addClass('flash');
  }
}

function refresh() {
  hour = moment().format('h')
  minute = moment().format('mm')
  second = moment().format('ss')
  suffix = moment().format('a')
  time = moment().format('h:mm:ss a')
  $('#time').text(time);
  return numberTime(moment().format('HH:mm'))
}
setInterval(refresh, 1000);


function convertTime(time) {
  output = "";
  hour = parseInt(time.split(':')[0])
  minute = time.split(':')[1]
  if( hour > 12) {
    output = hour - 12 + ':' + minute + ' pm';
  }
  else if (hour === 12) {
    output = '' + hour + ':' + minute + ' pm'
  }
  else if (hour === 0) {
    output = '12:' + minute + 'am'
  }
  else {
    output = '' + hour + ':' + minute + ' am';
  }
  return output;
}

function numberTime(time) {
  hour = parseInt(time.split(':')[0])
  minute = parseInt(time.split(':')[1])
  total = hour * 60 + minute
  return total
}

},{}]},{},[1]);
