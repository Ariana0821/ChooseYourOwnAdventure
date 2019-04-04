// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "",
    background_image:"",
    levels: {

        start: {
            color: "red",
            message: "Shawn Mendes",
            choices: [
                {
                    text: "Start here",
                    nextLevel: "second",
                },
            ]
        },

        second: {
            color:"red",
            message: "You encounter Shawn Mendes. Do you greet him by saying...",
            choices: [
                {
                    text: "Hi, how are you?",
                    nextLevel: "open"
                    
                },
                {
                    text:"Hey, nice to meet you, I am the love of your life",
                    nextLevel: "leave",
                },
            ]
        },

        open: {
            color:"red",
            message: "Great! Shawn Mendes just greeted you back with a hug!!",
            choices: [
                { 
                    text: "Yay!",
                    nextLevel: "three",
                },
            ]
        },
        
        leave: {
            color:"red",
            message: "Shawn questions if that's true and flirts back",
            choices: [
                {
                    text: "Get it girl!!",
                    nextLevel: "three",
                },
            ]
        },
        
        three: {
            color:"red",
            message: "Your mom calls you in the middle of speaking with Shawn. What do you do?",
            choices: [
                {
                    text: "Pick up the phone and answer your mother.",
                    nextLevel: "quick",
                    
                },
                
                {
                    text: "Hit decline and continue to talk to your man that isn't your man yet. :)",
                    nextLevel: "long",
                    
                },
            ]
        },
        
        quick: {
            color:"red",
            message: "Your mom just tells you that she won't be home until later.",
            choices: [
                {
                    text: ":)",
                    nextLevel: "four",
                    
                },
                
            ]
        },
        
        long: {
            color:"red",
            message: "You get 15 more calls from your mother and 10 text messages.",
            choices: [
                {
                    text: ":(",
                    nextLevel: "four",
                },
                
            ]
        },
        
        four: {
            color:"red",
            message: "Shawn asks you to go out on a date. Do you agree or say no?",
            choices: [
                {
                    text: "HELL YEAH!",
                    nextLevel: "pink",
                    
                },
                
                {
                    text: "sorry :(",
                    nextLevel: "white",
                    
                },
                
            ]
        },
        
        pink: {
            color:"red",
            message: "He ends the night with a kiss",
            choices: [
                {
                    text: "Love It!!",
                    nextLevel: "five",
                },
                
            ]
        },
        
        white: {
            color:"red",
            message: "You end up regretting it and cry yourself to sleep that you missed out on a fun day with the man of your dreams.",
            choices: [
                {
                    text: ":(",
                    nextLevel: "five",
                },
                
            ]
        },
        
        five: {
            color:"red",
            message: "You hear someone screaming your name",
            choices: [
                {
                    text: "You open up your eyes and see that its your mother telling you to get ready for school.",
                    nextLevel: "six",
                },
                
            ]
        },
        
        
        six: {
            color:"red",
            message: "Shawn Mendes",
            choices: [
                {
                    text: "Start Here",
                    nextLevel: "start",
                },
            ]
        },
    }
};