/**
 * Streams on the perfect world (tm).
 */
getASStreams(function (stream) {

  stream.pause() // hold! we are not ready.

  doSomethingAsync(function (err, somethingWeNeed) {
    stream.on('data', function () {
        // ok, handle data.
    })
    stream.resume() // ok, give me data.
  })
})
