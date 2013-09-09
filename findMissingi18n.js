var humanize = function(property) {
  return property.replace(/_/g, ' ')
      .replace(/(\w+)/g, function(match) {
        return match.charAt(0).toUpperCase() + match.slice(1);
      });
};

console.log("Missing translations")
console.dir($.unique($.map($('.translation_missing'), function(e){ var key = e.title.split(":")[1].trim().substring(3); return key + ": '" + humanize(key) + "' "; })));