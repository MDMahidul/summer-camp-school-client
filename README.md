# Name Of The Site: Northern Sports Academy 

## Features of the project:
It's a website for a sports academy, user can enrolled to different courses through online.
### User Type and User Functionalities
* There is three types of users. Admin, Instructor and Students. By deafult every user is Student.
* Admin can make any user Instructor or Admin. Admin can also manage courses. Admin can approve or reject any courses requested by Instructors. Also Admin can sent feedback for the rejection. Also can see how many students are enrolled for any perticular course.
* An Instructor can add courses. While adding any course by default it'll be set on pending. If Admin approved only then the course will be added to the course list. Instructor can update any course if it's on pending or deny status. After approved it can't be updated. Instructor can see their courses and enrolled students on their course.
* By default all the users are student. Only a student can enrolled to any course. Student can add courses to Cart. And after that student can checkout the cart by providing payment info. Here we have used stripe payment system.
* Users can update their info. But can't update user role and email.
* For different kinds of users there are different private routes.
### Different sections:
#### Courses:
* In the home page there is several sections. At the courses section they showed by most enrolled course.
* Only approved courses will be shown there. User can click on the card to see details about the course and add the course to cart.
* To add any course user has to be logged in first. If user is not logged in then it will bring user to login page.After added any course to cart the Add to cart button will be disabled.User can delete the cart item.
* From the cart page user can see the total price and then can make the payment by Clicking the checkout.After make the payment user will be count as enrolled to the courses and 1  available seats will be deduct after successfull payment from the courses.
* User can see their enrolled courses. If a user is enrolled to any course then the add to cart button will be disabled or if there is no available seat on the course then the button will be disbaled too.
#### Instructor: 
* In the homepage there will be 6 instructor list. Those users role is instructor only they will be shown on the list. User can see details about them by click the card.
* Only instructor can add course and update courses. But only denied and pending course can be updated. After updating any denied course it's status will be set to pending and if the admin accept it then it'll get approved.
* Instructors can see how many students have been enrolled for their particular course.
* But Instructor can't add any course to cart. 

***
### Here is the live link of the project:
Click here: [Northern Sports Academy](https://northern-sports-academy.web.app/)

