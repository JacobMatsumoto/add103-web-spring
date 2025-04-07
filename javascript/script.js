/* https://www.w3schools.com/js/tryit.asp?filename=tryjs_intro_lightbulb */

const items = [
    {
        picture: "images/duckstar.png", 
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet repellat praesentium eius expedita cupiditate veniam quibusdam harum non dicta distinctio suscipit ducimus consequatur, nobis nam excepturi reiciendis architecto magnam officiis?", 
        title:"this one is the duckstar"
    },
    {
        picture: "images/duckvader.png", 
        paragraph: "duckvader Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet repellat praesentium eius expedita cupiditate veniam quibusdam harum non dicta distinctio suscipit ducimus consequatur, nobis nam excepturi reiciendis architecto magnam officiis?", 
        title: "this is duckvader"
    },
    {
        picture: "images/duckbacca.png",
        paragraph:"lorem",
        title:"duckbaca",
    },
    {
        picture: "images/leia.png",
        paragraph:"lorem2",
        title:"leia"
    },
    {
        picture:"images/wookieandrobot.png",
        paragraph:"lorem3",
        title:"wookie and robot"
    }
]
function change_on_click(index) {
    const item = items[index];
    change(item.picture, item.paragraph, item.title);
}

/* change the image */
function change(picture, paragraph, title) {
    document.getElementById("large").src = picture; 
    document.getElementById("paragraph_display").innerHTML = paragraph;
    document.getElementById("title_display").innerHTML = title;

}

let index_change = 0

// setInterval()
//     const item = items[index_change];
//     change(item.picture,item.paragraph,item.title)
//     index_change = (index_change + 1) % items.length; 5000;
setInterval(() => {
    const item = items[index_change]; // Get the current item from the array
    change(item.picture, item.paragraph, item.title); // Update the display
    index_change = (index_change + 1) % items.length; // Increment the index and loop back to 0 when it reaches the end
}, 5000);


// setInterval(() => {
//     const item = items[index_change]; // Get the current item from the array
//     change(item.picture, item.paragraph, item.title); // Update the display
//     index_change = (index_change + 1) % items.length; // Increment the index and loop back to 0 when it reaches the end
// }, 5000);
//this is
