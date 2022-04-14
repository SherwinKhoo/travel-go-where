# sei_35_p3_travel_go_where

Software Engineering Immersive - Project 3 - Travel Go Where

Authors
Amirul Ithnin | Khoo Kiah Hong, Sherwin | Quek Ying Ying

Reviewers
Desmond Lim | Ernest Mui | Lim Qizhen

Project: Build a functional **travel forum** in a week.

Technologies Used

1. React.js
2. Express.js
3. Mongoose
4. MongoDB
5. CSS
6. HTML

User Interface

1. Simple interface

Prioritisation, Goal, Milestones, Timeline

1. Demonstrate that the minumum **CRUD** functions are working.
2. Build the frontend with **React.js**.
3. Ensure that the minimum CRUD functions can be performed using the frontend components.

Motivation

1. Reinforce understanding of React.js, Express.js, and MongoDB

Approach Taken

1. Prepare backend **endpoints**.
2. Make sure that all CRUD functions are covered.
3. Do preliminary testing with **Postman**.
4. Ensure that all necessary libraries are installed.
5. Create the frontend application in **React.js**.
6. Test if the CRUD functions can be performed via the frontend application.

Data Structure

1. Refer to powerpoint

Lessons Learnt

1. It is quite difficult to change the data structure once a certain threshold has been passed.

Potential Improvements

1. Append forum users' usernames to individual posts, possibly add a timestamp as well.

2. Restructure schema to allow for replies to a particular post; at the moment, posts can be made but without the posibility for reply. A potential way to do it could be to store each reply in an array.

   This is how the data will be stored with the "content" key.

   content: [
   {"postId": 1, "post": "this is the first post", "deleted": false},
   {"postId": 2, "post": "blah blah blah", "deleted": **false**},
   {"postId": 3, "post": "something", "deleted": false}
   ]

   For example, if the post with id: 2 is deleted, it should be updated as such.

   content: [
   {"postId": 1, "post": "this is the first post", "deleted": false},
   {"postId": 2, "post": "blah blah blah", "deleted": **true**},
   {"postId": 3, "post": "something", "deleted": false}
   ]

   The original post should be stored instead of overwritten for posterity.

3. Implement a way to index the posts to make it faster, possibly by country, then type of post, then individual post; will need to read up on how to do this.

<!-- country           |          singapore          |           malaysia          |           brunei            |
     type of post      |    0    |    1    |    2    |    0    |    1    |    2    |    0    |    1    |    2    |
     individual post   |i|i|i|i|i|i|i|i|i|i|i|i|i|i|i|i|i|i|i|i|i|i|i|i|i|i|i|i|i|i|i|i|i|i|i|i|i|i|i|i|i|i|i|i|i| -->

Fair Use

1. This project is for purely academic purposes.
2. This project will not hinder the copyright owner's ability to sell the related product.
3. There are many similar projects elsewhere.

MIT License - Copyright (c) 2022 Sherwin Khoo, Quek Ying Ying, Amirul Ithnin

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
