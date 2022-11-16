let _base = "";
let _hash = false;

export default function router(path, callback) {
  const route = {
    path,
    keys: [],
  };

  route.regexp = regexp(path, route.keys);
  router.callbacks.push(middleware(route, callback));
}

router.callbacks = [];

router.go = function (path) {
  const context = new Context(path);

  context.saveState();
  let i = 0;

  function callNextCallback() {
    const callback = router.callbacks[i++];

    if (!callback) {
      return console.log("route [", context.path, "] not found");
    }
    callback(context, callNextCallback);
  }
  callNextCallback();
};

router.run = function (opts) {
  _base = opts && opts.base ? opts.base : "";
  _hash = opts && opts.hash ? "#!" : false;
  let url = location.pathname + location.search + location.hash;

  url = _base ? url.replace(_base, "") : "";
  if (_hash && ~location.hash.indexOf("#!")) {
    url = location.hash.substr(2) + location.search;
  }
  router.go(url);
};

function Context(path) {
  path = _base + (_hash ? "/#!" : "") + path.replace(_base, "");
  path = path.length > 1 ? path.replace(/\/$/, "") : path;
  this.fullPath = path;
  path = _hash ? path.split("#!")[1] : _base ? path.replace(_base, "") : path;
  this.title = document.title;
  this.params = {};
  const h = path.split("#");

  path = h[0];
  this.hash = h[1] || "";
  const q = path.split("?");

  path = q[0];
  this.querystring = q[1] || "";
  this.path = path || "/";
}

Context.prototype.saveState = function () {
  history.replaceState(this.state, this.title, this.fullPath);
};

function middleware(route, callback) {
  return function (context, next) {
    const match = route.regexp.exec(decodeURIComponent(context.path));

    if (match) {
      fillParams(match, route.keys, context.params);

      return callback(context);
    }
    next();
  };
}

function fillParams(match, keys, params) {
  const len = match.length;
  let idx = 0;
  let key;
  let val;

  while (++idx < len) {
    key = keys[idx - 1];
    val = match[idx];
    if (val !== undefined) {
      params[key.name] = val;
    }
  }
}

function regexp(path, keys) {
  let regex = path.replace(
    /\/(:?)([^\/?]+)(\??)(?=\/|$)/g,
    (match, isVariable, segment, isOptional) => {
      if (isVariable) {
        keys.push({ name: segment });
      }

      return isVariable
        ? isOptional
          ? "(?:\\/([^\\/]+))?"
          : "\\/([^\\/]+)"
        : `\\/${segment}`;
    }
  );

  regex = regex === "*" ? "(.*)" : regex === "/" ? "" : regex;
  if (keys.length === 0) {
    keys.push({ name: 0 });
  }

  return new RegExp(`^${regex}(?:\\/(?=$))?$`, "i");
}
