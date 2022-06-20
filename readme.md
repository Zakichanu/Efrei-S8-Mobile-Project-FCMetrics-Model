# FC Metrics models

Model for my [mobile development project](https://github.com/Zakichanu/Efrei-S8-Mobile-Project-FCMetrics). It will serve for saving information, getting them whenever we want on the app.

## Requirement

- Node v16+
- Typescript

## Installation

- First of all, you will need your mongodb atlas account, this will help you to create a collection quickly and make this project run easily :
  - Go to this [website](https://account.mongodb.com/account/login?n=%2Fv2%2F61ef08fb3ceace1d08fff0f8&nextHash=%23metrics%2FreplicaSet%2F61ef0a966e75d26f1150ea65%2Fexplorer%2FfcMetrics%2FuserInformation%2Ffind)
  - Create your account
  - Once this is done, go to your collections tab
  - Create a collection and call it what ever you want, I call it fcMetrics
  - This part is finished
- Then you can clone this projet, ```git clone https://github.com/Zakichanu/Efrei-S8-Mobile-Project-FCMetrics-Model.git```
- You will need to create a ```.env``` file
- Inside you'll put this line  : ```MONGO_URI=mongodb+srv://<USERNAME>:<PASSWORD>@cluster0.rm9dn.mongodb.net/<NAMEOFCOLLECTION>?retryWrites=true&w=majority``` -> Where  : 
  - ```<USERNAME>``` equals the username of your account
  - ```<PASSWORD>``` equals the password of your account
  - ```<NAMEOFCOLLECTION>``` equals the name you gave to the collection
- And then you can import node modules to your project : ```npm install```
- Run your project : ```npm start```


## Contact

You can contact me throught Twitter, Mail and many other things, make sure to check out my profile
