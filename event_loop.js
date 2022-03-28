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

// Entire body executes in one "tick"
while(shouldContinue()){

}

// Exit back to terminal