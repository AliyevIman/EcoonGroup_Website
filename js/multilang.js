
 (function($) {

	var language = 'en';

	
	var cookieName = 'language';


	var dictionary;

	
	var replace = function(str, opt) {
		var args = (typeof opt === 'object' && opt != null) ? opt : arguments;
		return str.replace(/&(\w+)/g, function(match, n) {
			var value = args[n];
			if (value === undefined) {
				return match;
			}
			return value;
		});
	};

	
	var lambda = function(key, opt) {
		var args = (typeof opt === 'object' && opt != null) ? opt : arguments;
		return replace(key, args);
	};

	if ($.cookie) {
		language = $.cookie(cookieName) || language;
	}

	$.tr = {

		dictionary : function(newDictionary) {
			if (newDictionary !== undefined) {
				dictionary = newDictionary;
			}
			return dictionary;
		},


		language : function(newLanguage, useCookie) {
			if (newLanguage !== undefined) {
				if (useCookie && $.cookie) {
					var cookieLanguage = $.cookie(cookieName);
					if (cookieLanguage) {
						return cookieLanguage;	
					}
				}
				language = newLanguage;
				if ($.cookie) {
					$.cookie(cookieName, language);
				}
			}
			return language;
		},

	
		translator : function(customDictionary) {
			
			// varargs
			var args = $.makeArray(arguments);
			
			// which dictionary to use
			var dict = dictionary;
			if (typeof customDictionary == 'object') {
				args.shift();
				dict = customDictionary;
			}

			// if the chosen dictionary is not available...
			if (!dict) {
				return lambda;
			}
			
			// parse through the hierarchy
			var langSet = dict;
			for (var i in args) {
				langSet = langSet[args[i]];
				if (!langSet) {
					return lambda;
				}
			}

			// dictionary for the chosen language
			var lang = langSet[language];

			// if lang is an associative map encoded as a string, parse the map
			if (typeof lang == 'function') {
				lang = lang();
			}

			// if the chosen language is not available...
			if (!lang) {
				return lambda;
			}

			// time to get the real translator
			return function(key, opt) {
				var value = lang[key];
				var args = (typeof opt === 'object' && opt != null) ? opt : arguments;
				if (typeof value === 'string') {
					return replace(value, args);
				} else if (typeof value === 'function') {
					return value(args, replace);
				} else if (typeof value === 'number') {
					return value;
				} else {
					return replace(key, args);
				}
			};
		}

	};

})(jQuery);