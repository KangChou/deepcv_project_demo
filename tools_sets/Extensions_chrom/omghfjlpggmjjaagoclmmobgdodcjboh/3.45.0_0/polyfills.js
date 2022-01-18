if( !Array.prototype.flat ) {
  Array.prototype.flat = function( depth = 1 ) { // eslint-disable-line no-extend-native
    depth = isNaN( depth ) ? 0 : Math.floor( depth );
    if( depth < 1 ) return this.slice();
    if( depth === 1 ) return [].concat( ...this );
    
    return [].concat( ...this.map( v => Array.isArray( v ) ? v.flat( depth - 1 ) : v ) );
  };
}


if( !Array.prototype.flatMap ) {
  Array.prototype.flatMap = function( callback, thisArg = this ) { // eslint-disable-line no-extend-native
    return this.map( callback, thisArg ).flat();
  };
}


if( !Object.fromEntries ) {
  Object.fromEntries = ( iterable ) => {
    return [ ...iterable ].reduce( ( obj, [ key, val ] ) => {
      obj[ key ] = val;
      return obj;
    }, {});
  };
}


( () => {
  if( self.Promise.prototype.finally ) return;

  /**
  @method
  @param {Function}
  @return {Promise} initial */
  self.Promise.prototype.finally = function( onFinally ) { // eslint-disable-line no-extend-native
    this.then( onFinally, onFinally );

    return this;
  };
})();


// https://github.com/uxitten/polyfill/blob/master/string.polyfill.js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd
if( !String.prototype.padEnd ) {
  String.prototype.padEnd = function padEnd( targetLength, padString ) { // eslint-disable-line
    targetLength = targetLength >> 0; //floor if number or convert non-number to 0;
    padString = String( ( typeof padString !== 'undefined' ? padString : ' ' ) );
    if( this.length > targetLength ) {
      return String( this );
    }
    else {
      targetLength = targetLength - this.length;
      if( targetLength > padString.length ) {
        padString += padString.repeat( targetLength / padString.length ); //append to original to ensure we are longer than needed
      }
      return String( this ) + padString.slice( 0, targetLength );
    }
  };
}


// https://github.com/uxitten/polyfill/blob/master/string.polyfill.js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
if( !String.prototype.padStart ) {
  String.prototype.padStart = function padStart( targetLength, padString ) { // eslint-disable-line
    targetLength = targetLength >> 0; //truncate if number or convert non-number to 0;
    padString = String( ( typeof padString !== 'undefined' ? padString : ' ' ) );
    if( this.length > targetLength ) {
      return String( this );
    }
    else {
      targetLength = targetLength - this.length;
      if( targetLength > padString.length ) {
        padString += padString.repeat( targetLength / padString.length ); //append to original to ensure we are longer than needed
      }
      return padString.slice( 0, targetLength ) + String( this );
    }
  };
}


