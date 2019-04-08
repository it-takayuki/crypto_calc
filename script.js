$(function(){
  $('form').submit(function() {
    var inJpy = $('#in-jpy').val();
    var price = $('#price').val();
    var fPrice = $('#f-price').val();
    var fValue = inJpy / price * fPrice;
    var mgf = fValue / inJpy;
    var profit = fValue - inJpy;
    function ketamoji(num) {
    var keta = ['', '万', '億', '兆', '京'];
    var nums = String(num).replace(/(\d)(?=(\d\d\d\d)+$)/g, "$1,").split(",").reverse();
    var data = '';
    for (var i = 0; i < nums.length; i++) {
      if (!nums[i].match(/^[0]+$/)) {
        data = nums[i].replace(/^[0]+/g, "") + keta[i] + data;
      }
    }
    return data;
    };
    if (fValue === 0) {
      $('#f-value').text("0円");
    } else if (fValue < 1) {
      $('#f-value').text("1円未満");
    } else {
      $('#f-value').text(ketamoji(Math.floor(fValue)) + "円");
    }
    if (profit === 0) {
      $('#profit').text("0円");
    } else if (profit < 1 && profit > 0) {
      $('#profit').text("1円未満");
    } else {
      $('#profit').text(ketamoji(Math.floor(profit)) + "円");
    }
    if (mgf < 10) {
      $('#mgf').text(Math.floor(mgf * 10) / 10 + "倍");
    } else {
      $('#mgf').text(ketamoji(Math.floor(mgf)) + "倍");
    }
    if (fValue) {
      $('.result').show();
      $('.note').show();
    }
    if (mgf < 1.1) {
      $('.mgf').hide();
    } else {
      $('.mgf').show();
    }
    return false;
  });
 });
