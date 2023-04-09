## InterviewIO
Saatvik Vadlapatla, Pranav Polasam, Steven Zhang, Adam Yang


## Inspiration
As four computer science students, we noticed a clear need for interview resources as there wasn't an efficient way to practice the skill of interviewing. Many students only have shot at the perfect interview and it is vital they get all the experience they can to achieve their goals. Furthermore, many students also get fairly nervous with interviews due to a lack of practice. We believe that having a resource like our project to practice talking out interviews and get real feedback on answers would be immensly helpful to students and give them the interview prep they need.
## What it does
Our project simulates a behavioral interview by asking questions which the user can answer. The model then takes the user's response into account and then asks relevant follow-up questions. The questions are voiced so that the user gets an authentic interview experience. Once the user decides to end the interview, they are directed to an interview history page where they can see logs of all previous interviews. Each log will contain the time the interview ended, each question and answer conducted during the interview, and feedback on the interview based on the users answers. The user will also get a score for each response.
## How we built it
The frontend of the project was mainly on ReactJS and CSS. In order to simulate the interview, we set up an API endpoint to 
an instance of a  GPT-3 model. The backend was mainly developed utilizing Flask. We prompt-engineered the GPT-3 model to generate a suitable response which is then sent and parsed on the frontend. In order to create the voice for the interview
we mainly used ReactJS frameworks.
## Challenges we ran into
We struggled quite a bit on configuring the API endpoints to utilize the user input and generate the response. We originally 
intended to send the audio file directly from the frontend to the backend and handle the text transcription over there. However,
this turned out to be a daunting task and we ran into quite a bit of compatibility issues.
## Accomplishments that we're proud of
. We are proud of getting a finished product which accomplishes exactly what we intended to do, 
create a resource for everyone to practice interviews. This was a great learning experience for us, and we are proud we were able
to pull through in spite of the quite annoying and challenging problems we ran into.
## What we learned
None of us had much experience with web development in general, so developing a full-stack project of this magnitude was a bit
daunting but quite rewarding. We learned quite a bit of frontend development and how to utilize ReactJS for developing the webpage, while also honing on the specific libraries to enhance capability. Through the various challenges we faced with the API
endpoints and the model, we learned quite a bit on how to transfer information between the frontend and backend and how to train a model properly.
## What's next for InterviewIO
In the future, our goal is to make the interview more immersive and realistic for the user. We plan to introduce a talking face so that the user can get the experience of talking to someone face to face just like a real interview. Furthermore, we plan to allow users to practice technical interviews along with behavioral interviews to widen the scope of what the user can do.
