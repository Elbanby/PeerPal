const express = require('express');


const app = express();



const server = app.listen(3000, function() {
    console.log('server running on port 3001');
});


const io = require('socket.io')(server);

io.on('connection', function(socket) {
  socket.on('SEND_MESSAGE',(data) =>{
    console.log(data);
    io.emit('MESSAGE', {personalMsg: 'It works! Maybe ' + data });
  });
});

var withdrawMap = new Map();
var flippedWithdrawMap = new Map();
var seedMap = new Map();
var flippedSeedMap = new Map();

class Node{
    constructor(id, balance, wf){
        this.id = id;
        this.balance = balance;
        this.wFlag = wf;
        this.timeout = 0;
    }


    static checkBorrowingAvailability(){
        var sum = 0;
        var counter = 0;
        var iterator = seedMap.entries();
        var item = iterator.next();
        while(!item.done){
            sum = sum + item.value[1].balance;
            counter ++;
            item = iterator.next();
        }
        if((sum - 20*counter) > 0)
            return true;
        else
            return false;
    }

    static startLeeching(n){
        if(n.balance - 1 >= 20){
            n.balance -= 1;
        }
    }

    static checkFlippedAvailability(){
        var sum = 0;
        var counter = 0;
        var iterator = flippedWithdrawMap.entries();
        var item = iterator.next();
        while(!item.done){
            sum = sum + item.value[1].balance;
            counter ++;
            item = iterator.next();
        }
        if((sum - 20*counter) > 0)
            return true;
        else
            return false;
    }

    static startLeeching(n){
        if(n.balance - 1 >= 20){
            n.balance -= 1;
        }
    }


    static startBorrowing(amount){
        console.log("start borrowing");
        var itr = withdrawMap.entries();
        var n = itr.next();
        //console.log(n[0].withdrawFlag);
        while(!n.done){
            console.log("in loop");
            var newAmount = amount;
            console.log(this.checkBorrowingAvailability());
            if(this.checkBorrowingAvailability()){
                console.log('trading started');
                var iterator = seedMap.entries();
                var item = iterator.next();
                while(!item.done){
                    n.value[1].balance += 1;
                    console.log("current node " + n.value[0] + " bal: " + n.value[1].balance);
                    this.startLeeching(item.value[1]);
                    console.log("item: " + item.value[0] + " value: " + item.value[1].balance);
                    item = iterator.next();
                    newAmount = newAmount - 1;

                }
            }
            n = itr.next();
        }
    }

    static otherBorrowing(amount){
        console.log("start borrowing");
        var itr = flippedSeedMap.entries();
        var n = itr.next();
        //console.log(n[0].withdrawFlag);
        while(!n.done){
            console.log("in loop");
            var newAmount = amount;
            console.log(this.checkBorrowingAvailability());
            if(this.checkBorrowingAvailability()){
                console.log('trading started');
                var iterator = flippedWithdrawMap.entries();
                var item = iterator.next();
                while(!item.done){
                    n.value[1].balance += 1;
                    console.log("current node " + n.value[0] + " bal: " + n.value[1].balance);
                    this.startLeeching(item.value[1]);
                    console.log("item: " + item.value[0] + " value: " + item.value[1].balance);
                    item = iterator.next();
                    newAmount = newAmount - 1;

                }
            }
            n = itr.next();
        }
    }

}
var node;
var tempBalance = 100;
var withdrawFlag = 0;
// gets confirms that all the nodes have joined.
io.on('connection', function(socket) {
  socket.on('SEND_MESSAGE',(data) =>{
    withdrawFlag = 1 - withdrawFlag;
    tempBalance --;
    node = new Node(data.user, tempBalance, withdrawFlag);

      if(withdrawFlag == 0){
        withdrawMap.set(data.user, node);
        flippedSeedMap.set(data.user, node);
      }
    else{
        seedMap.set(data.user, node);
        flippedWithdrawMap.set(data.user, node);
    }

      console.log("wflag: " + withdrawFlag);

      Node.startBorrowing(20);
      Node.otherBorrowing(20);
    //console.log(data.user);
    //io.emit(data.user, withdrawFlag);
  });
});
