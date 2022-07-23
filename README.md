![MIT](https://img.shields.io/badge/License-MIT-blue)
# React Portfolio

## Description

Personally crafted React.js website to display my full-stack skills!

_**Check out the deployed application [here](https://sam-pettyjohn.github.io/react-portfolio/)!**_


## Table of Contents

- [React Portfolio](#react-portfolio)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [User Story](#user-story)
  - [Mock-Up](#mock-up)
  - [Acceptance Criteria](#acceptance-criteria)
    - [Additional Criteria](#additional-criteria)
  - [Contributing](#contributing)
  - [Questions](#questions)
  - [License](#license)

## User Story
~~~
AS AN employer looking for candidates with experience building single-page applications
I WANT to view a potential employee's deployed React portfolio of work samples
SO THAT I can assess whether they're a good candidate for an open position
~~~

## Acceptance Criteria
~~~
GIVEN a single-page application portfolio for a web developer
WHEN I load the portfolio
THEN I am presented with a page containing a header, a section for content, and a footer
WHEN I view the header
THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
WHEN I view the navigation titles
THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
WHEN I click on a navigation title
THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted
WHEN I load the portfolio the first time
THEN the About Me title and section are selected by default
WHEN I am presented with the About Me section
THEN I see a recent photo or avatar of the developer and a short bio about them
WHEN I am presented with the Portfolio section
THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository
WHEN I am presented with the Contact section
THEN I see a contact form with fields for a name, an email address, and a message
WHEN I move my cursor out of one of the form fields without entering text
THEN I receive a notification that this field is required
WHEN I enter text into the email address field
THEN I receive a notification if I have entered an invalid email address
WHEN I am presented with the Resume section
THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
WHEN I view the footer
THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter) 
~~~

### Mock-Up
The following image shows the web application's appearance and functionality:

![image](./src/assets/img/react-portfolio-mockup.png)


### Additional Criteria

**Technical Acceptance**

- Satisfies all of the preceding acceptance criteria plus the following:
    - Application must use React to render content.
    - Application has a single Header component that appears on multiple pages, with a      Navigation component within it that’s used to conditionally render About Me, Portfolio, Contact, and Resume sections.
    - Application has a single Project component that’s used multiple times in the Portfolio section.
    - Application has a single Footer component that appears on multiple pages.
    - Application must be deployed to GitHub Pages.


**Deployment**

- Application deployed at live URL.
- Application loads with no errors.
- Application GitHub URL submitted.
- GitHub repository contains application code..


**Application Quality**

- User experience is intuitive and easy to navigate.
- User interface style is clean and polished.
- Application uses a color scheme other than the default Bootstrap color palette.


**Repository Quality**

- Repository has a unique name.
- Repository follows best practices for file structure and naming conventions.
- Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.
- Repository contains multiple descriptive commit messages.
- Repository contains high-quality README file with description, screenshot, and link to deployed application.


## Contributing

For any ideas or feedback, please see my contact information [below](#questions).


## Questions

For any questions, please reach out to me through the following resources:

Name: Samuel Pettyjohn <br>
Title: Developer <br>
Email: <sammpj47@gmail.com> <br>
GitHub: <https://github.com/sam-pettyjohn/> <br>

## License

MIT License

Copyright (c) 2022 Samuel Pettyjohn
            
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
            
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
            
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. 