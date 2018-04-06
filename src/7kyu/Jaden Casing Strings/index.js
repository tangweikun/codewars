String.prototype.toJadenCase = function() {
  return this.split(' ')
    .map(x => x.replace(/^\w/, x[0].toUpperCase()))
    .join(' ')
}

String.prototype.toJadenCase = function() {
  return this.split(' ')
    .map(x => x.charAt(0).toUpperCase() + x.slice(1))
    .join(' ')
}

String.prototype.toJadenCase = function() {
  return this.replace(/(^|\s)\w/g, x => x.toUpperCase())
}

// var str = "How can mirrors be real if our eyes aren't real";
// Test.assertEquals(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");
