

  var publicVapidKey ='BE2atoap8atJ1RSwfZuBcQGoD8E3KlSD19kT-Ire2bffXfDsTu0qUlSWtL4nIPYk9f9JLY5vu_SguA7c3tyHz6w'

// console.log(onSubmitPush);
function urlBase64ToUint8Array(base64String) {
const padding = '='.repeat((4 - base64String.length % 4) % 4);
const base64 = (base64String + padding)
.replace(/-/g, '+')
.replace(/_/g, '/');

const rawData = window.atob(base64)
const outputArray = new Uint8Array(rawData.length);

for (let i = 0; i < rawData.length; ++i) {
outputArray[i] = rawData.charCodeAt(i);
}
return outputArray;
}  

const swDev =(title = "Push Sent", message = "Hello push") =>{
    let swURL = `${process.env.PUBLIC_URL}/sw.js`

  

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register(swURL)
    // navigator.serviceWorker.ready
    .then((registration) =>{
      if (!registration.pushManager) {
        return;
      } 

      registration.pushManager.getSubscription()
      .then(existedSubscription =>{
        // console.log(existedSubscription);
        if (existedSubscription === null) {
          registration.pushManager.subscribe({
            applicationServerKey: urlBase64ToUint8Array(publicVapidKey),
            userVisibleOnly: true,
            
          })
          .then(newSubscription =>{
            // console.log(newSubscription);
            sendSubscription(newSubscription, title, message);
          })
          .catch(e =>{
            if (Notification.permission !== "granted") {

            } else {
              console.error(e);
            }
          })
        }else{
          sendSubscription(existedSubscription, title, message);
        }
      })
    })
    .catch(e =>{
      console.error(e);
    })
  }
  }

  const sendSubscription = (subscription, title, message) =>{
    return fetch('/subscribe',{
      method:'POST',
      body:JSON.stringify({subscription, title, message}),
      headers:{

        "content-type": "application/json",
      }
    })
  }


  
export default swDev