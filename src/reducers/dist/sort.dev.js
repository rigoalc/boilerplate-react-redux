"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _actions = require("../actions");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* 
  src/reducers/sort.js
*/
var initialState = {
  sortOptions: {
    // converted to an object so the selected ID can be used to lookup the sort type quickly rather than looping over the entire array each time a selection is made, in exchange I have to loop over the entries and reformat the data in App.js
    "created": {
      id: "created",
      // unique Id without spaces to be used as the "selected" property in this reducer
      label: "Chronological",
      // what the user sees in the dropdown
      type: "number" // the type of sort (used by the List View to make the comparable function more dynamic based on the data)

    },
    "title": {
      id: "title",
      // unique Id without spaces to be used as the "selected" property in this reducer
      label: "Alphabetical",
      // what the user sees in the dropdown
      type: "letter" // the type of sort (used by the List View to make the comparable function more dynamic based on the data)

    },
    "timeToRead": {
      id: "timeToRead",
      // unique Id without spaces to be used as the "selected" property in this reducer
      label: "Time to Read",
      // what the user sees in the dropdown
      type: "number" // the type of sort (used by the List View to make the comparable function more dynamic based on the data)

    },
    "favorite": {
      id: "favorite",
      // unique Id without spaces to be used as the "selected" property in this reducer
      label: "Favorite",
      // what the user sees in the dropdown
      type: "boolean" // the type of sort (used by the List View to make the comparable function more dynamic based on the data)

    }
  },
  selected: "created"
};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions.SELECT_SORT_OPTION:
      return _objectSpread({}, state, {
        selected: action.selected
      });

    default:
      return state;
  }
};

exports.default = _default;