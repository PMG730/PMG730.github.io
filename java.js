function printQuery() {
    var query = window.location.search.substring(1);
    var vars = query.split("&");

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
        document.write(pair[0] + ": " + pair[1] + "<br />");
    }
  }