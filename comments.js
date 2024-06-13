// Create Web Server with Node.js
// Create a comments.js file that will serve as a module that exports a single function that will handle incoming comments.
// This function will accept an array of comments as a parameter and return a string of HTML representing the comments.
// The comments will be represented as objects with name and message properties.

// comments.js
module.exports = function(comments) {
  var commentHtml = '<div id="comments"><ul>';
  comments.forEach(function(comment) {
    commentHtml += '<li>' + comment.name + ': ' + comment.message + '</li>';
  });
  commentHtml += '</ul></div>';
  return commentHtml;
};


