const quizData = [
    {
        question: "select lion",
        
        a: "img/lion.gif",
        b: "img/cat-11525956124t37pf0dhfz.png",
        c: "img/pngtree-giraffe-png-element-image_2273791.jpg",

    },
    {
        question:"choose cat",

        a: "img/lamb-iStock-665494268-16x9-e1559777676675-1200x675.jpg",
        b: "img/cat.gif",
        c: "img/pngtree-giraffe-png-element-image_2273791.jpg",
             
    },
    {
        question: "choose tiger",
    
        a: "img/tiger.gif",
        b: "img/cat-11525956124t37pf0dhfz.png",
        c: "img/pngtree-giraffe-png-element-image_2273791.jpg",
    
    },
    {
        question: "choose tuteriall",
       
        a: "img/lamb-iStock-665494268-16x9-e1559777676675-1200x675.jpg",
        b: "img/cat-11525956124t37pf0dhfz.png",
        c: "img/tuteriall.gif",
       
    },
   
];
const quiz= document.getElementById('quiz')

const questionEl = document.getElementById('question')
const div1 = document.getElementById('first')
const div2 = document.getElementById('second')

var pic1 = document.getElementById('pic1')
const pic2 = document.getElementById('pic2')
const pic3 = document.getElementById('pic3')



const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question

    pic1.src = currentQuizData.a;
    div2.appendChild(pic1);

    pic2.src = currentQuizData.b;
    div2.appendChild(pic2);

    pic3.src = currentQuizData.c;
    div2.appendChild(pic3);

//  div2.innerText=currentQuizData.a
//  div2.innerText +=currentQuizData.b
//  div2.innerText +=currentQuizData.c

// $("pic1").attr("src", currentQuizData.b);


// var img1 = document.createElement('img');    
//                 img1.src = currentQuizData.a; 

//   div2.appendChild(img1);       
  
  
//   var img2 = document.createElement('img');    
//                 img2.src = currentQuizData.b; 

//   div2.appendChild(img2);   


//   var img3 = document.createElement('img');    
//                 img3.src = currentQuizData.c; 

//   div2.appendChild(img3);   
}

function deselectAnswers() {
    document.getElementById("second").innerHTML = "";
}



// submitBtn.addEventListener('click', () =>{
  

    div1.addEventListener('drop', function(e) {
      // set your image types
      var imageTypes = ['image/gif'];
      if (e.dataTransfer && e.dataTransfer.files) {
        // e.dataTransfer.files is a FileList
        // e.dataTransfer.files[0].type is a Blob.type
        var fileType = e.dataTransfer.files[0].type;
        if (imageTypes.includes(fileType)) {
            score++;
        } 
        
        currentQuiz++

           if(currentQuiz < quizData.length) {
               loadQuiz()

           } else {
               quiz.innerHTML="";
               questionEl.innerHTML = `
               <h2>You answered ${score}/${quizData.length} questions correctly</h2>
    
                <button onclick="location.reload()">Reload</button> 
               `
           }
      }
    });
            
        //   })




/* function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
 */

// submitBtn.addEventListener('click', () => {
    // const answer = getSelected()
    // if(answer) {
    //    if(answer === quizData[currentQuiz].correct) {
    //        score++
    //    }

    //    currentQuiz++

    //    if(currentQuiz < quizData.length) {
    //        loadQuiz()
    //    } else {
    //        quiz.innerHTML = `
    //        <h2>You answered ${score}/${quizData.length} questions correctly</h2>

    //        <button onclick="location.reload()">Reload</button>
    //        `
    //    }
    // }

    
// })
   


