var counter=3;

function upvote() {
 counter=counter+1;

 document.getElementById("votes");

 votes.innerHTML = counter + " likes ";
}

function downvote() {
 counter=counter- 1;

 document.getElementById("votes");

 votes.innerHTML = counter + " likes ";
}