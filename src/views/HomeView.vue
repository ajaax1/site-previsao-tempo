<script setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'
import axios from 'axios'

const city = ref('')
let message = ref('');
const router = useRouter() 


const apiWeather = () => {
  message.value = '';
  axios.get(`https://backendprevisao-production.up.railway.app/api/dados/${city.value}`)	
    .then(response => {
      localStorage.setItem('city', JSON.stringify(response));
      router.push('/previsao');
    })
    .catch(error => {
      message.value = 'Cidade não encontrada';
    })
}
</script>

<template>
  <main class="bg-teal-600	 w-full h-screen flex-col flex justify-center items-center">
    <div class="gap-2 shadow-md border rounded flex bg-white flex-col justify-center items-center p-4">
      <h1 class="text-center text font-semibold	">Coloque o nome da cidade para fazer a previsão</h1>
      <div>
        <input placeholder=" cidade..." class="p-1 shadow-md border-black border rounded-l-sm	" v-model="city" type="text">
        <button class="p-1 shadow-md text-white border rounded-r-sm border-sky-700 bg-sky-700" @click="apiWeather">enviar</button>
      </div>
      <small class="text-red-600" v-if="message">{{ message }}</small>
    </div>
  </main>
</template>
