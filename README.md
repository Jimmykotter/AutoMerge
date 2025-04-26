# AutoMerge

**AutoMerge** is a full-stack MERN application enhanced with **Continuous Integration (CI)** and **Continuous Deployment (CD)** using **GitHub Actions**.  
This project demonstrates a CI/CD pipeline that automatically runs Cypress component tests when a Pull Request is made to the `develop` branch and automatically deploys the app to Render when merged to the `main` branch.

## Features

- GitHub Actions workflows for Cypress testing and automatic deployment
- Branching strategy with `develop`, `main`, and feature branches
- Cypress component tests triggered on Pull Requests to `develop`
- Auto-deployment to Render when merging from `develop` to `main`
- Full-stack MERN application structure ready for scalable development

## Screenshots
![image](https://github.com/user-attachments/assets/a81b2dae-2b60-4abb-a079-c8e0c65f6a92)

![image](https://github.com/user-attachments/assets/761e5fcb-5abf-4620-934d-d28fe7b257e6)

## Built With

**Frontend**
- [React](https://reactjs.org/) – Frontend UI library
- [Cypress](https://www.cypress.io/) – Component and end-to-end testing
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework

**Backend**
- [Node.js](https://nodejs.org/) – Runtime environment
- [Express](https://expressjs.com/) – Server framework
- [MongoDB](https://www.mongodb.com/) – NoSQL database
- [Mongoose](https://mongoosejs.com/) – ODM for MongoDB
- [GraphQL](https://graphql.org/) and [Apollo Server](https://www.apollographql.com/docs/apollo-server/) – Flexible API querying
- [JWT](https://jwt.io/) – Authentication with JSON Web Tokens

## GitHub Actions Workflows

**Test Workflow**
- Triggers when a Pull Request is made to the `develop` branch
- Runs Cypress component tests automatically
- Reports pass/fail status on the Pull Request

**Deploy Workflow**
- Triggers when `develop` is merged into `main`
- Automatically deploys the latest code to [Render](https://render.com/)

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/automerge.git
cd automerge
```

### 2. Install dependencies
``bash
# Frontend
cd client
npm install

# Backend
cd ../server
npm install
``

### 3. Start the development servers
``bash
# Backend
cd server
npm run develop

# Frontend
cd ../client
npm run dev
``

## Deployment

The application is deployed to Render and automatically updated when Pull Requests are merged into `main`.  
Render Deploy Hook URL and API Key are configured securely in GitHub Repo Secrets.

**Live Application URL:**  
*(Insert your Render app URL once deployed)*

## Contributing

This is a personal project showcasing CI/CD practices and is not currently accepting external contributions. Feel free to fork the repo and set up your own pipelines!

## License

This project is licensed under the [MIT License](LICENSE).

## Author

**Jimmy**  
- [GitHub](https://github.com/jimmykotter)  
- [Email](mailto:jimmykotter@gmail.com)

## Link to deployed website and github repo:

https://github.com/Jimmykotter/AutoMerge

https://automerge-u1eb.onrender.com/
