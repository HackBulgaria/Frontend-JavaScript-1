var eventBus = (function() {
  var eventTable = {};

  var addEvent = function(eventName, callback) {
    if(!eventTable[eventName]) {
      eventTable[eventName] = [];
    }

    eventTable[eventName].push(callback);
  };

  var removeEvent = function(eventName) {
    if(eventTable[eventName]) {
      delete eventTable[eventName];
    }
  }

  var triggerEvent = function(eventName, eventArgs) {
    var
      callbacks = eventTable[eventName] || [],
      eventArgs = eventArgs || {};

    callbacks.forEach(function(callback) {
      callback.call(null, eventArgs);
    });
  };

  return {
    on: addEvent,
    remove : removeEvent,
    trigger: triggerEvent
  }

} ());
