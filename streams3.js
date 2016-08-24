/**
 * Streams 3: Backpressure managed by stream. No data loss.
 * Not intended to work, just explanatory
 */
getASStreams(function (stream) {
  // Stream is already paused from beginning
  stream.pause() // calling pause does nothing

  doSomethingAsync(function (err, somethingWeNeed) {
    stream.on('data', function () {
      // Attaching handler calls resume
    })
    stream.resume() // Already called but calls read until stream is done
  })
})
