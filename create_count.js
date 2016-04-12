fromCategory('thingtype')
  .foreachStream()
  .when({
    $init: function(state, ev) {
      return { count: 0 }
    },
    $any: function(state, ev) {
        if (ev.eventType == 'thing_created'){
            state.count++
        }
    }
  })
