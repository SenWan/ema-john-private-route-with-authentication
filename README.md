# Live website(firebase)
[https://ema-john-simple-a4304.web.app/](https://ema-john-simple-a4304.web.app/)

## project description
* Here we used private route with email and password authentication
## steps
 * create a new project in console.goole.com
 * npm install firebase
 * create firebase.init.js file and copy firebase init with config from firebase project settings
 * goto authentication and enable email password login
 * Create Login, SIgnup component, setup route
 * attach form field handler and form submit handler
 * npm install --save react-firebase-hooks
 * useCreateUserWithEmailAndPassword from react-firebase-hooks
 * if user is created redirect to the expected page
 * useSignInWithEmailAndPassword for sign in
 * Create RequireAuth component ==> check user exists also track user location
 * In route wrap protected component by using require component

 ## firebase hosting steps
 * npm install -g firebase-tools(one time for your computer)
 * firebase login(one time for your computer)
 * firebase init(one time for each project)
 * npm run build(every time you want to deploy)
 * firebase deploy(every time you want to deploy)
