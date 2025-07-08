import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "/build/_shared/chunk-4BAUHACB.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  createHotContext
} from "/build/_shared/chunk-RHE7FW2Y.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/contexts/AppContext.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\contexts\\\\AppContext.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\contexts\\AppContext.tsx"
  );
  import.meta.hot.lastModified = "1750755407051.913";
}
var initContextData = {
  loading: true,
  setLoading: () => {
  },
  activeLang: "",
  setActiveLang: () => {
  }
};
var AppContext = (0, import_react.createContext)(initContextData);
var AppContextProvider = ({
  children
}) => {
  _s();
  const defaultLang = "en";
  const [loading, setLoading] = (0, import_react.useState)(false);
  const [stopL, setStopL] = (0, import_react.useState)(false);
  const [activeLang, setActiveLang] = (0, import_react.useState)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppContext.Provider, { value: {
    loading,
    setLoading,
    activeLang,
    setActiveLang
  }, children: [
    loading && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "Loading..." }, void 0, false, {
      fileName: "app/contexts/AppContext.tsx",
      lineNumber: 57,
      columnNumber: 19
    }, this),
    children
  ] }, void 0, true, {
    fileName: "app/contexts/AppContext.tsx",
    lineNumber: 51,
    columnNumber: 10
  }, this);
};
_s(AppContextProvider, "eliFANj4GXa+YOWLfnVF2OTpzJ4=");
_c = AppContextProvider;
var _c;
$RefreshReg$(_c, "AppContextProvider");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/contexts/DimensionContext.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\contexts\\\\DimensionContext.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\contexts\\DimensionContext.tsx"
  );
  import.meta.hot.lastModified = "1750149844495.714";
}
var DimensionContext = (0, import_react2.createContext)(null);
var DimensionContextProvider = ({
  children
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DimensionContext.Provider, { value: {}, children }, void 0, false, {
    fileName: "app/contexts/DimensionContext.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
};
_c2 = DimensionContextProvider;
var DimensionContext_default = DimensionContextProvider;
var _c2;
$RefreshReg$(_c2, "DimensionContextProvider");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/contexts/SecurityContext.tsx
var import_react3 = __toESM(require_react(), 1);
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\contexts\\\\SecurityContext.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\contexts\\SecurityContext.tsx"
  );
  import.meta.hot.lastModified = "1750148049183.9854";
}
var initContextData2 = {
  Logout: () => {
  },
  auth: null
};
var SecurityContext = (0, import_react3.createContext)(initContextData2);
var SecurityContextProvider = ({
  children
}) => {
  _s2();
  const [auth, setAuth] = (0, import_react3.useState)(null);
  const Logout = () => {
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SecurityContext.Provider, { value: {
    Logout,
    auth
  }, children }, void 0, false, {
    fileName: "app/contexts/SecurityContext.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
};
_s2(SecurityContextProvider, "RPpgZIbgRJLKro8xQhJyVd9Lnz8=");
_c3 = SecurityContextProvider;
var SecurityContext_default = SecurityContextProvider;
var _c3;
$RefreshReg$(_c3, "SecurityContextProvider");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/contexts/SuperContext.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\contexts\\\\SuperContext.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\contexts\\SuperContext.tsx"
  );
  import.meta.hot.lastModified = "1750149760453.892";
}
var SuperContext = ({
  children
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(AppContextProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SecurityContext_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DimensionContext_default, { children }, void 0, false, {
    fileName: "app/contexts/SuperContext.tsx",
    lineNumber: 29,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/contexts/SuperContext.tsx",
    lineNumber: 28,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/contexts/SuperContext.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
};
_c4 = SuperContext;
var SuperContext_default = SuperContext;
var _c4;
$RefreshReg$(_c4, "SuperContext");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/root.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\root.tsx"
  );
}
var links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("body", { children: [
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
}
_c5 = Layout;
function App() {
  return (
    // <I18nextProvider i18n={i18n}>
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SuperContext_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 55,
      columnNumber: 5
    }, this)
  );
}
_c22 = App;
function ErrorBoundary() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { style: {
    padding: "1rem",
    color: "red"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { children: "Error" }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 67,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Something went wrong while processing your request." }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link, { to: "/", children: "Return to users list" }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 69,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 63,
    columnNumber: 10
  }, this);
}
_c32 = ErrorBoundary;
var _c5;
var _c22;
var _c32;
$RefreshReg$(_c5, "Layout");
$RefreshReg$(_c22, "App");
$RefreshReg$(_c32, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  Layout,
  App as default,
  links
};
//# sourceMappingURL=/build/root-A6NZ2SP6.js.map
