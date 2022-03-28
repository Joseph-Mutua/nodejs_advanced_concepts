// THE EVENT LOOP IMPLEMENTATION

// node myFile.js
const pendingTimers = []
const pendingOSTasks = []
const pendingOperations = []

// New Timers, Tasks, Operations are recorded from myFile running
myFile.runContents()


function shouldContinue() {
    // Check One: Any pending setTimeout, setInterval, setImmediate?
    // Check 2: Any pending OS tasks? (Like server listening to port)
    // Check 3: Any long running operations? (Like fs module)
    return pendingTimers.length || pendingOSTasks.length || pendingOperations.length
}


// THE EVENT LOOP TICKS

// Entire body executes in one "tick"
while(shouldContinue()){
    // 1. Node looks at pendingTimers and sees if any functions need to be called:
    //      -setTimeOut, setInterval
    
    // 2. Node looks at pendingOSTasks  and pendingOperations and calls relevant callbacks
   
    // 3. Pause execution. Continue when ...
    //     - A new pendingOSTaks is done
    //     - A pendingOperation is done
    //     - A timer is aboout to complete

    // 4. Look at pendingTimers. Call any settImmediate

    // 5. Handle any 'close' event





}

// Exit back to terminal