'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var setURL = exports.setURL = function setURL(url) {
  var parser = document.createElement('a');
  var props = ['href', 'protocol', 'host', 'hostname', 'origin', 'port', 'pathname', 'search', 'hash'];

  parser.href = url;

  props.forEach(function (prop) {
    Object.defineProperty(window.location, prop, {
      value: parser[prop],
      writable: true
    });
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9fX3Rlc3RfXy90ZXN0VXRpbHMuanMiXSwibmFtZXMiOlsic2V0VVJMIiwicGFyc2VyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwicHJvcHMiLCJocmVmIiwidXJsIiwiZm9yRWFjaCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Iiwid2luZG93IiwibG9jYXRpb24iLCJwcm9wIiwidmFsdWUiLCJ3cml0YWJsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxJQUFNQSwwQkFBUyxTQUFUQSxNQUFTLE1BQU87QUFDM0IsTUFBTUMsU0FBU0MsU0FBU0MsYUFBVCxDQUF1QixHQUF2QixDQUFmO0FBQ0EsTUFBTUMsUUFBUSxDQUNaLE1BRFksRUFDSixVQURJLEVBQ1EsTUFEUixFQUNnQixVQURoQixFQUVaLFFBRlksRUFFRixNQUZFLEVBRU0sVUFGTixFQUVrQixRQUZsQixFQUU0QixNQUY1QixDQUFkOztBQUtBSCxTQUFPSSxJQUFQLEdBQWNDLEdBQWQ7O0FBRUFGLFFBQU1HLE9BQU4sQ0FBYyxnQkFBUTtBQUNwQkMsV0FBT0MsY0FBUCxDQUFzQkMsT0FBT0MsUUFBN0IsRUFBdUNDLElBQXZDLEVBQTZDO0FBQzNDQyxhQUFPWixPQUFPVyxJQUFQLENBRG9DO0FBRTNDRSxnQkFBVTtBQUZpQyxLQUE3QztBQUlELEdBTEQ7QUFNRCxDQWZNIiwiZmlsZSI6InRlc3RVdGlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzZXRVUkwgPSB1cmwgPT4ge1xuICBjb25zdCBwYXJzZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgY29uc3QgcHJvcHMgPSBbXG4gICAgJ2hyZWYnLCAncHJvdG9jb2wnLCAnaG9zdCcsICdob3N0bmFtZScsXG4gICAgJ29yaWdpbicsICdwb3J0JywgJ3BhdGhuYW1lJywgJ3NlYXJjaCcsICdoYXNoJ1xuICBdXG5cbiAgcGFyc2VyLmhyZWYgPSB1cmxcblxuICBwcm9wcy5mb3JFYWNoKHByb3AgPT4ge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3cubG9jYXRpb24sIHByb3AsIHtcbiAgICAgIHZhbHVlOiBwYXJzZXJbcHJvcF0sXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pXG4gIH0pXG59XG4iXX0=