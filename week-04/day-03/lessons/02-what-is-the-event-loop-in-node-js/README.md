# What is the event loop in Node.js?

Course source: [Geeks Institute](https://www.geeks.institute/).
It is tricky to understand how Node.js is single-threaded yet can perform non-blocking I/O operations. While the privilege of not having to deal with thread management and the complexities it brings with it is fantastic, it comes at the cost of hiding this mess behind a well-written API. That is where event loop comes in, the soul of Node.js.

---

### **The event loop**

**Event loop**, as the name suggests, is a single-thread, loop that is almost infinite. We say almost infinite as it has some hard limits if it does find itself in an infinite loop. The reason this single-threaded loop can perform otherwise blocking operations in a non-blocking manner is due to **offloading**. Node.js offloads operations to the system kernel whenever possible. The loop in event loop refers to Node.js cycling through operations in order. We call these operations phases. Let’s take a look at the event loop.

---

### **Phases**

Let’s breakdown each phase to see what is happening.

**Timers**

This phase executes callbacks scheduled by `setTimeout()` and `setInterval()`. It should be noted that a timer denotes the minimum time Node.js will wait before executing the callback. The actual delay might be slightly longer depending on the poll phase.

**Pending callbacks**

This phase executes I/O callbacks that were deferred to the next loop iteration. Some system operations want to wait before executing a callback, this phase is used for that.

**Idle, prepare**

This phase is used internally by Node.js. There isn’t a lot of documentation on this phase, but it is mentioned in the [official documentation](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/#check) .

**Poll**

This phase performs two operations. First, it calculates how long it should block and poll for I/O. Then, it processes the events in the poll queue.

**Check**

This phase is used to invoke `setImmediate()` callbacks. If the poll phase is empty or callbacks using `setImmediate()` have been queued, the event loop might skip the poll phase and continue to the check phase.

**Close callback**

Methods such as socket.destroy are handled in this phase.
