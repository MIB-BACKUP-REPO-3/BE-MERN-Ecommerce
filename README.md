# BE-MERN-Ecommerce

Backend for an eCommerce application built using the MERN stack with **Node.js**, **Express.js**, and **MongoDB**.

## Flow

```
Request → Route → Controller → Service → Model
```

The application follows a simple layered structure:

* **Routes** handle endpoint definitions.
* **Controllers** handle request/response logic.
* **Services** contain business logic.
* **Models** handle database interaction using Mongoose.

A separate repository layer is not used for now. Mongoose models already handle the required database operations, so they are used directly in the service layer.