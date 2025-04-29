/* https://www.w3schools.com/js/tryit.asp?filename=tryjs_intro_lightbulb */
//this links to more_pictures
const items = [
    {
        picture: "../images/buts.jpeg", 
        paragraph: "Butts is a trouble maker, he likes to fight, he is eating my grandma's shoe in this picture", 
        title:"Butts attacks!"
    },
    {
        picture: "../images/frank2.jpeg", 
        paragraph: "Frank enjoying a bit of rest in his cat food can bed!", 
        title: "Frank in bed"
    },
    {
        picture: "../images/IMG_6749.jpeg", 
        paragraph: "I just wanted to include some of my favorite pictures of Jay, he is so sweet", 
        title:"JayJay big streeeeetch"
    },
    {
        picture: "../images/jayjay4.jpeg", 
        paragraph: "Jay loves this window! He sits in it for hours", 
        title:"Jay's favorite window"
    },
    {
        picture: "../images/jayjay6.jpeg", 
        paragraph: "I love this picture of Jay, he is a very photogenic cat, not biased obviously", 
        title:"Jay laying down"
    },   
    {
        picture: "../images/TobiStripes2rect.jpeg", 
        paragraph: "Tobi and Stripes cuddling and napping together when they were younger, they are best of friends.", 
        title:"Tobi and Stripes taking a nap"
    }
]
function change_on_click(index) {
    const item = items[index];
    change(item.picture, item.paragraph, item.title);
}
function arrow_right(index) {
    const item = items[index];
    index = (index + 1) % items.length;
}
function arrow_left(index) {
    const item = items[index];
    index = (index - 1) % items.length;
}
/* change the image */
function change(picture, paragraph, title) {
    document.getElementById("large").src = picture; 
    document.getElementById("paragraph_display").innerHTML = paragraph;
    document.getElementById("title_display").innerHTML = title;
}
