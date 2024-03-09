# Cherry-sBakeshopMERN2.0
This MERN app for my family bakeshop lets customers view, order, pay online, and choose delivery/pick-up. It's a seamless, secure solution enhancing satisfaction and streamlining operations.


To Fix: 
- Dollar Sign for Thumbnails. 
- Tags on Foods
- Add Comment Descriptions to ./hooks/useCart.js

- Create dependencies file

Changes According to Client (Family)
* Account Creation and Login not needed.
* Perhaps just keeping an admin route.
* Online payment not neccessary, pick-up only.

* Business is unlikely to transition to online payments and orders anytime soon. Parents advised to utilise the Online Website as a way for customers to gauge our food selection.
* Family would like to have a section where customers can create an order for a number of foods and send a quote request to.


BackEnd Notes: 


MongoDB: 

mongosh "mongodb+srv://bakeshopadmin:bakeshoppassword123@cluster0.qzdcnro.mongodb.net/BakeshopDB?retryWrites=true&w=majority"

show dbs
show collections
db.form.find()
db.dropDatabase()

