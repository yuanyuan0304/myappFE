import {
  Form,
  Link,
  useFetcher,
  useLoaderData
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

// app/routes/_index.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\_index.tsx"
  );
  import.meta.hot.lastModified = "1751416941433.0571";
}
var meta = () => {
  return [{
    title: "User Management"
  }, {
    name: "description",
    content: "CRUD operations for users"
  }];
};
function UsersPage() {
  _s();
  const users = useLoaderData();
  const fetcher = useFetcher();
  const [editingId, setEditingId] = (0, import_react2.useState)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
    fontFamily: "system-ui, sans-serif",
    lineHeight: "1.8"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "User Management" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 131,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      marginBottom: "2rem"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Create New User" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 137,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "_action", value: "create" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 139,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: [
          "Name:",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "name", required: true }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 143,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 141,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 140,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: [
          "Email:",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "email", name: "email", required: true }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 149,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 147,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 146,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", children: "Create" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 152,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 138,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 134,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Users List" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 157,
      columnNumber: 7
    }, this),
    Array.isArray(users) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { style: {
      listStyle: "none",
      padding: 0
    }, children: users.map((user) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { style: {
      marginBottom: "1rem",
      padding: "1rem",
      border: "1px solid #ddd"
    }, children: editingId === user.id ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(fetcher.Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "_action", value: "update" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 168,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "id", value: user.id }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 169,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: [
        "Name:",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "name", defaultValue: user.name, required: true }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 173,
          columnNumber: 23
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 171,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 170,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: [
        "Email:",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "email", name: "email", defaultValue: user.email, required: true }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 179,
          columnNumber: 23
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 177,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 176,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", children: "Save" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 182,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => setEditingId(null), children: "Cancel" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 183,
        columnNumber: 19
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 167,
      columnNumber: 40
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        "ID: ",
        user.id
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 187,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        "Name: ",
        user.name
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 188,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        "Email: ",
        user.email
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 189,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        "Created: ",
        new Date(user.createdAt).toLocaleString()
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 190,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        marginTop: "0.5rem"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setEditingId(user.id), children: "Edit" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 196,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", style: {
          display: "inline",
          marginLeft: "0.5rem"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "_action", value: "delete" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 201,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "id", value: user.id }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 202,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", children: "Delete" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 203,
            columnNumber: 23
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 197,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 193,
        columnNumber: 19
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 186,
      columnNumber: 35
    }, this) }, user.id, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 162,
      columnNumber: 30
    }, this)) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 158,
      columnNumber: 31
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      padding: "1rem",
      border: "1px solid #ddd"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Single User View" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 212,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        "ID: ",
        users.id
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 213,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        "Name: ",
        users.name
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 214,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        "Email: ",
        users.email
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 215,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        "Created: ",
        new Date(users.created_at).toLocaleString()
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 216,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        marginTop: "1rem"
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", children: "Back to all users" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 220,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 217,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 208,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 127,
    columnNumber: 10
  }, this);
}
_s(UsersPage, "o+IG1Zd1/uMTQjRDVJoIFNesECU=", false, function() {
  return [useLoaderData, useFetcher];
});
_c = UsersPage;
function ErrorBoundary() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
    padding: "1rem",
    color: "red"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Error" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 234,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Something went wrong while processing your request." }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 235,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", children: "Return to users list" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 236,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 230,
    columnNumber: 10
  }, this);
}
_c2 = ErrorBoundary;
var _c;
var _c2;
$RefreshReg$(_c, "UsersPage");
$RefreshReg$(_c2, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  UsersPage as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-ATXRYYUV.js.map
