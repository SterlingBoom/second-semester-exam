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

//Provides the Required response to a specific action and condition
var Reducer = function Reducer(state, action) {
  switch (action.type) {
    case 'handle_Input':
      return _objectSpread({}, state, _defineProperty({}, action.field, action.payload));

    case 'handle_Account_Input':
      return _objectSpread({}, state, _defineProperty({}, action.field, action.payload));

    case 'INVALID_PHONE':
      return _objectSpread({}, state, {
        fund: 'Invalid Phone Number'
      });

    case 'INVALID':
      return _objectSpread({}, state, {
        funds: 'Invalid Token'
      });

    case 'SUFFICIENT':
      var newPeople = [].concat(_toConsumableArray(state.values), [action.payload]);
      return _objectSpread({}, state, {
        fund: 'Recharge Successful',
        values: newPeople,
        dash: state.dash - state.amount,
        amount: '',
        phone: '',
        network: ''
      });

    case 'SUFFICIENT_ACCOUNT':
      var newPeoples = [].concat(_toConsumableArray(state.account_values), [action.payload]);
      return _objectSpread({}, state, {
        funds: 'Transfer Successful',
        account_values: newPeoples,
        dash: state.dash - state.account_amount,
        account_amount: '',
        account_name: '',
        account_number: '',
        account_type: ''
      });

    case 'EMPTY_STRING':
      return _objectSpread({}, state, {
        fund: 'Please Enter An Amount'
      });

    case 'EMPTY_STRING_ACCOUNT':
      return _objectSpread({}, state, {
        funds: 'Please Enter An Amount To Transfer'
      });

    case 'LOGOUT':
      return _objectSpread({}, state, {
        token: null,
        amount: '',
        phone: '',
        network: '',
        funds: '',
        fund: ''
      });

    case 'INVALIDACNUMBER':
      return _objectSpread({}, state, {
        funds: 'Invalid Account Number'
      });

    case 'NET':
      return _objectSpread({}, state, {
        fund: 'Please Select a Network'
      });

    case 'NET_ACCOUNT':
      return _objectSpread({}, state, {
        funds: 'Please Select Account Type'
      });

    case 'NET_ACCOUNT_NAME':
      return _objectSpread({}, state, {
        funds: 'Please Enter Account Name'
      });

    case 'NONUMBER':
      return _objectSpread({}, state, {
        fund: 'Please Input Number to Recharge'
      });

    case 'NOINVALID':
      return _objectSpread({}, state, {
        funds: 'Enter Access Token'
      });

    case 'NONUMBER_ACCOUNT':
      return _objectSpread({}, state, {
        funds: 'Please Enter An Account Number'
      });

    default:
      return state;
  }
};

var _default = Reducer;
exports["default"] = _default;