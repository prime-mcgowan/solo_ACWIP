The Action Committee for Women in Prison Website

## Description

The ACWIP advocates for the humane and compassionate treatment of incarcerated women; specifically focusing on incarcerated women with children.

The ACWIP’s original website is very cluttered, confusing and difficult to navigate through. With their website being in that state, they run the risk of someone who is looking for more information or worse yet, someone who wants to get involved, clicking away from ACWIP’s site to find one that they can more easily interact with.

In order to clearly communicate with the user and capture their attention I designed and engineered the following:

- A clean homepage with quick links to information about the organization, their work and how to become a volunteer
- Linked pages with clear and easily digestible content
- A built-out volunteer portal to allow people to quickly register to become a volunteer and immediately get involved with the organization

This is a Full Stack CRUD React Application.

## Technologies used:

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

<!-- ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) -->

## Features

- Navigation: The application includes a navigation bar that allows users to easily switch between different pages.

- Protected Routes: Certain routes are protected, meaning they require the user to be logged in to access. If the user is not logged in, they are redirected to the login page.

- User Authentication: User authentication is implemented using Redux and a server API. The application fetches user data upon initialization to determine whether the user is logged in.

- Pages: The application includes several pages:

  - About Page: Provides information about the application and its purpose.

  - User Page: A protected route that displays user-specific information and features.

  - Info Page: Displays general information.

  - Landing Page: The landing page for the application. Redirects to the user page if the user is already logged in.

  - Login Page: Allows users to log in. If the user is already logged in, they are redirected to the user page.

  - Registration Page: Allows users to register for the application. If the user is already logged in, they are redirected to the  
    user page.

  - Get Involved Page: Provides information about how users can get involved in the application's activities.

  - Volunteer Form: A protected route that allows users to submit a volunteer form.

  - Volunteer Portal Page: A protected route that displays a portal for volunteers, providing access to relevant information.

  - Edit Volunteer Profile: A protected route that allows users to edit their volunteer profile.

  - Penpal Profiles: A protected route that displays profiles of penpals.

  - Writing Tips: A protected route that provides writing tips for volunteers.

  - Get Acquainted Page: A page for users to get acquainted with the application's features.

  - Get Informed Page: A page that provides information to users about the application.

## Getting Started

1. Clone the repository to your local machine.
2. Install the required dependencies using npm install.
3. Run the application using npm start.

The application should open in your default web browser.

## Dependencies

- React
- React Router
- Redux
