const app = Vue.createApp({
    data() {
        return {
            messages: [],
            userInput: ""
        };
    },
    methods: {
        sendMessage() {
            if (this.userInput.trim() !== "") {
                this.messages.push({ content: this.userInput, type: "sent" });

                //Answer from Bot
                this.messages.push({
                id: this.messages.length,
                content: "Hallo",
                type: "received",
                bot: true
                });
                this.userInput = "";
                
            } else {
                alert("Please enter a message");
            }
        }
    }
});

app.mount("#app");
