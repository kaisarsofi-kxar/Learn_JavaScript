
const accountId = 144553   //can't change state
let accounteEmail ="kaisar@gmail.com"       //can be changes
var accountPassword = 'kaisar@132'      //can be changed not used now coz of scope can be acces from any block
accountCity = "Jaipur"          // dynamic but not good way
let accountState;   // by default it is undefined
// accountId = 2. not allowed

accounteEmail= 'hc@gm.com'
accountPassword = 'papa123'
accountCity ='bagaloru'

console.log(accountId);     //signle variable

/*. 
 prefer not use var because of issue in clock scope and functional scope
*/

console.table([accountId, accounteEmail, accountPassword, accountCity ,accountState])
