<script setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'
import axios from 'axios'

const city = ref('')
let message = ref('');
const router = useRouter() 

const search = () => {
  message.value = '';
  axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city.value}&appid=0a06f95727a0a65a8165050db073611c`)
    .then(response => {
      apiWeather(response.data[0].lat,response.data[0].lon)
    })
    .catch(error => {
      message.value = 'Cidade não encontrada';
    })
}
const apiWeather = (lat,lon) => {
  axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=0a06f95727a0a65a8165050db073611c&units=metric&lang=pt_br`)	
    .then(response => {
      localStorage.setItem('city', JSON.stringify(response.data));
      router.push('/previsao');
    })
    .catch(error => {
      console.log(error);
    })
}
</script>

<template>
  <main class="bg-teal-600	 w-full h-screen flex-col flex justify-center items-center">
    <div class="gap-2 shadow-md border rounded flex bg-white flex-col justify-center items-center p-4">
      <h1 class="text-center text font-semibold	">Coloque o nome da cidade para fazer a previsão</h1>
      <div>
        <input placeholder=" cidade..." class="p-1 shadow-md border-black border rounded-l-sm	" v-model="city" type="text">
        <button class="p-1 shadow-md text-white border rounded-r-sm border-sky-700 bg-sky-700" @click="search">enviar</button>
      </div>
      <small class="text-red-600" v-if="message">{{ message }}</small>
    </div>
  </main>
</template>
