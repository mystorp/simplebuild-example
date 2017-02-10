(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* file: /home/zhangyao/simplebuild-example/src/js/es6/base.js*/"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.init = init;

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function init(options) {}

var basevar = exports.basevar = 8;

var MyBase = exports.MyBase = function () {
	function MyBase(props) {
		_classCallCheck(this, MyBase);

		this.props = props;
	}

	_createClass(MyBase, [{
		key: "initialize",
		value: function initialize(arg1, arg2) {
			var _this = this;

			for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
				args[_key - 2] = arguments[_key];
			}

			var myargs = [3, 5, arg2, arg1].concat(args);
			myargs.forEach(function (arg) {
				return _this.logArgs(arg);
			});
			this.realInitialize(this.props, myargs);
		}
	}, {
		key: "realInitialize",
		value: function realInitialize(props, args) {}
	}, {
		key: "destroy",
		value: function destroy() {}
	}, {
		key: "width",
		get: function get() {
			return this.props.width;
		}
	}, {
		key: "height",
		get: function get() {
			return this.props.height;
		}
	}]);

	return MyBase;
}();

var Sub = exports.Sub = function (_MyBase) {
	_inherits(Sub, _MyBase);

	function Sub(width, height) {
		_classCallCheck(this, Sub);

		return _possibleConstructorReturn(this, (Sub.__proto__ || Object.getPrototypeOf(Sub)).call(this, { width: width, height: height }));
	}

	_createClass(Sub, [{
		key: "size",
		get: function get() {
			return this.width * this.height;
		}
	}]);

	return Sub;
}(MyBase);
},{}],2:[function(require,module,exports){
/* file: /home/zhangyao/simplebuild-example/src/js/es6/main.js*/'use strict';

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.addEventListener('load', function () {
	var sub = new _base2.default(30, 40);
	console.log(sub.size);
	console.log('something21');
});
},{"./base":1}]},{},[2]);
