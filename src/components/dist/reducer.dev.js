"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Reducer = function Reducer(state, action) {
  switch (action.type) {
    case 'handle_Input':
      return _objectSpread({}, state, _defineProperty({}, action.field, action.payload));

    case 'INVALID_PHONE':
      return _objectSpread({}, state, {
        revert: 'Invalid Phone Number'
      });

    case 'ADEQUATE':
      var newPeople = [].concat(_toConsumableArray(state.values), [action.payload]);
      return _objectSpread({}, state, {
        revert: 'REGISTRATION SUCCESSFUL!',
        values: newPeople,
        firstName: '',
        lastName: '',
        phone: '',
        age: '',
        email: '',
        Gender: ''
      });

    case 'EMPTY_STRING':
      return _objectSpread({}, state, {
        revert: 'Please Enter your First Name'
      });

    case 'EMPTY':
      return _objectSpread({}, state, {
        revert: 'Please Enter your Last Name'
      });

    case 'WRONG_AGE':
      return _objectSpread({}, state, {
        revert: 'Please Enter A VALID AGE'
      });

    case 'WRONG_EMAIL':
      return _objectSpread({}, state, {
        revert: 'Please Enter A VALID EMAIL'
      });

    case 'LOGOUT':
      return _objectSpread({}, state, {
        token: null,
        reverts: '',
        revert: '',
        phone: '',
        age: '',
        email: '',
        values: [],
        firstName: '',
        lastName: ''
      });

    default:
      return state;
  }
};

var _default = Reducer;
exports["default"] = _default;