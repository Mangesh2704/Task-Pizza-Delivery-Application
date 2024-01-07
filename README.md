# Pizza Delivery Application

This is a full-stack Pizza Delivery Application built using React, MongoDB, and Node.js. The application includes features such as user and admin authentication, pizza customization, Razorpay payment integration, inventory management, order tracking, and notifications.

## Features

1. **Authentication:**
   - User authentication with complete registration, email verification, and forgot password system.
   - Admin login with secure authorization.

2. **Dashboard:**
   - After logging in, users can view available pizza varieties in the dashboard.

3. **Pizza Customization:**
   - Users can customize their pizza with the following flow:
     - Choose pizza base from 3 options.
     - Choose quantity.
     - Select cheese type.
     - Choose veggies from various options.

4. **Payment Integration:**
   - Integrated Razorpay checkout for payment.
   - Test mode available.
   - On successful payment, the order is placed and confirmed.

5. **Admin Inventory Management:**
   - Admin login includes a mini inventory management system.
   - Keeps track of available pizza base, sauce, cheese, veggies, and meat.

6. **Stock Update:**
   - After each order, updates necessary changes in stock.
   - Admin can view stock changes in the admin dashboard.

7. **Notifications:**
   - Scheduled notifications to the admin email when the available stock goes below the threshold.
   - E.g., triggers an email when the total pizza base is below 20 after consecutive orders.

8. **Order Tracking:**
   - Admin receives the order and can change the status:
     - Order received
     - In the kitchen
     - Sent to delivery.

9. **Real-time Updates:**
   - User dashboard reflects real-time status changes made by the admin.

## Tech Stack

- Frontend: React
- Backend: Node.js, Express
- Database: MongoDB
- Payment Gateway: Razorpay
- Authentication: JWT

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/pizza-delivery-app.git

2. Install dependencies:
   ```bash
   cd pizza-delivery-app
   npm install

3. Configure environment variables 

4. Run the application:
    ```bash
    npm start
    ```

5. Access the application at http://localhost:3000.

## Contributions

Contributions are welcome! If you'd like to contribute to this project, please open an issue or a pull request.

##
**Author:** Mangesh Pangam  
**GitHub:** [Mangesh2704](https://github.com/Mangesh2704)  
**Email:** 202103036.mangeshpkr@student.xavier.ac.in
