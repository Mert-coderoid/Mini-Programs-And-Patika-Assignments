// import post.json
const posts = require("./post.json");

// create a new post
const newPost = {
    id: 7,
    title: "Post 7",
    body: "Post 7 body"
};


// add new post with async/await
function addNewPost(post) {
    return new Promise((resolve, reject) => {
        posts.push(post);
        const error = false;
        if (!error) {
            resolve(
                "Post was added successfully"
            )
        }
        else {
            reject(
                "Error while adding post"
            )
        }
    })
}


// add new post with callback
function addNewPostCallback(post, callback) {
    posts.push(post);
    const error = false;
    if (!error) {
        callback(
            null,
            "Post was added successfully"

        )
    }
    else {
        callback(
            "Error while adding post",
            null

        )
    }
}


// add new post with async/await
async function addNewPostAsync(post) {
    posts.push(post);
    const error = false;
    if (!error) {
        return "Post was added successfully"
    }
    else {
        throw new Error("Error while adding post")
    }
}




/* 
// use callback function
addNewPostCallback(newPost, (error, message) => {
        if (error) {
            console.log(error);
        }
        else {
            console.log(message);
        }
    }
);

 */

// use async/await
addNewPost(newPost)
    .then(message => {
        console.log(message);
    })
    .catch(error => {
        console.log(error);
    })


// use async/await
addNewPostAsync(newPost)
    .then(message => {
        console.log(message);
    }
    )
    .catch(error => {
        console.log(error);
    }
    )

// use addNewPostCallback
addNewPostCallback(newPost, (error, message) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log(message);
    }
})



console.log(posts);

// write post.json file
const fs = require("fs");

fs.writeFile("./post.json", JSON.stringify(posts), "utf8", (error) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log("File was created successfully");
    }
}
);

fs.writeFile("./post.json", JSON.stringify(posts), "utf-8", (error) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log("File was created successfully");
    }
}
);
