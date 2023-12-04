/*
   Filename: complexCode.js
   Description: This JavaScript code demonstrates a complex and sophisticated implementation of a social media platform called "MySocialApp".

   Author: John Doe
   Date: September 15, 2022
*/

// Importing necessary modules
import {
  User,
  Post,
  FriendRequest,
  Notification,
  Message,
  Location,
  Theme,
} from "./modules";

// Global variables
const MAX_POST_LENGTH = 1000;
const MAX_FRIENDS = 100;
let currentUser;

// Initialize the application
function initialize() {
  // Load user data from the server
  const userData = loadUserData();

  // Create a new User object for the current user
  currentUser = new User(userData.username, userData.email);

  // Load the user's friends list
  const friendsList = loadFriendsList();

  // Add each friend to the current user's friends list
  friendsList.forEach((friend) => currentUser.addFriend(friend));

  // Load user's posts and display them on the home page
  const userPosts = loadUserPosts(currentUser);
  displayPosts(userPosts);

  // Display the user's profile information on the profile page
  displayProfile(currentUser);
}

// Event listener for post submission form
document.getElementById("post-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const postContent = document.getElementById("post-content").value;

  // Validate post length
  if (postContent.length > MAX_POST_LENGTH) {
    displayErrorMessage("Post length exceeds the maximum character limit!");
    return;
  }

  // Create a new Post object
  const newPost = new Post(postContent, currentUser);

  // Add the post to the user's list of posts
  currentUser.addPost(newPost);

  // Clear the post input field
  document.getElementById("post-content").value = "";

  // Display the newly added post on the home page
  displayPosts([newPost]);
});

// Event listener for friend request acceptance
document.getElementById("friend-requests").addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const requestId = event.target.dataset.requestId;
    const request = currentUser.getFriendRequestById(requestId);
    const friend = request.sender;

    // Accept the friend request
    currentUser.acceptFriendRequest(request);

    // Display a notification to the user
    const notification = new Notification(
      "Friend Request Accepted",
      `You are now friends with ${friend.username}`
    );
    currentUser.addNotification(notification);

    // Update friend count
    if (currentUser.friends.length === MAX_FRIENDS) {
      displayInfoMessage("You have reached the maximum number of friends!");
    }

    // Remove the friend request from the UI
    event.target.parentElement.remove();
  }
});

// Event listener for sending messages
document.getElementById("message-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const recipientUsername = document.getElementById("message-recipient").value;
  const messageContent = document.getElementById("message-content").value;

  // Validate recipient
  const recipient = findUserByUsername(recipientUsername);
  if (!recipient) {
    displayErrorMessage(`User "${recipientUsername}" not found!`);
    return;
  }

  // Validate message content
  if (messageContent.trim() === "") {
    displayErrorMessage("Empty messages cannot be sent!");
    return;
  }

  // Create a new Message object
  const newMessage = new Message(currentUser, recipient, messageContent);

  // Send the message to the recipient
  currentUser.sendMessage(newMessage);

  // Clear the message input fields
  document.getElementById("message-recipient").value = "";
  document.getElementById("message-content").value = "";

  // Display a success message
  displaySuccessMessage("Message sent successfully!");
});

// ... Rest of the code ...
// This code can include user authentication, data manipulation, advanced UI interactions, real-time updates, etc.

// Entry point of the application
initialize();
