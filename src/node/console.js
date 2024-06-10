var console = {
	log: function log(msg) {
		return Editor.TraceOut(msg, 0);
	},
	error: function error(msg) {
		return Editor.TraceOut(msg, 0);
	}
};