
  function gameStart(){
    $('#startBtn').click(function(){
      $('#startBtn').fadeOut();
      $("#gameName").animate({"margin": "30px 0px 50px 0px"});
      questStart();
      console.log(trivQuests.trivq1[0]);
    });
  }

//Global Variables
var time = 30;
var trivQuests = {
          trivq1: ["Which is the best hip-hop album?",

                    'The Chronic',
                    'Illmatic',
                    'Ready To Die',
                    '36 Chambers',
                    'Aquemini',
                ],
          trivq2: ["Which is the best hip-hop producer?",

                    'Dr. Dre',
                    'DJ Premier',
                    'J Dilla',
                    'Timberland',
                    'Kanye West',
                    'Pharrel Williams',
                ],
          trivq3: ["Which is the most underrated MC?",

                    'Black Thought',
                    'Pusha T',
                    'MF Doom',
                    'Talib Kweli',
                    'Jay Electronics',
                ],
          trivq4: ["Which is the best golden era classic?",

                    'Fear of a black planet',
                    'Criminal Minded',
                    'Power',
                    'Radio',
                    'Licensed to Ill',
                ],
trivq5: ["Which artist has the most memorible lines in hip-hop?"],
trivq6: ["Which collaboration would be the most prolific in hip-hop?"],
trivq7: "",
trivq8: "",
trivq9: "",
trivq10: "",
};

var correctAns;
var wrongAns;
var intervalId;

//Fucntions

function gamePlay(){};

//Place copy into 'p' tag
function questStart(){
  for (var i = 0; i < trivQuests.length; i ++){

  }
  $("p").text(trivQuests.trivq1[0]);

  var trivTime = setInterval(function(){
    triviaTime()}, 1000);

    //Time count down
    function triviaTime(){
      time--;
      console.log(time);
      //Clears and stops Time
      if (time === 0 ){
        clearInterval(trivTime);
        console.log(true);
      }
    }
}




gamePlay();
