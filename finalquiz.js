var readlineSync = require("readline-sync")
const chalk = require("chalk");

var score = 0 
var readAnswer;

var UserName = readlineSync.question(chalk.bgRgb(102, 102, 102)("What's your Name?..\n"));

console.log(chalk.rgb(26, 102, 255)("\nWelcome " + UserName + " to Indian History quiz. Here you will be able to know how much you know about history of our country!!!\n"));
console.log(chalk.cyanBright("Get ready for quiz\n"));

function play(question, answer){
  readAnswer = readlineSync.question(question)

  if(readAnswer === answer){
    console.log(chalk.yellowBright("\nYaayy!! You got right answer"))
    score = score +1 ;
  }
  else
  {
    console.log(chalk.red("\nSorry! You got wrong"))
    
  }

   console.log(chalk.bgRedBright("Your Score: ", score));
   console.log("-----------------\n");

}

var Questions = [

{
  question:"Q1- Which of the following led to the introduction of English Education in India ? \na.Charter Act of 1813 \nb.General Committee of Public Instruction 1823 \nc.Orientalist and Anglicist Controversy\nSelect the correct answer using the code given below\n(a) 1 and 2 only\n(b) 2 only\n(c) 1 and 3 only\n(d) 1, 2 and 3\n\n",
    
  answer: "a" , 
},

{
  question: "Q2- In 1920, which of the following changed its name to “Swarajya Sabha”?\n(a) All India Home Rule League \n(b) Hindu Mahasabha\n(c) South Indian Liberal Federation\n(d) The Servants of India Society\n\n",

  answer: "a",
},

{
  question: "Q3- The Government of India Act of 1919 clearly defined\n(a) the separation of power between the judiciary and the legislature\n(b) the jurisdiction of the central and provincial governments\n(c) the powers of the Secretary of State for India and the Viceroy\n(d) None of the above\n\n",
  answer: "b",
},

{
  question:"Q4- Who of the following organized a march on the Tanjore coast to break the Salt Law in April 1930?\n(a) V. O. Chidambaram Pillai\n(b) C. Rajagopalachari\n(c) K. Kamaraj\n(d) Annie Besant\n\n",
  answer: "b",

},

{
  question:"Q5- The `Swadeshi' and 'Boycott' were adopted as methods of struggle for the first time during the\n(a) agitation against the Partition of Bengal\n(b) Home Rule Movement\n(c) Non-Cooperation Movement\n(d) visit of the Simon Commission to India\n\n",

  answer: "a",
},

{
  question:"Q6- The Montague-Chelmsford Proposals were related to\n(a) social reforms\n(b) educational reforms\n(c) reforms in police administration\n(d) constitutional reforms\n\n",

  answer: "d",

},

{
  question:"Q7  -Who among the following had drafted the “Declaration of Independence” pledge in 1930?\n[a] Motilal Nehru\n[b] Jawahar Lal Nehru\n[c] Mahatma Gandhi\n[d] C R Das\n\n",

  answer: "c",
},

{
  question:"Q8- Which was the only session of Indian National Congress, presided by Mahatma Gandhi?\n[a] Allahabad\n[b] Guwahati\n[c] Belgaum\n[d] Kakinada\n\n",

  answer:"c",
},

{
  question:"Q9- Who among the following had founded the Central Hindu College at Varanasi, which was later converted into Banaras Hindu University? \n[a] Madan Mohan Malviya\n[b] Annie Besant\n[c] Bal Gangadhar Tilak\n[d] Jamna Lal Bajaj\n\n",

  answer:"a",
},

{
  question:"Q10- In which year, Calcutta became Capital of British India?\n[a] 1768\n[b] 1770\n[c] 1772\n[d] 1776\n\n",

  answer:"c",

},

{
  question:"Q11- Who was the Viceroy of India when Simon commission visited India?\n[a] Lord Hardinge II\n[b] Lord Chelmsford\n[c] Lord Irwin\n[d] Lord Minto II\n\n",

  answer:"c",
},

{
  question:"Q12- Who were the last Europeans to come to India for trading?\n[a] English\n[b] Danes\n[c] French\n[d] Dutch\n\n",

  answer:"c",
},

{
  question:"Q13- The decisive battle of the Third Carnatic War, battle of Wandiwash was fought in which year?\n[a] 1760\n[b] 1761\n[c] 1765\n[d] 1757\n\n",

  answer:"a",
},

{
  question:"Q14- Rabindranath Tagore is the original writer of the national anthems of __:\n1. India\n2. Bangladesh\n3. Sri Lanka\nSelect the correct option from the codes given below:\n[a] Only 1 & 2\n[b] Only 2 & 3\n[c] Only 1 & 3\n[d] 1, 2 & 3\n\n",

  answer:"d",
},

{
  question:"Q15- Where did Vasco Da Gama set up a factory when he came to India for the second time?\n[a] Cannanore\n[b] Kochi\n[c] Masulipatnam\n[d] Ernakulam\n\n",
  
  answer: "a",
},

{
  question:"Q16- How long Vasco Da Gama stayed in India after his arrival in 1498?\n[a] 10 months\n[b] 7 months\n[c] 3 months\n[d] 1 months\n\n",

  answer:"c",
},

{
  question: "Q17- Lord Mayo founded the Mayo college in which of the following places of India?\n[a] Ajmer\n[b] Guwalior\n[c] Indore\n[d] Allahabad\n\n",

  answer: "a",
},

{
  question: "Q18- Who of the following was the longest-serving Viceroy of India?\n[a] Lord Minto II\n[b] Lord Wavell\n[c] Lord Linlithgow\n[d] Lord Wellingdon\n\n",

  answer: "c",
},

{
  question: "Q19- Which of the following movement started after the failure of the Cripps Mission?\n[a] Quit India Movement\n[b] Civil disobedient Movement\n[c] Non cooperation Movement\n[d] Swadeshi Movement\n\n",

  answer: "a", 
},

{
  question: "Q20- Which of the following commission was appointed by the government to investigate the Jallianwala Bagh Massacre?\n[a] Lee Commission\n[b] Edward Commission\n[c] Sarkaria Commission\n[d] Hunter Commission\n\n",

  answer: "d",
}



];

for(var i=0 ; i<Questions.length; i=i+1){
  var current=Questions[i];
  play(current.question, current.answer)
}

console.log(chalk.greenBright("Congratulations!!! Your Score is ", score));
console.log("--------------------------------------------\n");

