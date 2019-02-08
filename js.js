/* Style the HTML elements according to the following instructions.
DO NOT ALTER THE EXISTING HTML TO DO THIS.  WRITE ONLY CSS!
*/


/* Give everything with the class 'hello' a white background when you click on one of them*/

// function that when the paragraph 1 will have a purple background
$(".hello").on("click",function ()
{
    // css is a jquery shortcut to include css styling within your JavaScript
    $(this).css("background","rebeccapurple")
});

/* When you mouse over the "Selectors Exercise" element, change the height&width to 20px. When you mouse off of it change it back */

// when user hoovers over the  the first H1 element it will change the height and width to 20px
$("h1:first").on("mouseover",function ()
{
    $(this).css("height","20px");
    $(this).css("width","20px");
});
// mouse leave is when the mouse gets off its intended object
$("h1:first").on("mouseleave",function ()
{
    $(this).css("height","100%").css("width","100%");

});

/* Each time the sentence "I am a paragraph with a class" is clicked, add a "." to the end of the sentence. */

// a function that adds a period to the of the end of the sentence when clicked
$(".hello:first").on("click",function ()
{
    // append means add
    $(this).append(".");
});


