/* 

Filename: sophisticatedCode.js

This code is a sophisticated and elaborate example that demonstrates the implementation of a social media application. 
It includes features like user authentication, post creation, comment handling, and friend requests. 
Please note that this is a simplified implementation for demonstration purposes only, and may not include extensive error handling.

*/

// User Class
class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
    this.posts = [];
    this.friends = [];
  }

  createPost(content) {
    const post = new Post(content, this.username);
    this.posts.push(post);
    return post;
  }

  receiveFriendRequest(sender) {
    // Simulating friend request handling
    // In a real application, this would involve checking user existence, etc.
    console.log(`Received friend request from ${sender}`);
    this.acceptFriendRequest(sender);
  }

  acceptFriendRequest(friendUsername) {
    this.friends.push(friendUsername);
    console.log(`Accepted friend request from ${friendUsername}`);
  }

  timeline() {
    console.log(`Timeline for ${this.username}:`);
    this.posts.forEach((post) => {
      console.log(`Author: ${post.author}, Content: ${post.content}`);
    });
  }
}

// Post Class
class Post {
  constructor(content, author) {
    this.content = content;
    this.author = author;
    this.comments = [];
  }

  addComment(comment) {
    this.comments.push(comment);
    console.log(`${comment.author} commented: ${comment.content}`);
  }
}

// Comment Class
class Comment {
  constructor(content, author) {
    this.content = content;
    this.author = author;
  }
}

// Create Users
const user1 = new User("JohnDoe", "pass123");
const user2 = new User("JaneSmith", "qwerty");

// Create and display posts
const post1 = user1.createPost("Hello, world!");
user2.createPost("Nice weather today!");

// Add comments to posts
const comment1 = new Comment("Agreed!", user2.username);
post1.addComment(comment1);
user1.receiveFriendRequest(user2.username);

// Display Timelines
user1.timeline();
user2.timeline();