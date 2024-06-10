var JSON = {
	parse: function(text) { return eval("(" + text + ")"); },
	stringify: (function()
	{
        var escMap = { '"': '\\"', '\\': '\\\\', '\b': '\\b', '\f': '\\f', '\n': '\\n', '\r': '\\r', '\t': '\\t' };
        var escFunc = function (m) { return escMap[m] || '\\u' + (m.charCodeAt(0) + 0x10000).toString(16).substr(1); };
        var escRE = /[\\"\u0000-\u001F\u2028\u2029]/g;
		function func(value, caller, indent, level)
		{
			if (value == null || value == undefined)
				return "null";
			switch(typeof value)
			{
				case "number":
					return isFinite(value) ? value.toString() : 'null';
				case "boolean":
					return value.toString();
				case "object":
					var space = !indent ? null : (new Array(indent * level + indent + 1)).join(" ");
					var prefix = !space ? "" : ("\n" + space);
					var separater = !space ? ", " : (",\n" + space);
					var suffix = !space || !indent ? "" : ("\n" + (new Array(indent * level + 1)).join(" "));
					if(Object.prototype.toString.call(value) == "[object Array]")
					{
						var result = [];
						for(var index = 0; index < value.length; index++)
							result.push(func(value[index], caller, indent, level + 1));
						return "[" + prefix + result.join(separater) + suffix + "]";
					}
					else
					{
						var result = [];
						for(var key in value)
							result.push(func(key, null, 0, 0) + ":" + func(value[key], caller, indent, level + 1))
						return "{" + prefix + result.join(separater) + suffix + "}";
					}
				default:
					return '"' + value.toString().replace(escRE, escFunc) + '"';
			}
		}
		return function(value, caller, indent)
		{
			return func(value, caller, indent, 0);
		}
	})()
};