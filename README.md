![banner](https://github.com/eramsay20/relay/blob/master/assets/relay_banner_1.png?raw=true)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

## Project Overview

***[relay](https://relay-aa.herokuapp.com/)*** is a clone of asana.com that focuses on helping teams manage projects and task delegation across team members. Users can create new projects and assign tasks to members of the team assigned to a given project. 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

The goal of this week long, full-stack project was to have 4 fully functional core MVP features finished, which include:  
- Profile Page - create a profile page for a logged in user to view their tasks and projects
- Teams - allow for the creation, updating and deletion of teams on the platform 
- Projects - allow users the ability to create, remove and update the status of a project
- Tasks - allow users the ability to create, remove and update the status of a project

In addition to the core features above, we were able to implement the following bonus features:

- Comments - allow users to view, create, update and delete comments on a specific task within a project
- Refactor all forms into popup modals

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

### Login/Signup/Splash Pages 
When a user first tries to navigate to Relay, they are auto redirected to a login splash page to sign into their account or sign up for a new one. This behavior mirrors Asana, in that a user can only view projects and tasks that they have permission to view. There is no public asana display without first creating an account, so we leverage the same design. The exception is that we've created an additional Demo User log in button so others can test the functionality of the site. 

![Splash](https://github.com/eramsay20/relay/blob/main/assets/comparisons/login_splash_page.png?raw=true)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

### Main/Profile Page (MVP Req #1 & #2)
When logged in, the user sees their profile page as their 'home' page. In it they can view a summary of their tasks, personal projects and projects for which they subscribe to as a team member. From the profile page a user can create a new project, as well as navigate to all existing projects they have permission to engage with. The sidebar on the left side of the screen allows them to add, update and remove teams from the platform. This sider is available on all pages when in a logged-in state to allow for easy team CRUD functionality. 

![Profile/Main](https://github.com/eramsay20/relay/blob/main/assets/comparisons/profile_page.png?raw=true)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

### Project Page - (MVP Req #3 & #4)
When a user clicks on a project card from their Profile page, they are dynamically routed to the respective Project page via NavLinks in React. The Project page renders a new view showing a project header with the title and status, as well as a task table outlining all the tasks for the given project. The project header houses a small checkmark which when clicked will toggle and update the status of the project dynamically. At the bottom of the task table there is a form disguised as another table row. When filled out, a user can hit the enter key or press the green plus button on the left of the row to add the new task to the table in real time. 

![Project](https://github.com/eramsay20/relay/blob/main/assets/comparisons/project_page.png?raw=true)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

### Comment Modal (~Bonus!!)

When a user clicks on the title of a given task, a modal will popup on the righthand side of the screen. The modal renders details about the task, including a hidden 'description' field not show on the task row. In addition, users can add comments to the task via a built-in comment form shown at the bottom half of the model. A user who has added a comment is then show button options to edit or delete a comment they've left on the task within the modal.

![CommentModal](https://github.com/eramsay20/relay/blob/main/assets/comparisons/comment_modal.png?raw=true)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

And that's about it! (happy dance!?!)

For more info about this project, checkout the full planning documentation links outlined in the project wiki page, [here!](https://github.com/eramsay20/relay/wiki). 
