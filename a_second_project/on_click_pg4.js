/* https://www.w3schools.com/js/tryit.asp?filename=tryjs_intro_lightbulb */
//this links to even_more_pictures
const items = [
    {
        picture: "../images/Mira1.jpeg", 
        paragraph: "Mira looking expectantly for pets... well are you gonna keep her waiting?", 
        title:"Mira wants head pats!"
    },
    {
        picture: "../images/Tobi3.jpeg", 
        paragraph: "Tobi laying down taking a nap, no, they can't avoid the cameras anywhere!", 
        title: "Tobi taking a nap"
    },
    {
        picture: "../images/taco&jay.jpeg", 
        paragraph: "Jay graciously sharing his favorite window with Taco. I love this picture because it shows them in almost the exact same pose.", 
        title:"Jay and Taco sharing a window view"
    },
    {
        picture: "../images/taco2.jpeg", 
        paragraph: "It is rare to see Taco out and about so we try to take advantage of those times by taking as many pictures as possible", 
        title:"Taco trying to sleep but it is photo time"
    },
    {
        picture: "../images/taco1.jpeg", 
        paragraph: "I'm 99.99% sure he was begging for treats in this photo. He always stands around that spot when he begs", 
        title:"Taco begging"
    },   
    {
        picture: "../images/StripesTobi3.jpeg", 
        paragraph: "Stripes and Tobi caught cuddling on the couch together, they absolutely love eachother!!", 
        title:"Cuddle boys"
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
