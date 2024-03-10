# Laurence Rico T2A3-B Project : Bakery Website Fullstack MERN
This MERN application empowers customers of our family bakeshop to effortlessly browse, place orders, and submit customized quote requests for their food preferences. It serves as an intuitive solution for establishing our bakery's online presence. Through the app, customers gain access to our wide range of available foods, enabling them to place orders and provide specific preferences directly visible to our admins and culinary team. This streamlined process eliminates the need for tedious phone calls to discuss menu options and simplifies order management. Admins have full visibility of all client submissions, facilitating efficient order tracking and management.

## Admin Login Details

email: admin@gmail.com
password: 123

## Changes To App According to Client (Family)
* User Account Creation and Login not needed.
* Rationale : As a small business, the need to create an account to submit orders is unneccessary and overly complex for our customer base (target audience) who are mostly foreign adults who aren't so tech savvy. Customers will be easily identified and contactable through their email and phone number provided in the order quote request. This streamlined approach simplifies the ordering process for our customers, eliminating unnecessary steps and enhancing user experience.

* Online payment not neccessary, pick-up only.
* Rationale : Since we're still a small business parents have decided to keep things simple for now. Setting up online payments requires extra technical infrastructure and resources that we're not quite ready for yet. So, for now, we're sticking with pick-up only. I'll certainly consider online payments down the road, but for now, let's stick to the basics. After all, I'm still getting the hang of things, so I'll need some time to get up to speed.

* Order/Quote based system other than online payment/delivery
* Family wants to include a section where customers can place orders for multiple food items and send a quote request directly to the admins, providing all necessary details. This allows the admins to review the order, make any necessary adjustments, and contact customers via phone for further communication or changes. This will be the primary function of the website/app.


## Pending Changes 
* Implement an About Us Page/Section
* Google Maps API to help locate business
* Update mechanism for Admin Panel to update Order Forms.
* Better Styling for overall presentation.


# Laurence Rico T3A2-A Project : Bakery Website Fullstack MERN

<br> 

## __R1. Description Of Your Website Including__:
__Purpose:__ 
* I intend to utilise my coding abilities to create software and applications for businesses to improve their operations. To kickstart this journey of mine, I will be creating an application for my family's bakery/food business. This application will empower users to explore available food offerings, place orders, make online payments, generate receipts, and select delivery options or pick-up options. 

<br>

__Functionality/Features:__

* Food Search: Users can search for food items available on the platform.

* [SCRAPPED] User Management:

    -   User Creation: Users can create new accounts to access the platform.
    -   User Authentication: Authentication functionalities include user login, allowing users to access their accounts securely.
    - User Profile Management: Users can perform CRUD (Create, Read, Update, Delete) operations on their account details, including updating personal information and changing passwords.
* Admin Privileges:

    -   Administrators have access to privileged features such as:
    -   Viewing all orders placed on the platform.
    -   Filtering orders based on their status (e.g., Paid, New, Shipped, Cancelled, Refunded).

* Order Management:

    - Orders include features such as setting delivery dates, specifying quantities of items, and calculating total prices.

* Shopping Cart:

    - Users can add items to their shopping carts for later purchase.
* [SCRAPPED] Payments:

    - Integration with PayPal for secure payment processing.
    - Customers can complete transactions using PayPal to fulfill their orders.
* Location Services:

    - Utilization of Google API for location services, enabling users to specify delivery locations accurately during the ordering process.

<br>

__Target Audience__

* Customers of the Bakery
    - Users who prefer the convenience of online ordering and payment for their food purchases.
* Administrators of the Bakery
    - Staff or Managers responsible for overseeing and managing orders, inventory, and customer interactions.
    - Individuals who require access to comprehensive order information and administrative functionalities to streamline business operations. 
   
The purpose is to diversifiy the business into the online space, which provide convenience, efficiency, and accessibility benefits offered by the online food ordering platform.  

__Tech Stack__

* MonogDB
* Express
* REACT
* Node

## __R2. Dataflow Diagram:__

![Photo of simple dataflow diagram](docs/dataflow%20diagram%20simple.png)
![Photo of authentication dataflow diagram](docs/auth%20controller%20dataflow.png)
![Photo of create user dataflow diagram](docs/create%20user%20controller%20dataflow.png)
![Photo of admin dataflow diagram](docs/admin%20crud%20controller%20dataflow.png)
1. The frontend constructs a HTTP request, to send the login data to the backend server.

2. If the credentials are valid, the authentication controller generates a JWT for the authenticated user. <br>
If the credentials are invalid, the "Unauthenticated" error status code 401 will display informing the user the request lacks valid authentication credentials. 

3.  The backend system checks the user's role or permissions to determine whether they have the necessary privileges to perform a particular action or access a specific resource. If the user has administrative privileges, the backend grants them access to administrative features or functionalities.

4. The "Unauthorised" error status code 403 will display when the client is authetnicated, but the user is not authorised to perform the requested action on the resource. This authorisation is dictated in the back end (3.)

5. The backend then verifies the credentials against a database or another authentication mechanism to determine if they are valid.

6. If the credentials are valid, the backend generates a response indicating successful authentication and may perform additional tasks such as creating a session or generating an authentication token.

## __R3. Application Architecture Diagram:__

![Photo of architecture diagram](docs/application%20architecture%20diagram.png)

## __R4. Users Stories:__

As an aspiring software developer, I want to create applications and programs that will benefit society and solve real world problems. 

In the beginning of my journey as a software developer, I will take my initial steps of fulfilling my goal of solving real world problems by helping businesses around me. 

Firstly, I will help my family businesses make an online presence. 

As a customer, I want to view the selection of cakes and desserts available at this bakery. 
    • I want a simple carting system to view my order in a clear manner. 
    • I want a ordering system that provides an email receipt with all the relevant details. 


As a staff/manager of this website/business, I want to be able to view outstanding orders, completed orders, and cancelled orders. 

## __R5. Wireframes:__

![Photo of wireframe frontpage](docs/wireframe%20frontpage.png)
![Photo of wireframe your cart](docs/wireframe%20your%20cart.png)
![Photo of wireframe your order](docs/wireframe%20your%20order.png)
![Photo of wirefram food description](docs/wireframe%20food%20description.png)

## __R6. Planning Methodology: Trello Board:__

![Photo of trello board](docs/trello%20board.png)