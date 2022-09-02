# phase1_project

# Project name
END OF DAY SUBMISSIONS

# Author name
JOY BIWOTT

# Description of the project
In this project, I'm creating a simple application like a journal where the client gets a review on how their day has been.
They give both sides of the day, both the good and bad.
They then get a conclusion that compiles all the activities.
Thy also get a recommendation of engaging activities that could help them.

# Poject set-up instructions
1. Create  HTML, CSS and JavaScript files

2. In HTML, create two forms, one for the good activities and another for challanging ones
   Just below each form, create a <div> where you target whatever the user types and this goes here as an ordered list and they are free to remove it.

   Select the first form
   Target whatever input the client types
   create a callback function that indicates what happens after submitting the data

   define the 1st form's callback function
   
   on submitting the input, target it to the <div> element below where it's presented as an ordered list
   attach a button to each list where the client can delete the input
   on clicking the button callback function (deleteAct) is triggered
   select the 2nd form
   
   once the page has loaded, add an event listener to it to submit the input
   
   create a callback function to be invoked once the button has been submitted
   
   on submitting the second form, the makeSecondList() function is triggered
   it creates a list and adds the input in the second list to the <div> element
   the button attached to each list content triggers the deleteAct() which removes that content

3. get the first <h1> element and give it a variable
   create a function that gets a random combination every one and a half second to change the yaay color randomly

4. once input filled and form submitted, the data goes to the unordered list below
   operate on the conclusion
   compile the lists of the person's activities
   give a number after they click of the activities theyve done

5. fetch an API, whereby on triggering it, it gives a random quote depending on the day

6. lastly, give the user a list of recommended activities

# Event listeners
I have used 3 event listeners; DOMContentLoaded, click and submit