/**
 * Streams 1: Backpressure problems, non-pausable.
 * Not intended to work, just explanatory
 */
getASStreams(function (stream) {

  stream.pause() // Data may already come through and been lost. Advisory

  doSomethingAsync(function (err, somethingWeNeed) {
    stream.on('data', function () {
      // ok, handle data.
    })
    stream.resume() // Advisory as well.
  })
})
