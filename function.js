 let para = document.querySelector("p");
        let outest = document.querySelector("h1+div");
        let btns = document.querySelectorAll(".inner");
        let reset = document.querySelector("#reset-btn");
        let startGame = document.querySelector("#start-game");
        let newGame = document.querySelector("#new-game");
        let turn0 = true;
        let count = 0;

        startGame.addEventListener('click',function() {
            startGame.classList.add('display');
            outest.classList.remove('display');
            
        });

       

        const win = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

        btns.forEach((btn) => {
            btn.addEventListener('click',() => {
                console.log("button was clicked");
                if(turn0) {
                    btn.style.color = "green";
                    btn.innerText = "X";
                    
                    turn0 = false;
                    para.innerText = "Player O turn";
                    count++;
                } else {
                    btn.style.color = "blue";
                    btn.innerText = "O";
                    
                    turn0 = true;
                    para.innerText = "Player X turn";
                    count++;
                }
                btn.disabled  = true;

                checkWinner();
            });
        });

        const enabled = () => {
            for(btn of btns) {
                btn.disabled = false;
                btn.innerText = "";
                para.innerText = "Player X turn";
            }
        }

        const disabled = () => {
            for(btn of btns) {
                btn.disabled = true;
            }
        }

        const showWinner = (winner) => {
            para.innerText = `Congratulations, Winner is ${winner}`;
           
            disabled();
            reset.classList.add("display");
            newGame.classList.remove("display");

        }
        const checkWinner = () => {
            for(let pattern of win) {
                let pos1 = btns[pattern[0]].innerText;
                let pos2 = btns[pattern[1]].innerText;
                let pos3 = btns[pattern[2]].innerText;

                if(pos1 != "" && pos2 != "" && pos3 != "") {
                    if(pos1 === pos2 && pos2 === pos3) {
                        console.log(`player ${pos1} winner`);
                        showWinner(pos1);
                    } 
                    if(count===9){
                        if(!(pos1 === pos2 && pos2 === pos3)) {
                            para.innerText = "It's A Draw";
                        }
                    }
                }
            }
        }

        
        reset.addEventListener('click',function() {
            turn0 = true;
            enabled();

        });
         newGame.addEventListener('click',function() {
            turn0 = true;
            enabled();
            newGame.classList.add("display");
            reset.classList.remove("display");
         });

        