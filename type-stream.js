fromStream('test')
.whenAny(function(state, ev) {
  linkTo('thingtype-' + ev.data.type, ev)
})
