<template>
    <div class="button-options">
      <button @click="sendMessage('Заказать пиццу')">Заказать пиццу</button>
      <button @click="sendMessage('Установить будильник')">Установить будильник</button>
      <button @click="sendMessage('Вывести погоду')">Вывести погоду</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      sendMessage(message) {
        this.$emit('user-message', message);
      },
    },
  };
  </script>
  
  <style scoped>
  .button-options {
    display: flex;
    flex-direction: column;
  }
  .button-options button {
	display: inline-block;	
	box-sizing: border-box;
	margin: 15px 0 0 0;
	outline: none;
	border: 1px solid #fff;
	border-radius: 50px;
	height: 46px;
	line-height: 46px;
	font-size: 14px;
	font-weight: 600;
	text-decoration: none;
	color: #444;
	background-color: #fff;
	box-shadow: 0 4px 6px rgb(65 132 144 / 10%), 0 1px 3px rgb(0 0 0 / 8%);
	cursor: pointer;
	user-select: none;
	appearance: none;
	touch-action: manipulation;  
	vertical-align: top;
	transition: box-shadow 0.2s;
  }

.button-options button:focus-visible {
	border: 1px solid #4c51f9;
	outline: none;
}
.button-options button:hover {
	transition: all 0.2s;
	box-shadow: 0 7px 14px rgb(65 132 144 / 10%), 0 3px 6px rgb(0 0 0 / 8%);
}
.button-options button:active {
	background-color: #808080;
}
  </style>
  