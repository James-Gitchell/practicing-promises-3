const question = "What will the weather be like today?";
const promise = tell(question);

promise
       .then(() => {
         console.log('Success!');
})
       .catch(() => {
           console.log('Something went wrong here...')
       })
       .then(() => {
           console.log("Done.")
       });
/*----------------------------------------------------------------------------*/

let promiseToCleanTheRoom = new Promise((resolve, reject){
    let isClean = true;
    if (isClean){
        resolve('Clean');
    } else {
        reject("not Clean");
    }
})

promiseToCleanTheRoom.then(function(fromResolve) {
    console.log('the room is' + fromResolve);
    }).catch(function(fromReject){
        console.log("the room is " + fromResolve);
    });
    