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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": function() { return /* binding */ Container; },\n/* harmony export */   \"Separator\": function() { return /* binding */ Separator; },\n/* harmony export */   \"Heading\": function() { return /* binding */ Heading; },\n/* harmony export */   \"StyledButton\": function() { return /* binding */ StyledButton; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme */ \"./src/styles/theme.js\");\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  background: \",\n        \";\\n  display: flex;\\n  flex-direction: column;\\n  width: 100vw;\\n  height: 100vh;\\n  border: 0;\\n  padding: 0;\\n  outline: 0;\\n  box-sizing: border-box;\\n  margin: 0;\\n  align-items: center;\\n  justify-content: center;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  width: 50vw;\\n  margin: 20px 0;\\n  border: 1px solid \",\n        \";\\n  border-radius: 2px\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  \",\n        \"\\n  color: var(--light-solid);\\n  font-family: \",\n        \";\\n  color: \",\n        \";\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  border: none;\\n  border-radius: 4px;\\n  padding: 16px;\\n  font-size: 16px;\\n  cursor: pointer;\\n  color: \",\n        \";\\n  background: \",\n        \";\\n  transition: all 0.3s ease-in-out;\\n\\n  &:hover {\\n    opacity: 85%;\\n  }\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n    displayName: \"Example__Container\",\n    componentId: \"sc-8c132cf2-0\"\n})(_templateObject(), function(props) {\n    return props.background ? \"var(--\".concat(props.background, \")\") : 'var(--light-solid)';\n});\nvar Separator = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].hr.withConfig({\n    displayName: \"Example__Separator\",\n    componentId: \"sc-8c132cf2-1\"\n})(_templateObject1(), function(props) {\n    return props.color ? \"var(--\".concat(props.color, \")\") : 'var(--light-high)';\n});\nvar Heading = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].p.withConfig({\n    displayName: \"Example__Heading\",\n    componentId: \"sc-8c132cf2-2\"\n})(_templateObject2(), function(props) {\n    return props.type && \"\".concat(_theme__WEBPACK_IMPORTED_MODULE_0__.theme.typography.sizes[props.type]);\n}, _theme__WEBPACK_IMPORTED_MODULE_0__.theme.typography.typeface.primary, function(props) {\n    return props.color ? \"var(--\".concat(props.color, \")\") : 'var(--light-solid)';\n});\nvar StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].button.withConfig({\n    displayName: \"Example__StyledButton\",\n    componentId: \"sc-8c132cf2-3\"\n})(_templateObject3(), function(props) {\n    return props.textColor ? \"var(--\".concat(props.textColor, \")\") : '#000';\n}, function(props) {\n    return props.background ? \"var(--\".concat(props.background, \")\") : '#c1c1c1';\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL0V4YW1wbGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXNDO0FBQ1A7Ozs7Ozs7Ozs7Ozs7UUFFSyxDQUN0QjtRQUFrRixDQVloRzs7Ozs7Ozs7O1FBRW1DLENBR2Y7UUFBdUUsQ0FFM0Y7Ozs7Ozs7OztRQUVnQyxDQUM5QjtRQUFpRSxDQUVwRDtRQUFvQyxDQUMxQztRQUF3RSxDQUNqRjs7Ozs7Ozs7O1FBRTBDLENBTWpDO1FBQWtFLENBQzdEO1FBQXVFLENBTXJGOzs7Ozs7O0FBMUNPLEdBQUssQ0FBQ0UsU0FBUyxHQUFHRix3RUFBVTs7O3NCQUNuQkksUUFBUSxDQUFSQSxLQUFLO0lBQUlBLE1BQU1DLENBQU5ELEtBQUssQ0FBQ0MsVUFBVSxHQUFJLENBQU0sUUFBbUIsTUFBQyxDQUFsQkQsS0FBSyxDQUFDQyxVQUFVLEVBQUMsQ0FBQyxNQUFJLENBQW9COztBQWN4RixHQUFLLENBQUNDLFNBQVMsR0FBR04sdUVBQVM7Ozt1QkFHWkksUUFBUSxDQUFSQSxLQUFLO0lBQUlBLE1BQU1JLENBQU5KLEtBQUssQ0FBQ0ksS0FBSyxHQUFJLENBQU0sUUFBYyxNQUFDLENBQWJKLEtBQUssQ0FBQ0ksS0FBSyxFQUFDLENBQUMsTUFBSSxDQUFtQjs7QUFJbkYsR0FBSyxDQUFDQyxPQUFPLEdBQUdULHNFQUFROzs7dUJBQzNCSSxRQUFRLENBQVJBLEtBQUs7SUFBSUEsTUFBTU8sQ0FBTlAsS0FBSyxDQUFDTyxJQUFJLElBQUssR0FBcUMsT0FBbkNWLDBEQUFzQixDQUFDRyxLQUFLLENBQUNPLElBQUk7R0FFOUNWLHFFQUFpQyxFQUN2Q0csUUFBUSxDQUFSQSxLQUFLO0lBQUlBLE1BQU1JLENBQU5KLEtBQUssQ0FBQ0ksS0FBSyxHQUFJLENBQU0sUUFBYyxNQUFDLENBQWJKLEtBQUssQ0FBQ0ksS0FBSyxFQUFDLENBQUMsTUFBSSxDQUFvQjs7QUFHekUsR0FBSyxDQUFDUSxZQUFZLEdBQUdoQiwyRUFBYTs7O3VCQU05QkksUUFBUSxDQUFSQSxLQUFLO0lBQUlBLE1BQU1jLENBQU5kLEtBQUssQ0FBQ2MsU0FBUyxHQUFJLENBQU0sUUFBa0IsTUFBQyxDQUFqQmQsS0FBSyxDQUFDYyxTQUFTLEVBQUMsQ0FBQyxNQUFJLENBQU07R0FDMURkLFFBQVEsQ0FBUkEsS0FBSztJQUFJQSxNQUFNQyxDQUFORCxLQUFLLENBQUNDLFVBQVUsR0FBSSxDQUFNLFFBQW1CLE1BQUMsQ0FBbEJELEtBQUssQ0FBQ0MsVUFBVSxFQUFDLENBQUMsTUFBSSxDQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdHlsZXMvRXhhbXBsZS5qcz9iYWU1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJy4vdGhlbWUnO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy5iYWNrZ3JvdW5kID8gYHZhcigtLSR7cHJvcHMuYmFja2dyb3VuZH0pYCA6ICd2YXIoLS1saWdodC1zb2xpZCknfTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6IDA7XG4gIG91dGxpbmU6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5gXG5cbmV4cG9ydCBjb25zdCBTZXBhcmF0b3IgPSBzdHlsZWQuaHJgXG4gIHdpZHRoOiA1MHZ3O1xuICBtYXJnaW46IDIwcHggMDtcbiAgYm9yZGVyOiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy5jb2xvciA/IGB2YXIoLS0ke3Byb3BzLmNvbG9yfSlgIDogJ3ZhcigtLWxpZ2h0LWhpZ2gpJ307XG4gIGJvcmRlci1yYWRpdXM6IDJweFxuYFxuXG5leHBvcnQgY29uc3QgSGVhZGluZyA9IHN0eWxlZC5wYFxuICAke3Byb3BzID0+IHByb3BzLnR5cGUgJiYgYCR7dGhlbWUudHlwb2dyYXBoeS5zaXplc1twcm9wcy50eXBlXX1gfVxuICBjb2xvcjogdmFyKC0tbGlnaHQtc29saWQpO1xuICBmb250LWZhbWlseTogJHt0aGVtZS50eXBvZ3JhcGh5LnR5cGVmYWNlLnByaW1hcnl9O1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5jb2xvciA/IGB2YXIoLS0ke3Byb3BzLmNvbG9yfSlgIDogJ3ZhcigtLWxpZ2h0LXNvbGlkKSd9O1xuYFxuXG5leHBvcnQgY29uc3QgU3R5bGVkQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50ZXh0Q29sb3IgPyBgdmFyKC0tJHtwcm9wcy50ZXh0Q29sb3J9KWAgOiAnIzAwMCd9O1xuICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLmJhY2tncm91bmQgPyBgdmFyKC0tJHtwcm9wcy5iYWNrZ3JvdW5kfSlgIDogJyNjMWMxYzEnfTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG5cbiAgJjpob3ZlciB7XG4gICAgb3BhY2l0eTogODUlO1xuICB9XG5gIl0sIm5hbWVzIjpbInN0eWxlZCIsInRoZW1lIiwiQ29udGFpbmVyIiwiZGl2IiwicHJvcHMiLCJiYWNrZ3JvdW5kIiwiU2VwYXJhdG9yIiwiaHIiLCJjb2xvciIsIkhlYWRpbmciLCJwIiwidHlwZSIsInR5cG9ncmFwaHkiLCJzaXplcyIsInR5cGVmYWNlIiwicHJpbWFyeSIsIlN0eWxlZEJ1dHRvbiIsImJ1dHRvbiIsInRleHRDb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/Example.js\n");

/***/ })

});