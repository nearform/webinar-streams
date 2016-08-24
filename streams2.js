/**
 * Streams 2: Paused from beginning, pipe backpressure handled internally.
 * Not intended to work, just explanatory
 */
getASStreams(function (stream) {

  stream.pause() // Stream is already paused, reverts the stream into
                 // flowing mode

  doSomethingAsync(function (err, somethingWeNeed) {
    stream.on('data', function (data) {
      // Handle data
    })
    stream.resume()
  })
})
