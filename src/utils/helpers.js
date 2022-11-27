/*eslint eqeqeq: 'off'*/
export function getFromObject(obj, keyChain, defaultValue = null) {
  if (!keyChain) return null;

  for (const key of keyChain.split(".")) {
    if (obj && obj.hasOwnProperty(key)) obj = obj[key];
    else return defaultValue;
  }
  return obj;
}

export function setInObject(obj, keyChain, value) {
  const keys = keyChain.split(".");
  let _o = obj;
  const mainKey = keys.pop();
  for (const key of keys) {
    if (!_o.hasOwnProperty(key)) _o[key] = {};
    _o = _o[key];
  }
  _o[mainKey] = value;
}

export function flattenObject(obj, { key = "value", emptyToNull = false }) {
  const flat = (_obj) => {
    if (_obj.hasOwnProperty(key)) {
      if (!emptyToNull) return _obj[key];

      const _v = _obj[key];
      if (_v !== undefined && _v !== "") return _v;
      return null;
    } else {
      const _result = {};
      for (const _k in _obj) {
        _result[_k] = flat(_obj[_k]);
      }
      return _result;
    }
  };

  const result = {};
  for (const _key in obj) {
    result[_key] = flat(obj[_key]);
  }
  return result;
}

export function getFromArray(arr, key, field = "id") {
  function getValue(el, fields) {
    for (const _f of fields) {
      if (el.hasOwnProperty(_f)) el = el[_f];
      else return null;
    }
    return el;
  }

  let fields = field.split(".");
  for (const el of arr) if (getValue(el, fields) == key) return el;

  return null;
}

export function fileToBase64(data) {
  const toBase64 = async (file) => {
    const result = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        let encoded = reader.result.toString();

        resolve(encoded);
        reader.onerror = (error) => reject(error);
      };
    });
    return result;
  };

  const promises = [];
  const walkAndShineLikeAStar = (data) => {
    const result = {};
    for (const key in data) {
      if (Array.isArray(data[key])) {
        // Array is an object, the order of if statements are important
        const _r = [];
        for (const el of data[key]) {
          // if el is a primitive type then just push it to the stack else visit it
          if (typeof el === "object") {
            _r.push(walkAndShineLikeAStar(el));
          } else {
            _r.push(el);
          }
        }
        result[key] = _r;
      } else if (data[key] instanceof File) {
        // File is an object, the order of if statements are important
        promises.push(
          toBase64(data[key]).then((_r) => {
            result[key] = _r;
          })
        );
      } else if (data[key] instanceof Object) {
        result[key] = walkAndShineLikeAStar(data[key]);
      } else {
        result[key] = data[key];
      }
    }
    return result;
  };

  const result = walkAndShineLikeAStar(data);
  return { promises, result };
}

Date.fromString = function (date, seperator = "-") {
  if (!date) return null;

  if (date.includes("T") || date.includes(" ")) return new Date(date);

  date = date.split(seperator);
  return new Date(date[0], parseInt(date[1]) - 1, date[2]);
};
