class RandomMessage{
    constructor(){
        this._messages= [];
        this._messages.push('The first step to achieve something is to believe that you can achieve it! ');
        this._messages.push('Success is not an accident, success is a choice.');
        this._messages.push('It is hard to fail but it is worse never to have tried to succeed.');
        this._messages.push('Work hard now. Don’t wait. If you work hard enough, you’ll be given what you deserve.');
        this._messages.push('No problem can withstand the assault of sustained thinking.');

    }

    message(){
        
        return this._messages[Math.floor(Math.random()*5)];
    }
    

}

let ranMsj= new RandomMessage();

console.log(ranMsj.message());
