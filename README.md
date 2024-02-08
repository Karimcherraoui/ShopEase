# Mobile Commerce Platform

## Project Overview

This project aims to develop a mobile application that enables users to browse, purchase, and manage courses from a specialized e-commerce platform.

### Features to Implement:

1. **Course Display:** Dynamically display the list of available courses. Show an appropriate message if no courses are available.

2. **Navigation and Interaction:** Integrate interactive icons such as "More Details" and "Add to Cart" to enhance navigation.

3. **Screen Management:** Create two new distinct screens, namely "CourseInfos" and "Cart". Implement a stack navigator to ensure smooth transitions between the "Landing" and "CourseInfos" screens.

4. **CourseInfos Customization:** Display the course name in the header of the "CourseInfos" screen. Integrate an icon on the right side for quick navigation to the cart.

5. **Cart Manipulation:** Allow adding courses to the cart. Remove added courses from the catalog. Display saved courses in the cart. Enable course removal from the cart. Re-display courses in the catalog that are removed from the cart.

6. **Purchase Process:** Finalize the purchase of items in the cart. Empty the cart after each successful purchase.

7. **Global Navigation:** Implement a Drawer Navigator comprising three main tabs: "Catalog", "Cart", and "Purchases".

### Redux Implementation:

You are required to use Redux for the following reducers: `reducerCourses` for course management, `reducerCart` for cart management, `reducerPayment` for payment management.

### Code Coverage and Dockerization:

Increase code coverage by 20% while dockerizing the application.

## Getting Started

Follow these instructions to get the project up and running on your local machine.

1. Clone the repository:
`git clone https://github.com/your/repository.git`

2. Navigate to the project directory:
`cd project-directory`

3. Install dependencies:
`npm install`

4. Start the development server:
`npm start`


## Contributing

Contributions are welcome! Please read the [contribution guidelines](CONTRIBUTING.md) before making any pull requests.

## License

This project is licensed under the [MIT License](LICENSE).

