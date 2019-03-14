/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/order.js":
/*!*******************************!*\
  !*** ./resources/js/order.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function calculate_order() {
  var subtotal = 0;
  var quantity_products = 0;
  var discount = $('[name="discount"]').val().replace('.', '').replace(',', '.');

  if (!discount) {
    discount = 0;
  }

  $('[name="product_id[]"').each(function () {
    var e = $(this);
    var price = e.parents('tr').find('[name="product_id[]"] > option:selected').attr('data-price');
    var quantity = parseInt(e.parents('tr').find('[name="quantity[]"]').val());

    if (price > 0) {
      subtotal += price * quantity;
      quantity_products += quantity;
      e.parents('tr').find('.product-price').text('R$ ' + numberToReal(price * quantity));
    } else {
      e.parents('tr').find('.product-price').text('-');
    }
  });
  $('.order-total-product').text(quantity_products);
  $('.order-subtotal').text('R$ ' + numberToReal(subtotal.toFixed(2)));
  $('.order-discount').text('R$ ' + numberToReal(discount));

  if (subtotal >= discount) {
    $('.order-total').text('R$ ' + numberToReal(subtotal - discount));
  } else {
    $('[name="discount"]').val(0);
    calculate_order();
    alert('Desconto inválido!');
  }
}

function event_calcule_order() {
  $('[name="product_id[]"], [name="quantity[]"], [name="discount"]').unbind('change').change(function () {
    calculate_order();
  });
  event_remove_product();
}

function event_remove_product() {
  $('.btn-remove').unbind('click').click(function () {
    if (confirm('Deseja realmente fazer isso?')) {
      $(this).parents('tr').remove();
      calculate_order();
    }
  });
}

function numberToReal(n) {
  var c, d, t, s, i, j;
  c = isNaN(c = Math.abs(c)) ? 2 : c;
  d = d == undefined ? "," : d;
  t = t == undefined ? "." : t;
  s = n < 0 ? "-" : "";
  i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c)));
  j = (j = i.length) > 3 ? j % 3 : 0;
  return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
}

$(document).ready(function () {
  event_calcule_order();
  $('.btn-product-add').click(function () {
    $('input[type="submit"], .btn-product-add').attr('disabled', true);
    $.ajax({
      url: base_url + 'product/all',
      type: 'GET',
      dataType: 'json'
    }).done(function (data) {
      var html = '';
      html += '<tr>';
      html += '<td>';
      html += '<div class="media">';
      html += '<div class="media-body">';
      html += '<select class="form-control" name="product_id[]">';
      $.each(data, function (key, value) {
        html += '<option data-price="' + value.price + '" value="' + value.id + '">' + value.title + '</option>';
      });
      html += '</select>';
      html += '</div>';
      html += '</div>';
      html += '</td>';
      html += '<td>';
      html += '<select class="form-control" name="quantity[]">';

      for (var x = 1; x <= 100; x++) {
        html += '<option>' + x + '</option>';
      }

      html += '</select>';
      html += '</td>';
      html += '<td>';
      html += '<div class="price-wrap">';
      $.each(data, function (key, value) {
        html += '<var class="price product-price">R$ ' + numberToReal(value.price) + '</var>';
        return false;
      });
      html += '</div>';
      html += '</td>';
      html += '<td class="text-right">';
      html += '<a class="btn btn-danger btn-round btn-remove btn-sm"><i class="fa fa-remove"/> Remover</a>';
      html += '</td>';
      html += '</tr>';
      $('tbody').append(html);
      calculate_order();
      event_calcule_order();
    }).always(function () {
      $('input[type="submit"], .btn-product-add').attr('disabled', false);
    });
  });
  $('[data-trigger-click="true"]').trigger('click');
  $('#form-order-create').submit(function () {
    var form = $('#form-order-create');
    var action = form.attr('data-action');
    form.find('input[type="submit"]').attr('disabled', true);
    $('.alert-danger, .alert-success').addClass('hide');
    $.ajax({
      url: action,
      type: 'POST',
      dataType: 'json',
      data: form.serialize()
    }).done(function () {
      if (form.find('[name="_method"]').val() == 'PUT') {
        $('.alert-success').text('Updated.').removeClass('hide');
      } else {
        $('[name="client_id"], [name="discount"]').val('');
        $('[name="paid"]').val(0).change();
        $('.card tbody tr').remove();
        $('.alert-success').text('Created.').removeClass('hide');
        $('.btn-product-add').trigger('click');
      }
    }).fail(function (data) {
      $('.alert-danger ul li').remove();
      $.each(data.responseJSON.errors, function (key, value) {
        $('.alert-danger ul').append('<li>' + value + '</li>');
      });
      $('.alert-danger').removeClass('hide');
    }).always(function () {
      form.find('input[type="submit"]').attr('disabled', false);
    });
    return false;
  });
});

/***/ }),

/***/ 3:
/*!*************************************!*\
  !*** multi ./resources/js/order.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/vagrant/code/benquer/rocketzweb/resources/js/order.js */"./resources/js/order.js");


/***/ })

/******/ });