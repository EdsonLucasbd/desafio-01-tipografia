"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/styles/useExample.js":
/*!**********************************!*\
  !*** ./src/styles/useExample.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": function() { return /* binding */ Container; },\n/* harmony export */   \"Main\": function() { return /* binding */ Main; },\n/* harmony export */   \"Separator\": function() { return /* binding */ Separator; },\n/* harmony export */   \"Heading\": function() { return /* binding */ Heading; },\n/* harmony export */   \"StyledButton\": function() { return /* binding */ StyledButton; },\n/* harmony export */   \"Footer\": function() { return /* binding */ Footer; },\n/* harmony export */   \"OptionsContainer\": function() { return /* binding */ OptionsContainer; },\n/* harmony export */   \"OptionsGroup\": function() { return /* binding */ OptionsGroup; },\n/* harmony export */   \"StyledRadio\": function() { return /* binding */ StyledRadio; },\n/* harmony export */   \"DemoPhraseInput\": function() { return /* binding */ DemoPhraseInput; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme */ \"./src/styles/theme.js\");\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  background: \",\n        \";\\n  /* display: flex;\\n  flex-direction: column;\\n  width: 100vw;\\n  height: 100vh;\\n  border: 0; */\\n  padding: 0;\\n  /* outline: 0;\\n  box-sizing: border-box;\\n  margin: 0;\\n  align-items: center;\\n  justify-content: center; */\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  min-height: 100vh;\\n  padding: 4rem 1rem;\\n  flex: 1;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: flex-start;\\n  align-items: flex-start;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  width: 50vw;\\n  margin: 20px 0;\\n  border: 1px solid \",\n        \";\\n  border-radius: 2px;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  \",\n        \"\\n  font-family: \",\n        \";\\n  color: \",\n        \";\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  border: none;\\n  border-radius: 4px;\\n  padding: 16px;\\n  font-size: 16px;\\n  cursor: pointer;\\n  color: \",\n        \";\\n  background: \",\n        \";\\n  transition: all 0.3s ease-in-out;\\n\\n  &:hover {\\n    opacity: 85%;\\n  }\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  \",\n        \"\\n  font-family: \",\n        \";\\n  display: flex;\\n  flex: 1;\\n  justify-content: center;\\n  align-items: center;\\n  padding: 2rem 0;\\n  box-shadow: 0px -3px 15px -8px #000000;\\n  color: var(--magenta);\\n\\n  a {\\n    text-decoration: none;\\n    margin-left: 0.5rem;\\n    transition: .2s ease;\\n    color: var(--magenta);\\n\\n    &:hover {\\n      \",\n        \"\\n    }\\n  }\\n\"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: flex-start;\\n  align-items: flex-start;\\n  margin-bottom: 1rem;\\n\"\n    ]);\n    _templateObject6 = function _templateObject6() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: left;\\n  align-items: center;\\n  width: 100%;\\n\"\n    ]);\n    _templateObject7 = function _templateObject7() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject8() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  appearance: none;\\n  cursor: pointer;\\n  width: 16px;\\n  height: 16px;\\n  margin-right: 5px;\\n  border: 1px solid var(--dark-high);\\n  border-radius: 50%;\\n  position: relative;\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  justify-content: center;\\n  outline: none;\\n  \\n  & + label {\\n    \",\n        \"\\n    font-family: \",\n        \";\\n    color: var(--dark-high);\\n    cursor: pointer;\\n  }\\n\\n  &::before {\\n    content: '';\\n    width: 8px;\\n    height: 8px;\\n    border-radius: 50%;\\n    background: var(--magenta);\\n    opacity: 0;\\n    transition: all 0.3s ease-in-out;\\n    position: absolute;\\n  }\\n\\n  &:checked::before {\\n    opacity: 1;\\n  }\\n\\n  &:focus {\\n    box-shadow: 0 0 4px var(--magenta);\\n  }\\n\"\n    ]);\n    _templateObject8 = function _templateObject8() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject9() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  padding: 3px;\\n  margin-top: 1rem;\\n  appearance: none;\\n  border: 1px solid var(--dark-high);\\n  border-radius: 4px;\\n\\n  &:focus {\\n    border: 1px solid var(--magenda);\\n  }\\n\"\n    ]);\n    _templateObject9 = function _templateObject9() {\n        return data;\n    };\n    return data;\n}\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n    displayName: \"useExample__Container\",\n    componentId: \"sc-499e8263-0\"\n})(_templateObject(), function(props) {\n    return props.background ? \"var(--\".concat(props.background, \")\") : 'var(--light-solid)';\n});\nvar Main = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n    displayName: \"useExample__Main\",\n    componentId: \"sc-499e8263-1\"\n})(_templateObject1());\nvar Separator = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].hr.withConfig({\n    displayName: \"useExample__Separator\",\n    componentId: \"sc-499e8263-2\"\n})(_templateObject2(), function(props) {\n    return props.color ? \"var(--\".concat(props.color, \")\") : 'var(--light-high)';\n});\nvar Heading = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].p.withConfig({\n    displayName: \"useExample__Heading\",\n    componentId: \"sc-499e8263-3\"\n})(_templateObject3(), function(props) {\n    return props.type && \"\".concat(_theme__WEBPACK_IMPORTED_MODULE_0__.theme.typography.sizes[props.type]);\n}, _theme__WEBPACK_IMPORTED_MODULE_0__.theme.typography.typeface.primary, function(props) {\n    return props.color ? \"var(--\".concat(props.color, \")\") : 'var(--light-solid)';\n});\nvar StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].button.withConfig({\n    displayName: \"useExample__StyledButton\",\n    componentId: \"sc-499e8263-4\"\n})(_templateObject4(), function(props) {\n    return props.textColor ? \"var(--\".concat(props.textColor, \")\") : '#000';\n}, function(props) {\n    return props.background ? \"var(--\".concat(props.background, \")\") : '#c1c1c1';\n});\nvar Footer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].footer.withConfig({\n    displayName: \"useExample__Footer\",\n    componentId: \"sc-499e8263-5\"\n})(_templateObject5(), _theme__WEBPACK_IMPORTED_MODULE_0__.theme.typography.sizes.bodyM, _theme__WEBPACK_IMPORTED_MODULE_0__.theme.typography.typeface.primary, _theme__WEBPACK_IMPORTED_MODULE_0__.theme.typography.sizes.subHeading);\nvar OptionsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n    displayName: \"useExample__OptionsContainer\",\n    componentId: \"sc-499e8263-6\"\n})(_templateObject6());\nvar OptionsGroup = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n    displayName: \"useExample__OptionsGroup\",\n    componentId: \"sc-499e8263-7\"\n})(_templateObject7());\nvar StyledRadio = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].input.withConfig({\n    displayName: \"useExample__StyledRadio\",\n    componentId: \"sc-499e8263-8\"\n})(_templateObject8(), _theme__WEBPACK_IMPORTED_MODULE_0__.theme.typography.sizes.subHeading, _theme__WEBPACK_IMPORTED_MODULE_0__.theme.typography.typeface.primary);\nvar DemoPhraseInput = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].input.withConfig({\n    displayName: \"useExample__DemoPhraseInput\",\n    componentId: \"sc-499e8263-9\"\n})(_templateObject9());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL3VzZUV4YW1wbGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ1A7Ozs7Ozs7Ozs7Ozs7UUFFSyxDQUN0QjtRQUFrRixDQVloRzs7Ozs7Ozs7O1FBRStCLENBUS9COzs7Ozs7Ozs7UUFFbUMsQ0FHZjtRQUF1RSxDQUUzRjs7Ozs7Ozs7O1FBRWdDLENBQzlCO1FBQWlFLENBQ3BEO1FBQW9DLENBQzFDO1FBQXdFLENBQ2pGOzs7Ozs7Ozs7UUFFMEMsQ0FNakM7UUFBa0UsQ0FDN0Q7UUFBdUUsQ0FNckY7Ozs7Ozs7OztRQUVvQyxDQUNsQztRQUErQixDQUNsQjtRQUFvQyxDQWdCN0M7UUFBb0MsQ0FHMUM7Ozs7Ozs7OztRQUUyQyxDQU0zQzs7Ozs7Ozs7O1FBQ3VDLENBTXZDOzs7Ozs7Ozs7UUFFd0MsQ0FnQnBDO1FBQW9DLENBQ3ZCO1FBQW9DLENBdUJyRDs7Ozs7Ozs7O1FBRTRDLENBVTVDOzs7Ozs7O0FBL0lPLEdBQUssQ0FBQ0UsU0FBUyxHQUFHRix3RUFBVTs7O3NCQUNuQkksUUFBUSxDQUFSQSxLQUFLO0lBQUlBLE1BQU1DLENBQU5ELEtBQUssQ0FBQ0MsVUFBVSxHQUFJLENBQU0sUUFBbUIsTUFBQyxDQUFsQkQsS0FBSyxDQUFDQyxVQUFVLEVBQUMsQ0FBQyxNQUFJLENBQW9COztBQWN4RixHQUFLLENBQUNDLElBQUksR0FBR04sd0VBQVU7Ozs7QUFVdkIsR0FBSyxDQUFDTyxTQUFTLEdBQUdQLHVFQUFTOzs7dUJBR1pJLFFBQVEsQ0FBUkEsS0FBSztJQUFJQSxNQUFNSyxDQUFOTCxLQUFLLENBQUNLLEtBQUssR0FBSSxDQUFNLFFBQWMsTUFBQyxDQUFiTCxLQUFLLENBQUNLLEtBQUssRUFBQyxDQUFDLE1BQUksQ0FBbUI7O0FBSW5GLEdBQUssQ0FBQ0MsT0FBTyxHQUFHVixzRUFBUTs7O3VCQUMzQkksUUFBUSxDQUFSQSxLQUFLO0lBQUlBLE1BQU1RLENBQU5SLEtBQUssQ0FBQ1EsSUFBSSxJQUFLLEdBQXFDLE9BQW5DWCwwREFBc0IsQ0FBQ0csS0FBSyxDQUFDUSxJQUFJO0dBQzlDWCxxRUFBaUMsRUFDdkNHLFFBQVEsQ0FBUkEsS0FBSztJQUFJQSxNQUFNSyxDQUFOTCxLQUFLLENBQUNLLEtBQUssR0FBSSxDQUFNLFFBQWMsTUFBQyxDQUFiTCxLQUFLLENBQUNLLEtBQUssRUFBQyxDQUFDLE1BQUksQ0FBb0I7O0FBR3pFLEdBQUssQ0FBQ1EsWUFBWSxHQUFHakIsMkVBQWE7Ozt1QkFNOUJJLFFBQVEsQ0FBUkEsS0FBSztJQUFJQSxNQUFNZSxDQUFOZixLQUFLLENBQUNlLFNBQVMsR0FBSSxDQUFNLFFBQWtCLE1BQUMsQ0FBakJmLEtBQUssQ0FBQ2UsU0FBUyxFQUFDLENBQUMsTUFBSSxDQUFNO0dBQzFEZixRQUFRLENBQVJBLEtBQUs7SUFBSUEsTUFBTUMsQ0FBTkQsS0FBSyxDQUFDQyxVQUFVLEdBQUksQ0FBTSxRQUFtQixNQUFDLENBQWxCRCxLQUFLLENBQUNDLFVBQVUsRUFBQyxDQUFDLE1BQUksQ0FBUzs7QUFRN0UsR0FBSyxDQUFDZSxNQUFNLEdBQUdwQiwyRUFBYTs7O3VCQUMvQkMsZ0VBQTRCLEVBQ2ZBLHFFQUFpQyxFQWdCMUNBLHFFQUFpQztBQUtsQyxHQUFLLENBQUN1QixnQkFBZ0IsR0FBR3hCLHdFQUFVOzs7O0FBT25DLEdBQUssQ0FBQ3lCLFlBQVksR0FBR3pCLHdFQUFVOzs7O0FBUS9CLEdBQUssQ0FBQzBCLFdBQVcsR0FBRzFCLDBFQUFZOzs7dUJBZ0JqQ0MscUVBQWlDLEVBQ3BCQSxxRUFBaUM7QUF5QjdDLEdBQUssQ0FBQzJCLGVBQWUsR0FBRzVCLDBFQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdHlsZXMvdXNlRXhhbXBsZS5qcz9hNzdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJy4vdGhlbWUnO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy5iYWNrZ3JvdW5kID8gYHZhcigtLSR7cHJvcHMuYmFja2dyb3VuZH0pYCA6ICd2YXIoLS1saWdodC1zb2xpZCknfTtcbiAgLyogZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBib3JkZXI6IDA7ICovXG4gIHBhZGRpbmc6IDA7XG4gIC8qIG91dGxpbmU6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXG5gXG5cbmV4cG9ydCBjb25zdCBNYWluID0gc3R5bGVkLmRpdmBcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmc6IDRyZW0gMXJlbTtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbmBcblxuZXhwb3J0IGNvbnN0IFNlcGFyYXRvciA9IHN0eWxlZC5ocmBcbiAgd2lkdGg6IDUwdnc7XG4gIG1hcmdpbjogMjBweCAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLmNvbG9yID8gYHZhcigtLSR7cHJvcHMuY29sb3J9KWAgOiAndmFyKC0tbGlnaHQtaGlnaCknfTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuYFxuXG5leHBvcnQgY29uc3QgSGVhZGluZyA9IHN0eWxlZC5wYFxuICAke3Byb3BzID0+IHByb3BzLnR5cGUgJiYgYCR7dGhlbWUudHlwb2dyYXBoeS5zaXplc1twcm9wcy50eXBlXX1gfVxuICBmb250LWZhbWlseTogJHt0aGVtZS50eXBvZ3JhcGh5LnR5cGVmYWNlLnByaW1hcnl9O1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5jb2xvciA/IGB2YXIoLS0ke3Byb3BzLmNvbG9yfSlgIDogJ3ZhcigtLWxpZ2h0LXNvbGlkKSd9O1xuYFxuXG5leHBvcnQgY29uc3QgU3R5bGVkQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50ZXh0Q29sb3IgPyBgdmFyKC0tJHtwcm9wcy50ZXh0Q29sb3J9KWAgOiAnIzAwMCd9O1xuICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLmJhY2tncm91bmQgPyBgdmFyKC0tJHtwcm9wcy5iYWNrZ3JvdW5kfSlgIDogJyNjMWMxYzEnfTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG5cbiAgJjpob3ZlciB7XG4gICAgb3BhY2l0eTogODUlO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBGb290ZXIgPSBzdHlsZWQuZm9vdGVyYFxuICAke3RoZW1lLnR5cG9ncmFwaHkuc2l6ZXMuYm9keU19XG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lLnR5cG9ncmFwaHkudHlwZWZhY2UucHJpbWFyeX07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAycmVtIDA7XG4gIGJveC1zaGFkb3c6IDBweCAtM3B4IDE1cHggLThweCAjMDAwMDAwO1xuICBjb2xvcjogdmFyKC0tbWFnZW50YSk7XG5cbiAgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gICAgdHJhbnNpdGlvbjogLjJzIGVhc2U7XG4gICAgY29sb3I6IHZhcigtLW1hZ2VudGEpO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAke3RoZW1lLnR5cG9ncmFwaHkuc2l6ZXMuc3ViSGVhZGluZ31cbiAgICB9XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IE9wdGlvbnNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuYFxuZXhwb3J0IGNvbnN0IE9wdGlvbnNHcm91cCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG5gXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRSYWRpbyA9IHN0eWxlZC5pbnB1dGBcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1oaWdoKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBvdXRsaW5lOiBub25lO1xuICBcbiAgJiArIGxhYmVsIHtcbiAgICAke3RoZW1lLnR5cG9ncmFwaHkuc2l6ZXMuc3ViSGVhZGluZ31cbiAgICBmb250LWZhbWlseTogJHt0aGVtZS50eXBvZ3JhcGh5LnR5cGVmYWNlLnByaW1hcnl9O1xuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWhpZ2gpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgd2lkdGg6IDhweDtcbiAgICBoZWlnaHQ6IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tbWFnZW50YSk7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cblxuICAmOmNoZWNrZWQ6OmJlZm9yZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gICY6Zm9jdXMge1xuICAgIGJveC1zaGFkb3c6IDAgMCA0cHggdmFyKC0tbWFnZW50YSk7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IERlbW9QaHJhc2VJbnB1dCA9IHN0eWxlZC5pbnB1dGBcbiAgcGFkZGluZzogM3B4O1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWhpZ2gpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG5cbiAgJjpmb2N1cyB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWFnZW5kYSk7XG4gIH1cbmAiXSwibmFtZXMiOlsic3R5bGVkIiwidGhlbWUiLCJDb250YWluZXIiLCJkaXYiLCJwcm9wcyIsImJhY2tncm91bmQiLCJNYWluIiwiU2VwYXJhdG9yIiwiaHIiLCJjb2xvciIsIkhlYWRpbmciLCJwIiwidHlwZSIsInR5cG9ncmFwaHkiLCJzaXplcyIsInR5cGVmYWNlIiwicHJpbWFyeSIsIlN0eWxlZEJ1dHRvbiIsImJ1dHRvbiIsInRleHRDb2xvciIsIkZvb3RlciIsImZvb3RlciIsImJvZHlNIiwic3ViSGVhZGluZyIsIk9wdGlvbnNDb250YWluZXIiLCJPcHRpb25zR3JvdXAiLCJTdHlsZWRSYWRpbyIsImlucHV0IiwiRGVtb1BocmFzZUlucHV0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/useExample.js\n");

/***/ })

});