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

/***/ "./src/styles/Example.js":
/*!*******************************!*\
  !*** ./src/styles/Example.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": function() { return /* binding */ Container; },\n/* harmony export */   \"Separator\": function() { return /* binding */ Separator; },\n/* harmony export */   \"Heading\": function() { return /* binding */ Heading; },\n/* harmony export */   \"StyledButton\": function() { return /* binding */ StyledButton; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme */ \"./src/styles/theme.js\");\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  background-color: var(--magenta);\\n  display: flex;\\n  flex-direction: column;\\n  width: 100vw;\\n  height: 100vh;\\n  border: 0;\\n  padding: 0;\\n  outline: 0;\\n  box-sizing: border-box;\\n  margin: 0;\\n  align-items: center;\\n  /* justify-content: space-evenly; */\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  width: 50vw;\\n  margin: 15px 0;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  \",\n        \"\\n  color: var(--light-solid);\\n  font-family: \",\n        \";\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  border: none;\\n  border-radius: 4px;\\n  padding: 16px;\\n  font-size: 16px;\\n  cursor: pointer;\\n  color: \",\n        \";\\n  background: \",\n        \";\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n    displayName: \"Example__Container\",\n    componentId: \"sc-c04ac27a-0\"\n})(_templateObject());\nvar Separator = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].hr.withConfig({\n    displayName: \"Example__Separator\",\n    componentId: \"sc-c04ac27a-1\"\n})(_templateObject1());\nvar Heading = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].p.withConfig({\n    displayName: \"Example__Heading\",\n    componentId: \"sc-c04ac27a-2\"\n})(_templateObject2(), function(props) {\n    return props.type && \"\".concat(_theme__WEBPACK_IMPORTED_MODULE_0__.theme.typography.sizes[props.type]);\n}, _theme__WEBPACK_IMPORTED_MODULE_0__.theme.typography.typeface.primary);\nvar StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].button.withConfig({\n    displayName: \"Example__StyledButton\",\n    componentId: \"sc-c04ac27a-3\"\n})(_templateObject3(), function(props) {\n    return props.textColor ? \"var(--\".concat(props.textColor, \")\") : '#000';\n}, function(props) {\n    return props.background ? \"var(--\".concat(props.background, \")\") : '#c1c1c1';\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL0V4YW1wbGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXNDO0FBQ1A7Ozs7Ozs7Ozs7Ozs7UUFFSyxDQWFwQzs7Ozs7Ozs7O1FBRW1DLENBR25DOzs7Ozs7Ozs7UUFFZ0MsQ0FDOUI7UUFBaUUsQ0FFcEQ7UUFBb0MsQ0FDbkQ7Ozs7Ozs7OztRQUUwQyxDQU1qQztRQUFrRSxDQUM3RDtRQUF1RSxDQUNyRjs7Ozs7OztBQWxDTyxHQUFLLENBQUNFLFNBQVMsR0FBR0Ysd0VBQVU7Ozs7QUFlNUIsR0FBSyxDQUFDSSxTQUFTLEdBQUdKLHVFQUFTOzs7O0FBSzNCLEdBQUssQ0FBQ00sT0FBTyxHQUFHTixzRUFBUTs7O3VCQUMzQlEsUUFBUSxDQUFSQSxLQUFLO0lBQUlBLE1BQU1DLENBQU5ELEtBQUssQ0FBQ0MsSUFBSSxJQUFLLEdBQXFDLE9BQW5DUiwwREFBc0IsQ0FBQ08sS0FBSyxDQUFDQyxJQUFJO0dBRTlDUixxRUFBaUM7QUFHM0MsR0FBSyxDQUFDYSxZQUFZLEdBQUdkLDJFQUFhOzs7dUJBTTlCUSxRQUFRLENBQVJBLEtBQUs7SUFBSUEsTUFBTVEsQ0FBTlIsS0FBSyxDQUFDUSxTQUFTLEdBQUksQ0FBTSxRQUFrQixNQUFDLENBQWpCUixLQUFLLENBQUNRLFNBQVMsRUFBQyxDQUFDLE1BQUksQ0FBTTtHQUMxRFIsUUFBUSxDQUFSQSxLQUFLO0lBQUlBLE1BQU1TLENBQU5ULEtBQUssQ0FBQ1MsVUFBVSxHQUFJLENBQU0sUUFBbUIsTUFBQyxDQUFsQlQsS0FBSyxDQUFDUyxVQUFVLEVBQUMsQ0FBQyxNQUFJLENBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9FeGFtcGxlLmpzP2JhZTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnLi90aGVtZSc7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWdlbnRhKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6IDA7XG4gIG91dGxpbmU6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7ICovXG5gXG5cbmV4cG9ydCBjb25zdCBTZXBhcmF0b3IgPSBzdHlsZWQuaHJgXG4gIHdpZHRoOiA1MHZ3O1xuICBtYXJnaW46IDE1cHggMDtcbmBcblxuZXhwb3J0IGNvbnN0IEhlYWRpbmcgPSBzdHlsZWQucGBcbiAgJHtwcm9wcyA9PiBwcm9wcy50eXBlICYmIGAke3RoZW1lLnR5cG9ncmFwaHkuc2l6ZXNbcHJvcHMudHlwZV19YH1cbiAgY29sb3I6IHZhcigtLWxpZ2h0LXNvbGlkKTtcbiAgZm9udC1mYW1pbHk6ICR7dGhlbWUudHlwb2dyYXBoeS50eXBlZmFjZS5wcmltYXJ5fTtcbmBcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiAxNnB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGV4dENvbG9yID8gYHZhcigtLSR7cHJvcHMudGV4dENvbG9yfSlgIDogJyMwMDAnfTtcbiAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy5iYWNrZ3JvdW5kID8gYHZhcigtLSR7cHJvcHMuYmFja2dyb3VuZH0pYCA6ICcjYzFjMWMxJ307XG5gIl0sIm5hbWVzIjpbInN0eWxlZCIsInRoZW1lIiwiQ29udGFpbmVyIiwiZGl2IiwiU2VwYXJhdG9yIiwiaHIiLCJIZWFkaW5nIiwicCIsInByb3BzIiwidHlwZSIsInR5cG9ncmFwaHkiLCJzaXplcyIsInR5cGVmYWNlIiwicHJpbWFyeSIsIlN0eWxlZEJ1dHRvbiIsImJ1dHRvbiIsInRleHRDb2xvciIsImJhY2tncm91bmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/Example.js\n");

/***/ })

});