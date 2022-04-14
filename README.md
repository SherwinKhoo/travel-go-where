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

User Interface

1. Simple interface

Prioritisation, Goal and Milestones

1.

Timeline

1.

Motivation

1. Reinforce understanding of React.JS
2. Add to portfolio

Approach Taken

1. Prepare backend **endpoints**.
2. Create the frontend application in **React.js**.

Data Structure

1. Refer to powerpoint

Lessons Learnt

1. It is quite difficult to change the data structure once a certain threshold has been passed.

Potential Improvements

1. Appending forum users' usernames to individual post.
2. Restructure schema to allow for replies to a particular post, instead of requiring the user to create a new post. One way to do it could be to store each reply as an array.

   This is how the data will be stored with the "content" key.
   content: [
   {"id": 1, "post": "this is the first post", "deleted": false},
   {"id": 2, "post": "blah blah blah", "deleted": **false**},
   {"id": 3, "post": "something", "deleted": false}
   ]

   For example, if the post with id: 2 is deleted, it should be updated as such.
   content: [
   {"id": 1, "post": "this is the first post", "deleted": false},
   {"id": 2, "post": "blah blah blah", "deleted": **true**},
   {"id": 3, "post": "something", "deleted": false}
   ]

   The original post should be stored instead of overwritten for posterity, in the event of a user posting something offensive and the authorities ask for "evidence".

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
