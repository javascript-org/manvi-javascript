window.onload = function (event) {
  initQuestions();
  loadQuestion(0);
};

function prevQuestion() {
  let index = parseInt(localStorage.getItem(INDEX));
  if (index > 0) {
    index = index - 1;
    localStorage.setItem(INDEX, index);
    loadQuestion(index);
  }
}

function nextQuestion() {
  let index = parseInt(localStorage.getItem(INDEX));
  let total = parseInt(localStorage.getItem(TOTAL_QUESTION_COUNT));
  if (index < total) {
    index = index + 1;
    localStorage.setItem(INDEX, index);
    loadQuestion(index);
  }
}

function loadQuestion(index) {
  let strQuestions = localStorage.getItem(QUESTIONS);
  let arr = JSON.parse(strQuestions);
  if (index < 0 || index > arr.length - 1) {
    return;
  }
  let question = arr[index];
  addQuestionToDom(question);
}

function addQuestionToDom(questionItem) {
  let questionWrapperDiv = document.getElementById("questionWrapper");
  questionWrapperDiv.innerText = "";
  addQuestion(questionItem.question, questionWrapperDiv);
  addOptions(questionItem.options, questionWrapperDiv);
}

function addOptions(options, questionWrapperDiv) {
  let optionDiv = document.createElement("div");

  for (let option of options) {
    let optionLabel = document.createElement("label");
    optionLabel.innerText = option.id+":"

    let radioBtn = document.createElement("input");
    radioBtn.type = "radio";
    radioBtn.checked = false;
    radioBtn.id = option.id;
    radioBtn.value = option.id;
    radioBtn.name='option';
    radioBtn.onclick=answerOptionClick;

    let radioLabel = document.createElement('label');
    radioLabel.innerText = option.content;
    
    optionDiv.appendChild(optionLabel);
    optionDiv.appendChild(radioBtn);
    optionDiv.appendChild(radioLabel);
    optionDiv.appendChild(document.createElement('br'));
  }
  questionWrapperDiv.appendChild(optionDiv);
}

function answerOptionClick(event)
{
    let questionWrapperDiv = document.getElementById("questionWrapper");
    let value = event.target.value;
    console.log(questionWrapperDiv.questionId, value);
}
function addQuestion(question, questionWrapperDiv) {
  let questionDiv = document.createElement("div");
  let questionIdDiv = document.createElement("div");
  let questionContentDiv = document.createElement("div");

  questionDiv.appendChild(questionIdDiv);
  questionDiv.appendChild(document.createElement("br"));
  questionDiv.appendChild(questionContentDiv);

  //   let question = questionItem.question;
  questionIdDiv.innerText = question.id;
  questionContentDiv.innerHTML = question.content;

  questionWrapperDiv.appendChild(questionDiv);

  questionWrapperDiv.questionId = question.id;
}

const QUESTIONS = "questions";
const INDEX = "INDEX";
const TOTAL_QUESTION_COUNT = "TOTAL_QUESTION_COUNT";
function initQuestions() {
  let arr = [
    {
      question: {
        id: 1,
        content: "1+2",
      },
      options: [
        {
          id: "A",
          content: "3",
        },
        {
          id: "B",
          content: "4",
        },
      ],
      answer: "A",
    },
    {
      question: {
        id: 2,
        content: "2+2",
      },
      options: [
        {
          id: "A",
          content: "3",
        },
        {
          id: "B",
          content: "4",
        },
      ],
      answer: "A",
    },
    {
        question: {
          id: 3,
          content: `<pre>
          class Test{
            public static void main(String[] args){
                System.out.println("Hello");
            }
          }</pre>`,
        },
        options: [
          {
            id: "A",
            content: "5",
          },
          {
            id: "B",
            content: "3",
          },
        ],
        answer: "A",
      }
  ];

  localStorage.setItem(QUESTIONS, JSON.stringify(arr));
  localStorage.setItem(INDEX, 0);
  localStorage.setItem(TOTAL_QUESTION_COUNT, arr.length - 1);
}
