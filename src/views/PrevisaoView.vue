<script setup>
import { onMounted, reactive, ref } from 'vue';
import Chart from 'chart.js/auto';

let lista = JSON.parse(localStorage.getItem('city')).data.list;
let city = JSON.parse(localStorage.getItem('city')).data.city;

const buscarDias = (day) => {
  let data = new Date(day);
  let dia = data.getDay();
  let diaNomeMin = ["seg.", "ter.", "qua.", "qui.", "sex.", "sáb.","dom."];
  let diaNomeMax = ["segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado","domingo"];
  let dias = {};
  dias.diaMin = diaNomeMin[dia];
  dias.diaMax = diaNomeMax[dia];
  return dias; 
}

const buscarHoras = (data) => {
  return data.substring(11, 16);
}

const atualizarTemperatura = (temp) => {
  temp = Math.round(temp); 
  let numeroStr = temp.toString();
  return numeroStr.substring(0, 2);
}
const atualizarVelocidadeVento = (temp) => {
  temp = temp * 3.6;
  return Math.round(temp);
}

const dayOne = [];
const dayTwo = [];
const dayThree = [];
const dayFour = [];
const dayFive = [];
let valueOne = 0;
let valueTwo = 0;
let key = 0
let tempMax = -100;
let tempMin = 100;
let diff = 0;
let diffVerify = true;

while (valueOne < 5) {
  valueTwo = 0;
  while (valueTwo < 8) {
    if (valueOne === 0) {
      lista[key].dias = buscarDias(lista[key].dt_txt.substring(0, 10));
      lista[key].dias = buscarDias(lista[key].dt_txt.substring(0, 10));
      lista[key].hora = buscarHoras(lista[key].dt_txt);
      lista[key].main.temp = atualizarTemperatura(lista[key].main.temp);
      lista[key].wind.speed = atualizarVelocidadeVento(lista[key].wind.speed);
      let valueThree = 0;
      while(valueThree < 8 ){
        if(tempMax < lista[valueThree].main.temp_max){
          tempMax = lista[valueThree].main.temp_max;
          lista[valueThree].main.temp_max = tempMax;
        }else{
          lista[valueThree].main.temp_max = tempMax;
        }
        if(tempMin > lista[valueThree].main.temp_min){
          tempMin = lista[valueThree].main.temp_min;
          lista[valueThree].main.temp_min = tempMin;
        }
        else{
          lista[valueThree].main.temp_min = tempMin;
        }
        lista[valueThree].main.temp_max = atualizarTemperatura(lista[valueThree].main.temp_max);
        lista[valueThree].main.temp_min = atualizarTemperatura(lista[valueThree].main.temp_min);
        valueThree++;
      }
      if(lista[0].dias.diaMax != lista[key].dias.diaMax){
        diff++;
      }
      dayOne.push(lista[key]);
    } else if (valueOne === 1) {
      if(diffVerify){
        key = key - diff; 
        diffVerify = false;
      }
      lista[key].dias = buscarDias(lista[key].dt_txt.substring(0, 10));
      lista[key].dias = buscarDias(lista[key].dt_txt.substring(0, 10));
      lista[key].hora = buscarHoras(lista[key].dt_txt);
      lista[key].main.temp = atualizarTemperatura(lista[key].main.temp);
      lista[key].wind.speed = atualizarVelocidadeVento(lista[key].wind.speed);
      let valueThree = 8;
      while(valueThree < 16 ){
        if(tempMax < lista[valueThree].main.temp_max){
          tempMax = lista[valueThree].main.temp_max;
          lista[valueThree].main.temp_max = tempMax;
        }else{
          lista[valueThree].main.temp_max = tempMax;
        }
        if(tempMin > lista[valueThree].main.temp_min){
          tempMin = lista[valueThree].main.temp_min;
          lista[valueThree].main.temp_min = tempMin;
        }
        else{
          lista[valueThree].main.temp_min = tempMin;
        }
        lista[valueThree].main.temp_max = atualizarTemperatura(lista[valueThree].main.temp_max);
        lista[valueThree].main.temp_min = atualizarTemperatura(lista[valueThree].main.temp_min);
        valueThree++;
      }
      dayTwo.push(lista[key]);
    } else if (valueOne === 2) {
      lista[key].dias = buscarDias(lista[key].dt_txt.substring(0, 10));
      lista[key].dias = buscarDias(lista[key].dt_txt.substring(0, 10));
      lista[key].hora = buscarHoras(lista[key].dt_txt);
      lista[key].main.temp = atualizarTemperatura(lista[key].main.temp);
      lista[key].wind.speed = atualizarVelocidadeVento(lista[key].wind.speed);
      let valueThree = 16;
      while(valueThree < 24 ){
        if(tempMax < lista[valueThree].main.temp_max){
          tempMax = lista[valueThree].main.temp_max;
          lista[valueThree].main.temp_max = tempMax;
        }else{
          lista[valueThree].main.temp_max = tempMax;
        }
        if(tempMin > lista[valueThree].main.temp_min){
          tempMin = lista[valueThree].main.temp_min;
          lista[valueThree].main.temp_min = tempMin;
        }
        else{
          lista[valueThree].main.temp_min = tempMin;
        }
        lista[valueThree].main.temp_max = atualizarTemperatura(lista[valueThree].main.temp_max);
        lista[valueThree].main.temp_min = atualizarTemperatura(lista[valueThree].main.temp_min);
        valueThree++;
      }
      dayThree.push(lista[key]);
    } else if (valueOne === 3) {
      lista[key].dias = buscarDias(lista[key].dt_txt.substring(0, 10));
      lista[key].dias = buscarDias(lista[key].dt_txt.substring(0, 10));
      lista[key].hora = buscarHoras(lista[key].dt_txt);
      lista[key].main.temp = atualizarTemperatura(lista[key].main.temp);
      lista[key].wind.speed = atualizarVelocidadeVento(lista[key].wind.speed);
      let valueThree = 24;
      while(valueThree < 32 ){
        if(tempMax < lista[valueThree].main.temp_max){
          tempMax = lista[valueThree].main.temp_max;
          lista[valueThree].main.temp_max = tempMax;
        }else{
          lista[valueThree].main.temp_max = tempMax;
        }
        if(tempMin > lista[valueThree].main.temp_min){
          tempMin = lista[valueThree].main.temp_min;
          lista[valueThree].main.temp_min = tempMin;
        }
        else{
          lista[valueThree].main.temp_min = tempMin;
        }
        lista[valueThree].main.temp_max = atualizarTemperatura(lista[valueThree].main.temp_max);
        lista[valueThree].main.temp_min = atualizarTemperatura(lista[valueThree].main.temp_min);
        valueThree++;
      }
      dayFour.push(lista[key]);
    } else if (valueOne === 4) {
      lista[key].dias = buscarDias(lista[key].dt_txt.substring(0, 10));
      lista[key].dias = buscarDias(lista[key].dt_txt.substring(0, 10));
      lista[key].hora = buscarHoras(lista[key].dt_txt);
      lista[key].main.temp = atualizarTemperatura(lista[key].main.temp);
      lista[key].wind.speed = atualizarVelocidadeVento(lista[key].wind.speed);
      let valueThree = 32;
      while(valueThree < 40 ){
        if(tempMax < lista[valueThree].main.temp_max){
          tempMax = lista[valueThree].main.temp_max;
          lista[valueThree].main.temp_max = tempMax;
        }else{
          lista[valueThree].main.temp_max = tempMax;
        }
        if(tempMin > lista[valueThree].main.temp_min){
          tempMin = lista[valueThree].main.temp_min;
          lista[valueThree].main.temp_min = tempMin;
        }
        else{
          lista[valueThree].main.temp_min = tempMin;
        }
        lista[valueThree].main.temp_max = atualizarTemperatura(lista[valueThree].main.temp_max);
        lista[valueThree].main.temp_min = atualizarTemperatura(lista[valueThree].main.temp_min);
        valueThree++;
      }
      dayFive.push(lista[key]);
    }
    valueTwo++;
    key++;
  }
  valueOne++;
}
let data = reactive({dayOne, dayTwo, dayThree, dayFour, dayFive});
let selectDay = ref(0);
let imgNublado = './src/assets/img/nublado.png';
let imgSol = './src/assets/img/sol.png';
let imgChuva = './src/assets/img/chuva.png';
let indice = ref('dayOne');
let showHour = ref(false);

const getImageSrc = (description) => {
  if (description.substring(0,3) == 'céu') {
    return imgSol;
  } else if (description == 'nublado' || description == 'nuvens dispersas') {
    return imgNublado;
  } else {
    return imgChuva;
  }
}

let ctx;
onMounted(() => {
  ctx = new Chart(
    document.getElementById('myChart'),
    config
  );
});


let horarios = ref(data[indice.value].map((item) => item.hora));
let dadosGrafico = ref(data[indice.value].map((item) => item.main.temp));

const buttomClick = (day) => {
  showHour.value = false; 
  selectDay.value = 0;
  indice.value = day;
  horarios = data[indice.value].map((item) => item.hora);
  dados.labels = horarios;
  dadosGrafico = data[indice.value].map((item) => item.main.temp);
  ctx.data.labels = horarios;
  ctx.data.datasets[0].data = dadosGrafico;
  ctx.update();
};


let dados = {
  labels: horarios.value,
  datasets: [{
    label: 'Temperatura',
    data: dadosGrafico.value,
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
}

const config = {
  type: 'line',
  data: dados,
};



</script>
<template>
  <main class="bg-teal-600 w-full h-screen flex-col flex justify-center items-center">
    <div class="bg-white p-3 w-full max-w-md rounded-lg shadow-2xl">
      <h1 class="text-center">{{ city.name }}</h1>
      <div>
        <div id="myChartContainer">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <img :src="getImageSrc(data[indice]?.[selectDay]?.weather?.[0]?.description)" alt="">
              <div class="flex">
                <h1 class="text-center text-4xl font-semi-bold">{{ data[indice]?.[selectDay]?.main?.temp }}</h1>
                <span>°C</span>
              </div>
              <div class="flex flex-col">
                <span class="text-zinc-600 text-xs">Umidade: {{ data[indice]?.[selectDay]?.main?.humidity }}%</span>
                <span class="text-zinc-600 text-xs">Vento: {{ data[indice]?.[selectDay]?.wind?.speed }} km/h</span>
              </div>
            </div>
            <div class="flex justify-start items-end flex-col">
              <h1 class="text-xl font-semi-bold">Clima</h1>
              <div class="flex">
                <span class="text-zinc-600 text-base">{{ data[indice]?.[selectDay]?.dias?.diaMax }}</span>
                <span v-if="showHour" class="text-zinc-600 text-base">, {{ data[indice]?.[selectDay]?.hora }}</span>
              </div>
              <span class="text-zinc-600 text-base">{{ data[indice]?.[selectDay]?.weather?.[0]?.description }}</span>
            </div>
          </div>
          <div class="m-4">
            <canvas  id="myChart"></canvas>
            <div class="flex justify-between pl-6 pr-3">
              <span :class="['cursor-pointer', 'w-2', 'h-2', 'bg-gray-400', 'rounded-full',{'bg-gray-800':item.hora == data[indice]?.[selectDay]?.hora}]" v-on:click="buttomClick(indice),selectDay = index, showHour = true" v-for="(item, index) in data[indice]"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex gap-2 justify-between">
        <button @click="buttomClick('dayOne')"       :class="['bp-2', 'flex', 'flex-col', 'items-center', 'justify-center', { 'bg-gray-100': indice === 'dayOne'},'p-2','rounded']"
        >
          <span>
            {{ dayOne[0]?.dias?.diaMin }}
          </span>
          <img :src="getImageSrc(dayOne[0]?.weather?.[0]?.description)" alt="Previsão do tempo">
          <div>
            <small>
              {{ dayOne[0]?.main?.temp_max }}°
            </small>
            <small>
              {{ dayOne[0]?.main?.temp_min }}°
            </small>
          </div>
        </button>
        <button @click="buttomClick('dayTwo')" :class="['bp-2', 'flex', 'flex-col', 'items-center', 'justify-center', { 'bg-gray-100': indice === 'dayTwo'},'p-2','rounded']">
          <span>
            {{ dayTwo[0]?.dias?.diaMin }}
          </span>
          <img :src="getImageSrc(dayTwo[0]?.weather?.[0]?.description)" alt="">
          <div>
            <small>
              {{ dayTwo[0]?.main?.temp_max }}°
            </small>
            <small>
              {{ dayTwo[0]?.main?.temp_min }}°
            </small>
          </div>
        </button>
        <button @click="buttomClick('dayThree')" :class="['bp-2', 'flex', 'flex-col', 'items-center', 'justify-center', { 'bg-gray-100': indice === 'dayThree'},'p-2','rounded']">
          <span>
            {{ dayThree[0]?.dias?.diaMin }}
          </span>
          <img :src="getImageSrc(dayThree[0]?.weather?.[0]?.description)" alt="">
          <div>
            <small>
              {{ dayThree[0]?.main?.temp_max }}°
            </small>
            <small>
              {{ dayThree[0]?.main?.temp_min }}°
            </small>
          </div>
        </button>
        <button @click="buttomClick('dayFour')" :class="['bp-2', 'flex', 'flex-col', 'items-center', 'justify-center', { 'bg-gray-100': indice === 'dayFour'},'p-2','rounded']">
          <span>
            {{ dayFour[0]?.dias?.diaMin }}
          </span>
          <img :src="getImageSrc(dayFour[0]?.weather?.[0]?.description)" alt="">
          <div>
            <small>
              {{ dayFour[0]?.main?.temp_max }}°
            </small>
            <small>
              {{ dayFour[0]?.main?.temp_min }}°
            </small>
          </div>
        </button>
        <button @click="buttomClick('dayFive')" :class="['bp-2', 'flex', 'flex-col', 'items-center', 'justify-center', { 'bg-gray-100': indice === 'dayFive'},'p-2','rounded']">
          <span>
            {{ dayFive[0]?.dias?.diaMin }}
          </span>
          <img :src="getImageSrc(dayFive[0]?.weather?.[0]?.description)" alt="">
          <div>
            <small>
              {{ dayFive[0]?.main?.temp_max }}°
            </small>
            <small>
              {{ dayFive[0]?.main?.temp_min }}°
            </small>
          </div>
        </button>
      </div>
    </div>  
  </main>
</template>
  
<style scoped>

</style>