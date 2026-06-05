var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// React-Odontogram-Modul/node_modules/react/cjs/react.development.js
var require_react_development = __commonJS({
  "React-Odontogram-Modul/node_modules/react/cjs/react.development.js"(exports, module) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var ReactVersion = "18.3.1";
        var REACT_ELEMENT_TYPE = /* @__PURE__ */ Symbol.for("react.element");
        var REACT_PORTAL_TYPE = /* @__PURE__ */ Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = /* @__PURE__ */ Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = /* @__PURE__ */ Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = /* @__PURE__ */ Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = /* @__PURE__ */ Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = /* @__PURE__ */ Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = /* @__PURE__ */ Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = /* @__PURE__ */ Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = /* @__PURE__ */ Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = /* @__PURE__ */ Symbol.for("react.memo");
        var REACT_LAZY_TYPE = /* @__PURE__ */ Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = /* @__PURE__ */ Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactCurrentDispatcher = {
          /**
           * @internal
           * @type {ReactComponent}
           */
          current: null
        };
        var ReactCurrentBatchConfig = {
          transition: null
        };
        var ReactCurrentActQueue = {
          current: null,
          // Used to reproduce behavior of `batchedUpdates` in legacy mode.
          isBatchingLegacy: false,
          didScheduleLegacyUpdate: false
        };
        var ReactCurrentOwner = {
          /**
           * @internal
           * @type {ReactComponent}
           */
          current: null
        };
        var ReactDebugCurrentFrame = {};
        var currentExtraStackFrame = null;
        function setExtraStackFrame(stack) {
          {
            currentExtraStackFrame = stack;
          }
        }
        {
          ReactDebugCurrentFrame.setExtraStackFrame = function(stack) {
            {
              currentExtraStackFrame = stack;
            }
          };
          ReactDebugCurrentFrame.getCurrentStack = null;
          ReactDebugCurrentFrame.getStackAddendum = function() {
            var stack = "";
            if (currentExtraStackFrame) {
              stack += currentExtraStackFrame;
            }
            var impl = ReactDebugCurrentFrame.getCurrentStack;
            if (impl) {
              stack += impl() || "";
            }
            return stack;
          };
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var ReactSharedInternals = {
          ReactCurrentDispatcher,
          ReactCurrentBatchConfig,
          ReactCurrentOwner
        };
        {
          ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
          ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
        }
        function warn(format) {
          {
            {
              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }
              printWarning("warn", format, args);
            }
          }
        }
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var didWarnStateUpdateForUnmountedComponent = {};
        function warnNoop(publicInstance, callerName) {
          {
            var _constructor = publicInstance.constructor;
            var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
            var warningKey = componentName + "." + callerName;
            if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
              return;
            }
            error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
            didWarnStateUpdateForUnmountedComponent[warningKey] = true;
          }
        }
        var ReactNoopUpdateQueue = {
          /**
           * Checks whether or not this composite component is mounted.
           * @param {ReactClass} publicInstance The instance we want to test.
           * @return {boolean} True if mounted, false otherwise.
           * @protected
           * @final
           */
          isMounted: function(publicInstance) {
            return false;
          },
          /**
           * Forces an update. This should only be invoked when it is known with
           * certainty that we are **not** in a DOM transaction.
           *
           * You may want to call this when you know that some deeper aspect of the
           * component's state has changed but `setState` was not called.
           *
           * This will not invoke `shouldComponentUpdate`, but it will invoke
           * `componentWillUpdate` and `componentDidUpdate`.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */
          enqueueForceUpdate: function(publicInstance, callback, callerName) {
            warnNoop(publicInstance, "forceUpdate");
          },
          /**
           * Replaces all of the state. Always use this or `setState` to mutate state.
           * You should treat `this.state` as immutable.
           *
           * There is no guarantee that `this.state` will be immediately updated, so
           * accessing `this.state` after calling this method may return the old value.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} completeState Next state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */
          enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
            warnNoop(publicInstance, "replaceState");
          },
          /**
           * Sets a subset of the state. This only exists because _pendingState is
           * internal. This provides a merging strategy that is not available to deep
           * properties which is confusing. TODO: Expose pendingState or don't use it
           * during the merge.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} partialState Next partial state to be merged with state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} Name of the calling function in the public API.
           * @internal
           */
          enqueueSetState: function(publicInstance, partialState, callback, callerName) {
            warnNoop(publicInstance, "setState");
          }
        };
        var assign = Object.assign;
        var emptyObject = {};
        {
          Object.freeze(emptyObject);
        }
        function Component(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        Component.prototype.isReactComponent = {};
        Component.prototype.setState = function(partialState, callback) {
          if (typeof partialState !== "object" && typeof partialState !== "function" && partialState != null) {
            throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
          }
          this.updater.enqueueSetState(this, partialState, callback, "setState");
        };
        Component.prototype.forceUpdate = function(callback) {
          this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
        };
        {
          var deprecatedAPIs = {
            isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
            replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
          };
          var defineDeprecationWarning = function(methodName, info) {
            Object.defineProperty(Component.prototype, methodName, {
              get: function() {
                warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                return void 0;
              }
            });
          };
          for (var fnName in deprecatedAPIs) {
            if (deprecatedAPIs.hasOwnProperty(fnName)) {
              defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
            }
          }
        }
        function ComponentDummy() {
        }
        ComponentDummy.prototype = Component.prototype;
        function PureComponent(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
        pureComponentPrototype.constructor = PureComponent;
        assign(pureComponentPrototype, Component.prototype);
        pureComponentPrototype.isPureReactComponent = true;
        function createRef() {
          var refObject = {
            current: null
          };
          {
            Object.seal(refObject);
          }
          return refObject;
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function defineKeyPropWarningGetter(props, displayName) {
          var warnAboutAccessingKey = function() {
            {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            }
          };
          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: true
          });
        }
        function defineRefPropWarningGetter(props, displayName) {
          var warnAboutAccessingRef = function() {
            {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            }
          };
          warnAboutAccessingRef.isReactWarning = true;
          Object.defineProperty(props, "ref", {
            get: warnAboutAccessingRef,
            configurable: true
          });
        }
        function warnIfStringRefCannotBeAutoConverted(config) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        var ReactElement = function(type, key, ref, self, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type,
            key,
            ref,
            props,
            // Record the component responsible for creating this element.
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function createElement(type, config, children) {
          var propName;
          var props = {};
          var key = null;
          var ref = null;
          var self = null;
          var source = null;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              {
                warnIfStringRefCannotBeAutoConverted(config);
              }
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            self = config.__self === void 0 ? null : config.__self;
            source = config.__source === void 0 ? null : config.__source;
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            {
              if (Object.freeze) {
                Object.freeze(childArray);
              }
            }
            props.children = childArray;
          }
          if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for (propName in defaultProps) {
              if (props[propName] === void 0) {
                props[propName] = defaultProps[propName];
              }
            }
          }
          {
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
          }
          return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
        }
        function cloneAndReplaceKey(oldElement, newKey) {
          var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
          return newElement;
        }
        function cloneElement(element, config, children) {
          if (element === null || element === void 0) {
            throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
          }
          var propName;
          var props = assign({}, element.props);
          var key = element.key;
          var ref = element.ref;
          var self = element._self;
          var source = element._source;
          var owner = element._owner;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              owner = ReactCurrentOwner.current;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            var defaultProps;
            if (element.type && element.type.defaultProps) {
              defaultProps = element.type.defaultProps;
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                if (config[propName] === void 0 && defaultProps !== void 0) {
                  props[propName] = defaultProps[propName];
                } else {
                  props[propName] = config[propName];
                }
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            props.children = childArray;
          }
          return ReactElement(element.type, key, ref, self, source, owner, props);
        }
        function isValidElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        var SEPARATOR = ".";
        var SUBSEPARATOR = ":";
        function escape(key) {
          var escapeRegex = /[=:]/g;
          var escaperLookup = {
            "=": "=0",
            ":": "=2"
          };
          var escapedString = key.replace(escapeRegex, function(match) {
            return escaperLookup[match];
          });
          return "$" + escapedString;
        }
        var didWarnAboutMaps = false;
        var userProvidedKeyEscapeRegex = /\/+/g;
        function escapeUserProvidedKey(text) {
          return text.replace(userProvidedKeyEscapeRegex, "$&/");
        }
        function getElementKey(element, index) {
          if (typeof element === "object" && element !== null && element.key != null) {
            {
              checkKeyStringCoercion(element.key);
            }
            return escape("" + element.key);
          }
          return index.toString(36);
        }
        function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
          var type = typeof children;
          if (type === "undefined" || type === "boolean") {
            children = null;
          }
          var invokeCallback = false;
          if (children === null) {
            invokeCallback = true;
          } else {
            switch (type) {
              case "string":
              case "number":
                invokeCallback = true;
                break;
              case "object":
                switch (children.$$typeof) {
                  case REACT_ELEMENT_TYPE:
                  case REACT_PORTAL_TYPE:
                    invokeCallback = true;
                }
            }
          }
          if (invokeCallback) {
            var _child = children;
            var mappedChild = callback(_child);
            var childKey = nameSoFar === "" ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
            if (isArray(mappedChild)) {
              var escapedChildKey = "";
              if (childKey != null) {
                escapedChildKey = escapeUserProvidedKey(childKey) + "/";
              }
              mapIntoArray(mappedChild, array, escapedChildKey, "", function(c) {
                return c;
              });
            } else if (mappedChild != null) {
              if (isValidElement(mappedChild)) {
                {
                  if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
                    checkKeyStringCoercion(mappedChild.key);
                  }
                }
                mappedChild = cloneAndReplaceKey(
                  mappedChild,
                  // Keep both the (mapped) and old keys if they differ, just as
                  // traverseAllChildren used to do for objects as children
                  escapedPrefix + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
                  (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? (
                    // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                    // eslint-disable-next-line react-internal/safe-string-coercion
                    escapeUserProvidedKey("" + mappedChild.key) + "/"
                  ) : "") + childKey
                );
              }
              array.push(mappedChild);
            }
            return 1;
          }
          var child;
          var nextName;
          var subtreeCount = 0;
          var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
          if (isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              child = children[i];
              nextName = nextNamePrefix + getElementKey(child, i);
              subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
            }
          } else {
            var iteratorFn = getIteratorFn(children);
            if (typeof iteratorFn === "function") {
              var iterableChildren = children;
              {
                if (iteratorFn === iterableChildren.entries) {
                  if (!didWarnAboutMaps) {
                    warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                  }
                  didWarnAboutMaps = true;
                }
              }
              var iterator = iteratorFn.call(iterableChildren);
              var step;
              var ii = 0;
              while (!(step = iterator.next()).done) {
                child = step.value;
                nextName = nextNamePrefix + getElementKey(child, ii++);
                subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
              }
            } else if (type === "object") {
              var childrenString = String(children);
              throw new Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + "). If you meant to render a collection of children, use an array instead.");
            }
          }
          return subtreeCount;
        }
        function mapChildren(children, func, context) {
          if (children == null) {
            return children;
          }
          var result = [];
          var count = 0;
          mapIntoArray(children, result, "", "", function(child) {
            return func.call(context, child, count++);
          });
          return result;
        }
        function countChildren(children) {
          var n = 0;
          mapChildren(children, function() {
            n++;
          });
          return n;
        }
        function forEachChildren(children, forEachFunc, forEachContext) {
          mapChildren(children, function() {
            forEachFunc.apply(this, arguments);
          }, forEachContext);
        }
        function toArray(children) {
          return mapChildren(children, function(child) {
            return child;
          }) || [];
        }
        function onlyChild(children) {
          if (!isValidElement(children)) {
            throw new Error("React.Children.only expected to receive a single React element child.");
          }
          return children;
        }
        function createContext(defaultValue) {
          var context = {
            $$typeof: REACT_CONTEXT_TYPE,
            // As a workaround to support multiple concurrent renderers, we categorize
            // some renderers as primary and others as secondary. We only expect
            // there to be two concurrent renderers at most: React Native (primary) and
            // Fabric (secondary); React DOM (primary) and React ART (secondary).
            // Secondary renderers store their context values on separate fields.
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            // Used to track how many concurrent renderers this context currently
            // supports within in a single renderer. Such as parallel server rendering.
            _threadCount: 0,
            // These are circular
            Provider: null,
            Consumer: null,
            // Add these to use same hidden class in VM as ServerContext
            _defaultValue: null,
            _globalName: null
          };
          context.Provider = {
            $$typeof: REACT_PROVIDER_TYPE,
            _context: context
          };
          var hasWarnedAboutUsingNestedContextConsumers = false;
          var hasWarnedAboutUsingConsumerProvider = false;
          var hasWarnedAboutDisplayNameOnConsumer = false;
          {
            var Consumer = {
              $$typeof: REACT_CONTEXT_TYPE,
              _context: context
            };
            Object.defineProperties(Consumer, {
              Provider: {
                get: function() {
                  if (!hasWarnedAboutUsingConsumerProvider) {
                    hasWarnedAboutUsingConsumerProvider = true;
                    error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                  }
                  return context.Provider;
                },
                set: function(_Provider) {
                  context.Provider = _Provider;
                }
              },
              _currentValue: {
                get: function() {
                  return context._currentValue;
                },
                set: function(_currentValue) {
                  context._currentValue = _currentValue;
                }
              },
              _currentValue2: {
                get: function() {
                  return context._currentValue2;
                },
                set: function(_currentValue2) {
                  context._currentValue2 = _currentValue2;
                }
              },
              _threadCount: {
                get: function() {
                  return context._threadCount;
                },
                set: function(_threadCount) {
                  context._threadCount = _threadCount;
                }
              },
              Consumer: {
                get: function() {
                  if (!hasWarnedAboutUsingNestedContextConsumers) {
                    hasWarnedAboutUsingNestedContextConsumers = true;
                    error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                  }
                  return context.Consumer;
                }
              },
              displayName: {
                get: function() {
                  return context.displayName;
                },
                set: function(displayName) {
                  if (!hasWarnedAboutDisplayNameOnConsumer) {
                    warn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName);
                    hasWarnedAboutDisplayNameOnConsumer = true;
                  }
                }
              }
            });
            context.Consumer = Consumer;
          }
          {
            context._currentRenderer = null;
            context._currentRenderer2 = null;
          }
          return context;
        }
        var Uninitialized = -1;
        var Pending = 0;
        var Resolved = 1;
        var Rejected = 2;
        function lazyInitializer(payload) {
          if (payload._status === Uninitialized) {
            var ctor = payload._result;
            var thenable = ctor();
            thenable.then(function(moduleObject2) {
              if (payload._status === Pending || payload._status === Uninitialized) {
                var resolved = payload;
                resolved._status = Resolved;
                resolved._result = moduleObject2;
              }
            }, function(error2) {
              if (payload._status === Pending || payload._status === Uninitialized) {
                var rejected = payload;
                rejected._status = Rejected;
                rejected._result = error2;
              }
            });
            if (payload._status === Uninitialized) {
              var pending = payload;
              pending._status = Pending;
              pending._result = thenable;
            }
          }
          if (payload._status === Resolved) {
            var moduleObject = payload._result;
            {
              if (moduleObject === void 0) {
                error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", moduleObject);
              }
            }
            {
              if (!("default" in moduleObject)) {
                error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
              }
            }
            return moduleObject.default;
          } else {
            throw payload._result;
          }
        }
        function lazy(ctor) {
          var payload = {
            // We use these fields to store the result.
            _status: Uninitialized,
            _result: ctor
          };
          var lazyType = {
            $$typeof: REACT_LAZY_TYPE,
            _payload: payload,
            _init: lazyInitializer
          };
          {
            var defaultProps;
            var propTypes;
            Object.defineProperties(lazyType, {
              defaultProps: {
                configurable: true,
                get: function() {
                  return defaultProps;
                },
                set: function(newDefaultProps) {
                  error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  defaultProps = newDefaultProps;
                  Object.defineProperty(lazyType, "defaultProps", {
                    enumerable: true
                  });
                }
              },
              propTypes: {
                configurable: true,
                get: function() {
                  return propTypes;
                },
                set: function(newPropTypes) {
                  error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  propTypes = newPropTypes;
                  Object.defineProperty(lazyType, "propTypes", {
                    enumerable: true
                  });
                }
              }
            });
          }
          return lazyType;
        }
        function forwardRef(render) {
          {
            if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
              error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
            } else if (typeof render !== "function") {
              error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render);
            } else {
              if (render.length !== 0 && render.length !== 2) {
                error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
              }
            }
            if (render != null) {
              if (render.defaultProps != null || render.propTypes != null) {
                error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
              }
            }
          }
          var elementType = {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function() {
                return ownName;
              },
              set: function(name) {
                ownName = name;
                if (!render.name && !render.displayName) {
                  render.displayName = name;
                }
              }
            });
          }
          return elementType;
        }
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = /* @__PURE__ */ Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function memo(type, compare) {
          {
            if (!isValidElementType(type)) {
              error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
            }
          }
          var elementType = {
            $$typeof: REACT_MEMO_TYPE,
            type,
            compare: compare === void 0 ? null : compare
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function() {
                return ownName;
              },
              set: function(name) {
                ownName = name;
                if (!type.name && !type.displayName) {
                  type.displayName = name;
                }
              }
            });
          }
          return elementType;
        }
        function resolveDispatcher() {
          var dispatcher = ReactCurrentDispatcher.current;
          {
            if (dispatcher === null) {
              error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
            }
          }
          return dispatcher;
        }
        function useContext(Context) {
          var dispatcher = resolveDispatcher();
          {
            if (Context._context !== void 0) {
              var realContext = Context._context;
              if (realContext.Consumer === Context) {
                error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
              } else if (realContext.Provider === Context) {
                error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
              }
            }
          }
          return dispatcher.useContext(Context);
        }
        function useState2(initialState) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useState(initialState);
        }
        function useReducer(reducer, initialArg, init) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useReducer(reducer, initialArg, init);
        }
        function useRef(initialValue) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useRef(initialValue);
        }
        function useEffect2(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useEffect(create, deps);
        }
        function useInsertionEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useInsertionEffect(create, deps);
        }
        function useLayoutEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useLayoutEffect(create, deps);
        }
        function useCallback2(callback, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useCallback(callback, deps);
        }
        function useMemo2(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useMemo(create, deps);
        }
        function useImperativeHandle(ref, create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useImperativeHandle(ref, create, deps);
        }
        function useDebugValue(value, formatterFn) {
          {
            var dispatcher = resolveDispatcher();
            return dispatcher.useDebugValue(value, formatterFn);
          }
        }
        function useTransition() {
          var dispatcher = resolveDispatcher();
          return dispatcher.useTransition();
        }
        function useDeferredValue(value) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useDeferredValue(value);
        }
        function useId() {
          var dispatcher = resolveDispatcher();
          return dispatcher.useId();
        }
        function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
        }
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher$1.current;
            ReactCurrentDispatcher$1.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher$1.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component2) {
          var prototype = Component2.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              setExtraStackFrame(stack);
            } else {
              setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function getDeclarationErrorAddendum() {
          if (ReactCurrentOwner.current) {
            var name = getComponentNameFromType(ReactCurrentOwner.current.type);
            if (name) {
              return "\n\nCheck the render method of `" + name + "`.";
            }
          }
          return "";
        }
        function getSourceInfoErrorAddendum(source) {
          if (source !== void 0) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, "");
            var lineNumber = source.lineNumber;
            return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
          }
          return "";
        }
        function getSourceInfoErrorAddendumForProps(elementProps) {
          if (elementProps !== null && elementProps !== void 0) {
            return getSourceInfoErrorAddendum(elementProps.__source);
          }
          return "";
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          var info = getDeclarationErrorAddendum();
          if (!info) {
            var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
            if (parentName) {
              info = "\n\nCheck the top-level render call using <" + parentName + ">.";
            }
          }
          return info;
        }
        function validateExplicitKey(element, parentType) {
          if (!element._store || element._store.validated || element.key != null) {
            return;
          }
          element._store.validated = true;
          var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
          if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
            return;
          }
          ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
          var childOwner = "";
          if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
            childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
          }
          {
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          if (typeof node !== "object") {
            return;
          }
          if (isArray(node)) {
            for (var i = 0; i < node.length; i++) {
              var child = node[i];
              if (isValidElement(child)) {
                validateExplicitKey(child, parentType);
              }
            }
          } else if (isValidElement(node)) {
            if (node._store) {
              node._store.validated = true;
            }
          } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === "function") {
              if (iteratorFn !== node.entries) {
                var iterator = iteratorFn.call(node);
                var step;
                while (!(step = iterator.next()).done) {
                  if (isValidElement(step.value)) {
                    validateExplicitKey(step.value, parentType);
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        function createElementWithValidation(type, props, children) {
          var validType = isValidElementType(type);
          if (!validType) {
            var info = "";
            if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
              info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            }
            var sourceInfo = getSourceInfoErrorAddendumForProps(props);
            if (sourceInfo) {
              info += sourceInfo;
            } else {
              info += getDeclarationErrorAddendum();
            }
            var typeString;
            if (type === null) {
              typeString = "null";
            } else if (isArray(type)) {
              typeString = "array";
            } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
              typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
              info = " Did you accidentally export a JSX literal instead of a component?";
            } else {
              typeString = typeof type;
            }
            {
              error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
          }
          var element = createElement.apply(this, arguments);
          if (element == null) {
            return element;
          }
          if (validType) {
            for (var i = 2; i < arguments.length; i++) {
              validateChildKeys(arguments[i], type);
            }
          }
          if (type === REACT_FRAGMENT_TYPE) {
            validateFragmentProps(element);
          } else {
            validatePropTypes(element);
          }
          return element;
        }
        var didWarnAboutDeprecatedCreateFactory = false;
        function createFactoryWithValidation(type) {
          var validatedFactory = createElementWithValidation.bind(null, type);
          validatedFactory.type = type;
          {
            if (!didWarnAboutDeprecatedCreateFactory) {
              didWarnAboutDeprecatedCreateFactory = true;
              warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
            }
            Object.defineProperty(validatedFactory, "type", {
              enumerable: false,
              get: function() {
                warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                Object.defineProperty(this, "type", {
                  value: type
                });
                return type;
              }
            });
          }
          return validatedFactory;
        }
        function cloneElementWithValidation(element, props, children) {
          var newElement = cloneElement.apply(this, arguments);
          for (var i = 2; i < arguments.length; i++) {
            validateChildKeys(arguments[i], newElement.type);
          }
          validatePropTypes(newElement);
          return newElement;
        }
        function startTransition(scope, options) {
          var prevTransition = ReactCurrentBatchConfig.transition;
          ReactCurrentBatchConfig.transition = {};
          var currentTransition = ReactCurrentBatchConfig.transition;
          {
            ReactCurrentBatchConfig.transition._updatedFibers = /* @__PURE__ */ new Set();
          }
          try {
            scope();
          } finally {
            ReactCurrentBatchConfig.transition = prevTransition;
            {
              if (prevTransition === null && currentTransition._updatedFibers) {
                var updatedFibersCount = currentTransition._updatedFibers.size;
                if (updatedFibersCount > 10) {
                  warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.");
                }
                currentTransition._updatedFibers.clear();
              }
            }
          }
        }
        var didWarnAboutMessageChannel = false;
        var enqueueTaskImpl = null;
        function enqueueTask(task) {
          if (enqueueTaskImpl === null) {
            try {
              var requireString = ("require" + Math.random()).slice(0, 7);
              var nodeRequire = module && module[requireString];
              enqueueTaskImpl = nodeRequire.call(module, "timers").setImmediate;
            } catch (_err) {
              enqueueTaskImpl = function(callback) {
                {
                  if (didWarnAboutMessageChannel === false) {
                    didWarnAboutMessageChannel = true;
                    if (typeof MessageChannel === "undefined") {
                      error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.");
                    }
                  }
                }
                var channel = new MessageChannel();
                channel.port1.onmessage = callback;
                channel.port2.postMessage(void 0);
              };
            }
          }
          return enqueueTaskImpl(task);
        }
        var actScopeDepth = 0;
        var didWarnNoAwaitAct = false;
        function act(callback) {
          {
            var prevActScopeDepth = actScopeDepth;
            actScopeDepth++;
            if (ReactCurrentActQueue.current === null) {
              ReactCurrentActQueue.current = [];
            }
            var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
            var result;
            try {
              ReactCurrentActQueue.isBatchingLegacy = true;
              result = callback();
              if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
                var queue = ReactCurrentActQueue.current;
                if (queue !== null) {
                  ReactCurrentActQueue.didScheduleLegacyUpdate = false;
                  flushActQueue(queue);
                }
              }
            } catch (error2) {
              popActScope(prevActScopeDepth);
              throw error2;
            } finally {
              ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
            }
            if (result !== null && typeof result === "object" && typeof result.then === "function") {
              var thenableResult = result;
              var wasAwaited = false;
              var thenable = {
                then: function(resolve, reject) {
                  wasAwaited = true;
                  thenableResult.then(function(returnValue2) {
                    popActScope(prevActScopeDepth);
                    if (actScopeDepth === 0) {
                      recursivelyFlushAsyncActWork(returnValue2, resolve, reject);
                    } else {
                      resolve(returnValue2);
                    }
                  }, function(error2) {
                    popActScope(prevActScopeDepth);
                    reject(error2);
                  });
                }
              };
              {
                if (!didWarnNoAwaitAct && typeof Promise !== "undefined") {
                  Promise.resolve().then(function() {
                  }).then(function() {
                    if (!wasAwaited) {
                      didWarnNoAwaitAct = true;
                      error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);");
                    }
                  });
                }
              }
              return thenable;
            } else {
              var returnValue = result;
              popActScope(prevActScopeDepth);
              if (actScopeDepth === 0) {
                var _queue = ReactCurrentActQueue.current;
                if (_queue !== null) {
                  flushActQueue(_queue);
                  ReactCurrentActQueue.current = null;
                }
                var _thenable = {
                  then: function(resolve, reject) {
                    if (ReactCurrentActQueue.current === null) {
                      ReactCurrentActQueue.current = [];
                      recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                    } else {
                      resolve(returnValue);
                    }
                  }
                };
                return _thenable;
              } else {
                var _thenable2 = {
                  then: function(resolve, reject) {
                    resolve(returnValue);
                  }
                };
                return _thenable2;
              }
            }
          }
        }
        function popActScope(prevActScopeDepth) {
          {
            if (prevActScopeDepth !== actScopeDepth - 1) {
              error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
            }
            actScopeDepth = prevActScopeDepth;
          }
        }
        function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
          {
            var queue = ReactCurrentActQueue.current;
            if (queue !== null) {
              try {
                flushActQueue(queue);
                enqueueTask(function() {
                  if (queue.length === 0) {
                    ReactCurrentActQueue.current = null;
                    resolve(returnValue);
                  } else {
                    recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                  }
                });
              } catch (error2) {
                reject(error2);
              }
            } else {
              resolve(returnValue);
            }
          }
        }
        var isFlushing = false;
        function flushActQueue(queue) {
          {
            if (!isFlushing) {
              isFlushing = true;
              var i = 0;
              try {
                for (; i < queue.length; i++) {
                  var callback = queue[i];
                  do {
                    callback = callback(true);
                  } while (callback !== null);
                }
                queue.length = 0;
              } catch (error2) {
                queue = queue.slice(i + 1);
                throw error2;
              } finally {
                isFlushing = false;
              }
            }
          }
        }
        var createElement$1 = createElementWithValidation;
        var cloneElement$1 = cloneElementWithValidation;
        var createFactory = createFactoryWithValidation;
        var Children = {
          map: mapChildren,
          forEach: forEachChildren,
          count: countChildren,
          toArray,
          only: onlyChild
        };
        exports.Children = Children;
        exports.Component = Component;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.Profiler = REACT_PROFILER_TYPE;
        exports.PureComponent = PureComponent;
        exports.StrictMode = REACT_STRICT_MODE_TYPE;
        exports.Suspense = REACT_SUSPENSE_TYPE;
        exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
        exports.act = act;
        exports.cloneElement = cloneElement$1;
        exports.createContext = createContext;
        exports.createElement = createElement$1;
        exports.createFactory = createFactory;
        exports.createRef = createRef;
        exports.forwardRef = forwardRef;
        exports.isValidElement = isValidElement;
        exports.lazy = lazy;
        exports.memo = memo;
        exports.startTransition = startTransition;
        exports.unstable_act = act;
        exports.useCallback = useCallback2;
        exports.useContext = useContext;
        exports.useDebugValue = useDebugValue;
        exports.useDeferredValue = useDeferredValue;
        exports.useEffect = useEffect2;
        exports.useId = useId;
        exports.useImperativeHandle = useImperativeHandle;
        exports.useInsertionEffect = useInsertionEffect;
        exports.useLayoutEffect = useLayoutEffect;
        exports.useMemo = useMemo2;
        exports.useReducer = useReducer;
        exports.useRef = useRef;
        exports.useState = useState2;
        exports.useSyncExternalStore = useSyncExternalStore;
        exports.useTransition = useTransition;
        exports.version = ReactVersion;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  }
});

// React-Odontogram-Modul/node_modules/react/index.js
var require_react = __commonJS({
  "React-Odontogram-Modul/node_modules/react/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_development();
    }
  }
});

// React-Odontogram-Modul/src/status_extras.ts
var STATUS_EXTRAS = {
  arches: {
    upper: [18, 17, 16, 15, 14, 13, 12, 11, 21, 22, 23, 24, 25, 26, 27, 28],
    lower: [48, 47, 46, 45, 44, 43, 42, 41, 31, 32, 33, 34, 35, 36, 37, 38],
    wisdom: {
      upper: [18, 28],
      lower: [48, 38]
    }
  },
  options: [
    { id: "upper-12-22-zircon", labelKey: "statusExtras.upper12_22Zircon", type: "span", teeth: [12, 11, 21, 22], material: "zircon" },
    { id: "upper-13-23-zircon", labelKey: "statusExtras.upper13_23Zircon", type: "span", teeth: [13, 12, 11, 21, 22, 23], material: "zircon" },
    { id: "upper-16-26-zircon", labelKey: "statusExtras.upper16_26Zircon", type: "span", teeth: [16, 15, 14, 13, 12, 11, 21, 22, 23, 24, 25, 26], material: "zircon" },
    { id: "upper-full-zircon", labelKey: "statusExtras.upperFullZircon", type: "arch-bridge", arch: "upper", material: "zircon", missingMaterial: "zircon" },
    { id: "upper-12-22-metal", labelKey: "statusExtras.upper12_22Metal", type: "span", teeth: [12, 11, 21, 22], material: "metal" },
    { id: "upper-13-23-metal", labelKey: "statusExtras.upper13_23Metal", type: "span", teeth: [13, 12, 11, 21, 22, 23], material: "metal" },
    { id: "upper-16-26-metal", labelKey: "statusExtras.upper16_26Metal", type: "span", teeth: [16, 15, 14, 13, 12, 11, 21, 22, 23, 24, 25, 26], material: "metal" },
    { id: "upper-full-metal", labelKey: "statusExtras.upperFullMetal", type: "arch-bridge", arch: "upper", material: "metal", missingMaterial: "metal" },
    { id: "upper-partial-removable", labelKey: "statusExtras.upperPartialRemovable", type: "partial-removable", arch: "upper" },
    { id: "upper-full-removable", labelKey: "statusExtras.upperFullRemovable", type: "full-removable", arch: "upper" },
    { id: "upper-bar-denture", labelKey: "statusExtras.upperBarDenture", type: "bar-denture", arch: "upper", implants: [14, 12, 22, 24], missing: [16, 15, 13, 11, 21, 23, 25, 26] },
    { id: "lower-42-32-zircon", labelKey: "statusExtras.lower42_32Zircon", type: "span", teeth: [42, 41, 31, 32], material: "zircon" },
    { id: "lower-43-33-zircon", labelKey: "statusExtras.lower43_33Zircon", type: "span", teeth: [43, 42, 41, 31, 32, 33], material: "zircon" },
    { id: "lower-46-36-zircon", labelKey: "statusExtras.lower46_36Zircon", type: "span", teeth: [46, 45, 44, 43, 42, 41, 31, 32, 33, 34, 35, 36], material: "zircon" },
    { id: "lower-full-zircon", labelKey: "statusExtras.lowerFullZircon", type: "arch-bridge", arch: "lower", material: "zircon", missingMaterial: "zircon" },
    { id: "lower-42-32-metal", labelKey: "statusExtras.lower42_32Metal", type: "span", teeth: [42, 41, 31, 32], material: "metal" },
    { id: "lower-43-33-metal", labelKey: "statusExtras.lower43_33Metal", type: "span", teeth: [43, 42, 41, 31, 32, 33], material: "metal" },
    { id: "lower-46-36-metal", labelKey: "statusExtras.lower46_36Metal", type: "span", teeth: [46, 45, 44, 43, 42, 41, 31, 32, 33, 34, 35, 36], material: "metal" },
    { id: "lower-full-metal", labelKey: "statusExtras.lowerFullMetal", type: "arch-bridge", arch: "lower", material: "metal", missingMaterial: "metal" },
    { id: "lower-partial-removable", labelKey: "statusExtras.lowerPartialRemovable", type: "partial-removable", arch: "lower" },
    { id: "lower-full-removable", labelKey: "statusExtras.lowerFullRemovable", type: "full-removable", arch: "lower" },
    { id: "lower-bar-denture", labelKey: "statusExtras.lowerBarDenture", type: "bar-denture", arch: "lower", implants: [44, 42, 32, 34], missing: [46, 45, 43, 41, 31, 33, 35, 36] }
  ]
};

// React-Odontogram-Modul/src/i18n/useI18n.ts
var import_react = __toESM(require_react(), 1);

// React-Odontogram-Modul/src/i18n/translations.ts
var translations = {
  hu: {
    "app.title": "React Odontogram Szerkeszt\u0151 Modul",
    "app.subtitle": "V\xE1lassz fogat az odontogramon, majd \xE1ll\xEDtsd be a r\xE9tegeket.",
    "topbar.exportStatus": "St\xE1tusz export",
    "topbar.importStatus": "St\xE1tusz import",
    "chart.title": "Fog\xE1szati st\xE1tusz",
    "chart.hint": "Kattints egy fogra. T\xF6bb fog kijel\xF6l\xE9s\xE9hez a CMD/CTRL + kattint\xE1st v\xE1laszd.",
    "chart.actions.occlusal": "Occlusios n\xE9zet l\xE1that\xF3s\xE1ga",
    "chart.actions.wisdom": "B\xF6lcsess\xE9gfogak l\xE1that\xF3s\xE1ga",
    "chart.actions.bone": "Csont l\xE1that\xF3s\xE1ga",
    "chart.actions.pulp": "Pulpa l\xE1that\xF3s\xE1ga",
    "chart.actions.clearSelection": "Kijel\xF6l\xE9s t\xF6rl\xE9se",
    "chart.aria.toothGrid": "Fog r\xE1cs",
    "panel.controls": "Vez\xE9rl\u0151k",
    "panel.clearSelection": "Kijel\xF6l\xE9s t\xF6rl\xE9se",
    "panel.toggleControls": "Vez\xE9rl\u0151k",
    "panel.activeTooth": "Akt\xEDv fog",
    "panel.selectActions.all": "\xD6sszes",
    "panel.selectActions.present": "Fogak",
    "panel.selectActions.permanent": "Marad\xF3k",
    "panel.selectActions.milk": "Tejfogak",
    "panel.selectActions.implants": "Implantok",
    "panel.selectActions.missing": "Hi\xE1nyok",
    "panel.selectActions.upper": "Fels\u0151",
    "panel.selectActions.upperFront": "Fels\u0151 6 front",
    "panel.selectActions.upperMolar": "Fels\u0151 mol\xE1r",
    "panel.selectActions.lower": "Als\xF3",
    "panel.selectActions.lowerFront": "Als\xF3 6 front",
    "panel.selectActions.lowerMolar": "Als\xF3 mol\xE1r",
    "status.title": "St\xE1tuszok",
    "status.resetAll": "Sz\xE1j\xFCreg alaphelyzet",
    "status.primaryDentition": "Tejfogazat",
    "status.mixedDentition": "Vegyes fogazat",
    "status.edentulous": "Fogatlan sz\xE1j\xFCreg",
    "status.extraLabel": "Hozz\xE1ad\xE1s:",
    "status.extraApply": "OK",
    "tooth.title": "Fog jellemz\u0151i",
    "tooth.reset": "Alaphelyzet",
    "tooth.resetTitle": "Fog alaphelyzetbe \xE1ll\xEDt\xE1sa",
    "tooth.baseLabel": "Alap",
    "tooth.bridgeLabel": "Fogp\xF3tl\xE1s",
    "tooth.extractionWound": "friss extrakci\xF3s seb",
    "tooth.crownLabel": "Korona",
    "tooth.broken.mesial": "mesial",
    "tooth.broken.incisal": "inicisal",
    "tooth.broken.distal": "distal",
    "tooth.contact.mesialMissing": "mesial kontakt hi\xE1ny",
    "tooth.contact.distalMissing": "distal kontakt hi\xE1ny",
    "tooth.bruxism.edgeWear": "\xC9li kop\xE1s",
    "tooth.bruxism.neckWear": "Nyaki kop\xE1s",
    "tooth.bridgePillar": "H\xEDdpill\xE9r",
    "tooth.extractionPlan": "Elt\xE1vol\xEDtand\xF3",
    "tooth.crownReplace": "Cser\xE9lend\u0151 korona",
    "tooth.crownNeeded": "Koron\xE1zand\xF3 fog",
    "tooth.missingClosed": "Z\xE1r\xF3dott foghi\xE1ny",
    "caries.title": "Fogszuvasod\xE1s",
    "caries.hint": "Jel\xF6ld ki a szuvasod\xE1s fel\xFCleteit",
    "filling.title": "T\xF6m\xE9sek \xE9s Konzerv\xE1l\xE1s",
    "filling.typeLabel": "T\xEDpusa",
    "filling.fissureSealing": "Bar\xE1zdaz\xE1rt",
    "endo.title": "Foggy\xF6k\xE9r",
    "endo.hint": "Jel\xF6ld ki a foggy\xF6k\xE9r \xE1llapot\xE1t",
    "endo.pulpitis": "Pulpitis",
    "endo.resection": "Rezek\xE1lt fog",
    "endo.parapulpalPin": "Parapulp\xE1lis csap",
    "inflammation.title": "Fog\xE1gy \xE9s Gyullad\xE1sok",
    "inflammation.mobilityLabel": "Mobilit\xE1s",
    "language.label": "Nyelv",
    "language.hu": "\u{1F1ED}\u{1F1FA} Magyar",
    "language.en": "\u{1F1EC}\u{1F1E7} English",
    "language.de": "\u{1F1E9}\u{1F1EA} Deutsch",
    "language.es": "\u{1F1EA}\u{1F1F8} Espa\xF1ol",
    "language.it": "\u{1F1EE}\u{1F1F9} Italiano",
    "language.sk": "\u{1F1F8}\u{1F1F0} Sloven\u010Dina",
    "language.pl": "\u{1F1F5}\u{1F1F1} Polski",
    "language.ru": "\u{1F1F7}\u{1F1FA} \u0420\u0443\u0441\u0441\u043A\u0438\u0439",
    "numbering.label": "Sz\xE1moz\xE1s",
    "numbering.fdi": "FDI - ISO 3950",
    "numbering.universal": "Universal - USA",
    "numbering.palmer": "Zsigmondy-Palmer",
    "theme.light": "Vil\xE1gos m\xF3d",
    "theme.dark": "S\xF6t\xE9t m\xF3d",
    "selection.none": "\u2014",
    "selection.count": "{{count}} fog",
    "toothSelect.none": "foghi\xE1ny",
    "toothSelect.permanent": "marad\xF3 fog",
    "toothSelect.milk": "tejfog",
    "toothSelect.implant": "implant\xE1tum",
    "toothSelect.crownPrep": "el\u0151k\xE9sz\xEDtett fog koron\xE1hoz",
    "toothSelect.underGum": "\xEDny alatti fog",
    "endo.option.none": "eg\xE9szs\xE9ges foggy\xF6k\xE9r",
    "endo.option.medicalFilling": "gy\xF3gyszeres gy\xF6k\xE9rt\xF6m\xE9s",
    "endo.option.filling": "gy\xF6k\xE9rt\xF6m\xE9s",
    "endo.option.incompleteFilling": "incompl\xE9t gy\xF6k\xE9rt\xF6m\xE9s",
    "endo.option.glassPin": "gy\xF6k\xE9rt\xF6m\xE9s, \xFCvegsz\xE1las csappal",
    "endo.option.metalPin": "gy\xF6k\xE9rt\xF6m\xE9s, f\xE9mcsappal",
    "filling.option.none": "nincs t\xF6m\xE9s",
    "filling.option.amalgam": "amalg\xE1m t\xF6m\xE9s",
    "filling.option.composite": "kompozit t\xF6m\xE9s",
    "filling.option.gic": "\xFCvegionomer t\xF6m\xE9s",
    "filling.option.temporary": "ideiglenes t\xF6m\xE9s",
    "crown.option.noneImplant": "nincs",
    "crown.option.healingAbutment": "gy\xF3gyul\xE1si csavar",
    "crown.option.zircon": "cirkon korona",
    "crown.option.metal": "f\xE9mker\xE1mia korona",
    "crown.option.temporary": "ideiglenes korona",
    "crown.option.locator": "lok\xE1tor",
    "crown.option.locatorProsthesis": "lok\xE1tor + m\u0171fog",
    "crown.option.bar": "st\xE9ges implant",
    "crown.option.barProsthesis": "st\xE9g + m\u0171fog",
    "crown.option.full": "teljes korona",
    "crown.option.broken": "t\xF6r\xF6tt korona",
    "crown.option.radix": "radix",
    "crown.option.emax": "pr\xE9sker\xE1mia bet\xE9t",
    "crown.option.telescope": "teleszk\xF3p korona",
    "bridge.option.none": "nincs",
    "bridge.option.removable": "kivehet\u0151 fogp\xF3tl\xE1s",
    "bridge.option.zircon": "cirkon h\xEDdtag",
    "bridge.option.metal": "f\xE9mker\xE1mia h\xEDdtag",
    "bridge.option.temporary": "ideiglenes h\xEDdtag",
    "bridge.option.bar": "st\xE9g \xE1thidal\xE1s",
    "bridge.option.barProsthesis": "st\xE9g + m\u0171fog",
    "mobility.none": "nincs",
    "mobility.m1": "1. fok\xFA",
    "mobility.m2": "2. fok\xFA",
    "mobility.m3": "3. fok\xFA",
    "mods.parodontal": "parodont\xE1lis gyullad\xE1s",
    "mods.periimplantitis": "Periimplantitis",
    "mods.periodontalInflammation": "fog\xE1gygyullad\xE1s",
    "mods.periapicalInflammation": "periapik\xE1lis gyullad\xE1s",
    "surface.mesial": "mesial",
    "surface.distal": "distal",
    "surface.buccal": "buccal",
    "surface.lingualPalatal": "lingual/palatinal",
    "surface.occlusal": "occlusal",
    "surface.subcrown": "subcrown",
    "actions.expand": "{{label}} kinyit\xE1sa",
    "actions.collapse": "{{label}} \xF6sszecsuk\xE1sa",
    "debug.numbering.title": "Sz\xE1moz\xE1s debug (FDI / Universal / Palmer)",
    "statusExtras.upper12_22Zircon": "fels\u0151 12-22 cirkon",
    "statusExtras.upper13_23Zircon": "fels\u0151 13-23 cirkon",
    "statusExtras.upper16_26Zircon": "fels\u0151 16-26 cirkon",
    "statusExtras.upperFullZircon": "fels\u0151 cirkon k\xF6rh\xEDd",
    "statusExtras.upper12_22Metal": "fels\u0151 12-22 f\xE9mker\xE1mia",
    "statusExtras.upper13_23Metal": "fels\u0151 13-23 f\xE9mker\xE1mia",
    "statusExtras.upper16_26Metal": "fels\u0151 16-26 f\xE9mker\xE1mia",
    "statusExtras.upperFullMetal": "fels\u0151 f\xE9mker\xE1mia k\xF6rh\xEDd",
    "statusExtras.upperPartialRemovable": "fels\u0151 r\xE9szleges kivehet\u0151",
    "statusExtras.upperFullRemovable": "fels\u0151 teljes kivehet\u0151",
    "statusExtras.upperBarDenture": "fels\u0151 st\xE9ges fogsor",
    "statusExtras.lower42_32Zircon": "als\xF3 42-32 cirkon",
    "statusExtras.lower43_33Zircon": "als\xF3 43-33 cirkon",
    "statusExtras.lower46_36Zircon": "als\xF3 46-36 cirkon",
    "statusExtras.lowerFullZircon": "als\xF3 cirkon k\xF6rh\xEDd",
    "statusExtras.lower42_32Metal": "als\xF3 42-32 f\xE9mker\xE1mia",
    "statusExtras.lower43_33Metal": "als\xF3 43-33 f\xE9mker\xE1mia",
    "statusExtras.lower46_36Metal": "als\xF3 46-36 f\xE9mker\xE1mia",
    "statusExtras.lowerFullMetal": "als\xF3 f\xE9mker\xE1mia k\xF6rh\xEDd",
    "statusExtras.lowerPartialRemovable": "als\xF3 r\xE9szleges kivehet\u0151",
    "statusExtras.lowerFullRemovable": "als\xF3 teljes kivehet\u0151",
    "statusExtras.lowerBarDenture": "als\xF3 st\xE9ges fogsor",
    "touch.zoom.title": "Fog #{{tooth}}",
    "touch.zoom.select": "Kijel\xF6l\xE9s",
    "touch.zoom.deselect": "Kijel\xF6l\xE9s t\xF6rl\xE9se",
    "touch.zoom.info": "R\xE9szletek",
    "touch.zoom.close": "Bez\xE1r\xE1s",
    "touch.ctx.select": "Kijel\xF6l\xE9s",
    "touch.ctx.multiSelect": "Hozz\xE1ad\xE1s kijel\xF6l\xE9shez",
    "touch.ctx.deselect": "Kijel\xF6l\xE9s t\xF6rl\xE9se",
    "touch.ctx.reset": "Alaphelyzet",
    "touch.arch.upper": "Fels\u0151 \xEDv",
    "touch.arch.lower": "Als\xF3 \xEDv",
    "touch.arch.both": "Mindkett\u0151",
    "chart.hint.touch": "Koppints egy fogra a kijel\xF6l\xE9shez. Hossz\xFA nyom\xE1ssal t\xF6bb lehet\u0151s\xE9g.",
    "warn.endoOnMissing": "Gy\xF6k\xE9rkezel\xE9s nem lehets\xE9ges hi\xE1nyz\xF3/implant\xE1lt fogon",
    "warn.fillingOnMissing": "T\xF6m\xE9s nem lehets\xE9ges hi\xE1nyz\xF3 fogon",
    "warn.crownReplaceNoCrown": "Cser\xE9lend\u0151 korona jel\xF6l\xE9s korona n\xE9lk\xFCl",
    "warn.cariesOnMissing": "Szuvasod\xE1s nem lehets\xE9ges hi\xE1nyz\xF3 fogon",
    "warn.pillarNoCrown": "H\xEDdpill\xE9r jel\xF6l\xE9s koronaanyag n\xE9lk\xFCl",
    "readOnly.label": "Csak olvashat\xF3",
    "note.title": "Megjegyz\xE9s",
    "note.save": "Ment\xE9s",
    "note.delete": "T\xF6rl\xE9s",
    "note.placeholder": "\xCDrj megjegyz\xE9st..."
  },
  uz: {
    "app.title": "Odontogram moduli",
    "app.subtitle": "Tishni tanlang va holatini belgilang.",
    "topbar.exportStatus": "Holatni export qilish",
    "topbar.importStatus": "Holatni import qilish",
    "chart.title": "Dental chart",
    "chart.hint": "Tishni tanlang. Bir nechta tish uchun CTRL bilan bosing.",
    "chart.actions.occlusal": "Okklyuzion korinish",
    "chart.actions.wisdom": "8-larni korsatish",
    "chart.actions.bone": "Asosni korsatish",
    "chart.actions.pulp": "Sog'lom ildizni korsatish",
    "chart.actions.clearSelection": "Tanlovni tozalash",
    "chart.aria.toothGrid": "Tishlar sxemasi",
    "panel.controls": "Boshqaruv",
    "panel.clearSelection": "Tanlovni tozalash",
    "panel.activeTooth": "Tanlangan tish",
    "tooth.title": "Tish tafsilotlari",
    "tooth.reset": "Qayta tiklash",
    "tooth.baseLabel": "Baza",
    "caries.title": "Karies",
    "caries.hint": "Kariyes yuzalarini tanlang",
    "filling.title": "Plomba va tiklovchi vositalar",
    "filling.typeLabel": "Turi",
    "filling.fissureSealing": "Yoriqni muhrlash",
    "endo.title": "Ildiz",
    "endo.hint": "Ildiz holatini tanlang",
    "endo.pulpitis": "Pulpit",
    "endo.resection": "Rezeksiya qilingan tish",
    "endo.parapulpalPin": "Parapulpal igna",
    "inflammation.title": "Periodontit va yallig'lanishlar",
    "inflammation.mobilityLabel": "Harakatchanlik",
    "language.label": "Til",
    "language.uz": "Uzbek",
    "language.ru": "Russkiy",
    "language.en": "English",
    "numbering.label": "Raqamlash",
    "numbering.fdi": "FDI - ISO 3950",
    "numbering.universal": "Universal - USA",
    "numbering.palmer": "Palmer",
    "theme.light": "Yorug' rejim",
    "theme.dark": "Tungi rejim",
    "selection.none": "-",
    "selection.count": "{{count}} tish",
    "toothSelect.none": "Tish yo'q",
    "toothSelect.permanent": "Doimiy tish",
    "toothSelect.milk": "Sut tish",
    "toothSelect.implant": "Implant",
    "toothSelect.crownPrep": "Koronaga tayyorlangan tish",
    "toothSelect.underGum": "Milk ostidagi tish",
    "endo.option.none": "Sog'lom ildiz",
    "filling.option.none": "To'ldirish yo'q",
    "mobility.none": "Hech biri",
    "surface.mesial": "mesial",
    "surface.distal": "distal",
    "surface.buccal": "yonoq",
    "surface.lingualPalatal": "til/tanglay",
    "surface.occlusal": "okklyuzion",
    "surface.subcrown": "toj osti",
    "mods.parodontal": "Periodontal yallig'lanish",
    "mods.periapicalInflammation": "Periapikal yallig'lanish",
    "actions.expand": "{{label}} ochish",
    "actions.collapse": "{{label}} yopish",
    "note.title": "Izoh",
    "note.save": "Saqlash",
    "note.delete": "Ochirish",
    "note.placeholder": "Izoh qoldiring..."
  },
  en: {
    "app.title": "React Odontogram Editor Modul",
    "app.subtitle": "Select a tooth on the odontogram, then set the layers.",
    "topbar.exportStatus": "Export status",
    "topbar.importStatus": "Import status",
    "chart.title": "Dental chart",
    "chart.hint": "Click a tooth. For multi-select, use CMD/CTRL + click.",
    "chart.actions.occlusal": "Occlusal view visibility",
    "chart.actions.wisdom": "Wisdom teeth visibility",
    "chart.actions.bone": "Bone visibility",
    "chart.actions.pulp": "Pulp visibility",
    "chart.actions.clearSelection": "Clear selection",
    "chart.aria.toothGrid": "Tooth grid",
    "panel.controls": "Controls",
    "panel.clearSelection": "Clear selection",
    "panel.toggleControls": "Controls",
    "panel.activeTooth": "Active tooth",
    "panel.selectActions.all": "All",
    "panel.selectActions.present": "Teeth",
    "panel.selectActions.permanent": "Permanent",
    "panel.selectActions.milk": "Primary",
    "panel.selectActions.implants": "Implants",
    "panel.selectActions.missing": "Missing",
    "panel.selectActions.upper": "Upper",
    "panel.selectActions.upperFront": "Upper 6 front",
    "panel.selectActions.upperMolar": "Upper molars",
    "panel.selectActions.lower": "Lower",
    "panel.selectActions.lowerFront": "Lower 6 front",
    "panel.selectActions.lowerMolar": "Lower molars",
    "status.title": "Statuses",
    "status.resetAll": "Reset mouth",
    "status.primaryDentition": "Primary dentition",
    "status.mixedDentition": "Mixed dentition",
    "status.edentulous": "Edentulous",
    "status.extraLabel": "Add:",
    "status.extraApply": "OK",
    "tooth.title": "Tooth details",
    "tooth.reset": "Reset",
    "tooth.resetTitle": "Reset tooth to default",
    "tooth.baseLabel": "Base",
    "tooth.bridgeLabel": "Prosthesis",
    "tooth.extractionWound": "fresh extraction wound",
    "tooth.crownLabel": "Crown",
    "tooth.broken.mesial": "mesial",
    "tooth.broken.incisal": "incisal",
    "tooth.broken.distal": "distal",
    "tooth.contact.mesialMissing": "mesial contact missing",
    "tooth.contact.distalMissing": "distal contact missing",
    "tooth.bruxism.edgeWear": "Incisal wear",
    "tooth.bruxism.neckWear": "Cervical wear",
    "tooth.bridgePillar": "Bridge abutment",
    "tooth.extractionPlan": "Planned extraction",
    "tooth.crownReplace": "Crown replacement",
    "tooth.crownNeeded": "Crown needed",
    "tooth.missingClosed": "Closed gap",
    "caries.title": "Caries",
    "caries.hint": "Select caries surfaces",
    "filling.title": "Fillings and restorative",
    "filling.typeLabel": "Type",
    "filling.fissureSealing": "Fissure sealing",
    "endo.title": "Root",
    "endo.hint": "Select root status",
    "endo.pulpitis": "Pulpitis",
    "endo.resection": "Resected tooth",
    "endo.parapulpalPin": "Parapulpal pin",
    "inflammation.title": "Periodontium and inflammations",
    "inflammation.mobilityLabel": "Mobility",
    "language.label": "Language",
    "language.hu": "\u{1F1ED}\u{1F1FA} Hungarian",
    "language.en": "\u{1F1EC}\u{1F1E7} English",
    "language.de": "\u{1F1E9}\u{1F1EA} German",
    "language.es": "\u{1F1EA}\u{1F1F8} Spanish",
    "language.it": "\u{1F1EE}\u{1F1F9} Italian",
    "language.sk": "\u{1F1F8}\u{1F1F0} Slovak",
    "language.pl": "\u{1F1F5}\u{1F1F1} Polish",
    "language.ru": "\u{1F1F7}\u{1F1FA} Russian",
    "numbering.label": "Numbering",
    "numbering.fdi": "FDI - ISO 3950",
    "numbering.universal": "Universal - USA",
    "numbering.palmer": "Zsigmondy-Palmer",
    "theme.light": "Light mode",
    "theme.dark": "Dark mode",
    "selection.none": "\u2014",
    "selection.count": "{{count}} teeth",
    "toothSelect.none": "Missing tooth",
    "toothSelect.permanent": "Permanent tooth",
    "toothSelect.milk": "Primary tooth",
    "toothSelect.implant": "Implant",
    "toothSelect.crownPrep": "Prepared for crown",
    "toothSelect.underGum": "Subgingival tooth",
    "endo.option.none": "Healthy root",
    "endo.option.medicalFilling": "Medicinal root filling",
    "endo.option.filling": "Root filling",
    "endo.option.incompleteFilling": "Incomplete root filling",
    "endo.option.glassPin": "Root filling with glass fiber post",
    "endo.option.metalPin": "Root filling with metal post",
    "filling.option.none": "No filling",
    "filling.option.amalgam": "Amalgam filling",
    "filling.option.composite": "Composite filling",
    "filling.option.gic": "Glass ionomer filling",
    "filling.option.temporary": "Temporary filling",
    "crown.option.noneImplant": "None",
    "crown.option.healingAbutment": "Healing abutment",
    "crown.option.zircon": "Zirconia crown",
    "crown.option.metal": "Metal-ceramic crown",
    "crown.option.temporary": "Temporary crown",
    "crown.option.locator": "Locator",
    "crown.option.locatorProsthesis": "Locator + denture tooth",
    "crown.option.bar": "Bar implant",
    "crown.option.barProsthesis": "Bar + denture tooth",
    "crown.option.full": "Full crown",
    "crown.option.broken": "Broken crown",
    "crown.option.radix": "Radix",
    "crown.option.emax": "Pressed ceramic inlay",
    "crown.option.telescope": "Telescopic crown",
    "bridge.option.none": "None",
    "bridge.option.removable": "Removable prosthesis",
    "bridge.option.zircon": "Zirconia bridge unit",
    "bridge.option.metal": "Metal-ceramic bridge unit",
    "bridge.option.temporary": "Temporary bridge unit",
    "bridge.option.bar": "Bar span",
    "bridge.option.barProsthesis": "Bar + denture tooth",
    "mobility.none": "None",
    "mobility.m1": "Grade 1",
    "mobility.m2": "Grade 2",
    "mobility.m3": "Grade 3",
    "mods.parodontal": "Periodontal inflammation",
    "mods.periimplantitis": "Peri-implantitis",
    "mods.periodontalInflammation": "Periodontal inflammation",
    "mods.periapicalInflammation": "Periapical inflammation",
    "surface.mesial": "mesial",
    "surface.distal": "distal",
    "surface.buccal": "buccal",
    "surface.lingualPalatal": "lingual/palatal",
    "surface.occlusal": "occlusal",
    "surface.subcrown": "subcrown",
    "actions.expand": "Open {{label}}",
    "actions.collapse": "Collapse {{label}}",
    "debug.numbering.title": "Numbering debug (FDI / Universal / Palmer)",
    "statusExtras.upper12_22Zircon": "Upper 12-22 zirconia",
    "statusExtras.upper13_23Zircon": "Upper 13-23 zirconia",
    "statusExtras.upper16_26Zircon": "Upper 16-26 zirconia",
    "statusExtras.upperFullZircon": "Upper full zirconia bridge",
    "statusExtras.upper12_22Metal": "Upper 12-22 metal-ceramic",
    "statusExtras.upper13_23Metal": "Upper 13-23 metal-ceramic",
    "statusExtras.upper16_26Metal": "Upper 16-26 metal-ceramic",
    "statusExtras.upperFullMetal": "Upper full metal-ceramic bridge",
    "statusExtras.upperPartialRemovable": "Upper partial removable",
    "statusExtras.upperFullRemovable": "Upper full removable",
    "statusExtras.upperBarDenture": "Upper bar denture",
    "statusExtras.lower42_32Zircon": "Lower 42-32 zirconia",
    "statusExtras.lower43_33Zircon": "Lower 43-33 zirconia",
    "statusExtras.lower46_36Zircon": "Lower 46-36 zirconia",
    "statusExtras.lowerFullZircon": "Lower full zirconia bridge",
    "statusExtras.lower42_32Metal": "Lower 42-32 metal-ceramic",
    "statusExtras.lower43_33Metal": "Lower 43-33 metal-ceramic",
    "statusExtras.lower46_36Metal": "Lower 46-36 metal-ceramic",
    "statusExtras.lowerFullMetal": "Lower full metal-ceramic bridge",
    "statusExtras.lowerPartialRemovable": "Lower partial removable",
    "statusExtras.lowerFullRemovable": "Lower full removable",
    "statusExtras.lowerBarDenture": "Lower bar denture",
    "touch.zoom.title": "Tooth #{{tooth}}",
    "touch.zoom.select": "Select",
    "touch.zoom.deselect": "Deselect",
    "touch.zoom.info": "Details",
    "touch.zoom.close": "Close",
    "touch.ctx.select": "Select",
    "touch.ctx.multiSelect": "Add to selection",
    "touch.ctx.deselect": "Deselect",
    "touch.ctx.reset": "Reset",
    "touch.arch.upper": "Upper arch",
    "touch.arch.lower": "Lower arch",
    "touch.arch.both": "Both",
    "chart.hint.touch": "Tap a tooth to select it. Long-press for more options.",
    "warn.endoOnMissing": "Root treatment not possible on missing/implant tooth",
    "warn.fillingOnMissing": "Filling not possible on missing tooth",
    "warn.crownReplaceNoCrown": "Crown replacement flag set without a crown",
    "warn.cariesOnMissing": "Caries not possible on missing tooth",
    "warn.pillarNoCrown": "Bridge pillar flag set without crown material",
    "readOnly.label": "Read-only",
    "note.title": "Note",
    "note.save": "Save",
    "note.delete": "Delete",
    "note.placeholder": "Add a note..."
  },
  de: {
    "app.title": "React Odontogram Editor Modul",
    "app.subtitle": "W\xE4hle einen Zahn im Odontogramm und stelle dann die Ebenen ein.",
    "topbar.exportStatus": "Status exportieren",
    "topbar.importStatus": "Status importieren",
    "chart.title": "Zahnstatus",
    "chart.hint": "Klicke einen Zahn an. F\xFCr Mehrfachauswahl CMD/CTRL + Klick verwenden.",
    "chart.actions.occlusal": "Okklusionsansicht anzeigen",
    "chart.actions.wisdom": "Sichtbarkeit der Weisheitsz\xE4hne",
    "chart.actions.bone": "Knochen anzeigen",
    "chart.actions.pulp": "Pulpa anzeigen",
    "chart.actions.clearSelection": "Auswahl l\xF6schen",
    "chart.aria.toothGrid": "Zahngitter",
    "panel.controls": "Steuerung",
    "panel.clearSelection": "Auswahl l\xF6schen",
    "panel.toggleControls": "Steuerung",
    "panel.activeTooth": "Aktiver Zahn",
    "panel.selectActions.all": "Alle",
    "panel.selectActions.present": "Z\xE4hne",
    "panel.selectActions.permanent": "Bleibend",
    "panel.selectActions.milk": "Milchz\xE4hne",
    "panel.selectActions.implants": "Implantate",
    "panel.selectActions.missing": "Fehlend",
    "panel.selectActions.upper": "Oberkiefer",
    "panel.selectActions.upperFront": "Oberkiefer Front 6",
    "panel.selectActions.upperMolar": "Oberkiefer Molaren",
    "panel.selectActions.lower": "Unterkiefer",
    "panel.selectActions.lowerFront": "Unterkiefer Front 6",
    "panel.selectActions.lowerMolar": "Unterkiefer Molaren",
    "status.title": "Status",
    "status.resetAll": "Mund zur\xFCcksetzen",
    "status.primaryDentition": "Milchgebiss",
    "status.mixedDentition": "Wechselgebiss",
    "status.edentulous": "Zahnlos",
    "status.extraLabel": "Hinzuf\xFCgen:",
    "status.extraApply": "OK",
    "tooth.title": "Zahndetails",
    "tooth.reset": "Zur\xFCcksetzen",
    "tooth.resetTitle": "Zahn auf Standard zur\xFCcksetzen",
    "tooth.baseLabel": "Basis",
    "tooth.bridgeLabel": "Prothese",
    "tooth.extractionWound": "frische Extraktionswunde",
    "tooth.crownLabel": "Krone",
    "tooth.broken.mesial": "mesial",
    "tooth.broken.incisal": "inzisal",
    "tooth.broken.distal": "distal",
    "tooth.contact.mesialMissing": "mesialer Kontakt fehlt",
    "tooth.contact.distalMissing": "distaler Kontakt fehlt",
    "tooth.bruxism.edgeWear": "Inzisalabrieb",
    "tooth.bruxism.neckWear": "Zervikaler Abrieb",
    "tooth.bridgePillar": "Br\xFCckenpfeiler",
    "tooth.extractionPlan": "Entfernen geplant",
    "tooth.crownReplace": "Kronenwechsel",
    "tooth.crownNeeded": "Krone erforderlich",
    "tooth.missingClosed": "Geschlossene L\xFCcke",
    "caries.title": "Karies",
    "caries.hint": "Kariesfl\xE4chen ausw\xE4hlen",
    "filling.title": "F\xFCllungen und Konservierung",
    "filling.typeLabel": "Typ",
    "filling.fissureSealing": "Fissurenversiegelung",
    "endo.title": "Wurzel",
    "endo.hint": "Wurzelstatus ausw\xE4hlen",
    "endo.pulpitis": "Pulpitis",
    "endo.resection": "Resezierter Zahn",
    "endo.parapulpalPin": "Parapulpaler Stift",
    "inflammation.title": "Parodontium und Entz\xFCndungen",
    "inflammation.mobilityLabel": "Mobilit\xE4t",
    "language.label": "Sprache",
    "language.hu": "\u{1F1ED}\u{1F1FA} Ungarisch",
    "language.en": "\u{1F1EC}\u{1F1E7} Englisch",
    "language.de": "\u{1F1E9}\u{1F1EA} Deutsch",
    "language.es": "\u{1F1EA}\u{1F1F8} Spanisch",
    "language.it": "\u{1F1EE}\u{1F1F9} Italienisch",
    "language.sk": "\u{1F1F8}\u{1F1F0} Slowakisch",
    "language.pl": "\u{1F1F5}\u{1F1F1} Polnisch",
    "language.ru": "\u{1F1F7}\u{1F1FA} Russisch",
    "numbering.label": "Nummerierung",
    "numbering.fdi": "FDI - ISO 3950",
    "numbering.universal": "Universal - USA",
    "numbering.palmer": "Zsigmondy-Palmer",
    "theme.light": "Hellmodus",
    "theme.dark": "Dunkelmodus",
    "selection.none": "\u2014",
    "selection.count": "{{count}} Z\xE4hne",
    "toothSelect.none": "Fehlender Zahn",
    "toothSelect.permanent": "Bleibender Zahn",
    "toothSelect.milk": "Milchzahn",
    "toothSelect.implant": "Implantat",
    "toothSelect.crownPrep": "F\xFCr Krone pr\xE4pariert",
    "toothSelect.underGum": "Subgingivaler Zahn",
    "endo.option.none": "Gesunde Wurzel",
    "endo.option.medicalFilling": "Medikament\xF6se Wurzelf\xFCllung",
    "endo.option.filling": "Wurzelf\xFCllung",
    "endo.option.incompleteFilling": "Inkomplette Wurzelf\xFCllung",
    "endo.option.glassPin": "Wurzelf\xFCllung mit Glasfaserstift",
    "endo.option.metalPin": "Wurzelf\xFCllung mit Metallstift",
    "filling.option.none": "Keine F\xFCllung",
    "filling.option.amalgam": "Amalgamf\xFCllung",
    "filling.option.composite": "Kompositf\xFCllung",
    "filling.option.gic": "Glasionomerf\xFCllung",
    "filling.option.temporary": "Provisorische F\xFCllung",
    "crown.option.noneImplant": "Keine",
    "crown.option.healingAbutment": "Heilabutment",
    "crown.option.zircon": "Zirkonkrone",
    "crown.option.metal": "Metallkeramikkrone",
    "crown.option.temporary": "Provisorische Krone",
    "crown.option.locator": "Locator",
    "crown.option.locatorProsthesis": "Locator + Prothesenzahn",
    "crown.option.bar": "Stegimplantat",
    "crown.option.barProsthesis": "Steg + Prothesenzahn",
    "crown.option.full": "Vollkrone",
    "crown.option.broken": "Gebrochene Krone",
    "crown.option.radix": "Radix",
    "crown.option.emax": "Presskeramik-Inlay",
    "crown.option.telescope": "Teleskopkrone",
    "bridge.option.none": "Keine",
    "bridge.option.removable": "Herausnehmbare Prothese",
    "bridge.option.zircon": "Zirkonbr\xFCckenglied",
    "bridge.option.metal": "Metallkeramik-Br\xFCckenglied",
    "bridge.option.temporary": "Provisorisches Br\xFCckenglied",
    "bridge.option.bar": "Steg\xFCberbr\xFCckung",
    "bridge.option.barProsthesis": "Steg + Prothesenzahn",
    "mobility.none": "Keine",
    "mobility.m1": "Grad 1",
    "mobility.m2": "Grad 2",
    "mobility.m3": "Grad 3",
    "mods.parodontal": "Parodontale Entz\xFCndung",
    "mods.periimplantitis": "Periimplantitis",
    "mods.periodontalInflammation": "Parodontale Entz\xFCndung",
    "mods.periapicalInflammation": "Periapikale Entz\xFCndung",
    "surface.mesial": "mesial",
    "surface.distal": "distal",
    "surface.buccal": "bukkal",
    "surface.lingualPalatal": "lingual/palatal",
    "surface.occlusal": "okklusal",
    "surface.subcrown": "subkronal",
    "actions.expand": "{{label}} \xF6ffnen",
    "actions.collapse": "{{label}} einklappen",
    "debug.numbering.title": "Nummerierungs-Debug (FDI / Universal / Palmer)",
    "statusExtras.upper12_22Zircon": "Oberer 12-22 Zirkon",
    "statusExtras.upper13_23Zircon": "Oberer 13-23 Zirkon",
    "statusExtras.upper16_26Zircon": "Oberer 16-26 Zirkon",
    "statusExtras.upperFullZircon": "Oberer Zirkon-Rundbr\xFCcke",
    "statusExtras.upper12_22Metal": "Oberer 12-22 Metallkeramik",
    "statusExtras.upper13_23Metal": "Oberer 13-23 Metallkeramik",
    "statusExtras.upper16_26Metal": "Oberer 16-26 Metallkeramik",
    "statusExtras.upperFullMetal": "Oberer Metallkeramik-Rundbr\xFCcke",
    "statusExtras.upperPartialRemovable": "Obere Teilprothese",
    "statusExtras.upperFullRemovable": "Obere Totalprothese",
    "statusExtras.upperBarDenture": "Obere Stegprothese",
    "statusExtras.lower42_32Zircon": "Unterer 42-32 Zirkon",
    "statusExtras.lower43_33Zircon": "Unterer 43-33 Zirkon",
    "statusExtras.lower46_36Zircon": "Unterer 46-36 Zirkon",
    "statusExtras.lowerFullZircon": "Untere Zirkon-Rundbr\xFCcke",
    "statusExtras.lower42_32Metal": "Unterer 42-32 Metallkeramik",
    "statusExtras.lower43_33Metal": "Unterer 43-33 Metallkeramik",
    "statusExtras.lower46_36Metal": "Unterer 46-36 Metallkeramik",
    "statusExtras.lowerFullMetal": "Untere Metallkeramik-Rundbr\xFCcke",
    "statusExtras.lowerPartialRemovable": "Untere Teilprothese",
    "statusExtras.lowerFullRemovable": "Untere Totalprothese",
    "statusExtras.lowerBarDenture": "Untere Stegprothese",
    "touch.zoom.title": "Zahn #{{tooth}}",
    "touch.zoom.select": "Ausw\xE4hlen",
    "touch.zoom.deselect": "Abw\xE4hlen",
    "touch.zoom.info": "Details",
    "touch.zoom.close": "Schlie\xDFen",
    "touch.ctx.select": "Ausw\xE4hlen",
    "touch.ctx.multiSelect": "Zur Auswahl hinzuf\xFCgen",
    "touch.ctx.deselect": "Abw\xE4hlen",
    "touch.ctx.reset": "Zur\xFCcksetzen",
    "touch.arch.upper": "Oberkiefer",
    "touch.arch.lower": "Unterkiefer",
    "touch.arch.both": "Beide",
    "chart.hint.touch": "Tippen Sie auf einen Zahn. Langes Dr\xFCcken f\xFCr weitere Optionen.",
    "warn.endoOnMissing": "Wurzelbehandlung bei fehlendem/Implantat-Zahn nicht m\xF6glich",
    "warn.fillingOnMissing": "F\xFCllung bei fehlendem Zahn nicht m\xF6glich",
    "warn.crownReplaceNoCrown": "Kronenwechsel ohne Krone markiert",
    "warn.cariesOnMissing": "Karies bei fehlendem Zahn nicht m\xF6glich",
    "warn.pillarNoCrown": "Br\xFCckenpfeiler ohne Kronenmaterial markiert",
    "readOnly.label": "Schreibgesch\xFCtzt",
    "note.title": "Notiz",
    "note.save": "Speichern",
    "note.delete": "L\xF6schen",
    "note.placeholder": "Notiz hinzuf\xFCgen..."
  },
  es: {
    "app.title": "M\xF3dulo Editor de Odontograma React",
    "app.subtitle": "Selecciona un diente en el odontograma y configura las capas.",
    "topbar.exportStatus": "Exportar estado",
    "topbar.importStatus": "Importar estado",
    "chart.title": "Carta dental",
    "chart.hint": "Haz clic en un diente. Para selecci\xF3n m\xFAltiple, usa CMD/CTRL + clic.",
    "chart.actions.occlusal": "Visibilidad vista oclusal",
    "chart.actions.wisdom": "Visibilidad muelas del juicio",
    "chart.actions.bone": "Visibilidad del hueso",
    "chart.actions.pulp": "Visibilidad de la pulpa",
    "chart.actions.clearSelection": "Borrar selecci\xF3n",
    "chart.aria.toothGrid": "Cuadr\xEDcula dental",
    "panel.controls": "Controles",
    "panel.clearSelection": "Borrar selecci\xF3n",
    "panel.toggleControls": "Controles",
    "panel.activeTooth": "Diente activo",
    "panel.selectActions.all": "Todos",
    "panel.selectActions.present": "Dientes",
    "panel.selectActions.permanent": "Permanentes",
    "panel.selectActions.milk": "Primarios",
    "panel.selectActions.implants": "Implantes",
    "panel.selectActions.missing": "Ausentes",
    "panel.selectActions.upper": "Superior",
    "panel.selectActions.upperFront": "Superior 6 frontales",
    "panel.selectActions.upperMolar": "Molares superiores",
    "panel.selectActions.lower": "Inferior",
    "panel.selectActions.lowerFront": "Inferior 6 frontales",
    "panel.selectActions.lowerMolar": "Molares inferiores",
    "status.title": "Estados",
    "status.resetAll": "Restablecer boca",
    "status.primaryDentition": "Dentici\xF3n primaria",
    "status.mixedDentition": "Dentici\xF3n mixta",
    "status.edentulous": "Ed\xE9ntulo",
    "status.extraLabel": "A\xF1adir:",
    "status.extraApply": "OK",
    "tooth.title": "Detalles del diente",
    "tooth.reset": "Restablecer",
    "tooth.resetTitle": "Restablecer diente a predeterminado",
    "tooth.baseLabel": "Base",
    "tooth.bridgeLabel": "Pr\xF3tesis",
    "tooth.extractionWound": "herida de extracci\xF3n reciente",
    "tooth.crownLabel": "Corona",
    "tooth.broken.mesial": "mesial",
    "tooth.broken.incisal": "incisal",
    "tooth.broken.distal": "distal",
    "tooth.contact.mesialMissing": "contacto mesial ausente",
    "tooth.contact.distalMissing": "contacto distal ausente",
    "tooth.bruxism.edgeWear": "Desgaste incisal",
    "tooth.bruxism.neckWear": "Desgaste cervical",
    "tooth.bridgePillar": "Pilar de puente",
    "tooth.extractionPlan": "Extracci\xF3n planificada",
    "tooth.crownReplace": "Reemplazo de corona",
    "tooth.crownNeeded": "Corona necesaria",
    "tooth.missingClosed": "Espacio cerrado",
    "caries.title": "Caries",
    "caries.hint": "Selecciona las superficies de caries",
    "filling.title": "Obturaciones y restauraci\xF3n",
    "filling.typeLabel": "Tipo",
    "filling.fissureSealing": "Sellado de fisuras",
    "endo.title": "Ra\xEDz",
    "endo.hint": "Selecciona el estado de la ra\xEDz",
    "endo.pulpitis": "Pulpitis",
    "endo.resection": "Diente resecado",
    "endo.parapulpalPin": "Pin parapulpar",
    "inflammation.title": "Periodonto e inflamaciones",
    "inflammation.mobilityLabel": "Movilidad",
    "language.label": "Idioma",
    "language.hu": "\u{1F1ED}\u{1F1FA} H\xFAngaro",
    "language.en": "\u{1F1EC}\u{1F1E7} Ingl\xE9s",
    "language.de": "\u{1F1E9}\u{1F1EA} Alem\xE1n",
    "language.es": "\u{1F1EA}\u{1F1F8} Espa\xF1ol",
    "language.it": "\u{1F1EE}\u{1F1F9} Italiano",
    "language.sk": "\u{1F1F8}\u{1F1F0} Eslovaco",
    "language.pl": "\u{1F1F5}\u{1F1F1} Polaco",
    "language.ru": "\u{1F1F7}\u{1F1FA} Ruso",
    "numbering.label": "Numeraci\xF3n",
    "numbering.fdi": "FDI - ISO 3950",
    "numbering.universal": "Universal - EE.UU.",
    "numbering.palmer": "Zsigmondy-Palmer",
    "theme.light": "Modo claro",
    "theme.dark": "Modo oscuro",
    "selection.none": "\u2014",
    "selection.count": "{{count}} dientes",
    "toothSelect.none": "Diente ausente",
    "toothSelect.permanent": "Diente permanente",
    "toothSelect.milk": "Diente primario",
    "toothSelect.implant": "Implante",
    "toothSelect.crownPrep": "Preparado para corona",
    "toothSelect.underGum": "Diente subgingival",
    "endo.option.none": "Ra\xEDz sana",
    "endo.option.medicalFilling": "Obturaci\xF3n radicular medicinal",
    "endo.option.filling": "Obturaci\xF3n radicular",
    "endo.option.incompleteFilling": "Obturaci\xF3n radicular incompleta",
    "endo.option.glassPin": "Obturaci\xF3n radicular con poste de fibra de vidrio",
    "endo.option.metalPin": "Obturaci\xF3n radicular con poste met\xE1lico",
    "filling.option.none": "Sin obturaci\xF3n",
    "filling.option.amalgam": "Obturaci\xF3n de amalgama",
    "filling.option.composite": "Obturaci\xF3n de composite",
    "filling.option.gic": "Obturaci\xF3n de ion\xF3mero de vidrio",
    "filling.option.temporary": "Obturaci\xF3n temporal",
    "crown.option.noneImplant": "Ninguno",
    "crown.option.healingAbutment": "Pilar de cicatrizaci\xF3n",
    "crown.option.zircon": "Corona de circonio",
    "crown.option.metal": "Corona metalcer\xE1mica",
    "crown.option.temporary": "Corona provisional",
    "crown.option.locator": "Localizador",
    "crown.option.locatorProsthesis": "Localizador + diente prot\xE9sico",
    "crown.option.bar": "Implante con barra",
    "crown.option.barProsthesis": "Barra + diente prot\xE9sico",
    "crown.option.full": "Corona completa",
    "crown.option.broken": "Corona fracturada",
    "crown.option.radix": "Radix",
    "crown.option.emax": "Incrustaci\xF3n de cer\xE1mica prensada",
    "crown.option.telescope": "Corona telesc\xF3pica",
    "bridge.option.none": "Ninguno",
    "bridge.option.removable": "Pr\xF3tesis removible",
    "bridge.option.zircon": "P\xF3ntico de circonio",
    "bridge.option.metal": "P\xF3ntico metalcer\xE1mico",
    "bridge.option.temporary": "P\xF3ntico provisional",
    "bridge.option.bar": "Extensi\xF3n de barra",
    "bridge.option.barProsthesis": "Barra + diente prot\xE9sico",
    "mobility.none": "Ninguno",
    "mobility.m1": "Grado 1",
    "mobility.m2": "Grado 2",
    "mobility.m3": "Grado 3",
    "mods.parodontal": "Inflamaci\xF3n periodontal",
    "mods.periimplantitis": "Periimplantitis",
    "mods.periodontalInflammation": "Inflamaci\xF3n periodontal",
    "mods.periapicalInflammation": "Inflamaci\xF3n periapical",
    "surface.mesial": "mesial",
    "surface.distal": "distal",
    "surface.buccal": "bucal",
    "surface.lingualPalatal": "lingual/palatino",
    "surface.occlusal": "oclusal",
    "surface.subcrown": "subcoronal",
    "actions.expand": "Abrir {{label}}",
    "actions.collapse": "Cerrar {{label}}",
    "debug.numbering.title": "Depuraci\xF3n de numeraci\xF3n (FDI / Universal / Palmer)",
    "statusExtras.upper12_22Zircon": "Superior 12-22 circonio",
    "statusExtras.upper13_23Zircon": "Superior 13-23 circonio",
    "statusExtras.upper16_26Zircon": "Superior 16-26 circonio",
    "statusExtras.upperFullZircon": "Puente completo superior de circonio",
    "statusExtras.upper12_22Metal": "Superior 12-22 metalcer\xE1mica",
    "statusExtras.upper13_23Metal": "Superior 13-23 metalcer\xE1mica",
    "statusExtras.upper16_26Metal": "Superior 16-26 metalcer\xE1mica",
    "statusExtras.upperFullMetal": "Puente completo superior metalcer\xE1mico",
    "statusExtras.upperPartialRemovable": "Superior parcial removible",
    "statusExtras.upperFullRemovable": "Superior completa removible",
    "statusExtras.upperBarDenture": "Pr\xF3tesis superior con barra",
    "statusExtras.lower42_32Zircon": "Inferior 42-32 circonio",
    "statusExtras.lower43_33Zircon": "Inferior 43-33 circonio",
    "statusExtras.lower46_36Zircon": "Inferior 46-36 circonio",
    "statusExtras.lowerFullZircon": "Puente completo inferior de circonio",
    "statusExtras.lower42_32Metal": "Inferior 42-32 metalcer\xE1mica",
    "statusExtras.lower43_33Metal": "Inferior 43-33 metalcer\xE1mica",
    "statusExtras.lower46_36Metal": "Inferior 46-36 metalcer\xE1mica",
    "statusExtras.lowerFullMetal": "Puente completo inferior metalcer\xE1mico",
    "statusExtras.lowerPartialRemovable": "Inferior parcial removible",
    "statusExtras.lowerFullRemovable": "Inferior completa removible",
    "statusExtras.lowerBarDenture": "Pr\xF3tesis inferior con barra",
    "touch.zoom.title": "Diente #{{tooth}}",
    "touch.zoom.select": "Seleccionar",
    "touch.zoom.deselect": "Deseleccionar",
    "touch.zoom.info": "Detalles",
    "touch.zoom.close": "Cerrar",
    "touch.ctx.select": "Seleccionar",
    "touch.ctx.multiSelect": "A\xF1adir a la selecci\xF3n",
    "touch.ctx.deselect": "Deseleccionar",
    "touch.ctx.reset": "Restablecer",
    "touch.arch.upper": "Arcada superior",
    "touch.arch.lower": "Arcada inferior",
    "touch.arch.both": "Ambas",
    "chart.hint.touch": "Toca un diente para seleccionarlo. Mant\xE9n pulsado para m\xE1s opciones.",
    "warn.endoOnMissing": "Tratamiento radicular no posible en diente ausente/implante",
    "warn.fillingOnMissing": "Obturaci\xF3n no posible en diente ausente",
    "warn.crownReplaceNoCrown": "Reemplazo de corona marcado sin corona",
    "warn.cariesOnMissing": "Caries no posible en diente ausente",
    "warn.pillarNoCrown": "Pilar de puente marcado sin material de corona",
    "readOnly.label": "Solo lectura",
    "note.title": "Nota",
    "note.save": "Guardar",
    "note.delete": "Eliminar",
    "note.placeholder": "A\xF1adir una nota..."
  },
  it: {
    "app.title": "Modulo Editor Odontogramma React",
    "app.subtitle": "Seleziona un dente sull'odontogramma, poi configura i livelli.",
    "topbar.exportStatus": "Esporta stato",
    "topbar.importStatus": "Importa stato",
    "chart.title": "Cartella dentale",
    "chart.hint": "Clicca un dente. Per selezione multipla, usa CMD/CTRL + clic.",
    "chart.actions.occlusal": "Visibilit\xE0 vista occlusale",
    "chart.actions.wisdom": "Visibilit\xE0 denti del giudizio",
    "chart.actions.bone": "Visibilit\xE0 osso",
    "chart.actions.pulp": "Visibilit\xE0 polpa",
    "chart.actions.clearSelection": "Cancella selezione",
    "chart.aria.toothGrid": "Griglia dentale",
    "panel.controls": "Controlli",
    "panel.clearSelection": "Cancella selezione",
    "panel.toggleControls": "Controlli",
    "panel.activeTooth": "Dente attivo",
    "panel.selectActions.all": "Tutti",
    "panel.selectActions.present": "Denti",
    "panel.selectActions.permanent": "Permanenti",
    "panel.selectActions.milk": "Primari",
    "panel.selectActions.implants": "Impianti",
    "panel.selectActions.missing": "Mancanti",
    "panel.selectActions.upper": "Superiore",
    "panel.selectActions.upperFront": "Superiore 6 frontali",
    "panel.selectActions.upperMolar": "Molari superiori",
    "panel.selectActions.lower": "Inferiore",
    "panel.selectActions.lowerFront": "Inferiore 6 frontali",
    "panel.selectActions.lowerMolar": "Molari inferiori",
    "status.title": "Stati",
    "status.resetAll": "Ripristina bocca",
    "status.primaryDentition": "Dentizione primaria",
    "status.mixedDentition": "Dentizione mista",
    "status.edentulous": "Edentulo",
    "status.extraLabel": "Aggiungi:",
    "status.extraApply": "OK",
    "tooth.title": "Dettagli dente",
    "tooth.reset": "Ripristina",
    "tooth.resetTitle": "Ripristina dente ai valori predefiniti",
    "tooth.baseLabel": "Base",
    "tooth.bridgeLabel": "Protesi",
    "tooth.extractionWound": "ferita da estrazione recente",
    "tooth.crownLabel": "Corona",
    "tooth.broken.mesial": "mesiale",
    "tooth.broken.incisal": "incisale",
    "tooth.broken.distal": "distale",
    "tooth.contact.mesialMissing": "contatto mesiale mancante",
    "tooth.contact.distalMissing": "contatto distale mancante",
    "tooth.bruxism.edgeWear": "Usura incisale",
    "tooth.bruxism.neckWear": "Usura cervicale",
    "tooth.bridgePillar": "Pilastro di ponte",
    "tooth.extractionPlan": "Estrazione pianificata",
    "tooth.crownReplace": "Sostituzione corona",
    "tooth.crownNeeded": "Corona necessaria",
    "tooth.missingClosed": "Spazio chiuso",
    "caries.title": "Carie",
    "caries.hint": "Seleziona le superfici cariose",
    "filling.title": "Otturazioni e restauri",
    "filling.typeLabel": "Tipo",
    "filling.fissureSealing": "Sigillatura dei solchi",
    "endo.title": "Radice",
    "endo.hint": "Seleziona lo stato della radice",
    "endo.pulpitis": "Pulpite",
    "endo.resection": "Dente resecato",
    "endo.parapulpalPin": "Perno parapulpale",
    "inflammation.title": "Parodonto e infiammazioni",
    "inflammation.mobilityLabel": "Mobilit\xE0",
    "language.label": "Lingua",
    "language.hu": "\u{1F1ED}\u{1F1FA} Ungherese",
    "language.en": "\u{1F1EC}\u{1F1E7} Inglese",
    "language.de": "\u{1F1E9}\u{1F1EA} Tedesco",
    "language.es": "\u{1F1EA}\u{1F1F8} Spagnolo",
    "language.it": "\u{1F1EE}\u{1F1F9} Italiano",
    "language.sk": "\u{1F1F8}\u{1F1F0} Slovacco",
    "language.pl": "\u{1F1F5}\u{1F1F1} Polacco",
    "language.ru": "\u{1F1F7}\u{1F1FA} Russo",
    "numbering.label": "Numerazione",
    "numbering.fdi": "FDI - ISO 3950",
    "numbering.universal": "Universal - USA",
    "numbering.palmer": "Zsigmondy-Palmer",
    "theme.light": "Modalit\xE0 chiara",
    "theme.dark": "Modalit\xE0 scura",
    "selection.none": "\u2014",
    "selection.count": "{{count}} denti",
    "toothSelect.none": "Dente mancante",
    "toothSelect.permanent": "Dente permanente",
    "toothSelect.milk": "Dente primario",
    "toothSelect.implant": "Impianto",
    "toothSelect.crownPrep": "Preparato per corona",
    "toothSelect.underGum": "Dente sottogengivale",
    "endo.option.none": "Radice sana",
    "endo.option.medicalFilling": "Otturazione radicolare medicinale",
    "endo.option.filling": "Otturazione radicolare",
    "endo.option.incompleteFilling": "Otturazione radicolare incompleta",
    "endo.option.glassPin": "Otturazione radicolare con perno in fibra di vetro",
    "endo.option.metalPin": "Otturazione radicolare con perno metallico",
    "filling.option.none": "Nessuna otturazione",
    "filling.option.amalgam": "Otturazione in amalgama",
    "filling.option.composite": "Otturazione in composito",
    "filling.option.gic": "Otturazione in vetroionomero",
    "filling.option.temporary": "Otturazione provvisoria",
    "crown.option.noneImplant": "Nessuno",
    "crown.option.healingAbutment": "Abutment di guarigione",
    "crown.option.zircon": "Corona in zirconio",
    "crown.option.metal": "Corona in metalloceramica",
    "crown.option.temporary": "Corona provvisoria",
    "crown.option.locator": "Locator",
    "crown.option.locatorProsthesis": "Locator + dente protesico",
    "crown.option.bar": "Impianto con barra",
    "crown.option.barProsthesis": "Barra + dente protesico",
    "crown.option.full": "Corona completa",
    "crown.option.broken": "Corona fratturata",
    "crown.option.radix": "Radix",
    "crown.option.emax": "Intarsio in ceramica pressata",
    "crown.option.telescope": "Corona telescopica",
    "bridge.option.none": "Nessuno",
    "bridge.option.removable": "Protesi rimovibile",
    "bridge.option.zircon": "Elemento di ponte in zirconio",
    "bridge.option.metal": "Elemento di ponte in metalloceramica",
    "bridge.option.temporary": "Elemento di ponte provvisorio",
    "bridge.option.bar": "Travata a barra",
    "bridge.option.barProsthesis": "Barra + dente protesico",
    "mobility.none": "Nessuno",
    "mobility.m1": "Grado 1",
    "mobility.m2": "Grado 2",
    "mobility.m3": "Grado 3",
    "mods.parodontal": "Infiammazione parodontale",
    "mods.periimplantitis": "Perimplantite",
    "mods.periodontalInflammation": "Infiammazione parodontale",
    "mods.periapicalInflammation": "Infiammazione periapicale",
    "surface.mesial": "mesiale",
    "surface.distal": "distale",
    "surface.buccal": "buccale",
    "surface.lingualPalatal": "linguale/palatale",
    "surface.occlusal": "occlusale",
    "surface.subcrown": "sottocoronale",
    "actions.expand": "Apri {{label}}",
    "actions.collapse": "Chiudi {{label}}",
    "debug.numbering.title": "Debug numerazione (FDI / Universal / Palmer)",
    "statusExtras.upper12_22Zircon": "Superiore 12-22 zirconio",
    "statusExtras.upper13_23Zircon": "Superiore 13-23 zirconio",
    "statusExtras.upper16_26Zircon": "Superiore 16-26 zirconio",
    "statusExtras.upperFullZircon": "Ponte completo superiore in zirconio",
    "statusExtras.upper12_22Metal": "Superiore 12-22 metalloceramica",
    "statusExtras.upper13_23Metal": "Superiore 13-23 metalloceramica",
    "statusExtras.upper16_26Metal": "Superiore 16-26 metalloceramica",
    "statusExtras.upperFullMetal": "Ponte completo superiore in metalloceramica",
    "statusExtras.upperPartialRemovable": "Superiore parziale rimovibile",
    "statusExtras.upperFullRemovable": "Superiore totale rimovibile",
    "statusExtras.upperBarDenture": "Protesi superiore con barra",
    "statusExtras.lower42_32Zircon": "Inferiore 42-32 zirconio",
    "statusExtras.lower43_33Zircon": "Inferiore 43-33 zirconio",
    "statusExtras.lower46_36Zircon": "Inferiore 46-36 zirconio",
    "statusExtras.lowerFullZircon": "Ponte completo inferiore in zirconio",
    "statusExtras.lower42_32Metal": "Inferiore 42-32 metalloceramica",
    "statusExtras.lower43_33Metal": "Inferiore 43-33 metalloceramica",
    "statusExtras.lower46_36Metal": "Inferiore 46-36 metalloceramica",
    "statusExtras.lowerFullMetal": "Ponte completo inferiore in metalloceramica",
    "statusExtras.lowerPartialRemovable": "Inferiore parziale rimovibile",
    "statusExtras.lowerFullRemovable": "Inferiore totale rimovibile",
    "statusExtras.lowerBarDenture": "Protesi inferiore con barra",
    "touch.zoom.title": "Dente #{{tooth}}",
    "touch.zoom.select": "Seleziona",
    "touch.zoom.deselect": "Deseleziona",
    "touch.zoom.info": "Dettagli",
    "touch.zoom.close": "Chiudi",
    "touch.ctx.select": "Seleziona",
    "touch.ctx.multiSelect": "Aggiungi alla selezione",
    "touch.ctx.deselect": "Deseleziona",
    "touch.ctx.reset": "Ripristina",
    "touch.arch.upper": "Arcata superiore",
    "touch.arch.lower": "Arcata inferiore",
    "touch.arch.both": "Entrambe",
    "chart.hint.touch": "Tocca un dente per selezionarlo. Premi a lungo per altre opzioni.",
    "warn.endoOnMissing": "Trattamento radicolare non possibile su dente mancante/impianto",
    "warn.fillingOnMissing": "Otturazione non possibile su dente mancante",
    "warn.crownReplaceNoCrown": "Sostituzione corona segnata senza corona",
    "warn.cariesOnMissing": "Carie non possibile su dente mancante",
    "warn.pillarNoCrown": "Pilastro del ponte segnato senza materiale corona",
    "readOnly.label": "Sola lettura",
    "note.title": "Nota",
    "note.save": "Salva",
    "note.delete": "Elimina",
    "note.placeholder": "Aggiungi una nota..."
  },
  sk: {
    "app.title": "React Odontogram Editor Modul",
    "app.subtitle": "Vyber zub na odontograme a nastav vrstvy.",
    "topbar.exportStatus": "Exportova\u0165 stav",
    "topbar.importStatus": "Importova\u0165 stav",
    "chart.title": "Zubn\xFD status",
    "chart.hint": "Klikni na zub. Pre viacn\xE1sobn\xFD v\xFDber pou\u017Ei CMD/CTRL + klik.",
    "chart.actions.occlusal": "Vidite\u013Enos\u0165 okl\xFAzneho poh\u013Eadu",
    "chart.actions.wisdom": "Vidite\u013Enos\u0165 zubov m\xFAdrosti",
    "chart.actions.bone": "Vidite\u013Enos\u0165 kosti",
    "chart.actions.pulp": "Vidite\u013Enos\u0165 drene",
    "chart.actions.clearSelection": "Zru\u0161i\u0165 v\xFDber",
    "chart.aria.toothGrid": "Zubn\xE1 mrie\u017Eka",
    "panel.controls": "Ovl\xE1danie",
    "panel.clearSelection": "Zru\u0161i\u0165 v\xFDber",
    "panel.toggleControls": "Ovl\xE1danie",
    "panel.activeTooth": "Akt\xEDvny zub",
    "panel.selectActions.all": "V\u0161etky",
    "panel.selectActions.present": "Zuby",
    "panel.selectActions.permanent": "Trval\xE9",
    "panel.selectActions.milk": "Mlie\u010Dne",
    "panel.selectActions.implants": "Implant\xE1ty",
    "panel.selectActions.missing": "Ch\xFDbaj\xFAce",
    "panel.selectActions.upper": "Horn\xE9",
    "panel.selectActions.upperFront": "Horn\xE9 6 predn\xE9",
    "panel.selectActions.upperMolar": "Horn\xE9 mol\xE1re",
    "panel.selectActions.lower": "Doln\xE9",
    "panel.selectActions.lowerFront": "Doln\xE9 6 predn\xE9",
    "panel.selectActions.lowerMolar": "Doln\xE9 mol\xE1re",
    "status.title": "Stavy",
    "status.resetAll": "Obnovi\u0165 \xFAsta",
    "status.primaryDentition": "Mlie\u010Dny chrup",
    "status.mixedDentition": "Zmie\u0161an\xFD chrup",
    "status.edentulous": "Bezzub\xFD",
    "status.extraLabel": "Prida\u0165:",
    "status.extraApply": "OK",
    "tooth.title": "Detaily zuba",
    "tooth.reset": "Obnovi\u0165",
    "tooth.resetTitle": "Obnovi\u0165 zub na predvolen\xE9",
    "tooth.baseLabel": "Z\xE1klad",
    "tooth.bridgeLabel": "Prot\xE9za",
    "tooth.extractionWound": "\u010Derstv\xE1 extrak\u010Dn\xE1 rana",
    "tooth.crownLabel": "Korunka",
    "tooth.broken.mesial": "mezi\xE1lne",
    "tooth.broken.incisal": "inciz\xE1lne",
    "tooth.broken.distal": "dist\xE1lne",
    "tooth.contact.mesialMissing": "ch\xFDbaj\xFAci mezi\xE1lny kontakt",
    "tooth.contact.distalMissing": "ch\xFDbaj\xFAci dist\xE1lny kontakt",
    "tooth.bruxism.edgeWear": "Inciz\xE1lne opotrebenie",
    "tooth.bruxism.neckWear": "Cervik\xE1lne opotrebenie",
    "tooth.bridgePillar": "Pilier most\xEDka",
    "tooth.extractionPlan": "Pl\xE1novan\xE1 extrakcia",
    "tooth.crownReplace": "V\xFDmena korunky",
    "tooth.crownNeeded": "Korunka potrebn\xE1",
    "tooth.missingClosed": "Uzavret\xE1 medzera",
    "caries.title": "Kaz",
    "caries.hint": "Vyber povrchy kazu",
    "filling.title": "V\xFDplne a re\u0161taur\xE1cie",
    "filling.typeLabel": "Typ",
    "filling.fissureSealing": "Zape\u010Datenie fis\xFAr",
    "endo.title": "Kore\u0148",
    "endo.hint": "Vyber stav kore\u0148a",
    "endo.pulpitis": "Pulpit\xEDda",
    "endo.resection": "Resekovan\xFD zub",
    "endo.parapulpalPin": "Parapulp\xE1lny kol\xEDk",
    "inflammation.title": "Parodont a z\xE1paly",
    "inflammation.mobilityLabel": "Mobilita",
    "language.label": "Jazyk",
    "language.hu": "\u{1F1ED}\u{1F1FA} Ma\u010Far\u010Dina",
    "language.en": "\u{1F1EC}\u{1F1E7} Angli\u010Dtina",
    "language.de": "\u{1F1E9}\u{1F1EA} Nem\u010Dina",
    "language.es": "\u{1F1EA}\u{1F1F8} \u0160paniel\u010Dina",
    "language.it": "\u{1F1EE}\u{1F1F9} Talian\u010Dina",
    "language.sk": "\u{1F1F8}\u{1F1F0} Sloven\u010Dina",
    "language.pl": "\u{1F1F5}\u{1F1F1} Po\u013E\u0161tina",
    "language.ru": "\u{1F1F7}\u{1F1FA} Ru\u0161tina",
    "numbering.label": "\u010C\xEDslovanie",
    "numbering.fdi": "FDI - ISO 3950",
    "numbering.universal": "Universal - USA",
    "numbering.palmer": "Zsigmondy-Palmer",
    "theme.light": "Svetl\xFD re\u017Eim",
    "theme.dark": "Tmav\xFD re\u017Eim",
    "selection.none": "\u2014",
    "selection.count": "{{count}} zubov",
    "toothSelect.none": "Ch\xFDbaj\xFAci zub",
    "toothSelect.permanent": "Trval\xFD zub",
    "toothSelect.milk": "Mlie\u010Dny zub",
    "toothSelect.implant": "Implant\xE1t",
    "toothSelect.crownPrep": "Preparovan\xFD na korunku",
    "toothSelect.underGum": "Subgingiv\xE1lny zub",
    "endo.option.none": "Zdrav\xFD kore\u0148",
    "endo.option.medicalFilling": "Lie\u010Div\xE1 kore\u0148ov\xE1 v\xFDpl\u0148",
    "endo.option.filling": "Kore\u0148ov\xE1 v\xFDpl\u0148",
    "endo.option.incompleteFilling": "Nekompletn\xE1 kore\u0148ov\xE1 v\xFDpl\u0148",
    "endo.option.glassPin": "Kore\u0148ov\xE1 v\xFDpl\u0148 so sklenen\xFDm kol\xEDkom",
    "endo.option.metalPin": "Kore\u0148ov\xE1 v\xFDpl\u0148 s kovov\xFDm kol\xEDkom",
    "filling.option.none": "\u017Diadna v\xFDpl\u0148",
    "filling.option.amalgam": "Amalg\xE1mov\xE1 v\xFDpl\u0148",
    "filling.option.composite": "Kompozitn\xE1 v\xFDpl\u0148",
    "filling.option.gic": "Skloionom\xE9rna v\xFDpl\u0148",
    "filling.option.temporary": "Do\u010Dasn\xE1 v\xFDpl\u0148",
    "crown.option.noneImplant": "\u017Diadna",
    "crown.option.healingAbutment": "Hojiv\xFD abutment",
    "crown.option.zircon": "Zirk\xF3nov\xE1 korunka",
    "crown.option.metal": "Kovovo-keramick\xE1 korunka",
    "crown.option.temporary": "Do\u010Dasn\xE1 korunka",
    "crown.option.locator": "Lok\xE1tor",
    "crown.option.locatorProsthesis": "Lok\xE1tor + prot\xE9zny zub",
    "crown.option.bar": "Stegov\xFD implant\xE1t",
    "crown.option.barProsthesis": "Steg + prot\xE9zny zub",
    "crown.option.full": "Pln\xE1 korunka",
    "crown.option.broken": "Zlomen\xE1 korunka",
    "crown.option.radix": "Radix",
    "crown.option.emax": "Lisovan\xE1 keramick\xE1 vlo\u017Eka",
    "crown.option.telescope": "Teleskopick\xE1 korunka",
    "bridge.option.none": "\u017Diadny",
    "bridge.option.removable": "Sn\xEDmate\u013En\xE1 prot\xE9za",
    "bridge.option.zircon": "Zirk\xF3nov\xFD most\xEDk",
    "bridge.option.metal": "Kovovo-keramick\xFD most\xEDk",
    "bridge.option.temporary": "Do\u010Dasn\xFD most\xEDk",
    "bridge.option.bar": "Stegov\xE9 premostenie",
    "bridge.option.barProsthesis": "Steg + prot\xE9zny zub",
    "mobility.none": "\u017Diadna",
    "mobility.m1": "Stupe\u0148 1",
    "mobility.m2": "Stupe\u0148 2",
    "mobility.m3": "Stupe\u0148 3",
    "mods.parodontal": "Parodont\xE1lny z\xE1pal",
    "mods.periimplantitis": "Periimplantit\xEDda",
    "mods.periodontalInflammation": "Parodont\xE1lny z\xE1pal",
    "mods.periapicalInflammation": "Periapik\xE1lny z\xE1pal",
    "surface.mesial": "mezi\xE1lne",
    "surface.distal": "dist\xE1lne",
    "surface.buccal": "buk\xE1lne",
    "surface.lingualPalatal": "lingu\xE1lne/palatin\xE1lne",
    "surface.occlusal": "okl\xFAzne",
    "surface.subcrown": "subkoron\xE1lne",
    "actions.expand": "Otvori\u0165 {{label}}",
    "actions.collapse": "Zatvori\u0165 {{label}}",
    "debug.numbering.title": "Debug \u010D\xEDslovania (FDI / Universal / Palmer)",
    "statusExtras.upper12_22Zircon": "Horn\xFD 12-22 zirk\xF3n",
    "statusExtras.upper13_23Zircon": "Horn\xFD 13-23 zirk\xF3n",
    "statusExtras.upper16_26Zircon": "Horn\xFD 16-26 zirk\xF3n",
    "statusExtras.upperFullZircon": "Horn\xFD zirk\xF3nov\xFD kruhov\xFD most\xEDk",
    "statusExtras.upper12_22Metal": "Horn\xFD 12-22 kovovo-keramick\xFD",
    "statusExtras.upper13_23Metal": "Horn\xFD 13-23 kovovo-keramick\xFD",
    "statusExtras.upper16_26Metal": "Horn\xFD 16-26 kovovo-keramick\xFD",
    "statusExtras.upperFullMetal": "Horn\xFD kovovo-keramick\xFD kruhov\xFD most\xEDk",
    "statusExtras.upperPartialRemovable": "Horn\xE1 \u010Diasto\u010Dn\xE1 sn\xEDmate\u013En\xE1",
    "statusExtras.upperFullRemovable": "Horn\xE1 celkov\xE1 sn\xEDmate\u013En\xE1",
    "statusExtras.upperBarDenture": "Horn\xE1 stegov\xE1 prot\xE9za",
    "statusExtras.lower42_32Zircon": "Doln\xFD 42-32 zirk\xF3n",
    "statusExtras.lower43_33Zircon": "Doln\xFD 43-33 zirk\xF3n",
    "statusExtras.lower46_36Zircon": "Doln\xFD 46-36 zirk\xF3n",
    "statusExtras.lowerFullZircon": "Doln\xFD zirk\xF3nov\xFD kruhov\xFD most\xEDk",
    "statusExtras.lower42_32Metal": "Doln\xFD 42-32 kovovo-keramick\xFD",
    "statusExtras.lower43_33Metal": "Doln\xFD 43-33 kovovo-keramick\xFD",
    "statusExtras.lower46_36Metal": "Doln\xFD 46-36 kovovo-keramick\xFD",
    "statusExtras.lowerFullMetal": "Doln\xFD kovovo-keramick\xFD kruhov\xFD most\xEDk",
    "statusExtras.lowerPartialRemovable": "Doln\xE1 \u010Diasto\u010Dn\xE1 sn\xEDmate\u013En\xE1",
    "statusExtras.lowerFullRemovable": "Doln\xE1 celkov\xE1 sn\xEDmate\u013En\xE1",
    "statusExtras.lowerBarDenture": "Doln\xE1 stegov\xE1 prot\xE9za",
    "touch.zoom.title": "Zub #{{tooth}}",
    "touch.zoom.select": "Vybra\u0165",
    "touch.zoom.deselect": "Zru\u0161i\u0165 v\xFDber",
    "touch.zoom.info": "Podrobnosti",
    "touch.zoom.close": "Zavrie\u0165",
    "touch.ctx.select": "Vybra\u0165",
    "touch.ctx.multiSelect": "Prida\u0165 k v\xFDberu",
    "touch.ctx.deselect": "Zru\u0161i\u0165 v\xFDber",
    "touch.ctx.reset": "Obnovi\u0165",
    "touch.arch.upper": "Horn\xFD obl\xFAk",
    "touch.arch.lower": "Doln\xFD obl\xFAk",
    "touch.arch.both": "Oba",
    "chart.hint.touch": "\u0164uknite na zub pre v\xFDber. Dlh\xFDm stla\u010Den\xEDm zobraz\xEDte \u010Fal\u0161ie mo\u017Enosti.",
    "warn.endoOnMissing": "O\u0161etrenie kore\u0148a nie je mo\u017En\xE9 pri ch\xFDbaj\xFAcom/implantovanom zube",
    "warn.fillingOnMissing": "Plomba nie je mo\u017En\xE1 pri ch\xFDbaj\xFAcom zube",
    "warn.crownReplaceNoCrown": "V\xFDmena korunky ozna\u010Den\xE1 bez korunky",
    "warn.cariesOnMissing": "Kaz nie je mo\u017En\xFD pri ch\xFDbaj\xFAcom zube",
    "warn.pillarNoCrown": "Mostov\xFD pilier ozna\u010Den\xFD bez materi\xE1lu korunky",
    "readOnly.label": "Iba na \u010D\xEDtanie",
    "note.title": "Pozn\xE1mka",
    "note.save": "Ulo\u017Ei\u0165",
    "note.delete": "Vymaza\u0165",
    "note.placeholder": "Prida\u0165 pozn\xE1mku..."
  },
  pl: {
    "app.title": "Modu\u0142 Edytora Odontogramu React",
    "app.subtitle": "Wybierz z\u0105b na odontogramie, a nast\u0119pnie ustaw warstwy.",
    "topbar.exportStatus": "Eksportuj status",
    "topbar.importStatus": "Importuj status",
    "chart.title": "Karta stomatologiczna",
    "chart.hint": "Kliknij z\u0105b. Aby wybra\u0107 wiele, u\u017Cyj CMD/CTRL + klik.",
    "chart.actions.occlusal": "Widoczno\u015B\u0107 widoku okluzyjnego",
    "chart.actions.wisdom": "Widoczno\u015B\u0107 z\u0119b\xF3w m\u0105dro\u015Bci",
    "chart.actions.bone": "Widoczno\u015B\u0107 ko\u015Bci",
    "chart.actions.pulp": "Widoczno\u015B\u0107 miazgi",
    "chart.actions.clearSelection": "Wyczy\u015B\u0107 zaznaczenie",
    "chart.aria.toothGrid": "Siatka z\u0119b\xF3w",
    "panel.controls": "Kontrolki",
    "panel.clearSelection": "Wyczy\u015B\u0107 zaznaczenie",
    "panel.toggleControls": "Kontrolki",
    "panel.activeTooth": "Aktywny z\u0105b",
    "panel.selectActions.all": "Wszystkie",
    "panel.selectActions.present": "Z\u0119by",
    "panel.selectActions.permanent": "Sta\u0142e",
    "panel.selectActions.milk": "Mleczne",
    "panel.selectActions.implants": "Implanty",
    "panel.selectActions.missing": "Brakuj\u0105ce",
    "panel.selectActions.upper": "G\xF3rne",
    "panel.selectActions.upperFront": "G\xF3rne 6 przednich",
    "panel.selectActions.upperMolar": "Trzonowce g\xF3rne",
    "panel.selectActions.lower": "Dolne",
    "panel.selectActions.lowerFront": "Dolne 6 przednich",
    "panel.selectActions.lowerMolar": "Trzonowce dolne",
    "status.title": "Statusy",
    "status.resetAll": "Resetuj jam\u0119 ustn\u0105",
    "status.primaryDentition": "Uz\u0119bienie mleczne",
    "status.mixedDentition": "Uz\u0119bienie mieszane",
    "status.edentulous": "Bezz\u0119bny",
    "status.extraLabel": "Dodaj:",
    "status.extraApply": "OK",
    "tooth.title": "Szczeg\xF3\u0142y z\u0119ba",
    "tooth.reset": "Resetuj",
    "tooth.resetTitle": "Resetuj z\u0105b do domy\u015Blnych",
    "tooth.baseLabel": "Baza",
    "tooth.bridgeLabel": "Proteza",
    "tooth.extractionWound": "\u015Bwie\u017Ca rana poekstrakcyjna",
    "tooth.crownLabel": "Korona",
    "tooth.broken.mesial": "mezjalne",
    "tooth.broken.incisal": "incyzalne",
    "tooth.broken.distal": "dystalne",
    "tooth.contact.mesialMissing": "brak kontaktu mezjalnego",
    "tooth.contact.distalMissing": "brak kontaktu dystalnego",
    "tooth.bruxism.edgeWear": "Starcie brzegowe",
    "tooth.bruxism.neckWear": "Starcie szyjkowe",
    "tooth.bridgePillar": "Filar mostu",
    "tooth.extractionPlan": "Planowana ekstrakcja",
    "tooth.crownReplace": "Wymiana korony",
    "tooth.crownNeeded": "Korona wymagana",
    "tooth.missingClosed": "Zamkni\u0119ta luka",
    "caries.title": "Pr\xF3chnica",
    "caries.hint": "Zaznacz powierzchnie pr\xF3chnicy",
    "filling.title": "Wype\u0142nienia i odbudowy",
    "filling.typeLabel": "Typ",
    "filling.fissureSealing": "Lakowanie bruzd",
    "endo.title": "Korze\u0144",
    "endo.hint": "Wybierz stan korzenia",
    "endo.pulpitis": "Zapalenie miazgi",
    "endo.resection": "Z\u0105b po resekcji",
    "endo.parapulpalPin": "Wk\u0142ad parapulpalny",
    "inflammation.title": "Przyz\u0119bie i stany zapalne",
    "inflammation.mobilityLabel": "Ruchomo\u015B\u0107",
    "language.label": "J\u0119zyk",
    "language.hu": "\u{1F1ED}\u{1F1FA} W\u0119gierski",
    "language.en": "\u{1F1EC}\u{1F1E7} Angielski",
    "language.de": "\u{1F1E9}\u{1F1EA} Niemiecki",
    "language.es": "\u{1F1EA}\u{1F1F8} Hiszpa\u0144ski",
    "language.it": "\u{1F1EE}\u{1F1F9} W\u0142oski",
    "language.sk": "\u{1F1F8}\u{1F1F0} S\u0142owacki",
    "language.pl": "\u{1F1F5}\u{1F1F1} Polski",
    "language.ru": "\u{1F1F7}\u{1F1FA} Rosyjski",
    "numbering.label": "Numeracja",
    "numbering.fdi": "FDI - ISO 3950",
    "numbering.universal": "Universal - USA",
    "numbering.palmer": "Zsigmondy-Palmer",
    "theme.light": "Tryb jasny",
    "theme.dark": "Tryb ciemny",
    "selection.none": "\u2014",
    "selection.count": "{{count}} z\u0119b\xF3w",
    "toothSelect.none": "Brak z\u0119ba",
    "toothSelect.permanent": "Z\u0105b sta\u0142y",
    "toothSelect.milk": "Z\u0105b mleczny",
    "toothSelect.implant": "Implant",
    "toothSelect.crownPrep": "Przygotowany pod koron\u0119",
    "toothSelect.underGum": "Z\u0105b poddzi\u0105s\u0142owy",
    "endo.option.none": "Zdrowy korze\u0144",
    "endo.option.medicalFilling": "Lecznicze wype\u0142nienie kana\u0142owe",
    "endo.option.filling": "Wype\u0142nienie kana\u0142owe",
    "endo.option.incompleteFilling": "Niekompletne wype\u0142nienie kana\u0142owe",
    "endo.option.glassPin": "Wype\u0142nienie kana\u0142owe z wk\u0142adem szklanym",
    "endo.option.metalPin": "Wype\u0142nienie kana\u0142owe z wk\u0142adem metalowym",
    "filling.option.none": "Brak wype\u0142nienia",
    "filling.option.amalgam": "Wype\u0142nienie amalgamatowe",
    "filling.option.composite": "Wype\u0142nienie kompozytowe",
    "filling.option.gic": "Wype\u0142nienie glasjonomerowe",
    "filling.option.temporary": "Wype\u0142nienie tymczasowe",
    "crown.option.noneImplant": "Brak",
    "crown.option.healingAbutment": "\u015Aruba goj\u0105ca",
    "crown.option.zircon": "Korona cyrkonowa",
    "crown.option.metal": "Korona metalowo-ceramiczna",
    "crown.option.temporary": "Korona tymczasowa",
    "crown.option.locator": "Lokator",
    "crown.option.locatorProsthesis": "Lokator + z\u0105b protezowy",
    "crown.option.bar": "Implant z belk\u0105",
    "crown.option.barProsthesis": "Belka + z\u0105b protezowy",
    "crown.option.full": "Korona pe\u0142na",
    "crown.option.broken": "Korona z\u0142amana",
    "crown.option.radix": "Radix",
    "crown.option.emax": "Wk\u0142ad ceramiczny prasowany",
    "crown.option.telescope": "Korona teleskopowa",
    "bridge.option.none": "Brak",
    "bridge.option.removable": "Proteza ruchoma",
    "bridge.option.zircon": "Prz\u0119s\u0142o cyrkonowe",
    "bridge.option.metal": "Prz\u0119s\u0142o metalowo-ceramiczne",
    "bridge.option.temporary": "Prz\u0119s\u0142o tymczasowe",
    "bridge.option.bar": "Prz\u0119s\u0142o belkowe",
    "bridge.option.barProsthesis": "Belka + z\u0105b protezowy",
    "mobility.none": "Brak",
    "mobility.m1": "Stopie\u0144 1",
    "mobility.m2": "Stopie\u0144 2",
    "mobility.m3": "Stopie\u0144 3",
    "mods.parodontal": "Zapalenie przyz\u0119bia",
    "mods.periimplantitis": "Periimplantitis",
    "mods.periodontalInflammation": "Zapalenie przyz\u0119bia",
    "mods.periapicalInflammation": "Zapalenie oko\u0142owierzcho\u0142kowe",
    "surface.mesial": "mezjalne",
    "surface.distal": "dystalne",
    "surface.buccal": "policzkowe",
    "surface.lingualPalatal": "j\u0119zykowe/podniebienne",
    "surface.occlusal": "okluzyjne",
    "surface.subcrown": "podkoronowe",
    "actions.expand": "Otw\xF3rz {{label}}",
    "actions.collapse": "Zwi\u0144 {{label}}",
    "debug.numbering.title": "Debug numeracji (FDI / Universal / Palmer)",
    "statusExtras.upper12_22Zircon": "G\xF3rny 12-22 cyrkon",
    "statusExtras.upper13_23Zircon": "G\xF3rny 13-23 cyrkon",
    "statusExtras.upper16_26Zircon": "G\xF3rny 16-26 cyrkon",
    "statusExtras.upperFullZircon": "G\xF3rny cyrkonowy most okr\u0119\u017Cny",
    "statusExtras.upper12_22Metal": "G\xF3rny 12-22 metalowo-ceramiczny",
    "statusExtras.upper13_23Metal": "G\xF3rny 13-23 metalowo-ceramiczny",
    "statusExtras.upper16_26Metal": "G\xF3rny 16-26 metalowo-ceramiczny",
    "statusExtras.upperFullMetal": "G\xF3rny metalowo-ceramiczny most okr\u0119\u017Cny",
    "statusExtras.upperPartialRemovable": "G\xF3rna cz\u0119\u015Bciowa ruchoma",
    "statusExtras.upperFullRemovable": "G\xF3rna ca\u0142kowita ruchoma",
    "statusExtras.upperBarDenture": "G\xF3rna proteza na belce",
    "statusExtras.lower42_32Zircon": "Dolny 42-32 cyrkon",
    "statusExtras.lower43_33Zircon": "Dolny 43-33 cyrkon",
    "statusExtras.lower46_36Zircon": "Dolny 46-36 cyrkon",
    "statusExtras.lowerFullZircon": "Dolny cyrkonowy most okr\u0119\u017Cny",
    "statusExtras.lower42_32Metal": "Dolny 42-32 metalowo-ceramiczny",
    "statusExtras.lower43_33Metal": "Dolny 43-33 metalowo-ceramiczny",
    "statusExtras.lower46_36Metal": "Dolny 46-36 metalowo-ceramiczny",
    "statusExtras.lowerFullMetal": "Dolny metalowo-ceramiczny most okr\u0119\u017Cny",
    "statusExtras.lowerPartialRemovable": "Dolna cz\u0119\u015Bciowa ruchoma",
    "statusExtras.lowerFullRemovable": "Dolna ca\u0142kowita ruchoma",
    "statusExtras.lowerBarDenture": "Dolna proteza na belce",
    "touch.zoom.title": "Z\u0105b #{{tooth}}",
    "touch.zoom.select": "Wybierz",
    "touch.zoom.deselect": "Odznacz",
    "touch.zoom.info": "Szczeg\xF3\u0142y",
    "touch.zoom.close": "Zamknij",
    "touch.ctx.select": "Wybierz",
    "touch.ctx.multiSelect": "Dodaj do zaznaczenia",
    "touch.ctx.deselect": "Odznacz",
    "touch.ctx.reset": "Resetuj",
    "touch.arch.upper": "\u0141uk g\xF3rny",
    "touch.arch.lower": "\u0141uk dolny",
    "touch.arch.both": "Oba",
    "chart.hint.touch": "Dotknij z\u0105b, aby go zaznaczy\u0107. Przytrzymaj, aby uzyska\u0107 wi\u0119cej opcji.",
    "warn.endoOnMissing": "Leczenie kana\u0142owe niemo\u017Cliwe przy brakuj\u0105cym/implantowanym z\u0119bie",
    "warn.fillingOnMissing": "Wype\u0142nienie niemo\u017Cliwe przy brakuj\u0105cym z\u0119bie",
    "warn.crownReplaceNoCrown": "Wymiana korony oznaczona bez korony",
    "warn.cariesOnMissing": "Pr\xF3chnica niemo\u017Cliwa przy brakuj\u0105cym z\u0119bie",
    "warn.pillarNoCrown": "Filar mostu oznaczony bez materia\u0142u korony",
    "readOnly.label": "Tylko do odczytu",
    "note.title": "Notatka",
    "note.save": "Zapisz",
    "note.delete": "Usu\u0144",
    "note.placeholder": "Dodaj notatk\u0119..."
  },
  ru: {
    "app.title": "\u041C\u043E\u0434\u0443\u043B\u044C \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440\u0430 \u043E\u0434\u043E\u043D\u0442\u043E\u0433\u0440\u0430\u043C\u043C\u044B React",
    "app.subtitle": "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0437\u0443\u0431 \u043D\u0430 \u043E\u0434\u043E\u043D\u0442\u043E\u0433\u0440\u0430\u043C\u043C\u0435, \u0437\u0430\u0442\u0435\u043C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u0442\u0435 \u0441\u043B\u043E\u0438.",
    "topbar.exportStatus": "\u042D\u043A\u0441\u043F\u043E\u0440\u0442 \u0441\u0442\u0430\u0442\u0443\u0441\u0430",
    "topbar.importStatus": "\u0418\u043C\u043F\u043E\u0440\u0442 \u0441\u0442\u0430\u0442\u0443\u0441\u0430",
    "chart.title": "\u0417\u0443\u0431\u043D\u0430\u044F \u043A\u0430\u0440\u0442\u0430",
    "chart.hint": "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u0437\u0443\u0431. \u0414\u043B\u044F \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u0432\u044B\u0431\u043E\u0440\u0430 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 CMD/CTRL + \u043A\u043B\u0438\u043A.",
    "chart.actions.occlusal": "\u0412\u0438\u0434\u0438\u043C\u043E\u0441\u0442\u044C \u043E\u043A\u043A\u043B\u044E\u0437\u0438\u043E\u043D\u043D\u043E\u0433\u043E \u0432\u0438\u0434\u0430",
    "chart.actions.wisdom": "\u0412\u0438\u0434\u0438\u043C\u043E\u0441\u0442\u044C \u0437\u0443\u0431\u043E\u0432 \u043C\u0443\u0434\u0440\u043E\u0441\u0442\u0438",
    "chart.actions.bone": "\u0412\u0438\u0434\u0438\u043C\u043E\u0441\u0442\u044C \u043A\u043E\u0441\u0442\u0438",
    "chart.actions.pulp": "\u0412\u0438\u0434\u0438\u043C\u043E\u0441\u0442\u044C \u043F\u0443\u043B\u044C\u043F\u044B",
    "chart.actions.clearSelection": "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u0438\u0435",
    "chart.aria.toothGrid": "\u0421\u0435\u0442\u043A\u0430 \u0437\u0443\u0431\u043E\u0432",
    "panel.controls": "\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435",
    "panel.clearSelection": "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u0438\u0435",
    "panel.toggleControls": "\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435",
    "panel.activeTooth": "\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0439 \u0437\u0443\u0431",
    "panel.selectActions.all": "\u0412\u0441\u0435",
    "panel.selectActions.present": "\u0417\u0443\u0431\u044B",
    "panel.selectActions.permanent": "\u041F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u044B\u0435",
    "panel.selectActions.milk": "\u041C\u043E\u043B\u043E\u0447\u043D\u044B\u0435",
    "panel.selectActions.implants": "\u0418\u043C\u043F\u043B\u0430\u043D\u0442\u044B",
    "panel.selectActions.missing": "\u041E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0435",
    "panel.selectActions.upper": "\u0412\u0435\u0440\u0445\u043D\u0438\u0435",
    "panel.selectActions.upperFront": "\u0412\u0435\u0440\u0445\u043D\u0438\u0435 6 \u0444\u0440\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u044B\u0445",
    "panel.selectActions.upperMolar": "\u0412\u0435\u0440\u0445\u043D\u0438\u0435 \u043C\u043E\u043B\u044F\u0440\u044B",
    "panel.selectActions.lower": "\u041D\u0438\u0436\u043D\u0438\u0435",
    "panel.selectActions.lowerFront": "\u041D\u0438\u0436\u043D\u0438\u0435 6 \u0444\u0440\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u044B\u0445",
    "panel.selectActions.lowerMolar": "\u041D\u0438\u0436\u043D\u0438\u0435 \u043C\u043E\u043B\u044F\u0440\u044B",
    "status.title": "\u0421\u0442\u0430\u0442\u0443\u0441\u044B",
    "status.resetAll": "\u0421\u0431\u0440\u043E\u0441 \u043F\u043E\u043B\u043E\u0441\u0442\u0438 \u0440\u0442\u0430",
    "status.primaryDentition": "\u041C\u043E\u043B\u043E\u0447\u043D\u044B\u0439 \u043F\u0440\u0438\u043A\u0443\u0441",
    "status.mixedDentition": "\u0421\u043C\u0435\u043D\u043D\u044B\u0439 \u043F\u0440\u0438\u043A\u0443\u0441",
    "status.edentulous": "\u0411\u0435\u0437\u0437\u0443\u0431\u044B\u0439",
    "status.extraLabel": "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C:",
    "status.extraApply": "OK",
    "tooth.title": "\u0414\u0435\u0442\u0430\u043B\u0438 \u0437\u0443\u0431\u0430",
    "tooth.reset": "\u0421\u0431\u0440\u043E\u0441",
    "tooth.resetTitle": "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0437\u0443\u0431 \u043A \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F\u043C \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E",
    "tooth.baseLabel": "\u041E\u0441\u043D\u043E\u0432\u0430",
    "tooth.bridgeLabel": "\u041F\u0440\u043E\u0442\u0435\u0437",
    "tooth.extractionWound": "\u0441\u0432\u0435\u0436\u0430\u044F \u043B\u0443\u043D\u043A\u0430 \u0443\u0434\u0430\u043B\u0451\u043D\u043D\u043E\u0433\u043E \u0437\u0443\u0431\u0430",
    "tooth.crownLabel": "\u041A\u043E\u0440\u043E\u043D\u043A\u0430",
    "tooth.broken.mesial": "\u043C\u0435\u0437\u0438\u0430\u043B\u044C\u043D\u043E\u0435",
    "tooth.broken.incisal": "\u0438\u043D\u0446\u0438\u0437\u0430\u043B\u044C\u043D\u043E\u0435",
    "tooth.broken.distal": "\u0434\u0438\u0441\u0442\u0430\u043B\u044C\u043D\u043E\u0435",
    "tooth.contact.mesialMissing": "\u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435 \u043C\u0435\u0437\u0438\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0430",
    "tooth.contact.distalMissing": "\u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435 \u0434\u0438\u0441\u0442\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0430",
    "tooth.bruxism.edgeWear": "\u0421\u0442\u0438\u0440\u0430\u043D\u0438\u0435 \u0440\u0435\u0436\u0443\u0449\u0435\u0433\u043E \u043A\u0440\u0430\u044F",
    "tooth.bruxism.neckWear": "\u0421\u0442\u0438\u0440\u0430\u043D\u0438\u0435 \u0432 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u0448\u0435\u0439\u043A\u0438",
    "tooth.bridgePillar": "\u041E\u043F\u043E\u0440\u0430 \u043C\u043E\u0441\u0442\u043E\u0432\u0438\u0434\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0442\u0435\u0437\u0430",
    "tooth.extractionPlan": "\u041F\u043B\u0430\u043D\u0438\u0440\u0443\u0435\u043C\u043E\u0435 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435",
    "tooth.crownReplace": "\u0417\u0430\u043C\u0435\u043D\u0430 \u043A\u043E\u0440\u043E\u043D\u043A\u0438",
    "tooth.crownNeeded": "\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u043A\u043E\u0440\u043E\u043D\u043A\u0430",
    "tooth.missingClosed": "\u0417\u0430\u043A\u0440\u044B\u0442\u044B\u0439 \u0434\u0435\u0444\u0435\u043A\u0442",
    "caries.title": "\u041A\u0430\u0440\u0438\u0435\u0441",
    "caries.hint": "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u0438 \u043A\u0430\u0440\u0438\u0435\u0441\u0430",
    "filling.title": "\u041F\u043B\u043E\u043C\u0431\u044B \u0438 \u0440\u0435\u0441\u0442\u0430\u0432\u0440\u0430\u0446\u0438\u0438",
    "filling.typeLabel": "\u0422\u0438\u043F",
    "filling.fissureSealing": "\u0413\u0435\u0440\u043C\u0435\u0442\u0438\u0437\u0430\u0446\u0438\u044F \u0444\u0438\u0441\u0441\u0443\u0440",
    "endo.title": "\u041A\u043E\u0440\u0435\u043D\u044C",
    "endo.hint": "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043A\u043E\u0440\u043D\u044F",
    "endo.pulpitis": "\u041F\u0443\u043B\u044C\u043F\u0438\u0442",
    "endo.resection": "\u0420\u0435\u0437\u0435\u0446\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0437\u0443\u0431",
    "endo.parapulpalPin": "\u041F\u0430\u0440\u0430\u043F\u0443\u043B\u044C\u043F\u0430\u0440\u043D\u044B\u0439 \u0448\u0442\u0438\u0444\u0442",
    "inflammation.title": "\u041F\u0430\u0440\u043E\u0434\u043E\u043D\u0442 \u0438 \u0432\u043E\u0441\u043F\u0430\u043B\u0435\u043D\u0438\u044F",
    "inflammation.mobilityLabel": "\u041F\u043E\u0434\u0432\u0438\u0436\u043D\u043E\u0441\u0442\u044C",
    "language.label": "\u042F\u0437\u044B\u043A",
    "language.hu": "\u{1F1ED}\u{1F1FA} \u0412\u0435\u043D\u0433\u0435\u0440\u0441\u043A\u0438\u0439",
    "language.en": "\u{1F1EC}\u{1F1E7} \u0410\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u0438\u0439",
    "language.de": "\u{1F1E9}\u{1F1EA} \u041D\u0435\u043C\u0435\u0446\u043A\u0438\u0439",
    "language.es": "\u{1F1EA}\u{1F1F8} \u0418\u0441\u043F\u0430\u043D\u0441\u043A\u0438\u0439",
    "language.it": "\u{1F1EE}\u{1F1F9} \u0418\u0442\u0430\u043B\u044C\u044F\u043D\u0441\u043A\u0438\u0439",
    "language.sk": "\u{1F1F8}\u{1F1F0} \u0421\u043B\u043E\u0432\u0430\u0446\u043A\u0438\u0439",
    "language.pl": "\u{1F1F5}\u{1F1F1} \u041F\u043E\u043B\u044C\u0441\u043A\u0438\u0439",
    "language.ru": "\u{1F1F7}\u{1F1FA} \u0420\u0443\u0441\u0441\u043A\u0438\u0439",
    "numbering.label": "\u041D\u0443\u043C\u0435\u0440\u0430\u0446\u0438\u044F",
    "numbering.fdi": "FDI - ISO 3950",
    "numbering.universal": "Universal - \u0421\u0428\u0410",
    "numbering.palmer": "Zsigmondy-Palmer",
    "theme.light": "\u0421\u0432\u0435\u0442\u043B\u0430\u044F \u0442\u0435\u043C\u0430",
    "theme.dark": "\u0422\u0451\u043C\u043D\u0430\u044F \u0442\u0435\u043C\u0430",
    "selection.none": "\u2014",
    "selection.count": "{{count}} \u0437\u0443\u0431\u043E\u0432",
    "toothSelect.none": "\u041E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0439 \u0437\u0443\u0431",
    "toothSelect.permanent": "\u041F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u044B\u0439 \u0437\u0443\u0431",
    "toothSelect.milk": "\u041C\u043E\u043B\u043E\u0447\u043D\u044B\u0439 \u0437\u0443\u0431",
    "toothSelect.implant": "\u0418\u043C\u043F\u043B\u0430\u043D\u0442",
    "toothSelect.crownPrep": "\u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D \u043F\u043E\u0434 \u043A\u043E\u0440\u043E\u043D\u043A\u0443",
    "toothSelect.underGum": "\u041F\u043E\u0434\u0434\u0435\u0441\u043D\u0435\u0432\u043E\u0439 \u0437\u0443\u0431",
    "endo.option.none": "\u0417\u0434\u043E\u0440\u043E\u0432\u044B\u0439 \u043A\u043E\u0440\u0435\u043D\u044C",
    "endo.option.medicalFilling": "\u041B\u0435\u0447\u0435\u0431\u043D\u043E\u0435 \u043F\u043B\u043E\u043C\u0431\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043A\u0430\u043D\u0430\u043B\u0430",
    "endo.option.filling": "\u041F\u043B\u043E\u043C\u0431\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043A\u0430\u043D\u0430\u043B\u0430",
    "endo.option.incompleteFilling": "\u041D\u0435\u043F\u043E\u043B\u043D\u043E\u0435 \u043F\u043B\u043E\u043C\u0431\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043A\u0430\u043D\u0430\u043B\u0430",
    "endo.option.glassPin": "\u041F\u043B\u043E\u043C\u0431\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043A\u0430\u043D\u0430\u043B\u0430 \u0441\u043E \u0441\u0442\u0435\u043A\u043B\u043E\u0432\u043E\u043B\u043E\u043A\u043E\u043D\u043D\u044B\u043C \u0448\u0442\u0438\u0444\u0442\u043E\u043C",
    "endo.option.metalPin": "\u041F\u043B\u043E\u043C\u0431\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043A\u0430\u043D\u0430\u043B\u0430 \u0441 \u043C\u0435\u0442\u0430\u043B\u043B\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u0448\u0442\u0438\u0444\u0442\u043E\u043C",
    "filling.option.none": "\u0411\u0435\u0437 \u043F\u043B\u043E\u043C\u0431\u044B",
    "filling.option.amalgam": "\u0410\u043C\u0430\u043B\u044C\u0433\u0430\u043C\u043D\u0430\u044F \u043F\u043B\u043E\u043C\u0431\u0430",
    "filling.option.composite": "\u041A\u043E\u043C\u043F\u043E\u0437\u0438\u0442\u043D\u0430\u044F \u043F\u043B\u043E\u043C\u0431\u0430",
    "filling.option.gic": "\u0421\u0442\u0435\u043A\u043B\u043E\u0438\u043E\u043D\u043E\u043C\u0435\u0440\u043D\u0430\u044F \u043F\u043B\u043E\u043C\u0431\u0430",
    "filling.option.temporary": "\u0412\u0440\u0435\u043C\u0435\u043D\u043D\u0430\u044F \u043F\u043B\u043E\u043C\u0431\u0430",
    "crown.option.noneImplant": "\u041D\u0435\u0442",
    "crown.option.healingAbutment": "\u0424\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0434\u0435\u0441\u043D\u044B",
    "crown.option.zircon": "\u0426\u0438\u0440\u043A\u043E\u043D\u0438\u0435\u0432\u0430\u044F \u043A\u043E\u0440\u043E\u043D\u043A\u0430",
    "crown.option.metal": "\u041C\u0435\u0442\u0430\u043B\u043B\u043E\u043A\u0435\u0440\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043A\u043E\u0440\u043E\u043D\u043A\u0430",
    "crown.option.temporary": "\u0412\u0440\u0435\u043C\u0435\u043D\u043D\u0430\u044F \u043A\u043E\u0440\u043E\u043D\u043A\u0430",
    "crown.option.locator": "\u041B\u043E\u043A\u0430\u0442\u043E\u0440",
    "crown.option.locatorProsthesis": "\u041B\u043E\u043A\u0430\u0442\u043E\u0440 + \u043F\u0440\u043E\u0442\u0435\u0437\u043D\u044B\u0439 \u0437\u0443\u0431",
    "crown.option.bar": "\u0411\u0430\u043B\u043E\u0447\u043D\u044B\u0439 \u0438\u043C\u043F\u043B\u0430\u043D\u0442",
    "crown.option.barProsthesis": "\u0411\u0430\u043B\u043A\u0430 + \u043F\u0440\u043E\u0442\u0435\u0437\u043D\u044B\u0439 \u0437\u0443\u0431",
    "crown.option.full": "\u041F\u043E\u043B\u043D\u0430\u044F \u043A\u043E\u0440\u043E\u043D\u043A\u0430",
    "crown.option.broken": "\u0421\u043B\u043E\u043C\u0430\u043D\u043D\u0430\u044F \u043A\u043E\u0440\u043E\u043D\u043A\u0430",
    "crown.option.radix": "\u041A\u043E\u0440\u043D\u0435\u0432\u0430\u044F \u0432\u043A\u043B\u0430\u0434\u043A\u0430",
    "crown.option.emax": "\u041F\u0440\u0435\u0441\u0441\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u043A\u0435\u0440\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0432\u043A\u043B\u0430\u0434\u043A\u0430",
    "crown.option.telescope": "\u0422\u0435\u043B\u0435\u0441\u043A\u043E\u043F\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043A\u043E\u0440\u043E\u043D\u043A\u0430",
    "bridge.option.none": "\u041D\u0435\u0442",
    "bridge.option.removable": "\u0421\u044A\u0451\u043C\u043D\u044B\u0439 \u043F\u0440\u043E\u0442\u0435\u0437",
    "bridge.option.zircon": "\u0426\u0438\u0440\u043A\u043E\u043D\u0438\u0435\u0432\u044B\u0439 \u043C\u043E\u0441\u0442\u043E\u0432\u0438\u0434\u043D\u044B\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442",
    "bridge.option.metal": "\u041C\u0435\u0442\u0430\u043B\u043B\u043E\u043A\u0435\u0440\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043C\u043E\u0441\u0442\u043E\u0432\u0438\u0434\u043D\u044B\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442",
    "bridge.option.temporary": "\u0412\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0439 \u043C\u043E\u0441\u0442\u043E\u0432\u0438\u0434\u043D\u044B\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442",
    "bridge.option.bar": "\u0411\u0430\u043B\u043E\u0447\u043D\u043E\u0435 \u043F\u0435\u0440\u0435\u043A\u0440\u044B\u0442\u0438\u0435",
    "bridge.option.barProsthesis": "\u0411\u0430\u043B\u043A\u0430 + \u043F\u0440\u043E\u0442\u0435\u0437\u043D\u044B\u0439 \u0437\u0443\u0431",
    "mobility.none": "\u041D\u0435\u0442",
    "mobility.m1": "\u0421\u0442\u0435\u043F\u0435\u043D\u044C 1",
    "mobility.m2": "\u0421\u0442\u0435\u043F\u0435\u043D\u044C 2",
    "mobility.m3": "\u0421\u0442\u0435\u043F\u0435\u043D\u044C 3",
    "mods.parodontal": "\u041F\u0430\u0440\u043E\u0434\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u043E\u0435 \u0432\u043E\u0441\u043F\u0430\u043B\u0435\u043D\u0438\u0435",
    "mods.periimplantitis": "\u041F\u0435\u0440\u0438\u0438\u043C\u043F\u043B\u0430\u043D\u0442\u0438\u0442",
    "mods.periodontalInflammation": "\u041F\u0430\u0440\u043E\u0434\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u043E\u0435 \u0432\u043E\u0441\u043F\u0430\u043B\u0435\u043D\u0438\u0435",
    "mods.periapicalInflammation": "\u041F\u0435\u0440\u0438\u0430\u043F\u0438\u043A\u0430\u043B\u044C\u043D\u043E\u0435 \u0432\u043E\u0441\u043F\u0430\u043B\u0435\u043D\u0438\u0435",
    "surface.mesial": "\u043C\u0435\u0437\u0438\u0430\u043B\u044C\u043D\u0430\u044F",
    "surface.distal": "\u0434\u0438\u0441\u0442\u0430\u043B\u044C\u043D\u0430\u044F",
    "surface.buccal": "\u0449\u0451\u0447\u043D\u0430\u044F",
    "surface.lingualPalatal": "\u044F\u0437\u044B\u0447\u043D\u0430\u044F/\u043D\u0451\u0431\u043D\u0430\u044F",
    "surface.occlusal": "\u043E\u043A\u043A\u043B\u044E\u0437\u0438\u043E\u043D\u043D\u0430\u044F",
    "surface.subcrown": "\u043F\u043E\u0434\u043A\u043E\u0440\u043E\u043D\u043A\u043E\u0432\u0430\u044F",
    "actions.expand": "\u041E\u0442\u043A\u0440\u044B\u0442\u044C {{label}}",
    "actions.collapse": "\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C {{label}}",
    "debug.numbering.title": "\u041E\u0442\u043B\u0430\u0434\u043A\u0430 \u043D\u0443\u043C\u0435\u0440\u0430\u0446\u0438\u0438 (FDI / Universal / Palmer)",
    "statusExtras.upper12_22Zircon": "\u0412\u0435\u0440\u0445\u043D\u0438\u0439 12-22 \u0446\u0438\u0440\u043A\u043E\u043D\u0438\u0439",
    "statusExtras.upper13_23Zircon": "\u0412\u0435\u0440\u0445\u043D\u0438\u0439 13-23 \u0446\u0438\u0440\u043A\u043E\u043D\u0438\u0439",
    "statusExtras.upper16_26Zircon": "\u0412\u0435\u0440\u0445\u043D\u0438\u0439 16-26 \u0446\u0438\u0440\u043A\u043E\u043D\u0438\u0439",
    "statusExtras.upperFullZircon": "\u0412\u0435\u0440\u0445\u043D\u0438\u0439 \u0446\u0438\u0440\u043A\u043E\u043D\u0438\u0435\u0432\u044B\u0439 \u043A\u0440\u0443\u0433\u043E\u0432\u043E\u0439 \u043C\u043E\u0441\u0442",
    "statusExtras.upper12_22Metal": "\u0412\u0435\u0440\u0445\u043D\u0438\u0439 12-22 \u043C\u0435\u0442\u0430\u043B\u043B\u043E\u043A\u0435\u0440\u0430\u043C\u0438\u043A\u0430",
    "statusExtras.upper13_23Metal": "\u0412\u0435\u0440\u0445\u043D\u0438\u0439 13-23 \u043C\u0435\u0442\u0430\u043B\u043B\u043E\u043A\u0435\u0440\u0430\u043C\u0438\u043A\u0430",
    "statusExtras.upper16_26Metal": "\u0412\u0435\u0440\u0445\u043D\u0438\u0439 16-26 \u043C\u0435\u0442\u0430\u043B\u043B\u043E\u043A\u0435\u0440\u0430\u043C\u0438\u043A\u0430",
    "statusExtras.upperFullMetal": "\u0412\u0435\u0440\u0445\u043D\u0438\u0439 \u043C\u0435\u0442\u0430\u043B\u043B\u043E\u043A\u0435\u0440\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043A\u0440\u0443\u0433\u043E\u0432\u043E\u0439 \u043C\u043E\u0441\u0442",
    "statusExtras.upperPartialRemovable": "\u0412\u0435\u0440\u0445\u043D\u0438\u0439 \u0447\u0430\u0441\u0442\u0438\u0447\u043D\u044B\u0439 \u0441\u044A\u0451\u043C\u043D\u044B\u0439",
    "statusExtras.upperFullRemovable": "\u0412\u0435\u0440\u0445\u043D\u0438\u0439 \u043F\u043E\u043B\u043D\u044B\u0439 \u0441\u044A\u0451\u043C\u043D\u044B\u0439",
    "statusExtras.upperBarDenture": "\u0412\u0435\u0440\u0445\u043D\u0438\u0439 \u0431\u0430\u043B\u043E\u0447\u043D\u044B\u0439 \u043F\u0440\u043E\u0442\u0435\u0437",
    "statusExtras.lower42_32Zircon": "\u041D\u0438\u0436\u043D\u0438\u0439 42-32 \u0446\u0438\u0440\u043A\u043E\u043D\u0438\u0439",
    "statusExtras.lower43_33Zircon": "\u041D\u0438\u0436\u043D\u0438\u0439 43-33 \u0446\u0438\u0440\u043A\u043E\u043D\u0438\u0439",
    "statusExtras.lower46_36Zircon": "\u041D\u0438\u0436\u043D\u0438\u0439 46-36 \u0446\u0438\u0440\u043A\u043E\u043D\u0438\u0439",
    "statusExtras.lowerFullZircon": "\u041D\u0438\u0436\u043D\u0438\u0439 \u0446\u0438\u0440\u043A\u043E\u043D\u0438\u0435\u0432\u044B\u0439 \u043A\u0440\u0443\u0433\u043E\u0432\u043E\u0439 \u043C\u043E\u0441\u0442",
    "statusExtras.lower42_32Metal": "\u041D\u0438\u0436\u043D\u0438\u0439 42-32 \u043C\u0435\u0442\u0430\u043B\u043B\u043E\u043A\u0435\u0440\u0430\u043C\u0438\u043A\u0430",
    "statusExtras.lower43_33Metal": "\u041D\u0438\u0436\u043D\u0438\u0439 43-33 \u043C\u0435\u0442\u0430\u043B\u043B\u043E\u043A\u0435\u0440\u0430\u043C\u0438\u043A\u0430",
    "statusExtras.lower46_36Metal": "\u041D\u0438\u0436\u043D\u0438\u0439 46-36 \u043C\u0435\u0442\u0430\u043B\u043B\u043E\u043A\u0435\u0440\u0430\u043C\u0438\u043A\u0430",
    "statusExtras.lowerFullMetal": "\u041D\u0438\u0436\u043D\u0438\u0439 \u043C\u0435\u0442\u0430\u043B\u043B\u043E\u043A\u0435\u0440\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043A\u0440\u0443\u0433\u043E\u0432\u043E\u0439 \u043C\u043E\u0441\u0442",
    "statusExtras.lowerPartialRemovable": "\u041D\u0438\u0436\u043D\u0438\u0439 \u0447\u0430\u0441\u0442\u0438\u0447\u043D\u044B\u0439 \u0441\u044A\u0451\u043C\u043D\u044B\u0439",
    "statusExtras.lowerFullRemovable": "\u041D\u0438\u0436\u043D\u0438\u0439 \u043F\u043E\u043B\u043D\u044B\u0439 \u0441\u044A\u0451\u043C\u043D\u044B\u0439",
    "statusExtras.lowerBarDenture": "\u041D\u0438\u0436\u043D\u0438\u0439 \u0431\u0430\u043B\u043E\u0447\u043D\u044B\u0439 \u043F\u0440\u043E\u0442\u0435\u0437",
    "touch.zoom.title": "\u0417\u0443\u0431 #{{tooth}}",
    "touch.zoom.select": "\u0412\u044B\u0431\u0440\u0430\u0442\u044C",
    "touch.zoom.deselect": "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u0432\u044B\u0431\u043E\u0440",
    "touch.zoom.info": "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u043E\u0441\u0442\u0438",
    "touch.zoom.close": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
    "touch.ctx.select": "\u0412\u044B\u0431\u0440\u0430\u0442\u044C",
    "touch.ctx.multiSelect": "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A \u0432\u044B\u0431\u043E\u0440\u0443",
    "touch.ctx.deselect": "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u0432\u044B\u0431\u043E\u0440",
    "touch.ctx.reset": "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C",
    "touch.arch.upper": "\u0412\u0435\u0440\u0445\u043D\u044F\u044F \u0434\u0443\u0433\u0430",
    "touch.arch.lower": "\u041D\u0438\u0436\u043D\u044F\u044F \u0434\u0443\u0433\u0430",
    "touch.arch.both": "\u041E\u0431\u0435",
    "chart.hint.touch": "\u041A\u043E\u0441\u043D\u0438\u0442\u0435\u0441\u044C \u0437\u0443\u0431\u0430 \u0434\u043B\u044F \u0432\u044B\u0431\u043E\u0440\u0430. \u0414\u043E\u043B\u0433\u043E\u0435 \u043D\u0430\u0436\u0430\u0442\u0438\u0435 \u0434\u043B\u044F \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u043E\u043F\u0446\u0438\u0439.",
    "warn.endoOnMissing": "\u041B\u0435\u0447\u0435\u043D\u0438\u0435 \u043A\u043E\u0440\u043D\u044F \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u043D\u0430 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u043C/\u0438\u043C\u043F\u043B\u0430\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u043C \u0437\u0443\u0431\u0435",
    "warn.fillingOnMissing": "\u041F\u043B\u043E\u043C\u0431\u0430 \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u0430 \u043D\u0430 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u043C \u0437\u0443\u0431\u0435",
    "warn.crownReplaceNoCrown": "\u0417\u0430\u043C\u0435\u043D\u0430 \u043A\u043E\u0440\u043E\u043D\u043A\u0438 \u043E\u0442\u043C\u0435\u0447\u0435\u043D\u0430 \u0431\u0435\u0437 \u043A\u043E\u0440\u043E\u043D\u043A\u0438",
    "warn.cariesOnMissing": "\u041A\u0430\u0440\u0438\u0435\u0441 \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u0435\u043D \u043D\u0430 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u043C \u0437\u0443\u0431\u0435",
    "warn.pillarNoCrown": "\u041E\u043F\u043E\u0440\u0430 \u043C\u043E\u0441\u0442\u0430 \u043E\u0442\u043C\u0435\u0447\u0435\u043D\u0430 \u0431\u0435\u0437 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430 \u043A\u043E\u0440\u043E\u043D\u043A\u0438",
    "readOnly.label": "\u0422\u043E\u043B\u044C\u043A\u043E \u0447\u0442\u0435\u043D\u0438\u0435",
    "note.title": "\u0417\u0430\u043C\u0435\u0442\u043A\u0430",
    "note.save": "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",
    "note.delete": "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
    "note.placeholder": "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u043C\u0435\u0442\u043A\u0443..."
  }
};

// React-Odontogram-Modul/src/i18n/useI18n.ts
var FALLBACK_LANGUAGE = "en";
var currentLanguage = "hu";
var listeners = /* @__PURE__ */ new Set();
function t(key, langOverride, params) {
  const resolvedParams = typeof langOverride === "object" ? langOverride : params;
  const lang = typeof langOverride === "string" ? langOverride : currentLanguage;
  const table = translations[lang] ?? translations[FALLBACK_LANGUAGE];
  const fallback = translations[FALLBACK_LANGUAGE];
  const raw = table[key] ?? fallback[key] ?? key;
  if (!resolvedParams) return raw;
  return raw.replace(/\{\{(\w+)\}\}/g, (_, token) => String(resolvedParams[token] ?? ""));
}
function getI18nLanguage() {
  return currentLanguage;
}
function setI18nLanguage(lang) {
  if (lang === currentLanguage) return;
  currentLanguage = lang;
  for (const listener of listeners) {
    listener(lang);
  }
}
function onI18nChange(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

// React-Odontogram-Modul/src/utils/numbering.ts
function normalizeFdi(input) {
  const num = typeof input === "number" ? input : Number(input);
  if (!Number.isFinite(num)) return null;
  return Math.trunc(num);
}
function isAdultFdi(fdi) {
  return fdi >= 11 && fdi <= 18 || fdi >= 21 && fdi <= 28 || fdi >= 31 && fdi <= 38 || fdi >= 41 && fdi <= 48;
}
function isPrimaryFdi(fdi) {
  return fdi >= 51 && fdi <= 55 || fdi >= 61 && fdi <= 65 || fdi >= 71 && fdi <= 75 || fdi >= 81 && fdi <= 85;
}
function toLabel(fdiTooth, system) {
  const fdi = normalizeFdi(fdiTooth);
  if (fdi === null) return String(fdiTooth);
  if (system === "FDI") {
    return String(fdi);
  }
  const quadrant = Math.floor(fdi / 10);
  const position = fdi % 10;
  if (!isAdultFdi(fdi) && !isPrimaryFdi(fdi)) {
    return String(fdi);
  }
  if (system === "UNIVERSAL") {
    if (isPrimaryFdi(fdi)) {
      if (quadrant === 5) {
        return String.fromCharCode(65 + (5 - position));
      }
      if (quadrant === 6) {
        return String.fromCharCode(70 + (position - 1));
      }
      if (quadrant === 7) {
        return String.fromCharCode(75 + (5 - position));
      }
      if (quadrant === 8) {
        return String.fromCharCode(80 + (position - 1));
      }
    }
    if (quadrant === 1) {
      return String(9 - position);
    }
    if (quadrant === 2) {
      return String(8 + position);
    }
    if (quadrant === 3) {
      return String(25 - position);
    }
    if (quadrant === 4) {
      return String(24 + position);
    }
  }
  if (system === "PALMER") {
    let quadLabel = "";
    if (quadrant === 1) quadLabel = "UR";
    if (quadrant === 2) quadLabel = "UL";
    if (quadrant === 3) quadLabel = "LL";
    if (quadrant === 4) quadLabel = "LR";
    if (quadrant === 5) quadLabel = "UR";
    if (quadrant === 6) quadLabel = "UL";
    if (quadrant === 7) quadLabel = "LL";
    if (quadrant === 8) quadLabel = "LR";
    if (!quadLabel) return String(fdi);
    if (isPrimaryFdi(fdi)) {
      const letter = String.fromCharCode(65 + (position - 1));
      return `${quadLabel}-${letter}`;
    }
    return `${quadLabel}-${position}`;
  }
  return String(fdi);
}

// React-Odontogram-Modul/src/plugin.ts
function getQuadrant(toothNo) {
  const first = Math.floor(toothNo / 10);
  if (first === 1) return 1;
  if (first === 2) return 2;
  if (first === 3) return 3;
  return 4;
}
var LAYER_Z = {
  base: 0,
  restoration: 3,
  overlay: 6
};

// React-Odontogram-Modul/src/assets/teeth-svgs/11.svg
var __default = "/static/doctor/odontogram/assets/11-KUE7V6B4.svg";

// React-Odontogram-Modul/src/assets/teeth-svgs/13.svg
var __default2 = "/static/doctor/odontogram/assets/13-4NOGMBPU.svg";

// React-Odontogram-Modul/src/assets/teeth-svgs/14.svg
var __default3 = "/static/doctor/odontogram/assets/14-XHYAXQYW.svg";

// React-Odontogram-Modul/src/assets/teeth-svgs/16.svg
var __default4 = "/static/doctor/odontogram/assets/16-DENYGTXI.svg";

// React-Odontogram-Modul/src/assets/teeth-svgs/14_occl.svg
var occl_default = "/static/doctor/odontogram/assets/14_occl-6BVUM6RZ.svg";

// React-Odontogram-Modul/src/assets/teeth-svgs/16_occl.svg
var occl_default2 = "/static/doctor/odontogram/assets/16_occl-YSNTXMOZ.svg";

// React-Odontogram-Modul/src/odontogram.ts
var TEMPLATES = {
  11: __default,
  13: __default2,
  14: __default3,
  16: __default4
};
var TEMPLATES_OCCL = {
  14: occl_default,
  16: occl_default2
};
var TOOTH_TEMPLATE = /* @__PURE__ */ new Map([
  // 11 template
  [11, { tpl: 11, rot: 0, mirror: false }],
  [12, { tpl: 11, rot: 0, mirror: false }],
  [21, { tpl: 11, rot: 0, mirror: true }],
  [22, { tpl: 11, rot: 0, mirror: true }],
  [31, { tpl: 11, rot: 180, mirror: false }],
  [32, { tpl: 11, rot: 180, mirror: false }],
  [41, { tpl: 11, rot: 180, mirror: true }],
  [42, { tpl: 11, rot: 180, mirror: true }],
  // 13 template
  [13, { tpl: 13, rot: 0, mirror: false }],
  [23, { tpl: 13, rot: 0, mirror: true }],
  [33, { tpl: 13, rot: 180, mirror: false }],
  [43, { tpl: 13, rot: 180, mirror: true }],
  // 14 template
  [14, { tpl: 14, rot: 0, mirror: false }],
  [15, { tpl: 14, rot: 0, mirror: false }],
  [24, { tpl: 14, rot: 0, mirror: true }],
  [25, { tpl: 14, rot: 0, mirror: true }],
  [34, { tpl: 14, rot: 180, mirror: false }],
  [35, { tpl: 14, rot: 180, mirror: false }],
  [44, { tpl: 14, rot: 180, mirror: true }],
  [45, { tpl: 14, rot: 180, mirror: true }],
  // 16 template
  [16, { tpl: 16, rot: 0, mirror: false }],
  [17, { tpl: 16, rot: 0, mirror: false }],
  [18, { tpl: 16, rot: 0, mirror: false }],
  [26, { tpl: 16, rot: 0, mirror: true }],
  [27, { tpl: 16, rot: 0, mirror: true }],
  [28, { tpl: 16, rot: 0, mirror: true }],
  [36, { tpl: 16, rot: 180, mirror: false }],
  [37, { tpl: 16, rot: 180, mirror: false }],
  [38, { tpl: 16, rot: 180, mirror: false }],
  [46, { tpl: 16, rot: 180, mirror: true }],
  [47, { tpl: 16, rot: 180, mirror: true }],
  [48, { tpl: 16, rot: 180, mirror: true }]
]);
var ALL_TEETH = [
  18,
  17,
  16,
  15,
  14,
  13,
  12,
  11,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  48,
  47,
  46,
  45,
  44,
  43,
  42,
  41,
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38
];
var GROUPS = {
  variants: [
    "tooth-broken-inicisal",
    "tooth-broken-distal-inicisal",
    "tooth-broken-distal",
    "tooth-broken-mesial-distal-inicisal",
    "tooth-broken-mesial-distal",
    "tooth-broken-mesial-inicisal",
    "tooth-broken-mesial",
    "tooth-crownprep",
    "tooth-under-gum",
    "no-tooth-after-extraction",
    "tooth-radix"
  ],
  mods: ["inflammation", "parodontal", "mobility"],
  endo: ["endo-medical-filling", "endo-filling", "endo-filling-incomplete", "endo-glass-pin", "endo-metal-pin", "endo-resection", "parapulpal-pin"],
  caries: ["caries-subcrown", "caries-buccal", "caries-lingual", "caries-mesial", "caries-distal", "caries-occlusal"],
  fillingSurfaces: ["buccal", "lingual", "mesial", "distal", "occlusal"],
  crownMaterial: ["zircon", "metal", "temporary", "telescope", "emax"]
};
var MILKTOOTH_BLOCKED = /* @__PURE__ */ new Set([16, 17, 18, 26, 27, 28, 36, 37, 38, 46, 47, 48]);
var FISSURE_ALLOWED = /* @__PURE__ */ new Set([16, 17, 26, 27, 36, 37, 46, 47]);
var BROKEN_VARIANTS = /* @__PURE__ */ new Set([
  "tooth-broken-inicisal",
  "tooth-broken-distal-inicisal",
  "tooth-broken-distal",
  "tooth-broken-mesial-inicisal",
  "tooth-broken-mesial"
]);
var PRIMARY_MILK = /* @__PURE__ */ new Set([11, 12, 13, 14, 15, 21, 22, 23, 24, 25, 31, 32, 33, 34, 35, 41, 42, 43, 44, 45]);
var MIXED_PERMANENT = /* @__PURE__ */ new Set([11, 12, 16, 21, 22, 26, 31, 32, 36, 41, 42, 46]);
var MIXED_MILK = /* @__PURE__ */ new Set([13, 14, 15, 23, 24, 25, 33, 34, 35, 43, 44, 45]);
var MIXED_NONE = /* @__PURE__ */ new Set([17, 18, 27, 28, 37, 38, 47, 48]);
var MOD_OPTIONS = [
  { value: "parodontal", labelKey: "mods.parodontal" },
  { value: "inflammation", labelKey: "mods.periapicalInflammation" }
];
var CARIES_OPTIONS = [
  { value: "caries-mesial", labelKey: "surface.mesial" },
  { value: "caries-distal", labelKey: "surface.distal" },
  { value: "caries-buccal", labelKey: "surface.buccal" },
  { value: "caries-lingual", labelKey: "surface.lingualPalatal" },
  { value: "caries-occlusal", labelKey: "surface.occlusal" },
  { value: "caries-subcrown", labelKey: "surface.subcrown" }
];
var FILLING_SURFACE_LABELS = {
  buccal: "surface.buccal",
  lingual: "surface.lingualPalatal",
  mesial: "surface.mesial",
  distal: "surface.distal",
  occlusal: "surface.occlusal"
};
function defaultState() {
  return {
    toothSelection: "tooth-base",
    // none | tooth-base | milktooth | implant | variants
    pulpInflam: false,
    endoResection: false,
    mods: /* @__PURE__ */ new Set(),
    endo: "none",
    // none | endo-medical-filling | endo-filling | endo-glass-pin | endo-metal-pin
    caries: /* @__PURE__ */ new Set(),
    fillingMaterial: "none",
    // none | amalgam | composite | gic | temporary
    fillingSurfaces: /* @__PURE__ */ new Set(),
    // buccal/mesial/distal/occlusal
    fissureSealing: false,
    contactMesial: false,
    contactDistal: false,
    bruxismWear: false,
    bruxismNeckWear: false,
    brokenMesial: false,
    brokenIncisal: false,
    brokenDistal: false,
    extractionWound: false,
    extractionPlan: false,
    parapulpalPin: false,
    crownReplace: false,
    crownNeeded: false,
    missingClosed: false,
    bridgePillar: false,
    bridgeUnit: "none",
    // none | removable | zircon | metal | temporary
    mobility: "none",
    // none | m1 | m2 | m3
    crownMaterial: "natural",
    // natural | broken | emax | zircon | metal | temporary | telescope
    customStates: {},
    note: ""
  };
}
var $ = (sel, el2 = document) => el2.querySelector(sel);
var $$ = (sel, el2 = document) => Array.from(el2.querySelectorAll(sel));
function el(tag, attrs = {}, children = []) {
  const n = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "class") n.className = v;
    else if (k === "text") n.textContent = v;
    else if (k.startsWith("on") && typeof v === "function") n.addEventListener(k.slice(2), v);
    else n.setAttribute(k, v);
  }
  for (const c of children) n.appendChild(c);
  return n;
}
function setActive(node, on) {
  if (!node) return;
  node.setAttribute("data-active", on ? "1" : "0");
}
function stripDisplayNoneToDataActive(root) {
  const nodes = $$("[id]", root);
  for (const n of nodes) {
    const style = n.getAttribute("style");
    if (style && /display\s*:\s*none/i.test(style)) {
      n.setAttribute("data-active", "0");
      const newStyle = style.replace(/display\s*:\s*none\s*;?/ig, "").replace(/;;+/g, ";").trim();
      if (newStyle) n.setAttribute("style", newStyle);
      else n.removeAttribute("style");
    }
  }
}
function ensureDataActiveForSwitchables(root) {
  const switchableGroups = ["mods", "tooth-variants", "endos", "surfaces", "restorations", "specials"];
  for (const gId of switchableGroups) {
    const g = root.getElementById ? root.getElementById(gId) : $("#" + gId, root);
    if (!g) continue;
    for (const n of $$("[id]", g)) {
      if (!n.hasAttribute("data-active")) n.setAttribute("data-active", "0");
    }
  }
  for (const id of ["tooth-base", "tooth-healthy-pulp", "tooth-inflam-pulp", "milktooth-base", "milktooth-beauty", "milktooth-healthy-pulp", "milktooth-inflam-pulp", "tooth-bruxism-wear", "tooth-bruxism-neck-wear"]) {
    const n = $("#" + id, root);
    if (n && !n.hasAttribute("data-active")) n.setAttribute("data-active", "0");
  }
}
function rotate180(svgRoot) {
  const vb = svgRoot.getAttribute("viewBox") || "0 0 32 64";
  const parts = vb.trim().split(/\s+/).map(Number);
  const cx = parts[0] + parts[2] / 2;
  const cy = parts[1] + parts[3] / 2;
  const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
  while (svgRoot.firstChild) {
    g.appendChild(svgRoot.firstChild);
  }
  g.setAttribute("transform", `rotate(180 ${cx} ${cy})`);
  svgRoot.appendChild(g);
}
function mirrorVertical(svgRoot) {
  const vb = svgRoot.getAttribute("viewBox") || "0 0 32 64";
  const parts = vb.trim().split(/\s+/).map(Number);
  const cx = parts[0] + parts[2] / 2;
  const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
  while (svgRoot.firstChild) {
    g.appendChild(svgRoot.firstChild);
  }
  g.setAttribute("transform", `scale(-1 1) translate(${-2 * cx} 0)`);
  svgRoot.appendChild(g);
}
function svgGetById(root, id) {
  return root.getElementById ? root.getElementById(id) : $("#" + id, root);
}
function setManyActive(root, ids, on) {
  for (const id of ids) {
    setActive(svgGetById(root, id), on);
  }
}
function clearAllInGroup(root, ids) {
  setManyActive(root, ids, false);
}
var toothState = /* @__PURE__ */ new Map();
var toothSvgRoot = /* @__PURE__ */ new Map();
var toothTile = /* @__PURE__ */ new Map();
var toothLabelUpper = /* @__PURE__ */ new Map();
var toothLabelLower = /* @__PURE__ */ new Map();
var activeTooth = null;
var selectedTeeth = /* @__PURE__ */ new Set();
var edentulous = false;
var wisdomVisible = true;
var showBase = true;
var occlusalVisible = true;
var showHealthyPulp = true;
var suppressEdentulousSync = false;
var numberingSystem = "FDI";
var readOnly = false;
var notesEnabled = false;
var i18nUnsubscribe = null;
var registeredPlugins = [];
var pluginOverlays = /* @__PURE__ */ new Map();
var isTouchDevice = () => window.matchMedia("(pointer: coarse)").matches;
var touchStartTime = 0;
var touchStartX = 0;
var touchStartY = 0;
var touchMoved = false;
var longPressTimer = null;
var LONG_PRESS_MS = 500;
var TOUCH_MOVE_THRESHOLD = 10;
var pinchStartDist = 0;
var pinchScale = 1;
var isPinching = false;
var archMode = "both";
var archToggleBar = null;
function buildChecks(container, items, onToggle) {
  container.innerHTML = "";
  for (const it of items) {
    const id = `chk-${it.value}`;
    const labelId = `lbl-${it.value}`;
    const labelText = it.labelKey ? t(it.labelKey) : it.label;
    const label = el("label", {}, [
      el("input", { type: "checkbox", id, value: it.value }),
      el("span", { id: labelId, text: labelText })
    ]);
    const input = label.querySelector("input");
    input.addEventListener("change", (e) => onToggle(it.value, e.target.checked));
    if (container.id === "cariesChecks" && it.value === "caries-subcrown") {
      setDisabled(input, true);
    }
    container.appendChild(label);
  }
}
function buildSelect(selectEl, options, onChange) {
  selectEl.innerHTML = "";
  for (const opt of options) {
    const o = el("option", { value: opt.value, text: opt.label });
    selectEl.appendChild(o);
  }
  selectEl.addEventListener("change", (e) => onChange(e.target.value));
}
async function loadInlineIcon(button) {
  if (!button) return;
  const src = button.dataset.iconSrc;
  if (!src) return;
  try {
    const res = await fetch(src);
    if (!res.ok) return;
    const txt = await res.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(txt, "image/svg+xml");
    const svg = doc.documentElement;
    svg.removeAttribute("width");
    svg.removeAttribute("height");
    svg.classList.add("icon-svg");
    button.innerHTML = "";
    button.appendChild(svg);
  } catch (_e) {
  }
}
function syncIconXLine(button) {
  if (!button || !button.dataset.xline) return;
  const pressed = button.getAttribute("aria-pressed") === "true";
  const line = button.querySelector("#x-line");
  if (line) line.style.display = pressed ? "none" : "";
}
function updateWarnings(state) {
  updateWarningsFromState(state);
}
function getControlLabel(control) {
  if (!control) return null;
  const wrapped = control.closest ? control.closest("label") : null;
  if (wrapped) return wrapped;
  if (control.id) {
    return document.querySelector(`label[for="${control.id}"]`);
  }
  return null;
}
function syncControlLabelVisibility(control) {
  const label = getControlLabel(control);
  if (!label) return;
  label.style.display = "";
  label.classList.toggle("is-disabled", !!control.disabled);
}
function setDisabled(control, disabled) {
  if (!control) return;
  control.disabled = !!disabled;
  syncControlLabelVisibility(control);
}
function setToggleButton(btn, on) {
  if (!btn) return;
  btn.setAttribute("aria-pressed", on ? "true" : "false");
  syncIconXLine(btn);
}
function getToggleLabel(labelKey, collapsed) {
  return t(collapsed ? "actions.expand" : "actions.collapse", { label: t(labelKey) });
}
function applyToggleA11y(btn, labelKey, collapsed) {
  if (!btn) return;
  const text = getToggleLabel(labelKey, collapsed);
  btn.setAttribute("title", text);
  btn.setAttribute("aria-label", text);
}
function isToothPresent(sel) {
  return sel !== "none" && sel !== "implant";
}
function isUnderGum(sel) {
  return sel === "tooth-under-gum";
}
function isExtraction(sel) {
  return sel === "no-tooth-after-extraction";
}
function getDisplayedToothNumber(toothNo) {
  const s = toothState.get(toothNo);
  if (!s || s.toothSelection !== "milktooth") return toothNo;
  const firstDigit = Math.floor(toothNo / 10);
  const secondDigit = toothNo % 10;
  const mappedFirst = firstDigit === 1 ? 5 : firstDigit === 2 ? 6 : firstDigit === 3 ? 7 : 8;
  return mappedFirst * 10 + secondDigit;
}
function updateToothTileNumber(toothNo) {
  const tiles = toothTile.get(toothNo);
  if (!tiles) return;
  const text = toLabel(getDisplayedToothNumber(toothNo), numberingSystem);
  const upper = toothLabelUpper.get(toothNo);
  if (upper) upper.textContent = text;
  const lower = toothLabelLower.get(toothNo);
  if (lower) lower.textContent = text;
}
function updateAllToothTileNumbers() {
  for (const toothNo of ALL_TEETH) {
    updateToothTileNumber(toothNo);
  }
}
function setSelectOptions(selectEl, options, value) {
  if (!selectEl) return;
  selectEl.innerHTML = "";
  for (const opt of options) {
    selectEl.appendChild(el("option", { value: opt.value, text: opt.label }));
  }
  if (options.some((o) => o.value === value)) {
    selectEl.value = value;
  } else {
    selectEl.value = options[0]?.value ?? "";
  }
}
function getEndoOptions(isMilktooth) {
  return [
    { value: "none", label: t("endo.option.none") }
  ];
}
function getFillingOptions(isMilktooth) {
  return [
    { value: "none", label: t("filling.option.none") },
    { value: "amalgam", label: t("filling.option.amalgam") },
    { value: "composite", label: t("filling.option.composite") },
    { value: "gic", label: t("filling.option.gic") },
    { value: "temporary", label: t("filling.option.temporary") }
  ];
}
function getCrownOptions(isImplant) {
  if (isImplant) {
    return [
      { value: "natural", label: t("crown.option.noneImplant") },
      { value: "healing-abutment", label: t("crown.option.healingAbutment") },
      { value: "zircon", label: t("crown.option.zircon") },
      { value: "metal", label: t("crown.option.metal") },
      { value: "temporary", label: t("crown.option.temporary") },
      { value: "locator", label: t("crown.option.locator") },
      { value: "locator-prosthesis", label: t("crown.option.locatorProsthesis") },
      { value: "bar", label: t("crown.option.bar") },
      { value: "bar-prosthesis", label: t("crown.option.barProsthesis") }
    ];
  }
  return [
    { value: "natural", label: t("crown.option.full") },
    { value: "broken", label: t("crown.option.broken") },
    { value: "radix", label: t("crown.option.radix") },
    { value: "emax", label: t("crown.option.emax") },
    { value: "zircon", label: t("crown.option.zircon") },
    { value: "metal", label: t("crown.option.metal") },
    { value: "temporary", label: t("crown.option.temporary") },
    { value: "telescope", label: t("crown.option.telescope") }
  ];
}
function getBrokenCrownVariant(state) {
  const m = !!state.brokenMesial;
  const i = !!state.brokenIncisal;
  const d = !!state.brokenDistal;
  if (m && d && i) return "tooth-broken-mesial-distal-inicisal";
  if (m && d) return "tooth-broken-mesial-distal";
  if (d && i) return "tooth-broken-distal-inicisal";
  if (m && i) return "tooth-broken-mesial-inicisal";
  if (d) return "tooth-broken-distal";
  if (m) return "tooth-broken-mesial";
  if (i) return "tooth-broken-inicisal";
  return null;
}
function getBridgeUnitOptions() {
  return [
    { value: "none", label: t("bridge.option.none") },
    { value: "removable", label: t("bridge.option.removable") },
    { value: "zircon", label: t("bridge.option.zircon") },
    { value: "metal", label: t("bridge.option.metal") },
    { value: "temporary", label: t("bridge.option.temporary") },
    { value: "bar", label: t("bridge.option.bar") },
    { value: "bar-prosthesis", label: t("bridge.option.barProsthesis") }
  ];
}
function getToothSelectOptions() {
  return [
    { value: "none", label: t("toothSelect.none") },
    { value: "tooth-base", label: t("toothSelect.permanent") },
    { value: "milktooth", label: t("toothSelect.milk") },
    { value: "implant", label: t("toothSelect.implant") },
    { value: "tooth-crownprep", label: t("toothSelect.crownPrep") },
    { value: "tooth-under-gum", label: t("toothSelect.underGum") }
  ];
}
function getStatusExtras() {
  if (!STATUS_EXTRAS || !Array.isArray(STATUS_EXTRAS.options)) return [];
  return STATUS_EXTRAS.options.map((opt) => ({
    ...opt,
    label: t(opt.labelKey)
  }));
}
function getStatusExtrasMeta() {
  return STATUS_EXTRAS?.arches || null;
}
function getMobilityOptions() {
  return [
    { value: "none", label: t("mobility.none") }
  ];
}
function applyStateToSvgSingle(toothNo, svg) {
  const state = toothState.get(toothNo);
  if (!state || !svg) return;
  const switchable = ["mods", "tooth-variants", "endos", "surfaces", "restorations", "tooth"];
  for (const gId of switchable) {
    const g = svgGetById(svg, gId);
    if (!g) continue;
    if (g.hasAttribute("data-active")) g.setAttribute("data-active", "1");
  }
  setActive(svgGetById(svg, "tooth-base"), false);
  setActive(svgGetById(svg, "tooth-healthy-pulp"), false);
  setActive(svgGetById(svg, "tooth-inflam-pulp"), false);
  setActive(svgGetById(svg, "tooth-bruxism-wear"), false);
  setActive(svgGetById(svg, "tooth-bruxism-neck-wear"), false);
  setActive(svgGetById(svg, "endo-resection"), false);
  setActive(svgGetById(svg, "milktooth-base"), false);
  setActive(svgGetById(svg, "milktooth-beauty"), false);
  setActive(svgGetById(svg, "milktooth-healthy-pulp"), false);
  setActive(svgGetById(svg, "milktooth-inflam-pulp"), false);
  setActive(svgGetById(svg, "fissure-sealing"), false);
  setActive(svgGetById(svg, "mesial-no-contact-point"), false);
  setActive(svgGetById(svg, "distal-no-contact-point"), false);
  setActive(svgGetById(svg, "no-tooth-after-extraction"), false);
  clearAllInGroup(svg, GROUPS.variants);
  clearAllInGroup(svg, GROUPS.mods);
  clearAllInGroup(svg, GROUPS.endo);
  for (const id of ["caries-subcrown", "caries-buccal", "caries-lingual", "caries-distal", "caries-mesial", "caries-occlusal"]) {
    setActive(svgGetById(svg, id), false);
  }
  for (const mat of ["amalgam", "composite", "gic", "temporary"]) {
    for (const s of GROUPS.fillingSurfaces) {
      setActive(svgGetById(svg, `filling-${mat}-${s}`), false);
    }
  }
  for (const id of ["implant-base", "implant-connector", "implant-healing-abutment", "implant-locator-screw", "implant-bar", "prosthesis", "prosthesis-implant", "prosthesis-implant-crown", "prosthesis-implant-gum", "telescope", "zircon", "metal", "emax-crown", "zircon-crown", "metal-crown", "temporary-crown", "telescope-crown-inside", "telescope-crown-outside", "extraction-plan", "zircon-bridge-connector", "metal-bridge-connector", "temporary-bridge-connector", "telescope-bridge-connector"]) {
    setActive(svgGetById(svg, id), false);
  }
  setActive(svgGetById(svg, "temporary-restorations"), false);
  setActive(svgGetById(svg, "crown-replace"), false);
  setActive(svgGetById(svg, "crown-needed"), false);
  setActive(svgGetById(svg, "missing-closed"), false);
  const hasCrown = state.crownMaterial !== "natural";
  const brokenVariant = state.crownMaterial === "broken" ? getBrokenCrownVariant(state) : null;
  const isImplant = state.toothSelection === "implant";
  const isMilktooth = state.toothSelection === "milktooth";
  const underGum = isUnderGum(state.toothSelection);
  const extraction = isExtraction(state.toothSelection) || state.toothSelection === "none" && state.extractionWound;
  const hasRemovable = state.toothSelection === "none" && state.bridgeUnit === "removable";
  const isNone = state.toothSelection === "none";
  const hasRestoration = hasCrown || hasRemovable;
  const fissureAllowed = state.toothSelection === "tooth-base" && FISSURE_ALLOWED.has(toothNo);
  const contactAllowed = state.toothSelection === "tooth-base" || state.toothSelection === "milktooth" || BROKEN_VARIANTS.has(state.toothSelection);
  const bruxismAllowed = state.toothSelection === "tooth-base" && state.crownMaterial === "natural";
  const extractionPlanAllowed = ["tooth-base", "milktooth", "implant", "tooth-crownprep", "tooth-under-gum"].includes(state.toothSelection);
  setActive(svgGetById(svg, "base"), showBase);
  setActive(svgGetById(svg, "implant"), isImplant);
  setActive(svgGetById(svg, "milktooth"), isMilktooth);
  if (isImplant) {
    setActive(svgGetById(svg, "implant-base"), true);
  } else if (isMilktooth) {
    setActive(svgGetById(svg, "milktooth-base"), true);
    setActive(svgGetById(svg, "milktooth-beauty"), true);
    if (state.pulpInflam) {
      setActive(svgGetById(svg, "milktooth-inflam-pulp"), true);
    } else if (showHealthyPulp) {
      setActive(svgGetById(svg, "milktooth-healthy-pulp"), true);
    }
  } else if (isToothPresent(state.toothSelection)) {
    if (state.toothSelection === "tooth-base") {
      setActive(svgGetById(svg, "tooth-base"), true);
    } else {
      setActive(svgGetById(svg, state.toothSelection), true);
    }
    if (!underGum && !extraction) {
      if (state.pulpInflam) {
        setActive(svgGetById(svg, "tooth-inflam-pulp"), true);
      } else if (showHealthyPulp) {
        setActive(svgGetById(svg, "tooth-healthy-pulp"), true);
      }
    }
  }
  if (brokenVariant && state.toothSelection === "tooth-base") {
    setActive(svgGetById(svg, "tooth-base"), false);
    setActive(svgGetById(svg, brokenVariant), true);
  }
  if (state.crownMaterial === "radix" && state.toothSelection === "tooth-base") {
    setActive(svgGetById(svg, "tooth-base"), false);
    setActive(svgGetById(svg, "tooth-radix"), true);
  }
  if (state.toothSelection === "none" && state.extractionWound) {
    setActive(svgGetById(svg, "no-tooth-after-extraction"), true);
  }
  for (const id of state.mods) {
    setActive(svgGetById(svg, id), true);
  }
  if (state.mobility !== "none" && state.toothSelection !== "none" && !extraction) {
    setActive(svgGetById(svg, "mobility"), true);
  }
  if (state.extractionPlan && extractionPlanAllowed) {
    setActive(svgGetById(svg, "extraction-plan"), true);
  }
  if (state.crownReplace && state.toothSelection === "tooth-base" && ["emax", "zircon", "metal", "temporary", "telescope"].includes(state.crownMaterial)) {
    setActive(svgGetById(svg, "crown-replace"), true);
  }
  if (state.crownNeeded && state.toothSelection === "tooth-base" && ["natural", "broken"].includes(state.crownMaterial)) {
    setActive(svgGetById(svg, "crown-needed"), true);
  }
  if (state.missingClosed && isNone) {
    setActive(svgGetById(svg, "missing-closed"), true);
  }
  if (isToothPresent(state.toothSelection) && !underGum && !extraction) {
    if (state.endo === "endo-medical-filling") {
      setActive(svgGetById(svg, "endo-medical-filling"), true);
    } else if (state.endo === "endo-filling") {
      setActive(svgGetById(svg, "endo-filling"), true);
    } else if (state.endo === "endo-glass-pin") {
      setActive(svgGetById(svg, "endo-filling"), true);
      setActive(svgGetById(svg, "endo-glass-pin"), true);
    } else if (state.endo === "endo-filling-incomplete") {
      setActive(svgGetById(svg, "endo-filling-incomplete"), true);
    } else if (state.endo === "endo-metal-pin") {
      setActive(svgGetById(svg, "endo-filling"), true);
      setActive(svgGetById(svg, "endo-metal-pin"), true);
    }
  }
  if (state.endoResection && isToothPresent(state.toothSelection) && !underGum && !extraction) {
    setActive(svgGetById(svg, "endo-resection"), true);
  }
  if (state.parapulpalPin && isToothPresent(state.toothSelection) && !underGum && !extraction) {
    setActive(svgGetById(svg, "parapulpal-pin"), true);
  }
  if (hasRemovable) {
    setActive(svgGetById(svg, "prosthesis"), true);
    setActive(svgGetById(svg, "prosthesis-crown"), true);
    setActive(svgGetById(svg, "prosthesis-connector"), true);
  }
  if (isImplant) {
    if (state.crownMaterial === "healing-abutment") {
      setActive(svgGetById(svg, "implant-healing-abutment"), true);
    } else if (["zircon", "metal", "temporary"].includes(state.crownMaterial)) {
      setActive(svgGetById(svg, "implant-connector"), true);
    } else if (state.crownMaterial === "locator") {
      setActive(svgGetById(svg, "restorations"), true);
      setActive(svgGetById(svg, "implant"), true);
      setActive(svgGetById(svg, "implant-connector"), true);
      setActive(svgGetById(svg, "implant-locator-screw"), true);
    } else if (state.crownMaterial === "locator-prosthesis") {
      setActive(svgGetById(svg, "restorations"), true);
      setActive(svgGetById(svg, "implant"), true);
      setActive(svgGetById(svg, "implant-connector"), true);
      setActive(svgGetById(svg, "implant-locator-screw"), true);
      setActive(svgGetById(svg, "prosthesis-implant"), true);
      setActive(svgGetById(svg, "prosthesis-implant-crown"), true);
      setActive(svgGetById(svg, "prosthesis-implant-gum"), true);
    } else if (state.crownMaterial === "bar") {
      setActive(svgGetById(svg, "restorations"), true);
      setActive(svgGetById(svg, "implant"), true);
      setActive(svgGetById(svg, "implant-connector"), true);
      setActive(svgGetById(svg, "implant-locator-screw"), true);
      setActive(svgGetById(svg, "implant-bar"), true);
    } else if (state.crownMaterial === "bar-prosthesis") {
      setActive(svgGetById(svg, "restorations"), true);
      setActive(svgGetById(svg, "implant"), true);
      setActive(svgGetById(svg, "implant-connector"), true);
      setActive(svgGetById(svg, "implant-locator-screw"), true);
      setActive(svgGetById(svg, "implant-bar"), true);
      setActive(svgGetById(svg, "prosthesis-implant"), true);
      setActive(svgGetById(svg, "prosthesis-implant-crown"), true);
      setActive(svgGetById(svg, "prosthesis-implant-gum"), true);
    }
  }
  if (isNone) {
    setActive(svgGetById(svg, "restorations"), true);
    if (state.bridgeUnit === "zircon") {
      setActive(svgGetById(svg, "zircon"), true);
      setActive(svgGetById(svg, "zircon-crown"), true);
      setActive(svgGetById(svg, "zircon-bridge-connector"), true);
    } else if (state.bridgeUnit === "metal") {
      setActive(svgGetById(svg, "metal"), true);
      setActive(svgGetById(svg, "metal-crown"), true);
      setActive(svgGetById(svg, "metal-bridge-connector"), true);
    } else if (state.bridgeUnit === "temporary") {
      setActive(svgGetById(svg, "temporary-restorations"), true);
      setActive(svgGetById(svg, "temporary-crown"), true);
      setActive(svgGetById(svg, "temporary-bridge-connector"), true);
    } else if (state.bridgeUnit === "bar") {
      setActive(svgGetById(svg, "implant"), true);
      setActive(svgGetById(svg, "implant-bar"), true);
    } else if (state.bridgeUnit === "bar-prosthesis") {
      setActive(svgGetById(svg, "implant"), true);
      setActive(svgGetById(svg, "implant-bar"), true);
      setActive(svgGetById(svg, "prosthesis-implant"), true);
      setActive(svgGetById(svg, "prosthesis-implant-crown"), true);
      setActive(svgGetById(svg, "prosthesis-implant-gum"), true);
    }
  }
  if (hasCrown && !["healing-abutment", "locator", "locator-prosthesis", "bar", "bar-prosthesis"].includes(state.crownMaterial)) {
    if (state.crownMaterial !== "broken") {
      if (["zircon", "metal", "temporary", "telescope"].includes(state.crownMaterial)) {
        if (state.crownMaterial === "temporary") {
          setActive(svgGetById(svg, "temporary-restorations"), true);
        } else {
          setActive(svgGetById(svg, state.crownMaterial), true);
        }
      }
    }
    if (state.crownMaterial === "emax") {
      setActive(svgGetById(svg, "emax-crown"), true);
    } else if (state.crownMaterial === "zircon") {
      setActive(svgGetById(svg, "zircon-crown"), true);
    } else if (state.crownMaterial === "metal") {
      setActive(svgGetById(svg, "metal-crown"), true);
    } else if (state.crownMaterial === "temporary") {
      setActive(svgGetById(svg, "temporary-crown"), true);
    } else if (state.crownMaterial === "telescope") {
      setActive(svgGetById(svg, "telescope-crown"), true);
      setActive(svgGetById(svg, "telescope-crown-inside"), true);
      setActive(svgGetById(svg, "telescope-crown-outside"), true);
    } else if (state.crownMaterial === "broken") {
      if (brokenVariant) setActive(svgGetById(svg, brokenVariant), true);
    }
  }
  if (state.bridgePillar) {
    if (state.crownMaterial === "zircon") {
      setActive(svgGetById(svg, "zircon"), true);
      setActive(svgGetById(svg, "zircon-bridge-connector"), true);
    } else if (state.crownMaterial === "metal") {
      setActive(svgGetById(svg, "metal"), true);
      setActive(svgGetById(svg, "metal-bridge-connector"), true);
    } else if (state.crownMaterial === "temporary") {
      setActive(svgGetById(svg, "temporary-restorations"), true);
      setActive(svgGetById(svg, "temporary-bridge-connector"), true);
    } else if (state.crownMaterial === "telescope") {
      setActive(svgGetById(svg, "telescope"), true);
      setActive(svgGetById(svg, "telescope-bridge-connector"), true);
    }
  }
  if (!isImplant && !underGum && !extraction && state.toothSelection !== "none") {
    for (const id of state.caries) {
      if (id === "caries-subcrown") {
        if (hasCrown) {
          setActive(svgGetById(svg, "caries-subcrown"), true);
        }
        continue;
      }
      if (hasRestoration || hasCrown) continue;
      setActive(svgGetById(svg, id), true);
    }
    if (state.fillingMaterial !== "none" && !hasCrown) {
      for (const s of state.fillingSurfaces) {
        setActive(svgGetById(svg, `filling-${state.fillingMaterial}-${s}`), true);
      }
    }
    if (state.fillingMaterial !== "none" && !hasRestoration && !hasCrown) {
      for (const s of state.fillingSurfaces) {
        const cariesId = `caries-${s}`;
        setActive(svgGetById(svg, cariesId), false);
      }
    }
  }
  if (fissureAllowed && state.fissureSealing) {
    setActive(svgGetById(svg, "fissure-sealing"), true);
  }
  if (contactAllowed) {
    if (state.contactMesial) setActive(svgGetById(svg, "mesial-no-contact-point"), true);
    if (state.contactDistal) setActive(svgGetById(svg, "distal-no-contact-point"), true);
  }
  if (bruxismAllowed && state.bruxismWear) {
    setActive(svgGetById(svg, "tooth-bruxism-wear"), true);
  }
  if (bruxismAllowed && state.bruxismNeckWear) {
    setActive(svgGetById(svg, "tooth-bruxism-neck-wear"), true);
  }
  const inflammation = svgGetById(svg, "inflammation");
  const endoResection = svgGetById(svg, "endo-resection");
  if (inflammation && endoResection) {
    const parent = inflammation.parentElement;
    if (parent) {
      if (!inflammation.dataset.originalIndex) {
        inflammation.dataset.originalIndex = String(Array.from(parent.children).indexOf(inflammation));
      }
      if (state.endoResection) {
        if (endoResection.parentElement === parent) {
          parent.insertBefore(inflammation, endoResection);
        }
      } else {
        const idx = Number(inflammation.dataset.originalIndex);
        if (Number.isFinite(idx) && idx >= 0) {
          const ref = parent.children[idx] || null;
          parent.insertBefore(inflammation, ref);
        }
      }
    }
  }
  updateWarnings(state);
}
function applyStateToSvg(toothNo) {
  const roots = toothSvgRoot.get(toothNo);
  if (!roots) return;
  for (const svg of roots) {
    applyStateToSvgSingle(toothNo, svg);
  }
  applyPluginOverlays(toothNo);
  updateToothTooltip(toothNo);
}
function applyPluginOverlays(toothNo) {
  if (registeredPlugins.length === 0) return;
  const roots = toothSvgRoot.get(toothNo);
  if (!roots) return;
  const state = toothState.get(toothNo);
  const quadrant = getQuadrant(toothNo);
  for (const svg of roots) {
    let overlayMap = pluginOverlays.get(toothNo);
    if (!overlayMap) {
      overlayMap = /* @__PURE__ */ new Map();
      pluginOverlays.set(toothNo, overlayMap);
    }
    for (const plugin of registeredPlugins) {
      const existing = overlayMap.get(plugin.id);
      if (existing && existing.parentElement) existing.remove();
      const customState = state?.customStates?.[plugin.id];
      let svgContent;
      try {
        svgContent = plugin.renderSvg(toothNo, quadrant, customState);
      } catch (_e) {
        continue;
      }
      if (!svgContent) continue;
      const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
      g.setAttribute("data-plugin", plugin.id);
      g.setAttribute("data-layer", plugin.layer);
      g.innerHTML = svgContent;
      insertPluginGroup(svg, g, plugin.layer);
      overlayMap.set(plugin.id, g);
    }
  }
}
function insertPluginGroup(svg, g, layer) {
  const z = LAYER_Z[layer] ?? 6;
  const existingPlugins = svg.querySelectorAll("g[data-plugin]");
  let inserted = false;
  for (const ep of existingPlugins) {
    const epLayer = ep.getAttribute("data-layer") || "overlay";
    const epZ = LAYER_Z[epLayer] ?? 6;
    if (epZ > z) {
      ep.parentElement?.insertBefore(g, ep);
      inserted = true;
      break;
    }
  }
  if (!inserted) {
    if (layer === "base" && svg.firstChild) {
      svg.insertBefore(g, svg.firstChild);
    } else {
      svg.appendChild(g);
    }
  }
}
function getStateSummary(toothNo) {
  const state = toothState.get(toothNo);
  if (!state) return [];
  const summary = [];
  if (state.toothSelection === "none") summary.push(t("toothSelect.none"));
  else if (state.toothSelection === "milktooth") summary.push(t("toothSelect.milk"));
  else if (state.toothSelection === "implant") summary.push(t("toothSelect.implant"));
  else if (state.toothSelection === "tooth-crownprep") summary.push(t("toothSelect.crownPrep"));
  else if (state.toothSelection === "tooth-under-gum") summary.push(t("toothSelect.underGum"));
  if (state.crownMaterial !== "natural") {
    const crownKey = {
      broken: "crown.option.broken",
      radix: "crown.option.radix",
      emax: "crown.option.emax",
      zircon: "crown.option.zircon",
      metal: "crown.option.metal",
      temporary: "crown.option.temporary",
      telescope: "crown.option.telescope",
      "healing-abutment": "crown.option.healingAbutment",
      locator: "crown.option.locator",
      "locator-prosthesis": "crown.option.locatorProsthesis",
      bar: "crown.option.bar",
      "bar-prosthesis": "crown.option.barProsthesis"
    }[state.crownMaterial];
    if (crownKey) summary.push(t(crownKey));
  }
  if (state.endo !== "none") {
    const endoKey = {
      "endo-medical-filling": "endo.option.medicalFilling",
      "endo-filling": "endo.option.filling",
      "endo-filling-incomplete": "endo.option.incompleteFilling",
      "endo-glass-pin": "endo.option.glassPin",
      "endo-metal-pin": "endo.option.metalPin"
    }[state.endo];
    if (endoKey) summary.push(t(endoKey));
  }
  if (state.fillingMaterial !== "none") {
    const fillKey = {
      amalgam: "filling.option.amalgam",
      composite: "filling.option.composite",
      gic: "filling.option.gic",
      temporary: "filling.option.temporary"
    }[state.fillingMaterial];
    if (fillKey) summary.push(t(fillKey));
  }
  if (state.caries.size > 0) summary.push(t("caries.title"));
  if (state.bridgeUnit !== "none") {
    const bridgeKey = {
      removable: "bridge.option.removable",
      zircon: "bridge.option.zircon",
      metal: "bridge.option.metal",
      temporary: "bridge.option.temporary",
      bar: "bridge.option.bar",
      "bar-prosthesis": "bridge.option.barProsthesis"
    }[state.bridgeUnit];
    if (bridgeKey) summary.push(t(bridgeKey));
  }
  if (state.mods.size > 0) {
    for (const mod of state.mods) {
      if (mod === "parodontal") summary.push(t("mods.parodontal"));
      else if (mod === "inflammation") summary.push(t("mods.periapicalInflammation"));
    }
  }
  if (state.mobility !== "none") summary.push(t("inflammation.mobilityLabel") + " " + t(`mobility.${state.mobility}`));
  if (state.extractionPlan) summary.push(t("tooth.extractionPlan"));
  if (state.crownReplace) summary.push(t("tooth.crownReplace"));
  if (state.crownNeeded) summary.push(t("tooth.crownNeeded"));
  if (state.bridgePillar) summary.push(t("tooth.bridgePillar"));
  if (state.extractionWound) summary.push(t("tooth.extractionWound"));
  if (state.missingClosed) summary.push(t("tooth.missingClosed"));
  const lang = getI18nLanguage();
  for (const plugin of registeredPlugins) {
    const cs = state.customStates?.[plugin.id];
    if (cs !== void 0 && cs !== null) {
      const label = plugin.label[lang] || plugin.label["en"] || plugin.id;
      summary.push(label);
    }
  }
  return summary;
}
function updateToothTooltip(toothNo) {
  const tiles = toothTile.get(toothNo);
  if (!tiles) return;
  const summary = getStateSummary(toothNo);
  const state = toothState.get(toothNo);
  const note = notesEnabled && state?.note ? state.note : "";
  let text = summary.length > 0 ? summary.join(" \xB7 ") : "";
  if (note) text = text ? text + "\n\u{1F4DD} " + note : "\u{1F4DD} " + note;
  for (const tile of tiles) {
    if (text) tile.setAttribute("title", text);
    else tile.removeAttribute("title");
  }
}
function updateToothLabelNoteIcon(toothNo) {
  const state = toothState.get(toothNo);
  const hasNote = notesEnabled && !!state?.note;
  for (const labelMap of [toothLabelUpper, toothLabelLower]) {
    const cell = labelMap.get(toothNo);
    if (!cell) continue;
    let icon = cell.querySelector(".tooth-note-icon");
    if (hasNote) {
      if (!icon) {
        icon = el("span", { class: "tooth-note-icon", "aria-hidden": "true", text: "\u{1F4DD}" });
        cell.appendChild(icon);
      }
    } else {
      if (icon) icon.remove();
    }
  }
}
function getStateWarnings(state) {
  const warnings = [];
  const isPresent = isToothPresent(state.toothSelection);
  const isNone = state.toothSelection === "none";
  const isImplant = state.toothSelection === "implant";
  if (state.endo !== "none" && (isNone || isImplant)) {
    warnings.push(t("warn.endoOnMissing"));
  }
  if (state.fillingMaterial !== "none" && isNone) {
    warnings.push(t("warn.fillingOnMissing"));
  }
  if (state.crownReplace && !["emax", "zircon", "metal", "temporary", "telescope"].includes(state.crownMaterial)) {
    warnings.push(t("warn.crownReplaceNoCrown"));
  }
  if (state.caries.size > 0 && isNone) {
    warnings.push(t("warn.cariesOnMissing"));
  }
  if (state.bridgePillar && !["zircon", "metal", "temporary", "telescope"].includes(state.crownMaterial)) {
    warnings.push(t("warn.pillarNoCrown"));
  }
  return warnings;
}
function updateWarningsFromState(state) {
  const w = $("#warnings");
  if (!w) return;
  const warnings = getStateWarnings(state);
  w.innerHTML = "";
  for (const msg of warnings) {
    const item = el("div", { class: "warning-item", text: "\u26A0 " + msg });
    w.appendChild(item);
  }
}
function syncControlsFromState(state) {
  $("#pulpInflam").checked = !!state.pulpInflam;
  $("#endoResection").checked = !!state.endoResection;
  $("#fissureSealing").checked = !!state.fissureSealing;
  $("#contactMesial").checked = !!state.contactMesial;
  $("#contactDistal").checked = !!state.contactDistal;
  $("#bruxismWear").checked = !!state.bruxismWear;
  $("#bruxismNeckWear").checked = !!state.bruxismNeckWear;
  $("#brokenMesial").checked = !!state.brokenMesial;
  $("#brokenIncisal").checked = !!state.brokenIncisal;
  $("#brokenDistal").checked = !!state.brokenDistal;
  $("#extractionWound").checked = !!state.extractionWound;
  $("#extractionPlan").checked = !!state.extractionPlan;
  $("#parapulpalPin").checked = !!state.parapulpalPin;
  $("#crownReplace").checked = !!state.crownReplace;
  $("#crownNeeded").checked = !!state.crownNeeded;
  $("#missingClosed").checked = !!state.missingClosed;
  $("#bridgePillar").checked = !!state.bridgePillar;
  $("#bridgeUnitSelect").value = state.bridgeUnit;
  const isMilktooth = state.toothSelection === "milktooth";
  const isImplant = state.toothSelection === "implant";
  const underGum = isUnderGum(state.toothSelection);
  const extraction = isExtraction(state.toothSelection) || state.toothSelection === "none" && state.extractionWound;
  $("#toothSelect").value = state.toothSelection;
  setSelectOptions($("#crownSelect"), getCrownOptions(isImplant), state.crownMaterial);
  if ($("#crownSelect").value !== state.crownMaterial) {
    state.crownMaterial = $("#crownSelect").value;
  }
  if (isMilktooth || underGum || extraction) {
    state.crownMaterial = "natural";
    $("#crownSelect").value = "natural";
  }
  setSelectOptions($("#bridgeUnitSelect"), getBridgeUnitOptions(), state.bridgeUnit);
  if ($("#bridgeUnitSelect").value !== state.bridgeUnit) {
    state.bridgeUnit = $("#bridgeUnitSelect").value;
  }
  setSelectOptions($("#endoSelect"), getEndoOptions(isMilktooth), state.endo);
  if ($("#endoSelect").value !== state.endo) {
    state.endo = $("#endoSelect").value;
  }
  setSelectOptions($("#fillingSelect"), getFillingOptions(isMilktooth), state.fillingMaterial);
  if ($("#fillingSelect").value !== state.fillingMaterial) {
    state.fillingMaterial = $("#fillingSelect").value;
  }
  setSelectOptions($("#mobilitySelect"), getMobilityOptions(), state.mobility);
  if ($("#mobilitySelect").value !== state.mobility) {
    state.mobility = $("#mobilitySelect").value;
  }
  $$("#modsChecks input[type=checkbox]").forEach((c) => c.checked = state.mods.has(c.value));
  $$("#cariesChecks input[type=checkbox]").forEach((c) => c.checked = state.caries.has(c.value));
  $$("#fillingSurfaceChecks input[type=checkbox]").forEach((c) => c.checked = state.fillingSurfaces.has(c.value));
  const hasCrown = state.crownMaterial !== "natural";
  const hasRemovable = state.toothSelection === "none" && state.bridgeUnit === "removable";
  const hasRestoration = hasCrown || hasRemovable;
  $$("#cariesChecks input[type=checkbox]").forEach((c) => {
    if (c.value === "caries-subcrown") setDisabled(c, !hasCrown);
    else setDisabled(c, hasRestoration || hasCrown);
  });
  const showFillingSurfaces = state.fillingMaterial !== "none" && !hasCrown;
  $("#fillingSurfaceChecks").classList.toggle("hidden", !showFillingSurfaces);
  const endoDisabled = !isToothPresent(state.toothSelection) || underGum || extraction;
  setDisabled($("#endoSelect"), endoDisabled);
  setDisabled($("#pulpInflam"), endoDisabled);
  setDisabled($("#endoResection"), endoDisabled);
  setDisabled($("#parapulpalPin"), endoDisabled);
  const mobilityDisabled = state.toothSelection === "none" || extraction;
  setDisabled($("#mobilitySelect"), mobilityDisabled);
  const selectedArr = selectedTeeth.size > 0 ? Array.from(selectedTeeth) : [];
  const hiddenSelected = selectedArr.length > 0 && selectedArr.some((tn) => {
    const sel = toothState.get(tn)?.toothSelection;
    return sel === "implant" || sel === "none" || sel === "tooth-under-gum" || sel === "no-tooth-after-extraction";
  });
  const hideByBase = state.toothSelection === "implant" || state.toothSelection === "none" || underGum || extraction || hiddenSelected;
  const noneSelected = selectedArr.length > 0 && selectedArr.some((tn) => toothState.get(tn)?.toothSelection === "none");
  const implantSelected = selectedArr.length > 0 && selectedArr.some((tn) => toothState.get(tn)?.toothSelection === "implant");
  const hideByNone = state.toothSelection === "none" || noneSelected;
  const hideByRadix = state.crownMaterial === "radix";
  $("#cariesSection").classList.toggle("hidden", hideByBase || hideByRadix);
  $("#endoSection").classList.toggle("hidden", hideByBase);
  const hideFillingsByCrown = state.toothSelection === "tooth-base" && hasCrown && state.crownMaterial !== "radix";
  $("#fillingSection").classList.toggle("hidden", hideByBase || hideFillingsByCrown);
  const hideCrownRow = hideByNone || isMilktooth || underGum || extraction;
  $("#crownRow").classList.toggle("hidden", hideCrownRow);
  $("#brokenCrownRow").classList.toggle("hidden", state.crownMaterial !== "broken" || hideCrownRow);
  $("#extractionRow").classList.toggle("hidden", state.toothSelection !== "none");
  $("#inflammationSection").classList.toggle("hidden", hideByNone);
  const selectedList = selectedArr.length > 0 ? selectedArr : activeTooth ? [activeTooth] : [];
  const contactAllowed = selectedList.length > 0 && selectedList.every((tn) => {
    const s = toothState.get(tn);
    const allowedBase = s && (s.toothSelection === "tooth-base" || s.toothSelection === "milktooth" || BROKEN_VARIANTS.has(s.toothSelection));
    if (!allowedBase) return false;
    if (s.toothSelection === "tooth-base" && s.crownMaterial !== "natural") return false;
    return true;
  });
  const bruxismAllowed = selectedList.length > 0 && selectedList.every((tn) => {
    const s = toothState.get(tn);
    return s && s.toothSelection === "tooth-base" && s.crownMaterial === "natural";
  });
  const fissureAllowed = selectedList.length > 0 && selectedList.every((tn) => {
    const s = toothState.get(tn);
    return s && s.toothSelection === "tooth-base" && FISSURE_ALLOWED.has(tn);
  });
  $("#contactPointRow").classList.toggle("hidden", !contactAllowed);
  $("#bruxismRow").classList.toggle("hidden", !bruxismAllowed);
  $("#fissureSealingRow").classList.toggle("hidden", !fissureAllowed);
  const extractionPlanAllowed = selectedList.length > 0 && selectedList.every((tn) => {
    const s = toothState.get(tn);
    return s && ["tooth-base", "milktooth", "implant", "tooth-crownprep", "tooth-under-gum"].includes(s.toothSelection);
  });
  $("#extractionPlanRow").classList.toggle("hidden", !extractionPlanAllowed);
  const crownReplaceAllowed = selectedList.length > 0 && selectedList.every((tn) => {
    const s = toothState.get(tn);
    return s && s.toothSelection === "tooth-base" && ["emax", "zircon", "metal", "temporary", "telescope"].includes(s.crownMaterial);
  });
  $("#crownReplaceRow").classList.toggle("hidden", !crownReplaceAllowed);
  const crownNeededAllowed = selectedList.length > 0 && selectedList.every((tn) => {
    const s = toothState.get(tn);
    return s && s.toothSelection === "tooth-base" && ["natural", "broken"].includes(s.crownMaterial);
  });
  $("#crownNeededRow").classList.toggle("hidden", !crownNeededAllowed);
  const missingClosedAllowed = selectedList.length > 0 && selectedList.every((tn) => {
    const s = toothState.get(tn);
    return s && s.toothSelection === "none";
  });
  $("#missingClosedRow").classList.toggle("hidden", !missingClosedAllowed);
  $("#bridgeUnitRow").classList.toggle("hidden", state.toothSelection !== "none");
  const crownRowHidden = $("#crownRow").classList.contains("hidden");
  const bridgePillarAllowed = !crownRowHidden && (state.crownMaterial === "zircon" || state.crownMaterial === "metal" || state.crownMaterial === "temporary" || state.crownMaterial === "telescope");
  $("#bridgePillarRow").classList.toggle("hidden", !bridgePillarAllowed);
  const extractionPlanRow = $("#extractionPlanRow");
  const brokenCrownRow = $("#brokenCrownRow");
  const bruxismRow = $("#bruxismRow");
  const crownActionsRow = $("#crownActionsRow");
  if (extractionPlanRow && brokenCrownRow && bruxismRow && crownActionsRow) {
    const brokenMode = state.crownMaterial === "broken" && !crownRowHidden;
    if (brokenMode) {
      if (extractionPlanRow.parentElement !== brokenCrownRow) {
        brokenCrownRow.appendChild(extractionPlanRow);
      }
      crownActionsRow.classList.add("hidden");
    } else if (!bruxismRow.classList.contains("hidden")) {
      if (extractionPlanRow.parentElement !== bruxismRow) {
        bruxismRow.appendChild(extractionPlanRow);
      }
      crownActionsRow.classList.add("hidden");
    } else {
      if (extractionPlanRow.parentElement !== crownActionsRow) {
        crownActionsRow.appendChild(extractionPlanRow);
      }
      crownActionsRow.classList.toggle("hidden", !extractionPlanAllowed);
    }
    extractionPlanRow.classList.toggle("hidden", !extractionPlanAllowed);
  }
  const periImplant = state.toothSelection === "implant" || implantSelected;
  const parodontLabel = $("#lbl-parodontal");
  if (parodontLabel) {
    parodontLabel.textContent = periImplant ? t("mods.periimplantitis") : t("mods.parodontal");
  }
  const milkOption = $("#toothSelect").querySelector('option[value="milktooth"]');
  if (milkOption) {
    const anyBlocked = selectedArr.length > 0 ? selectedArr.some((tn) => MILKTOOTH_BLOCKED.has(Number(tn))) : activeTooth ? MILKTOOTH_BLOCKED.has(activeTooth) : false;
    milkOption.disabled = anyBlocked;
  }
  const inflammationLabel = $("#lbl-inflammation");
  if (inflammationLabel) {
    inflammationLabel.textContent = extraction ? t("mods.periodontalInflammation") : t("mods.periapicalInflammation");
  }
  $("#mobilityRow").classList.toggle("hidden", underGum || extraction);
  const parodontalInput = $("#chk-parodontal");
  if (parodontalInput) {
    setDisabled(parodontalInput, extraction);
  }
  if (extraction) {
    const inflammationInput = $("#chk-inflammation");
    if (inflammationInput) setDisabled(inflammationInput, false);
  }
}
function applyToSelected(fn) {
  if (selectedTeeth.size === 0) return;
  for (const toothNo of selectedTeeth) {
    const s = toothState.get(toothNo);
    if (!s) continue;
    fn(s, toothNo);
    applyStateToSvg(toothNo);
    updateToothTileNumber(toothNo);
  }
  if (activeTooth && selectedTeeth.has(activeTooth)) {
    syncControlsFromState(toothState.get(activeTooth));
  }
  if (edentulous && !suppressEdentulousSync) {
    setEdentulous(false);
  }
  updateSelectionFilterButtons();
}
function updateActiveLabel() {
  const label = $("#activeToothLabel");
  if (!label) return;
  if (selectedTeeth.size === 0) {
    label.textContent = t("selection.none");
  } else if (selectedTeeth.size === 1) {
    const toothNo = activeTooth ?? Array.from(selectedTeeth)[0];
    label.textContent = toLabel(getDisplayedToothNumber(toothNo), numberingSystem);
  } else {
    label.textContent = t("selection.count", { count: selectedTeeth.size });
  }
}
function updateSelectionFilterButtons() {
  let hasPresent = false;
  let hasMissing = false;
  let hasPermanent = false;
  let hasMilk = false;
  let hasImplant = false;
  for (const toothNo of ALL_TEETH) {
    const sel = toothState.get(toothNo)?.toothSelection;
    if (sel === "none") {
      hasMissing = true;
    } else {
      hasPresent = true;
    }
    if (sel === "tooth-base") hasPermanent = true;
    if (sel === "milktooth") hasMilk = true;
    if (sel === "implant") hasImplant = true;
  }
  $("#btnSelectAllPresent")?.classList.toggle("is-hidden", !hasPresent);
  $("#btnSelectAllMissing")?.classList.toggle("is-hidden", !hasMissing);
  $("#btnSelectPermanent")?.classList.toggle("is-hidden", !hasPermanent);
  $("#btnSelectMilk")?.classList.toggle("is-hidden", !hasMilk);
  $("#btnSelectImplants")?.classList.toggle("is-hidden", !hasImplant);
}
function setControlsEnabled(enabled) {
  $$(".panel-body input, .panel-body select").forEach((el2) => {
    if (el2.id === "statusExtraSelect") return;
    setDisabled(el2, !enabled);
  });
}
function refreshCheckLabels() {
  for (const opt of MOD_OPTIONS) {
    const label = $(`#lbl-${opt.value}`);
    if (label) label.textContent = t(opt.labelKey);
  }
  for (const opt of CARIES_OPTIONS) {
    const label = $(`#lbl-${opt.value}`);
    if (label) label.textContent = t(opt.labelKey);
  }
  for (const surface of GROUPS.fillingSurfaces) {
    const label = $(`#lbl-${surface}`);
    const key = FILLING_SURFACE_LABELS[surface] || "surface.mesial";
    if (label) label.textContent = t(key);
  }
}
function refreshToothSelectOptions() {
  const toothSelect = $("#toothSelect");
  if (!toothSelect) return;
  const value = toothSelect.value;
  setSelectOptions(toothSelect, getToothSelectOptions(), value);
}
function refreshStatusExtraOptions() {
  const selectEl = $("#statusExtraSelect");
  if (!selectEl) return;
  const statusExtras = getStatusExtras();
  if (!statusExtras.length) return;
  const options = statusExtras.map((opt) => ({ value: opt.id, label: opt.label }));
  const value = selectEl.value || options[0]?.value;
  setSelectOptions(selectEl, options, value);
}
function refreshToggleLabels() {
  const statusCard = $("#statusCard");
  const statusToggle = $("#btnToggleStatusCard");
  if (statusCard && statusToggle) {
    applyToggleA11y(statusToggle, "status.title", statusCard.classList.contains("collapsed"));
  }
  const controlsActions = $("#controlsActions");
  const controlsToggle = $("#btnToggleControlsCard");
  if (controlsActions && controlsToggle) {
    applyToggleA11y(controlsToggle, "panel.controls", controlsActions.classList.contains("hidden"));
  }
  const cardConfig = [
    { card: "#cariesSection", btn: "#btnToggleCariesCard", labelKey: "caries.title" },
    { card: "#fillingSection", btn: "#btnToggleFillingCard", labelKey: "filling.title" },
    { card: "#endoSection", btn: "#btnToggleEndoCard", labelKey: "endo.title" },
    { card: "#inflammationSection", btn: "#btnToggleInflammationCard", labelKey: "inflammation.title" }
  ];
  for (const cfg of cardConfig) {
    const cardEl = $(cfg.card);
    const btnEl = $(cfg.btn);
    if (!cardEl || !btnEl) continue;
    applyToggleA11y(btnEl, cfg.labelKey, cardEl.classList.contains("collapsed"));
  }
}
function refreshAllSelectOptions() {
  refreshToothSelectOptions();
  refreshStatusExtraOptions();
  const state = activeTooth ? toothState.get(activeTooth) : null;
  const isMilktooth = state?.toothSelection === "milktooth";
  const isImplant = state?.toothSelection === "implant";
  const crownEl = $("#crownSelect");
  if (crownEl) setSelectOptions(crownEl, getCrownOptions(isImplant), crownEl.value);
  const bridgeEl = $("#bridgeUnitSelect");
  if (bridgeEl) setSelectOptions(bridgeEl, getBridgeUnitOptions(), bridgeEl.value);
  const endoEl = $("#endoSelect");
  if (endoEl) setSelectOptions(endoEl, getEndoOptions(isMilktooth), endoEl.value);
  const fillingEl = $("#fillingSelect");
  if (fillingEl) setSelectOptions(fillingEl, getFillingOptions(isMilktooth), fillingEl.value);
  const mobilityEl = $("#mobilitySelect");
  if (mobilityEl) setSelectOptions(mobilityEl, getMobilityOptions(), mobilityEl.value);
}
function refreshLocalizedContent() {
  refreshAllSelectOptions();
  refreshCheckLabels();
  refreshToggleLabels();
  updateActiveLabel();
  refreshArchToggleLabels();
  if (activeTooth) {
    syncControlsFromState(toothState.get(activeTooth));
  }
}
function updateSelectionUI() {
  $$(".tooth-tile").forEach((tile) => {
    const toothNo = Number(tile.dataset.tooth);
    const isSelected = selectedTeeth.has(toothNo);
    tile.classList.toggle("active", isSelected);
    if (tile.hasAttribute("role")) tile.setAttribute("aria-selected", String(isSelected));
  });
  updateSelectionFilterButtons();
  updateActiveLabel();
  if (activeTooth && selectedTeeth.has(activeTooth)) {
    setControlsEnabled(true);
    syncControlsFromState(toothState.get(activeTooth));
  } else {
    syncControlsFromState(defaultState());
    setControlsEnabled(false);
  }
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("odontogram:selection-change", {
        detail: {
          activeTooth,
          selectedTeeth: Array.from(selectedTeeth)
        }
      })
    );
  }
}
function showZoomPopover(toothNo) {
  hideZoomPopover();
  hideContextMenu();
  const svgs = toothSvgRoot.get(toothNo);
  const sideSvg = svgs?.find((_s, i) => {
    const tiles = toothTile.get(toothNo);
    return tiles?.[i]?.classList.contains("side-view");
  }) || svgs?.[0];
  if (!sideSvg) return;
  const overlay = el("div", { class: "odon-zoom-overlay" });
  const popover = el("div", { class: "odon-zoom-popover" });
  const label = toLabel(toothNo, numberingSystem);
  const header = el("div", { class: "odon-zoom-header" });
  const title = el("span", { class: "odon-zoom-title", text: t("touch.zoom.title", { tooth: label }) });
  const closeBtn = el("button", { class: "odon-zoom-close", text: "\u2715" });
  closeBtn.addEventListener("click", hideZoomPopover);
  header.appendChild(title);
  header.appendChild(closeBtn);
  const svgWrap = el("div", { class: "odon-zoom-svg" });
  const clonedSvg = sideSvg.cloneNode(true);
  svgWrap.appendChild(clonedSvg);
  const actions = el("div", { class: "odon-zoom-actions" });
  const isSelected = selectedTeeth.has(toothNo);
  const selectBtn = el("button", {
    class: isSelected ? "odon-zoom-btn active" : "odon-zoom-btn",
    text: isSelected ? t("touch.zoom.deselect") : t("touch.zoom.select")
  });
  selectBtn.addEventListener("click", () => {
    if (selectedTeeth.has(toothNo)) {
      selectedTeeth.delete(toothNo);
      if (activeTooth === toothNo) activeTooth = selectedTeeth.values().next().value ?? null;
    } else {
      selectedTeeth.add(toothNo);
      activeTooth = toothNo;
    }
    updateSelectionUI();
    hideZoomPopover();
  });
  const infoBtn = el("button", { class: "odon-zoom-btn", text: t("touch.zoom.info") });
  infoBtn.addEventListener("click", () => {
    selectedTeeth = /* @__PURE__ */ new Set([toothNo]);
    activeTooth = toothNo;
    updateSelectionUI();
    hideZoomPopover();
    const panel = $("#controlsActions");
    if (panel) panel.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  const resetBtn = el("button", { class: "odon-zoom-btn danger", text: t("touch.ctx.reset") });
  resetBtn.addEventListener("click", () => {
    toothState.set(toothNo, defaultState());
    applyStateToSvg(toothNo);
    updateToothTileNumber(toothNo);
    if (activeTooth === toothNo) syncControlsFromState(toothState.get(toothNo));
    hideZoomPopover();
  });
  const closeActionBtn = el("button", { class: "odon-zoom-btn", text: t("touch.zoom.close") });
  closeActionBtn.addEventListener("click", hideZoomPopover);
  actions.appendChild(selectBtn);
  actions.appendChild(infoBtn);
  if (notesEnabled && !readOnly) {
    const noteBtn = el("button", { class: "odon-zoom-btn", text: t("note.title") });
    noteBtn.addEventListener("click", () => {
      hideZoomPopover();
      showNoteEditor(toothNo);
    });
    actions.appendChild(noteBtn);
  }
  actions.appendChild(resetBtn);
  actions.appendChild(closeActionBtn);
  popover.appendChild(header);
  popover.appendChild(svgWrap);
  popover.appendChild(actions);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) hideZoomPopover();
  });
  overlay.appendChild(popover);
  document.body.appendChild(overlay);
}
function hideZoomPopover() {
  const overlay = document.querySelector(".odon-zoom-overlay");
  if (overlay) overlay.remove();
}
function showContextMenu(toothNo, touch) {
  hideContextMenu();
  hideZoomPopover();
  const menu = el("div", { class: "odon-ctx-menu" });
  const isSelected = selectedTeeth.has(toothNo);
  if (isSelected) {
    const multiItem = el("button", { class: "odon-ctx-item", text: t("touch.ctx.deselect") });
    multiItem.addEventListener("click", () => {
      selectedTeeth.delete(toothNo);
      if (activeTooth === toothNo) activeTooth = selectedTeeth.values().next().value ?? null;
      updateSelectionUI();
      hideContextMenu();
    });
    menu.appendChild(multiItem);
  } else {
    const selectItem = el("button", { class: "odon-ctx-item", text: t("touch.ctx.select") });
    selectItem.addEventListener("click", () => {
      selectedTeeth = /* @__PURE__ */ new Set([toothNo]);
      activeTooth = toothNo;
      updateSelectionUI();
      hideContextMenu();
    });
    menu.appendChild(selectItem);
    if (selectedTeeth.size > 0) {
      const multiItem = el("button", { class: "odon-ctx-item", text: t("touch.ctx.multiSelect") });
      multiItem.addEventListener("click", () => {
        selectedTeeth.add(toothNo);
        activeTooth = toothNo;
        updateSelectionUI();
        hideContextMenu();
      });
      menu.appendChild(multiItem);
    }
  }
  menu.appendChild(el("div", { class: "odon-ctx-divider" }));
  const resetItem = el("button", { class: "odon-ctx-item danger", text: t("touch.ctx.reset") });
  resetItem.addEventListener("click", () => {
    toothState.set(toothNo, defaultState());
    applyStateToSvg(toothNo);
    updateToothTileNumber(toothNo);
    if (activeTooth === toothNo) syncControlsFromState(toothState.get(toothNo));
    hideContextMenu();
  });
  menu.appendChild(resetItem);
  const x = Math.min(touch.clientX, window.innerWidth - 200);
  const y = Math.min(touch.clientY - 10, window.innerHeight - 200);
  menu.style.left = x + "px";
  menu.style.top = y + "px";
  document.body.appendChild(menu);
  const closeHandler = (e) => {
    if (!menu.contains(e.target)) {
      hideContextMenu();
      document.removeEventListener("touchstart", closeHandler, true);
      document.removeEventListener("click", closeHandler, true);
    }
  };
  setTimeout(() => {
    document.addEventListener("touchstart", closeHandler, true);
    document.addEventListener("click", closeHandler, true);
  }, 50);
}
function hideContextMenu() {
  const menu = document.querySelector(".odon-ctx-menu");
  if (menu) menu.remove();
}
function showNoteEditor(toothNo) {
  hideNoteEditor();
  if (!notesEnabled || readOnly) return;
  const state = toothState.get(toothNo);
  if (!state) return;
  const tiles = toothTile.get(toothNo);
  const anchorTile = tiles?.find((t2) => t2.classList.contains("side-view")) || tiles?.[0];
  const label = toLabel(toothNo, numberingSystem);
  const popover = el("div", { class: "odon-note-popover" });
  const header = el("div", { class: "odon-note-header" });
  const title = el("span", { class: "odon-note-title", text: t("note.title") + " \u2014 " + label });
  const closeBtn = el("button", { class: "odon-zoom-close", text: "\u2715" });
  closeBtn.addEventListener("click", hideNoteEditor);
  header.appendChild(title);
  header.appendChild(closeBtn);
  const textarea = document.createElement("textarea");
  textarea.className = "odon-note-textarea";
  textarea.value = state.note || "";
  textarea.placeholder = t("note.placeholder");
  textarea.rows = 3;
  const actions = el("div", { class: "odon-note-actions" });
  const saveBtn = el("button", { class: "odon-zoom-btn", text: t("note.save") });
  saveBtn.addEventListener("click", () => {
    state.note = textarea.value.trim();
    updateToothTooltip(toothNo);
    updateToothLabelNoteIcon(toothNo);
    hideNoteEditor();
  });
  const deleteBtn = el("button", { class: "odon-zoom-btn danger", text: t("note.delete") });
  deleteBtn.addEventListener("click", () => {
    state.note = "";
    updateToothTooltip(toothNo);
    updateToothLabelNoteIcon(toothNo);
    hideNoteEditor();
  });
  actions.appendChild(saveBtn);
  actions.appendChild(deleteBtn);
  popover.appendChild(header);
  popover.appendChild(textarea);
  popover.appendChild(actions);
  const backdrop = el("div", { class: "odon-note-backdrop" });
  backdrop.addEventListener("click", hideNoteEditor);
  backdrop.appendChild(popover);
  document.body.appendChild(backdrop);
  popover.addEventListener("click", (e) => e.stopPropagation());
  if (anchorTile) {
    const rect = anchorTile.getBoundingClientRect();
    const pw = 320;
    let left = rect.left + rect.width / 2 - pw / 2;
    let top = rect.bottom + 8;
    if (left < 8) left = 8;
    if (left + pw > window.innerWidth - 8) left = window.innerWidth - pw - 8;
    if (top + 200 > window.innerHeight) top = rect.top - 208;
    popover.style.position = "fixed";
    popover.style.left = left + "px";
    popover.style.top = top + "px";
  }
  textarea.focus();
}
function hideNoteEditor() {
  const backdrop = document.querySelector(".odon-note-backdrop");
  if (backdrop) backdrop.remove();
}
function getTouchDist(t1, t2) {
  const dx = t1.clientX - t2.clientX;
  const dy = t1.clientY - t2.clientY;
  return Math.sqrt(dx * dx + dy * dy);
}
function onGridTouchStart(e) {
  if (e.touches.length === 2) {
    isPinching = true;
    pinchStartDist = getTouchDist(e.touches[0], e.touches[1]);
    const grid = $("#toothGrid");
    if (grid) grid.classList.add("odon-pinch-active");
    e.preventDefault();
  }
}
function onGridTouchMove(e) {
  if (isPinching && e.touches.length === 2) {
    const dist = getTouchDist(e.touches[0], e.touches[1]);
    const scale = Math.max(0.5, Math.min(3, dist / pinchStartDist * pinchScale));
    const grid = $("#toothGrid");
    if (grid) grid.style.transform = `scale(${scale})`;
    e.preventDefault();
  }
}
function onGridTouchEnd(e) {
  if (isPinching && e.touches.length < 2) {
    isPinching = false;
    const grid = $("#toothGrid");
    if (grid) {
      const match = grid.style.transform.match(/scale\(([\d.]+)\)/);
      pinchScale = match ? parseFloat(match[1]) : 1;
      if (pinchScale > 0.9 && pinchScale < 1.1) {
        pinchScale = 1;
        grid.style.transform = "";
        grid.classList.remove("odon-pinch-active");
      }
    }
  }
}
function buildArchToggle() {
  const grid = $("#toothGrid");
  if (!grid) return;
  if (archToggleBar) archToggleBar.remove();
  archToggleBar = el("div", { class: "odon-arch-toggle" });
  const btnUpper = el("button", { class: "odon-arch-btn", text: t("touch.arch.upper") });
  const btnLower = el("button", { class: "odon-arch-btn", text: t("touch.arch.lower") });
  const btnBoth = el("button", { class: "odon-arch-btn active", text: t("touch.arch.both") });
  function setArch(mode) {
    archMode = mode;
    btnUpper.classList.toggle("active", mode === "upper");
    btnLower.classList.toggle("active", mode === "lower");
    btnBoth.classList.toggle("active", mode === "both");
    grid.classList.toggle("odon-arch-upper", mode === "upper");
    grid.classList.toggle("odon-arch-lower", mode === "lower");
  }
  btnUpper.addEventListener("click", () => setArch(archMode === "upper" ? "both" : "upper"));
  btnLower.addEventListener("click", () => setArch(archMode === "lower" ? "both" : "lower"));
  btnBoth.addEventListener("click", () => setArch("both"));
  archToggleBar.appendChild(btnUpper);
  archToggleBar.appendChild(btnBoth);
  archToggleBar.appendChild(btnLower);
  grid.parentElement?.insertBefore(archToggleBar, grid);
}
function refreshArchToggleLabels() {
  if (!archToggleBar) return;
  const btns = archToggleBar.querySelectorAll(".odon-arch-btn");
  if (btns[0]) btns[0].textContent = t("touch.arch.upper");
  if (btns[1]) btns[1].textContent = t("touch.arch.both");
  if (btns[2]) btns[2].textContent = t("touch.arch.lower");
}
function addTouchToTile(tile, toothNo) {
  tile.addEventListener("touchstart", (e) => {
    if (readOnly) return;
    if (e.touches.length !== 1) return;
    touchStartTime = Date.now();
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    touchMoved = false;
    const touch = e.touches[0];
    longPressTimer = setTimeout(() => {
      if (!touchMoved) {
        showContextMenu(toothNo, touch);
      }
    }, LONG_PRESS_MS);
  }, { passive: true });
  tile.addEventListener("touchmove", (e) => {
    if (e.touches.length !== 1) return;
    const dx = e.touches[0].clientX - touchStartX;
    const dy = e.touches[0].clientY - touchStartY;
    if (Math.abs(dx) > TOUCH_MOVE_THRESHOLD || Math.abs(dy) > TOUCH_MOVE_THRESHOLD) {
      touchMoved = true;
      if (longPressTimer) {
        clearTimeout(longPressTimer);
        longPressTimer = null;
      }
    }
  }, { passive: true });
  tile.addEventListener("touchend", (e) => {
    if (readOnly) return;
    if (longPressTimer) {
      clearTimeout(longPressTimer);
      longPressTimer = null;
    }
    const elapsed = Date.now() - touchStartTime;
    if (!touchMoved && elapsed < LONG_PRESS_MS) {
      e.preventDefault();
      showZoomPopover(toothNo);
    }
  });
}
function onToothClick(toothNo, evt) {
  if (readOnly) return;
  const multi = evt.metaKey || evt.ctrlKey;
  if (multi) {
    if (selectedTeeth.has(toothNo)) {
      selectedTeeth.delete(toothNo);
    } else {
      selectedTeeth.add(toothNo);
      activeTooth = toothNo;
    }
  } else {
    selectedTeeth = /* @__PURE__ */ new Set([toothNo]);
    activeTooth = toothNo;
  }
  if (activeTooth && !selectedTeeth.has(activeTooth)) {
    activeTooth = selectedTeeth.values().next().value ?? null;
  }
  updateSelectionUI();
}
var NAV_ROWS = [
  [18, 17, 16, 15, 14, 13, 12, 11, 21, 22, 23, 24, 25, 26, 27, 28],
  [48, 47, 46, 45, 44, 43, 42, 41, 31, 32, 33, 34, 35, 36, 37, 38]
];
function isTileNavigable(toothNo) {
  const tiles = toothTile.get(toothNo);
  if (!tiles || tiles.length === 0) return false;
  return tiles.some((t2) => !t2.classList.contains("wisdom-hidden") && !t2.classList.contains("placeholder"));
}
function navigateToTooth(currentTooth, direction) {
  const rowIdx = NAV_ROWS.findIndex((r) => r.includes(currentTooth));
  if (rowIdx < 0) return;
  const row = NAV_ROWS[rowIdx];
  const colIdx = row.indexOf(currentTooth);
  let targetTooth = null;
  if (direction === "ArrowRight") {
    for (let i = colIdx + 1; i < row.length; i++) {
      if (isTileNavigable(row[i])) {
        targetTooth = row[i];
        break;
      }
    }
  } else if (direction === "ArrowLeft") {
    for (let i = colIdx - 1; i >= 0; i--) {
      if (isTileNavigable(row[i])) {
        targetTooth = row[i];
        break;
      }
    }
  } else if (direction === "ArrowDown") {
    if (rowIdx < NAV_ROWS.length - 1) {
      const nextRow = NAV_ROWS[rowIdx + 1];
      const nextCol = Math.min(colIdx, nextRow.length - 1);
      for (let i = nextCol; i < nextRow.length; i++) {
        if (isTileNavigable(nextRow[i])) {
          targetTooth = nextRow[i];
          break;
        }
      }
      if (!targetTooth) {
        for (let i = nextCol - 1; i >= 0; i--) {
          if (isTileNavigable(nextRow[i])) {
            targetTooth = nextRow[i];
            break;
          }
        }
      }
    }
  } else if (direction === "ArrowUp") {
    if (rowIdx > 0) {
      const prevRow = NAV_ROWS[rowIdx - 1];
      const prevCol = Math.min(colIdx, prevRow.length - 1);
      for (let i = prevCol; i < prevRow.length; i++) {
        if (isTileNavigable(prevRow[i])) {
          targetTooth = prevRow[i];
          break;
        }
      }
      if (!targetTooth) {
        for (let i = prevCol - 1; i >= 0; i--) {
          if (isTileNavigable(prevRow[i])) {
            targetTooth = prevRow[i];
            break;
          }
        }
      }
    }
  }
  if (targetTooth !== null) {
    const tiles = toothTile.get(targetTooth);
    const sideTile = tiles?.find((t2) => t2.classList.contains("side-view"));
    if (sideTile) sideTile.focus();
  }
}
function onToothKeydown(toothNo, evt) {
  if (readOnly) return;
  switch (evt.key) {
    case "Enter":
    case " ":
      evt.preventDefault();
      onToothClick(toothNo, evt);
      break;
    case "ArrowRight":
    case "ArrowLeft":
    case "ArrowUp":
    case "ArrowDown":
      evt.preventDefault();
      navigateToTooth(toothNo, evt.key);
      break;
    case "Escape":
      evt.preventDefault();
      clearSelection();
      break;
  }
}
function updateToothTileVisibility() {
  const hiddenSet = /* @__PURE__ */ new Set([18, 28, 38, 48]);
  for (const toothNo of ALL_TEETH) {
    const tiles = toothTile.get(toothNo);
    if (!tiles) continue;
    const hide = !wisdomVisible && hiddenSet.has(toothNo);
    for (const tile of tiles) {
      tile.classList.toggle("wisdom-hidden", hide);
      if (tile.hasAttribute("role")) {
        tile.setAttribute("tabindex", hide || readOnly ? "-1" : "0");
        if (hide) tile.setAttribute("aria-hidden", "true");
        else tile.removeAttribute("aria-hidden");
      }
    }
  }
  selectedTeeth = new Set([...selectedTeeth].filter((tn) => {
    const tiles = toothTile.get(tn);
    if (!tiles || tiles.length === 0) return true;
    return !tiles.every((tile) => tile.classList.contains("wisdom-hidden"));
  }));
  if (activeTooth && !selectedTeeth.has(activeTooth)) {
    activeTooth = selectedTeeth.values().next().value ?? null;
  }
  updateSelectionUI();
}
function setEdentulous(on) {
  edentulous = on;
  setToggleButton($("#btnEdentulous"), edentulous);
  if (edentulous) {
    suppressEdentulousSync = true;
    for (const toothNo of ALL_TEETH) {
      const s = defaultState();
      s.toothSelection = "none";
      toothState.set(toothNo, s);
      applyStateToSvg(toothNo);
      updateToothTileNumber(toothNo);
    }
    suppressEdentulousSync = false;
    if (activeTooth) syncControlsFromState(toothState.get(activeTooth));
  }
}
function setWisdomVisible(on) {
  wisdomVisible = !!on;
  setToggleButton($("#btnWisdomVisible"), wisdomVisible);
  updateToothTileVisibility();
}
function setShowBase(on) {
  showBase = on;
  setToggleButton($("#btnBoneVisible"), showBase);
  for (const toothNo of ALL_TEETH) {
    applyStateToSvg(toothNo);
  }
}
function setOcclusalVisible(on) {
  occlusalVisible = !!on;
  setToggleButton($("#btnOcclView"), occlusalVisible);
  $$(".tooth-tile.occl-view").forEach((tile) => {
    tile.classList.toggle("occl-hidden", !occlusalVisible);
  });
}
function setHealthyPulpVisible(on) {
  showHealthyPulp = !!on;
  setToggleButton($("#btnPulpVisible"), showHealthyPulp);
  for (const toothNo of ALL_TEETH) {
    applyStateToSvg(toothNo);
  }
}
function serializeState(s) {
  return {
    toothSelection: s.toothSelection,
    pulpInflam: !!s.pulpInflam,
    endoResection: !!s.endoResection,
    mods: Array.from(s.mods || []),
    endo: s.endo,
    caries: Array.from(s.caries || []),
    fillingMaterial: s.fillingMaterial,
    fillingSurfaces: Array.from(s.fillingSurfaces || []),
    fissureSealing: !!s.fissureSealing,
    contactMesial: !!s.contactMesial,
    contactDistal: !!s.contactDistal,
    bruxismWear: !!s.bruxismWear,
    bruxismNeckWear: !!s.bruxismNeckWear,
    brokenMesial: !!s.brokenMesial,
    brokenIncisal: !!s.brokenIncisal,
    brokenDistal: !!s.brokenDistal,
    extractionWound: !!s.extractionWound,
    extractionPlan: !!s.extractionPlan,
    parapulpalPin: !!s.parapulpalPin,
    crownReplace: !!s.crownReplace,
    crownNeeded: !!s.crownNeeded,
    missingClosed: !!s.missingClosed,
    bridgePillar: !!s.bridgePillar,
    bridgeUnit: s.bridgeUnit,
    mobility: s.mobility,
    crownMaterial: s.crownMaterial,
    ...Object.keys(s.customStates || {}).length > 0 ? { customStates: s.customStates } : {},
    ...s.note ? { note: s.note } : {}
  };
}
var VALID_TOOTH_SELECTION = /* @__PURE__ */ new Set(["none", "tooth-base", "milktooth", "implant", "tooth-crownprep", "tooth-under-gum", "no-tooth-after-extraction"]);
var VALID_ENDO = /* @__PURE__ */ new Set(["none", "endo-medical-filling", "endo-filling", "endo-filling-incomplete", "endo-glass-pin", "endo-metal-pin"]);
var VALID_FILLING_MATERIAL = /* @__PURE__ */ new Set(["none", "amalgam", "composite", "gic", "temporary"]);
var VALID_BRIDGE_UNIT = /* @__PURE__ */ new Set(["none", "removable", "zircon", "metal", "temporary", "bar", "bar-prosthesis"]);
var VALID_MOBILITY = /* @__PURE__ */ new Set(["none", "m1", "m2", "m3"]);
var VALID_CROWN_MATERIAL = /* @__PURE__ */ new Set(["natural", "broken", "radix", "emax", "zircon", "metal", "temporary", "telescope", "healing-abutment", "locator", "locator-prosthesis", "bar", "bar-prosthesis"]);
var VALID_MODS = /* @__PURE__ */ new Set(["inflammation", "parodontal", "mobility"]);
var VALID_CARIES = /* @__PURE__ */ new Set(["caries-subcrown", "caries-buccal", "caries-lingual", "caries-mesial", "caries-distal", "caries-occlusal"]);
var VALID_FILLING_SURFACES = /* @__PURE__ */ new Set(["buccal", "lingual", "mesial", "distal", "occlusal"]);
function filterSet(arr, allowed) {
  if (!Array.isArray(arr)) return /* @__PURE__ */ new Set();
  return new Set(arr.filter((v) => typeof v === "string" && allowed.has(v)));
}
function validateEnum(value, allowed, fallback) {
  return typeof value === "string" && allowed.has(value) ? value : fallback;
}
function hydrateState(raw) {
  const s = defaultState();
  if (!raw || typeof raw !== "object") return s;
  s.toothSelection = validateEnum(raw.toothSelection, VALID_TOOTH_SELECTION, s.toothSelection);
  s.pulpInflam = !!raw.pulpInflam;
  s.endoResection = !!raw.endoResection;
  s.mods = filterSet(raw.mods, VALID_MODS);
  s.endo = validateEnum(raw.endo, VALID_ENDO, s.endo);
  s.caries = filterSet(raw.caries, VALID_CARIES);
  s.fillingMaterial = validateEnum(raw.fillingMaterial, VALID_FILLING_MATERIAL, s.fillingMaterial);
  s.fillingSurfaces = filterSet(raw.fillingSurfaces, VALID_FILLING_SURFACES);
  s.fissureSealing = !!raw.fissureSealing;
  s.contactMesial = !!raw.contactMesial;
  s.contactDistal = !!raw.contactDistal;
  s.bruxismWear = !!raw.bruxismWear;
  s.bruxismNeckWear = !!raw.bruxismNeckWear;
  s.brokenMesial = !!raw.brokenMesial;
  s.brokenIncisal = !!raw.brokenIncisal;
  s.brokenDistal = !!raw.brokenDistal;
  s.extractionWound = !!raw.extractionWound;
  s.extractionPlan = !!raw.extractionPlan;
  s.parapulpalPin = !!raw.parapulpalPin;
  s.crownReplace = !!raw.crownReplace;
  s.crownNeeded = !!raw.crownNeeded;
  s.missingClosed = !!raw.missingClosed;
  s.bridgePillar = !!raw.bridgePillar;
  s.bridgeUnit = validateEnum(raw.bridgeUnit, VALID_BRIDGE_UNIT, s.bridgeUnit);
  s.mobility = validateEnum(raw.mobility, VALID_MOBILITY, s.mobility);
  s.crownMaterial = validateEnum(raw.crownMaterial, VALID_CROWN_MATERIAL, s.crownMaterial);
  if (typeof raw.note === "string") s.note = raw.note;
  if (raw.customStates && typeof raw.customStates === "object") {
    const validIds = new Set(registeredPlugins.map((p) => p.id));
    for (const [key, val] of Object.entries(raw.customStates)) {
      if (validIds.has(key)) {
        s.customStates[key] = val;
      }
    }
  }
  return s;
}
function exportStatus() {
  const teeth = {};
  for (const toothNo of ALL_TEETH) {
    const s = toothState.get(toothNo) ?? defaultState();
    teeth[toothNo] = serializeState(s);
  }
  const payload = {
    version: "1.3",
    globals: {
      wisdomVisible,
      showBase,
      occlusalVisible,
      showHealthyPulp,
      edentulous
    },
    teeth
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const stamp = (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[:T]/g, "-");
  a.href = url;
  a.download = `odontogram-status-${stamp}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}
function importStatus(data) {
  if (!data || typeof data !== "object") return;
  const teeth = data.teeth || {};
  for (const toothNo of ALL_TEETH) {
    const raw = teeth[toothNo];
    toothState.set(toothNo, hydrateState(raw));
    applyStateToSvg(toothNo);
    updateToothTileNumber(toothNo);
    updateToothLabelNoteIcon(toothNo);
  }
  if (data.globals) {
    if (typeof data.globals.wisdomVisible === "boolean") setWisdomVisible(data.globals.wisdomVisible);
    if (typeof data.globals.showBase === "boolean") setShowBase(data.globals.showBase);
    if (typeof data.globals.occlusalVisible === "boolean") setOcclusalVisible(data.globals.occlusalVisible);
    if (typeof data.globals.showHealthyPulp === "boolean") setHealthyPulpVisible(data.globals.showHealthyPulp);
    if (typeof data.globals.edentulous === "boolean") {
      edentulous = data.globals.edentulous;
      setToggleButton($("#btnEdentulous"), edentulous);
    }
  }
  updateSelectionFilterButtons();
  updateSelectionUI();
}
function getStatusPayload() {
  const teeth = {};
  for (const toothNo of ALL_TEETH) {
    const s = toothState.get(toothNo) ?? defaultState();
    teeth[String(toothNo)] = serializeState(s);
  }
  return {
    version: "1.3",
    globals: {
      wisdomVisible,
      showBase,
      occlusalVisible,
      showHealthyPulp,
      edentulous
    },
    teeth
  };
}
function applyStatusExtra(option) {
  if (!option) return;
  const meta = getStatusExtrasMeta();
  const archTeeth = (arch) => meta?.[arch] || [];
  const archWisdom = (arch) => meta?.wisdom?.[arch] || [];
  const applyChanges = (teeth, fn) => {
    for (const toothNo of teeth) {
      const s = toothState.get(toothNo) ?? defaultState();
      const next = fn(s, toothNo) || s;
      toothState.set(toothNo, next);
      applyStateToSvg(toothNo);
      updateToothTileNumber(toothNo);
    }
    if (activeTooth) {
      syncControlsFromState(toothState.get(activeTooth));
    }
    updateSelectionFilterButtons();
  };
  const setBridgeCrown = (s, material) => {
    s.crownMaterial = material;
    s.bridgePillar = true;
    s.brokenMesial = false;
    s.brokenIncisal = false;
    s.brokenDistal = false;
  };
  if (option.type === "span") {
    applyChanges(option.teeth || [], (s) => {
      if (s.toothSelection === "tooth-base") {
        setBridgeCrown(s, option.material);
      } else if (s.toothSelection === "none") {
        s.bridgeUnit = option.material;
      }
    });
    return;
  }
  if (option.type === "arch-bridge") {
    const teeth = archTeeth(option.arch);
    const wisdom = new Set(archWisdom(option.arch));
    const present = teeth.filter((tn) => toothState.get(tn)?.toothSelection === "tooth-base");
    if (present.length >= 2) {
      const first = present[0];
      const last = present[present.length - 1];
      const startIdx = teeth.indexOf(first);
      const endIdx = teeth.indexOf(last);
      const between = startIdx < endIdx ? teeth.slice(startIdx + 1, endIdx) : [];
      applyChanges(teeth, (s, tn) => {
        if (wisdom.has(tn)) return;
        if (s.toothSelection === "tooth-base") {
          setBridgeCrown(s, option.material);
        } else if (s.toothSelection === "none" && between.includes(tn)) {
          s.bridgeUnit = option.missingMaterial || option.material;
        }
      });
    } else {
      applyChanges(teeth, (s, tn) => {
        if (wisdom.has(tn)) return;
        if (s.toothSelection === "tooth-base") {
          setBridgeCrown(s, option.material);
        }
      });
    }
    return;
  }
  if (option.type === "partial-removable") {
    const teeth = archTeeth(option.arch);
    const wisdom = new Set(archWisdom(option.arch));
    applyChanges(teeth, (s, tn) => {
      if (wisdom.has(tn)) return;
      if (s.toothSelection === "none") {
        s.bridgeUnit = "removable";
      }
    });
    return;
  }
  if (option.type === "full-removable") {
    const teeth = archTeeth(option.arch);
    const wisdom = new Set(archWisdom(option.arch));
    applyChanges(teeth, (_s, tn) => {
      const next = defaultState();
      next.toothSelection = "none";
      next.bridgeUnit = wisdom.has(tn) ? "none" : "removable";
      return next;
    });
    return;
  }
  if (option.type === "bar-denture") {
    const implantTeeth = option.implants || [];
    const missingTeeth = option.missing || [];
    const archTeeth2 = option.arch ? getStatusExtrasMeta()?.[option.arch] || [] : [];
    const sevenEight = archTeeth2.filter((tn) => [7, 8].includes(tn % 10));
    applyChanges(implantTeeth, (_s, _tn) => {
      const next = defaultState();
      next.toothSelection = "implant";
      next.crownMaterial = "bar-prosthesis";
      return next;
    });
    applyChanges(missingTeeth, (_s, _tn) => {
      const next = defaultState();
      next.toothSelection = "none";
      next.bridgeUnit = "bar-prosthesis";
      return next;
    });
    applyChanges(sevenEight, (_s, _tn) => {
      const next = defaultState();
      next.toothSelection = "none";
      next.bridgeUnit = "none";
      return next;
    });
  }
}
var initialized = false;
var controlsWired = false;
var initToken = 0;
async function loadSvg(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`SVG fetch failed: ${url}`);
  const txt = await res.text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(txt, "image/svg+xml");
  const svg = doc.documentElement;
  stripDisplayNoneToDataActive(svg);
  ensureDataActiveForSwitchables(svg);
  return svg;
}
async function buildGrid(token) {
  if (!initialized || token !== initToken) return;
  const grid = $("#toothGrid");
  if (!grid) return;
  grid.innerHTML = "";
  const tplCache = /* @__PURE__ */ new Map();
  const occlCache = /* @__PURE__ */ new Map();
  const tplNos = [11, 13, 14, 16];
  const occlNos = [14, 16];
  await Promise.all([
    ...tplNos.map(async (tplNo) => {
      tplCache.set(tplNo, await loadSvg(TEMPLATES[tplNo]));
    }),
    ...occlNos.map(async (tplNo) => {
      occlCache.set(tplNo, await loadSvg(TEMPLATES_OCCL[tplNo]));
    })
  ]);
  if (!initialized || token !== initToken) return;
  function addTile({ toothNo, tplNo, rot, mirror, view, clickable }) {
    if (!initialized || token !== initToken) return;
    const tpl = view === "occl" ? occlCache.get(tplNo) : tplCache.get(tplNo);
    if (!tpl) return;
    const svg = tpl.cloneNode(true);
    if (rot === 180) rotate180(svg);
    if (mirror) mirrorVertical(svg);
    const tileClasses = [
      "tooth-tile",
      `tpl-${tplNo}`,
      toothNo >= 31 ? "lower-row" : "upper-row",
      view === "occl" ? "occl-view" : "side-view"
    ];
    if (!clickable) tileClasses.push("placeholder");
    const tile = el("div", { class: tileClasses.join(" "), "data-tooth": String(toothNo) }, [
      el("div", { class: "tooth-svg" })
    ]);
    $(".tooth-svg", tile).appendChild(svg);
    if (clickable) {
      tile.addEventListener("click", (e) => onToothClick(toothNo, e));
      tile.addEventListener("dblclick", () => {
        if (!notesEnabled || readOnly) return;
        showNoteEditor(toothNo);
      });
      tile.addEventListener("keydown", (e) => onToothKeydown(toothNo, e));
      if (view === "side") {
        tile.setAttribute("role", "option");
        tile.setAttribute("aria-selected", "false");
        tile.setAttribute("tabindex", readOnly ? "-1" : "0");
        tile.setAttribute("aria-label", toLabel(toothNo, numberingSystem));
      }
      if (isTouchDevice()) addTouchToTile(tile, toothNo);
    } else {
      tile.removeAttribute("data-tooth");
    }
    grid.appendChild(tile);
    if (!toothSvgRoot.has(toothNo)) toothSvgRoot.set(toothNo, []);
    toothSvgRoot.get(toothNo).push(svg);
    if (!toothTile.has(toothNo)) toothTile.set(toothNo, []);
    toothTile.get(toothNo).push(tile);
    if (!toothState.has(toothNo)) toothState.set(toothNo, defaultState());
    applyStateToSvg(toothNo);
  }
  function addRowSide(rowTeeth) {
    for (const toothNo of rowTeeth) {
      const map = TOOTH_TEMPLATE.get(toothNo);
      const tplNo = map ? map.tpl : 16;
      addTile({ toothNo, tplNo, rot: map?.rot ?? 0, mirror: map?.mirror ?? false, view: "side", clickable: true });
    }
  }
  function occlTemplateForTooth(toothNo) {
    if ([14, 15, 24, 25, 34, 35, 44, 45].includes(toothNo)) return 14;
    if ([16, 17, 18, 26, 27, 28, 36, 37, 38, 46, 47, 48].includes(toothNo)) return 16;
    return null;
  }
  function addPlaceholderTile() {
    const tile = el("div", { class: "tooth-tile occl-view placeholder" }, [
      el("div", { class: "tooth-svg" })
    ]);
    grid.appendChild(tile);
  }
  function addRowOccl(rowTeeth, placeholders) {
    for (const toothNo of rowTeeth) {
      const map = TOOTH_TEMPLATE.get(toothNo);
      const tplNo = occlTemplateForTooth(toothNo);
      if (placeholders.has(toothNo) || !tplNo || !map) {
        addPlaceholderTile();
        continue;
      }
      addTile({ toothNo, tplNo, rot: map.rot, mirror: map.mirror, view: "occl", clickable: true });
    }
  }
  function addLabelRow(rowTeeth, targetMap) {
    const row = el("div", { class: "tooth-label-row", "aria-hidden": "true" });
    for (const toothNo of rowTeeth) {
      const cell = el("div", { class: "tooth-label-cell", text: toLabel(toothNo, numberingSystem), tabindex: "-1" });
      cell.addEventListener("click", (e) => onToothClick(toothNo, e));
      row.appendChild(cell);
      targetMap.set(toothNo, cell);
    }
    grid.appendChild(row);
  }
  const upperSide = [18, 17, 16, 15, 14, 13, 12, 11, 21, 22, 23, 24, 25, 26, 27, 28];
  const lowerSide = [48, 47, 46, 45, 44, 43, 42, 41, 31, 32, 33, 34, 35, 36, 37, 38];
  const upperOcclPlaceholders = /* @__PURE__ */ new Set([13, 12, 11, 21, 22, 23]);
  const lowerOcclPlaceholders = /* @__PURE__ */ new Set([43, 42, 41, 31, 32, 33]);
  if (!initialized || token !== initToken) return;
  addLabelRow(upperSide, toothLabelUpper);
  addRowSide(upperSide);
  addRowOccl(upperSide, upperOcclPlaceholders);
  addRowOccl(lowerSide, lowerOcclPlaceholders);
  addRowSide(lowerSide);
  addLabelRow(lowerSide, toothLabelLower);
  grid.setAttribute("role", "listbox");
  grid.setAttribute("aria-multiselectable", "true");
  selectedTeeth = /* @__PURE__ */ new Set();
  activeTooth = null;
  updateSelectionUI();
  updateToothTileVisibility();
  setOcclusalVisible(occlusalVisible);
  setHealthyPulpVisible(showHealthyPulp);
  if (isTouchDevice()) {
    grid.addEventListener("touchstart", onGridTouchStart, { passive: false });
    grid.addEventListener("touchmove", onGridTouchMove, { passive: false });
    grid.addEventListener("touchend", onGridTouchEnd);
    buildArchToggle();
  }
}
function wireControls() {
  if (controlsWired) return;
  controlsWired = true;
  const iconButtons = ["btnOcclView", "btnWisdomVisible", "btnBoneVisible", "btnPulpVisible"];
  iconButtons.forEach((id) => {
    const btn = $(`#${id}`);
    if (btn) loadInlineIcon(btn).then(() => syncIconXLine(btn));
  });
  buildSelect($("#toothSelect"), getToothSelectOptions(), (value) => {
    applyToSelected((s, toothNo) => {
      if (value === "milktooth" && MILKTOOTH_BLOCKED.has(toothNo)) {
        return;
      }
      const next = defaultState();
      next.toothSelection = value;
      if (!["tooth-base", "milktooth", "implant", "tooth-crownprep", "tooth-under-gum"].includes(value)) {
        next.extractionPlan = false;
      }
      if (value !== "none") {
        next.extractionWound = false;
        next.bridgeUnit = "none";
      }
      if (value === "implant" || value === "none") {
        next.caries.clear();
        next.endo = "none";
        next.pulpInflam = false;
        next.fillingMaterial = "none";
        next.fillingSurfaces.clear();
      }
      toothState.set(toothNo, next);
    });
    if (value !== "none") setEdentulous(false);
  });
  buildSelect($("#crownSelect"), getCrownOptions(false), (value) => {
    applyToSelected((s) => {
      s.crownMaterial = value;
      if (value !== "broken") {
        s.brokenMesial = false;
        s.brokenIncisal = false;
        s.brokenDistal = false;
      }
      if (!["zircon", "metal", "temporary", "telescope"].includes(value)) {
        s.bridgePillar = false;
      }
      if (!["emax", "zircon", "metal", "temporary", "telescope"].includes(value)) {
        s.crownReplace = false;
      }
      if (!["natural", "broken"].includes(value)) {
        s.crownNeeded = false;
      }
    });
    setEdentulous(false);
  });
  buildSelect($("#endoSelect"), getEndoOptions(false), (value) => {
    applyToSelected((s) => {
      s.endo = value;
    });
  });
  $("#pulpInflam").addEventListener("change", (e) => {
    applyToSelected((s) => {
      s.pulpInflam = e.target.checked;
    });
  });
  $("#endoResection").addEventListener("change", (e) => {
    applyToSelected((s) => {
      s.endoResection = e.target.checked;
    });
  });
  $("#parapulpalPin").addEventListener("change", (e) => {
    applyToSelected((s) => {
      s.parapulpalPin = e.target.checked;
    });
  });
  buildSelect($("#bridgeUnitSelect"), getBridgeUnitOptions(), (value) => {
    applyToSelected((s) => {
      s.bridgeUnit = value;
    });
  });
  $("#extractionWound").addEventListener("change", (e) => {
    applyToSelected((s) => {
      s.extractionWound = e.target.checked;
    });
  });
  $("#extractionPlan").addEventListener("change", (e) => {
    applyToSelected((s) => {
      s.extractionPlan = e.target.checked;
    });
  });
  $("#crownReplace").addEventListener("change", (e) => {
    applyToSelected((s) => {
      s.crownReplace = e.target.checked;
    });
  });
  $("#crownNeeded").addEventListener("change", (e) => {
    applyToSelected((s) => {
      s.crownNeeded = e.target.checked;
    });
  });
  $("#missingClosed").addEventListener("change", (e) => {
    applyToSelected((s) => {
      s.missingClosed = e.target.checked;
    });
  });
  buildSelect($("#mobilitySelect"), getMobilityOptions(), (value) => {
    applyToSelected((s) => {
      s.mobility = value;
    });
  });
  buildChecks($("#modsChecks"), MOD_OPTIONS, (id, on) => {
    applyToSelected((s) => {
      if (on) s.mods.add(id);
      else s.mods.delete(id);
    });
  });
  buildChecks($("#cariesChecks"), CARIES_OPTIONS, (id, on) => {
    applyToSelected((s) => {
      if (on) s.caries.add(id);
      else s.caries.delete(id);
    });
  });
  buildSelect($("#fillingSelect"), getFillingOptions(false), (mat) => {
    applyToSelected((s) => {
      s.fillingMaterial = mat;
    });
  });
  buildChecks($("#fillingSurfaceChecks"), GROUPS.fillingSurfaces.map((surface) => ({
    value: surface,
    labelKey: FILLING_SURFACE_LABELS[surface] || "surface.mesial"
  })), (surf, on) => {
    applyToSelected((s) => {
      if (on) s.fillingSurfaces.add(surf);
      else s.fillingSurfaces.delete(surf);
    });
  });
  $("#fissureSealing").addEventListener("change", (e) => {
    applyToSelected((s) => {
      s.fissureSealing = e.target.checked;
    });
  });
  $("#contactMesial").addEventListener("change", (e) => {
    applyToSelected((s) => {
      s.contactMesial = e.target.checked;
    });
  });
  $("#contactDistal").addEventListener("change", (e) => {
    applyToSelected((s) => {
      s.contactDistal = e.target.checked;
    });
  });
  $("#bruxismWear").addEventListener("change", (e) => {
    applyToSelected((s) => {
      s.bruxismWear = e.target.checked;
    });
  });
  $("#bruxismNeckWear").addEventListener("change", (e) => {
    applyToSelected((s) => {
      s.bruxismNeckWear = e.target.checked;
    });
  });
  $("#bridgePillar").addEventListener("change", (e) => {
    applyToSelected((s) => {
      s.bridgePillar = e.target.checked;
    });
  });
  $("#brokenMesial").addEventListener("change", (e) => {
    applyToSelected((s) => {
      s.brokenMesial = e.target.checked;
    });
  });
  $("#brokenIncisal").addEventListener("change", (e) => {
    applyToSelected((s) => {
      s.brokenIncisal = e.target.checked;
    });
  });
  $("#brokenDistal").addEventListener("change", (e) => {
    applyToSelected((s) => {
      s.brokenDistal = e.target.checked;
    });
  });
  $("#btnResetTooth").addEventListener("click", () => {
    if (selectedTeeth.size === 0) return;
    setEdentulous(false);
    for (const toothNo of selectedTeeth) {
      toothState.set(toothNo, defaultState());
      applyStateToSvg(toothNo);
      updateToothTileNumber(toothNo);
    }
    if (activeTooth) {
      setControlsEnabled(true);
      syncControlsFromState(toothState.get(activeTooth));
    }
  });
  $("#btnResetAll").addEventListener("click", () => {
    setEdentulous(false);
    for (const toothNo of ALL_TEETH) {
      toothState.set(toothNo, defaultState());
      applyStateToSvg(toothNo);
      updateToothTileNumber(toothNo);
    }
    if (activeTooth) {
      setControlsEnabled(true);
      syncControlsFromState(toothState.get(activeTooth));
    }
  });
  $("#btnPrimaryDentition").addEventListener("click", () => {
    setEdentulous(false);
    suppressEdentulousSync = true;
    for (const toothNo of ALL_TEETH) {
      const s = defaultState();
      if (PRIMARY_MILK.has(toothNo)) {
        s.toothSelection = "milktooth";
      } else {
        s.toothSelection = "none";
      }
      toothState.set(toothNo, s);
      applyStateToSvg(toothNo);
      updateToothTileNumber(toothNo);
    }
    suppressEdentulousSync = false;
    if (activeTooth) syncControlsFromState(toothState.get(activeTooth));
  });
  $("#btnMixedDentition").addEventListener("click", () => {
    setEdentulous(false);
    suppressEdentulousSync = true;
    for (const toothNo of ALL_TEETH) {
      const s = defaultState();
      if (MIXED_PERMANENT.has(toothNo)) {
        s.toothSelection = "tooth-base";
      } else if (MIXED_MILK.has(toothNo)) {
        s.toothSelection = "milktooth";
      } else if (MIXED_NONE.has(toothNo)) {
        s.toothSelection = "none";
      }
      toothState.set(toothNo, s);
      applyStateToSvg(toothNo);
      updateToothTileNumber(toothNo);
    }
    suppressEdentulousSync = false;
    if (activeTooth) syncControlsFromState(toothState.get(activeTooth));
  });
  const statusExtras = getStatusExtras();
  if (statusExtras.length) {
    const statusOptions = statusExtras.map((opt) => ({ value: opt.id, label: opt.label }));
    buildSelect($("#statusExtraSelect"), statusOptions, () => {
    });
    setSelectOptions($("#statusExtraSelect"), statusOptions, statusOptions[0]?.value);
    $("#statusExtraApply").addEventListener("click", () => {
      const id = $("#statusExtraSelect").value;
      const option = statusExtras.find((o) => o.id === id);
      applyStatusExtra(option);
    });
  }
  $("#btnSelectAll").addEventListener("click", () => {
    selectedTeeth = new Set(ALL_TEETH);
    activeTooth = ALL_TEETH[0];
    updateToothTileVisibility();
  });
  $("#btnSelectAllPresent").addEventListener("click", () => {
    const present = ALL_TEETH.filter((tn) => toothState.get(tn)?.toothSelection !== "none");
    selectedTeeth = new Set(present);
    activeTooth = present[0] ?? null;
    updateToothTileVisibility();
  });
  $("#btnSelectPermanent").addEventListener("click", () => {
    const permanent = ALL_TEETH.filter((tn) => toothState.get(tn)?.toothSelection === "tooth-base");
    selectedTeeth = new Set(permanent);
    activeTooth = permanent[0] ?? null;
    updateToothTileVisibility();
  });
  $("#btnSelectMilk").addEventListener("click", () => {
    const milk = ALL_TEETH.filter((tn) => toothState.get(tn)?.toothSelection === "milktooth");
    selectedTeeth = new Set(milk);
    activeTooth = milk[0] ?? null;
    updateToothTileVisibility();
  });
  $("#btnSelectImplants").addEventListener("click", () => {
    const implants = ALL_TEETH.filter((tn) => toothState.get(tn)?.toothSelection === "implant");
    selectedTeeth = new Set(implants);
    activeTooth = implants[0] ?? null;
    updateToothTileVisibility();
  });
  $("#btnSelectAllMissing").addEventListener("click", () => {
    const missing = ALL_TEETH.filter((tn) => toothState.get(tn)?.toothSelection === "none");
    selectedTeeth = new Set(missing);
    activeTooth = missing[0] ?? null;
    updateToothTileVisibility();
  });
  $("#btnSelectUpper").addEventListener("click", () => {
    selectedTeeth = new Set(ALL_TEETH.filter((tn) => tn >= 11 && tn <= 28));
    activeTooth = 11;
    updateToothTileVisibility();
  });
  $("#btnSelectUpperFront").addEventListener("click", () => {
    const front = [13, 12, 11, 21, 22, 23];
    selectedTeeth = new Set(front);
    activeTooth = front[0];
    updateToothTileVisibility();
  });
  $("#btnSelectUpperMolar").addEventListener("click", () => {
    const molars = [16, 17, 27, 28];
    selectedTeeth = new Set(molars);
    activeTooth = molars[0];
    updateToothTileVisibility();
  });
  $("#btnSelectLower").addEventListener("click", () => {
    selectedTeeth = new Set(ALL_TEETH.filter((tn) => tn >= 31 && tn <= 48));
    activeTooth = 31;
    updateToothTileVisibility();
  });
  $("#btnSelectLowerFront").addEventListener("click", () => {
    const front = [43, 42, 41, 31, 32, 33];
    selectedTeeth = new Set(front);
    activeTooth = front[0];
    updateToothTileVisibility();
  });
  $("#btnSelectLowerMolar").addEventListener("click", () => {
    const molars = [36, 37, 46, 47];
    selectedTeeth = new Set(molars);
    activeTooth = molars[0];
    updateToothTileVisibility();
  });
  $("#btnSelectNone").addEventListener("click", () => {
    selectedTeeth = /* @__PURE__ */ new Set();
    activeTooth = null;
    updateSelectionUI();
  });
  $("#btnSelectNoneChart").addEventListener("click", () => {
    selectedTeeth = /* @__PURE__ */ new Set();
    activeTooth = null;
    updateSelectionUI();
  });
  $("#btnEdentulous").addEventListener("click", () => {
    setEdentulous(!edentulous);
  });
  $("#btnWisdomVisible").addEventListener("click", () => {
    setWisdomVisible(!wisdomVisible);
  });
  $("#btnOcclView").addEventListener("click", () => {
    setOcclusalVisible(!occlusalVisible);
  });
  $("#btnBoneVisible").addEventListener("click", () => {
    setShowBase(!showBase);
  });
  $("#btnPulpVisible").addEventListener("click", () => {
    setHealthyPulpVisible(!showHealthyPulp);
  });
  const statusCard = $("#statusCard");
  const statusToggle = $("#btnToggleStatusCard");
  if (statusCard && statusToggle) {
    applyToggleA11y(statusToggle, "status.title", statusCard.classList.contains("collapsed"));
    statusToggle.addEventListener("click", () => {
      const collapsed = statusCard.classList.toggle("collapsed");
      applyToggleA11y(statusToggle, "status.title", collapsed);
      const icon = $(".toggle-icon", statusToggle);
      if (icon) icon.textContent = collapsed ? "+" : "\u2212";
    });
  }
  const controlsToggle = $("#btnToggleControlsCard");
  const controlsActions = $("#controlsActions");
  if (controlsToggle && controlsActions) {
    applyToggleA11y(controlsToggle, "panel.controls", controlsActions.classList.contains("hidden"));
    controlsToggle.addEventListener("click", () => {
      const collapsed = controlsActions.classList.toggle("hidden");
      applyToggleA11y(controlsToggle, "panel.controls", collapsed);
      const icon = $(".toggle-icon", controlsToggle);
      if (icon) icon.textContent = collapsed ? "+" : "\u2212";
    });
  }
  const toggleCards = [
    { card: "#cariesSection", btn: "#btnToggleCariesCard", labelKey: "caries.title" },
    { card: "#fillingSection", btn: "#btnToggleFillingCard", labelKey: "filling.title" },
    { card: "#endoSection", btn: "#btnToggleEndoCard", labelKey: "endo.title" },
    { card: "#inflammationSection", btn: "#btnToggleInflammationCard", labelKey: "inflammation.title" }
  ];
  toggleCards.forEach(({ card, btn, labelKey }) => {
    const cardEl = $(card);
    const btnEl = $(btn);
    if (!cardEl || !btnEl) return;
    applyToggleA11y(btnEl, labelKey, cardEl.classList.contains("collapsed"));
    btnEl.addEventListener("click", () => {
      const collapsed = cardEl.classList.toggle("collapsed");
      applyToggleA11y(btnEl, labelKey, collapsed);
      const icon = $(".toggle-icon", btnEl);
      if (icon) icon.textContent = collapsed ? "+" : "\u2212";
    });
  });
  const exportBtn = $("#btnStatusExport");
  const importBtn = $("#btnStatusImport");
  const importInput = $("#statusImportInput");
  if (exportBtn) {
    exportBtn.onclick = () => exportStatus();
  }
  if (importBtn && importInput) {
    importBtn.onclick = () => {
      importInput.value = "";
      importInput.click();
    };
    importInput.onchange = async () => {
      const file = importInput.files?.[0];
      if (!file) return;
      try {
        const text = await file.text();
        const data = JSON.parse(text);
        importStatus(data);
      } catch (_e) {
      } finally {
        importInput.value = "";
      }
    };
  }
}
function setNumberingSystem(system) {
  if (system === numberingSystem) return;
  numberingSystem = system;
  updateAllToothTileNumbers();
  updateActiveLabel();
}
async function initOdontogram() {
  if (initialized) return;
  initialized = true;
  const token = ++initToken;
  wireControls();
  await buildGrid(token);
  if (!initialized || token !== initToken) return;
  if (!i18nUnsubscribe) {
    i18nUnsubscribe = onI18nChange(() => refreshLocalizedContent());
  }
  refreshLocalizedContent();
  if (activeTooth != null) {
    const state = toothState.get(activeTooth);
    if (state) {
      syncControlsFromState(state);
    }
  }
}
function destroyOdontogram() {
  if (!initialized) return;
  initialized = false;
  initToken++;
  controlsWired = false;
  if (i18nUnsubscribe) {
    i18nUnsubscribe();
    i18nUnsubscribe = null;
  }
  const grid = $("#toothGrid");
  if (grid) {
    grid.removeEventListener("touchstart", onGridTouchStart);
    grid.removeEventListener("touchmove", onGridTouchMove);
    grid.removeEventListener("touchend", onGridTouchEnd);
    grid.style.transform = "";
    grid.classList.remove("odon-pinch-active", "odon-arch-upper", "odon-arch-lower");
    grid.innerHTML = "";
  }
  if (archToggleBar) {
    archToggleBar.remove();
    archToggleBar = null;
  }
  hideZoomPopover();
  hideContextMenu();
  hideNoteEditor();
  if (longPressTimer) {
    clearTimeout(longPressTimer);
    longPressTimer = null;
  }
  pinchScale = 1;
  isPinching = false;
  archMode = "both";
  readOnly = false;
  notesEnabled = false;
  pluginOverlays.clear();
  const mods = $("#modsChecks");
  if (mods) mods.innerHTML = "";
  const caries = $("#cariesChecks");
  if (caries) caries.innerHTML = "";
  const fillings = $("#fillingSurfaceChecks");
  if (fillings) fillings.innerHTML = "";
  const statusExtra = $("#statusExtraSelect");
  if (statusExtra) statusExtra.innerHTML = "";
  toothState.clear();
  toothSvgRoot.clear();
  toothTile.clear();
  toothLabelUpper.clear();
  toothLabelLower.clear();
  selectedTeeth = /* @__PURE__ */ new Set();
  activeTooth = null;
}
function clearSelection() {
  selectedTeeth = /* @__PURE__ */ new Set();
  activeTooth = null;
  updateSelectionUI();
}
function registerPlugins(plugins) {
  registeredPlugins = [...plugins];
  for (const toothNo of ALL_TEETH) {
    applyPluginOverlays(toothNo);
    updateToothTooltip(toothNo);
  }
}
function setReadOnly(value) {
  readOnly = value;
  const grid = $("#toothGrid");
  if (grid) grid.classList.toggle("read-only", readOnly);
  const panel = $(".panel");
  if (panel) panel.classList.toggle("read-only", readOnly);
  $$(".tooth-tile[role='option']").forEach((tile) => {
    tile.setAttribute("tabindex", readOnly ? "-1" : "0");
  });
}
function setNotesEnabled(value) {
  notesEnabled = value;
  for (const toothNo of ALL_TEETH) {
    updateToothTooltip(toothNo);
    updateToothLabelNoteIcon(toothNo);
  }
}
function exportStatusPayload() {
  return getStatusPayload();
}
function importStatusPayload(data) {
  importStatus(data);
}
function getActiveToothNumber() {
  return activeTooth;
}
function getSelectedToothNumbers() {
  return Array.from(selectedTeeth);
}

// React-Odontogram-Modul/src/assets/icon-svgs/icon_8.svg
var icon_8_default = "/static/doctor/odontogram/assets/icon_8-BUY663JJ.svg";

// React-Odontogram-Modul/src/assets/icon-svgs/icon_gum.svg
var icon_gum_default = "/static/doctor/odontogram/assets/icon_gum-UTEWNB6W.svg";

// React-Odontogram-Modul/src/assets/icon-svgs/icon_no_selection.svg
var icon_no_selection_default = "/static/doctor/odontogram/assets/icon_no_selection-NSNMX3IZ.svg";

// React-Odontogram-Modul/src/assets/icon-svgs/icon_occl.svg
var icon_occl_default = "/static/doctor/odontogram/assets/icon_occl-PIS4JGFF.svg";

// React-Odontogram-Modul/src/assets/icon-svgs/icon_pulp.svg
var icon_pulp_default = "/static/doctor/odontogram/assets/icon_pulp-Y2ESSWMK.svg";

// OdontogramFronted/app-entry.js
var LANGUAGE_OPTIONS = [
  { value: "uz", labelKey: "language.uz" },
  { value: "ru", labelKey: "language.ru" },
  { value: "en", labelKey: "language.en" }
];
var NUMBERING_OPTIONS = [
  { value: "FDI", labelKey: "numbering.fdi" },
  { value: "UNIVERSAL", labelKey: "numbering.universal" },
  { value: "PALMER", labelKey: "numbering.palmer" }
];
var THEME_SUN = `
<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="4"></circle>
  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
</svg>`;
var THEME_MOON = `
<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
</svg>`;
var currentLanguage2 = "uz";
var currentNumbering = "FDI";
var darkMode = false;
function $2(selector) {
  return document.querySelector(selector);
}
function tFor(key, params) {
  return t(key, currentLanguage2, params);
}
function setMenuOpen(menuId, buttonId, open) {
  const menu = $2(`#${menuId}`);
  const button = $2(`#${buttonId}`);
  if (!menu || !button) return;
  menu.classList.toggle("hidden", !open);
  button.setAttribute("aria-expanded", String(open));
}
function closeMenus() {
  setMenuOpen("languageMenu", "languageButton", false);
  setMenuOpen("numberingMenu", "numberingButton", false);
}
function renderThemeButton() {
  const button = $2("#themeToggle");
  if (!button) return;
  const label = darkMode ? tFor("theme.light") : tFor("theme.dark");
  button.setAttribute("title", label);
  button.setAttribute("aria-label", label);
  button.innerHTML = darkMode ? THEME_SUN : THEME_MOON;
}
function renderLanguageMenu() {
  const menu = $2("#languageMenu");
  const button = $2("#languageButton");
  if (!menu || !button) return;
  menu.innerHTML = "";
  for (const option of LANGUAGE_OPTIONS) {
    const item = document.createElement("button");
    item.className = "dropdown-item";
    item.type = "button";
    item.setAttribute("role", "menuitemradio");
    item.setAttribute("aria-checked", String(currentLanguage2 === option.value));
    item.textContent = tFor(option.labelKey);
    item.addEventListener("click", () => {
      currentLanguage2 = option.value;
      setI18nLanguage(option.value);
      closeMenus();
      renderStaticTexts();
    });
    menu.appendChild(item);
  }
  const selected = LANGUAGE_OPTIONS.find((option) => option.value === currentLanguage2) ?? LANGUAGE_OPTIONS[0];
  button.textContent = `${tFor("language.label")}: ${tFor(selected.labelKey)}`;
}
function renderNumberingMenu() {
  const menu = $2("#numberingMenu");
  const button = $2("#numberingButton");
  if (!menu || !button) return;
  menu.innerHTML = "";
  for (const option of NUMBERING_OPTIONS) {
    const item = document.createElement("button");
    item.className = "dropdown-item";
    item.type = "button";
    item.setAttribute("role", "menuitemradio");
    item.setAttribute("aria-checked", String(currentNumbering === option.value));
    item.textContent = tFor(option.labelKey);
    item.addEventListener("click", () => {
      currentNumbering = option.value;
      setNumberingSystem(option.value);
      closeMenus();
      renderStaticTexts();
    });
    menu.appendChild(item);
  }
  const selected = NUMBERING_OPTIONS.find((option) => option.value === currentNumbering) ?? NUMBERING_OPTIONS[0];
  button.textContent = `${tFor("numbering.label")}: ${tFor(selected.labelKey)}`;
}
function renderStaticTexts() {
  document.documentElement.lang = currentLanguage2;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (key) node.textContent = tFor(key);
  });
  renderLanguageMenu();
  renderNumberingMenu();
  renderThemeButton();
  const toothGrid = $2("#toothGrid");
  toothGrid?.setAttribute("aria-label", tFor("chart.aria.toothGrid"));
  const chartHint = document.querySelector(".chart-hint");
  if (chartHint) {
    chartHint.textContent = tFor("chart.hint");
  }
  const activeToothLabel = $2("#activeToothLabel");
  if (activeToothLabel && activeToothLabel.textContent?.trim() === "-") {
    activeToothLabel.textContent = tFor("selection.none");
  }
  const occl = $2("#btnOcclView");
  occl?.setAttribute("title", tFor("chart.actions.occlusal"));
  occl?.setAttribute("aria-label", tFor("chart.actions.occlusal"));
  const wisdom = $2("#btnWisdomVisible");
  wisdom?.setAttribute("title", tFor("chart.actions.wisdom"));
  wisdom?.setAttribute("aria-label", tFor("chart.actions.wisdom"));
  const bone = $2("#btnBoneVisible");
  bone?.setAttribute("title", tFor("chart.actions.bone"));
  bone?.setAttribute("aria-label", tFor("chart.actions.bone"));
  const pulp = $2("#btnPulpVisible");
  pulp?.setAttribute("title", tFor("chart.actions.pulp"));
  pulp?.setAttribute("aria-label", tFor("chart.actions.pulp"));
  const clearChart = $2("#btnSelectNoneChart");
  clearChart?.setAttribute("title", tFor("chart.actions.clearSelection"));
  clearChart?.setAttribute("aria-label", tFor("chart.actions.clearSelection"));
}
function setIconSources() {
  const occl = $2("#btnOcclView");
  const wisdom = $2("#btnWisdomVisible");
  const bone = $2("#btnBoneVisible");
  const pulp = $2("#btnPulpVisible");
  const clear = document.getElementById("iconNoSelection");
  occl?.setAttribute("data-icon-src", icon_occl_default);
  wisdom?.setAttribute("data-icon-src", icon_8_default);
  bone?.setAttribute("data-icon-src", icon_gum_default);
  pulp?.setAttribute("data-icon-src", icon_pulp_default);
  if (clear) {
    clear.src = icon_no_selection_default;
  }
}
function wireTopbar() {
  $2("#languageButton")?.addEventListener("click", (event) => {
    event.stopPropagation();
    const expanded = $2("#languageButton")?.getAttribute("aria-expanded") === "true";
    closeMenus();
    setMenuOpen("languageMenu", "languageButton", !expanded);
  });
  $2("#numberingButton")?.addEventListener("click", (event) => {
    event.stopPropagation();
    const expanded = $2("#numberingButton")?.getAttribute("aria-expanded") === "true";
    closeMenus();
    setMenuOpen("numberingMenu", "numberingButton", !expanded);
  });
  $2("#themeToggle")?.addEventListener("click", () => {
    darkMode = !darkMode;
    document.documentElement.classList.toggle("dark", darkMode);
    renderThemeButton();
  });
  document.addEventListener("click", (event) => {
    const target = event.target;
    const languageDropdown = $2("#languageDropdown");
    const numberingDropdown = $2("#numberingDropdown");
    if (!languageDropdown?.contains(target) && !numberingDropdown?.contains(target)) {
      closeMenus();
    }
  });
}
async function boot() {
  currentLanguage2 = getI18nLanguage() || "uz";
  if (!LANGUAGE_OPTIONS.some((option) => option.value === currentLanguage2)) {
    currentLanguage2 = "uz";
  }
  currentNumbering = "FDI";
  darkMode = document.documentElement.classList.contains("dark");
  setI18nLanguage(currentLanguage2);
  setIconSources();
  renderStaticTexts();
  wireTopbar();
  onI18nChange((lang) => {
    currentLanguage2 = lang;
    renderStaticTexts();
  });
  await initOdontogram();
  setNumberingSystem(currentNumbering);
  registerPlugins([]);
  setReadOnly(false);
  setNotesEnabled(true);
  if (window.__ODONTOGRAM_INITIAL_STATE__) {
    importStatusPayload(window.__ODONTOGRAM_INITIAL_STATE__);
  }
  const grid = $2("#toothGrid");
  if (grid && !grid.children.length) {
    throw new Error("Odontogram grid yuklanmadi.");
  }
}
window.odontogramApp = {
  getStatusPayload: () => exportStatusPayload(),
  loadStatusPayload: (payload) => importStatusPayload(payload),
  getActiveTooth: () => getActiveToothNumber(),
  getSelectedTeeth: () => getSelectedToothNumbers()
};
void boot().catch((error) => {
  console.error(error);
  const grid = $2("#toothGrid");
  if (grid) {
    grid.innerHTML = `<div style="padding:24px;color:#b91c1c;font-weight:700;">Odontogram yuklanmadi. Sahifani yangilang.</div>`;
  }
});
window.addEventListener("beforeunload", () => destroyOdontogram());
/*! Bundled license information:

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
