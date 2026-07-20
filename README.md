# Custom React Web Application – Laptop Store

## 1. Short Description
- **Objective**: To build a fully functional frontend e-commerce web application as the final assignment for the FER202 course.
- **Target Audience**: Customers looking to browse, filter, and purchase premium laptops and related accessories.
- **Key Features**: Product listing, search by name, brand filtering, price sorting, detailed shopping cart with quantity management, and responsive layout across all devices.

## 2. Technologies Used
- Create React App
- React
- React Router
- React-Bootstrap
- Bootstrap
- Redux Toolkit
- React Redux
- Public API
- Local JSON data

## 3. Installation and Setup

To run this project locally, execute the following commands in your terminal:

```bash
npm install
npm start
npm run build
```

## 4. Route Structure

- `/`: **Home** - Landing page introducing the store and demonstrating LO2/LO3 components.
- `/feature`: **Laptop Feature** - Main product catalog with search, filter, sort, and related electronics from a public API.
- `/cart`: **Cart** - Shopping cart interface for managing selected products and quantities.
- `/about`: **About** - Information regarding the assignment, learning outcomes, and team members.

## 5. Learning Outcomes (LO1–LO8)

- **LO1: Project Setup & Version Control**
  - **Requirement**: Use Create React App, Git, and make at least 5 commits.
  - **Implementation**: The project was bootstrapped with CRA and initialized with a Git repository.
  - **Proof**: `.git` folder and commit history.
- **LO2: Class & Functional Components**
  - **Requirement**: Implement reusable components using both Class and Functional paradigms.
  - **Implementation**: Created two identical product cards demonstrating both approaches, passing dynamic data via props.
  - **Proof**: `ProductCardFunctional.jsx`, `ProductCardClass.jsx`
- **LO3: Modern JavaScript & React Features**
  - **Requirement**: Use JSX, Arrow Functions, Template Literals, and Destructuring.
  - **Implementation**: Widely used throughout all components for clean, modern syntax and dynamic rendering.
  - **Proof**: Codebase-wide (e.g., `ProductCardFunctional.jsx`).
- **LO4: Styling**
  - **Requirement**: Use Bootstrap/React-Bootstrap for layout, Navbar, and custom CSS.
  - **Implementation**: Built responsive grid layouts with React-Bootstrap and implemented custom CSS.
  - **Proof**: `custom.css`, `Navbar.jsx`.
- **LO5: Routing**
  - **Requirement**: Use React Router.
  - **Implementation**: Configured multiple routes with a persistent Layout wrapper.
  - **Proof**: `App.js`.
- **LO6: State Management & Event Handling (Local)**
  - **Requirement**: Use `useState`, `useEffect`, and Event Handlers.
  - **Implementation**: Implemented real-time search, brand filtering, and price sorting without mutating the original data.
  - **Proof**: `Feature.jsx`.
- **LO7: Data Fetching & Asynchronous Operations**
  - **Requirement**: Fetch data from a Public API, handle loading/error states, and implement lazy loading.
  - **Implementation**: Fetched related accessories from FakeStore API. Used React.lazy with Suspense fallback.
  - **Proof**: `RelatedElectronics.jsx`, React.lazy in `App.js`, Suspense fallback.
- **LO8: Global State Management**
  - **Requirement**: Manage complex state using Redux Toolkit.
  - **Implementation**: Built a complete Shopping Cart system.
  - **Proof**: `store.js`, `cartSlice.js`, Navbar cart count, `Cart.jsx`.

## 6. Data Sources

The application uses two distinct data sources for different purposes:
1. **Local JSON Data**: Serves as the primary data source (10 laptops provided by the instructor).
2. **Public API** (`https://fakestoreapi.com/products/category/electronics`): Used strictly to fetch supplementary "Related Electronics" on the Feature page, fulfilling the LO7 requirement.

## 7. Team Contributions

| Name | Student ID | Branch | Contribution | Commits/PRs |
| :--- | :--- | :--- | :--- | :--- |
| [Member 1] | [Student ID] | main | [Contribution] | [Commits] |
| [Member 2] | [Student ID] | main | [Contribution] | [Commits] |
| [Member 3] | [Student ID] | main | [Contribution] | [Commits] |
| [Member 4] | [Student ID] | main | [Contribution] | [Commits] |
| [Member 5] | [Student ID] | main | [Contribution] | [Commits] |

## 8. Resource Transparency

- React documentation
- React Router documentation
- Redux Toolkit documentation
- Bootstrap/React-Bootstrap documentation
- Fake Store API
- Tài nguyên ảnh và dữ liệu do giảng viên cung cấp
- AI assistance đã sử dụng để lập kế hoạch, kiểm tra và hỗ trợ code.

## 9. Limitations & Future Enhancements

- Cart chưa lưu sau khi reload vì không dùng localStorage.
- Chưa có backend.
- Chưa có checkout/payment.
- Đây là phạm vi chủ động theo đề Assignment.

## 10. Final Verification Checklist

- [x] npm install thành công
- [x] npm start thành công
- [x] npm run build thành công
- [x] routes hoạt động
- [x] API loading/error hoạt động
- [x] search/filter/sort hoạt động
- [x] cart Redux hoạt động
- [x] responsive hoạt động
- [ ] ít nhất 5 Git commits (To be completed by students)
