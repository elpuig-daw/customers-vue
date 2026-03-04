<script setup>
import { computed, ref } from 'vue';
import HeaderComponent from '../components/HeaderComponent.vue';
import FillComponent from '../components/FillComponent.vue';

const myId = "unAltreId";
const myValue = ref("elmeucognom");
const long = computed(() => {
    return myValue.value.length;
})
const myCondition = true;

const llista = ['Pomes', 'Peres', 'Prunes']
const displayName = ref("");
const setName = (e) => {
    displayName.value = e;
}
</script>

<template>
    <HeaderComponent />
    <h2>Home page</h2>
   
    <h3 :class="myCondition ? 'clar':'fosc'" :id="myId">Exemple v-bind</h3>
    <h3 :class="{clar : myCondition, fosc: true}" :id="myId">Exemple v-bind</h3>

    <h3>{{ myValue }}</h3>
    <h3>longitud: {{ long }}</h3>
    <input type="text" v-model="myValue" />
    <hr />
    <!-- v-for amb index -->
    <ul>
        <li v-for="(fruit, index) in llista" :key="fruit" >
            {{ index }} {{ fruit }}
        </li>
    </ul>
    <h2>Hola {{ displayName }}</h2>

    <FillComponent @login="setName"></FillComponent>


</template>

<style>
.clar {
    background-color: beige;
    color: rgb(216, 10, 10)
}
.fosc {
    background-color: black;
}
</style>