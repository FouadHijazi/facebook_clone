-- DROP DATABASE FACEBOOKCLONE;
CREATE DATABASE FACEBOOKCLONE;
USE FACEBOOKCLONE;
CREATE TABLE users(
   id INT AUTO_INCREMENT NOT NULL,
   firstName VARCHAR(255) NOT NULL,
   lastName VARCHAR(255) NOT NULL,
   email VARCHAR(255) NOT NULL,
   password VARCHAR(255) NOT NULL,
   birthDay Date NOT NULL,
   profileImage VARCHAR(255),
   coverImage VARCHAR(255),
   isDeleted TINYINT DEFAULT 0,
   primary Key (id)
);
CREATE TABLE posts(
    id INT AUTO_INCREMENT NOT NULL,
    postText VARCHAR(255) NOT NULL,
    postImg VARCHAR(255)NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
    isDeleted TINYINT DEFAULT 0,
    postAuthor_id INT,
    FOREIGN KEY (postAuthor_id) REFERENCES users(id),
    primary KEY (id)
);
CREATE TABLE comments(
    id INT AUTO_INCREMENT NOT NULL,
    commentText VARCHAR(255),
    createdAt TIMESTAMP DEFAULT current_TIMESTAMP ,
    isDeleted TINYINT DEFAULT 0,
    commentAuthor_id INT,
    FOREIGN KEY (commentAuthor_id) REFERENCES users(id),
    post_id INT,
    FOREIGN KEY (post_id) REFERENCES posts(id),
    primary KEY (id)
);
CREATE TABLE postReaction(
    id INT AUTO_INCREMENT NOT NULL,
    userAction INT,
    FOREIGN KEY (userAction) REFERENCES users(id),
    postAction INT,
    FOREIGN KEY (postAction) REFERENCES posts(id),
    isDeleted TINYINT DEFAULT 0,
    primary KEY (id)
);
CREATE TABLE commentReaction(
    id INT AUTO_INCREMENT NOT NULL,
    userAction INT,
    FOREIGN KEY (userAction) REFERENCES users(id),
    commentAction INT,
    FOREIGN KEY (commentAction) REFERENCES comments(id),
    isDeleted TINYINT DEFAULT 0,
    primary KEY (id)
);
CREATE TABLE friendship(
    id INT AUTO_INCREMENT NOT NULL,
    friendshipRequest INT,
    FOREIGN KEY (friendshipRequest) REFERENCES users(id),
    friendshipAccept INT,
    FOREIGN KEY (friendshipAccept) REFERENCES users(id),
    isDeleted TINYINT DEFAULT 0,
    PRIMARY KEY (id)
);
