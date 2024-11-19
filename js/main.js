var quoets = [
{
    quete :"“Be yourself; everyone else is already taken.”",
    author: "― Oscar Wilde"
},
{
    quete :"“So many books, so little time.”",
    author: "― Frank Zappa"
},
{
    quete :"“A room without books is like a body without a soul.”",
    author: "― Marcus Tullius Cicero"
},
{
    quete :"You only live once, but if you do it right, once is enough.”",
    author: "― Mae West"
},
{
    quete :"“If you tell the truth, you don't have to remember anything.”",
    author: "― Mark Twain"
},
{
    quete :"“We accept the love we think we deserve.”",
    author: " Stephen Chbosky, The Perks of Being a Wallflower"
},
{
    quete :"“It is better to be hated for what you are than to be loved for what you are not.”",
    author: "― Andre Gide, Autumn Leaves"
},

]

function getQuotes() {
   var num = Math.floor(Math.random()*quoets.length)
   console.log(num);
document.getElementById('quote').innerHTML = quoets[num].quete
   
document.getElementById('author').innerHTML = quoets[num].author
   
   


}