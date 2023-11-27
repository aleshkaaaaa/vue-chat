<template>
    <div class="chat-wrapper">
        <div class="chat-widget" ref="chatContainer">
        <div class="chat-container" ref="chatMessages">
            <div v-for="message in chatHistory" :key="message.id">
            <div v-if="message.from === 'bot'" class="bot-message">{{ message.text }}</div>
            <div v-else class="user-message">{{ message.text }}</div>
            </div>
        </div>
        <ButtonOptions @user-message="handleUserMessage" v-if="showOptions" />
        <input v-model="userInput" @keyup.enter="sendMessage" v-if="!showOptions" placeholder="Введите сообщение..." />
        </div>
    </div>  
  </template>
  
  <script>
  import ButtonOptions from './ButtonOptions.vue';
  
  export default {
    components: {
      ButtonOptions,
    },
    data() {
      return {
        chatHistory: [
          { id: 1, text: 'Привет! Что я могу для Вас сделать?', from: 'bot' }
        ],
        showOptions: true,
        userInput: '',
      };
    },
    methods: {
      handleUserMessage(message) {
        this.addUserMessage(message);
        this.showOptions = false;
        setTimeout(() => {
          this.addBotMessage(`Хорошо, я ${message.toLowerCase()}. Что еще могу сделать?`);
        }, 5000);
      },
      addUserMessage(message) {
        this.chatHistory.push({ id: this.chatHistory.length + 1, text: message, from: 'user' });
        this.scrollChatToBottom();
      },
      addBotMessage(message) {
        this.chatHistory.push({ id: this.chatHistory.length + 1, text: message, from: 'bot' });
        this.showOptions = true;
        this.scrollChatToBottom();
      },
      sendMessage() {
        const message = this.userInput.trim();
        if (message !== '') {
          this.addUserMessage(message);
          this.userInput = '';
        }
      },
      scrollChatToBottom() {
        this.$nextTick(() => {
          const chatContainer = this.$refs.chatContainer;
          chatContainer.scrollTop = chatContainer.scrollHeight;
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .chat-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
  .chat-widget {
    width: 300px;
    height: 500px;
    border: 1px solid #ccc;
    overflow: auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 25px;
  }
  .chat-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .bot-message {
    background-color: #f0f0f0;
    align-self: flex-start;
    border-radius: 25px 25px 25px 0;
    padding: 13px 23px;
    margin: 5px;
    word-wrap: break-word;
    max-width: 70%;
  }
  .user-message {
    background-color: #d1ffd8;
    align-self: flex-end;
    border-radius: 25px 25px 0 25px;
    padding: 13px 23px;
    margin: 5px;
    margin-left: 190px ;
    word-wrap: break-word;
    max-width: 70%;
  }
  input {
    opacity: 0;
  }
  </style>
  