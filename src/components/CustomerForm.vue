<script setup>
import { ref } from 'vue';
import { useCustomerStore } from '../stores/customer';

const customerStore = useCustomerStore();

// Objecte inicial buit
const newCustomer = ref({
    firstName: '',
    lastName: '',
    email: ''
});

const handleSubmit = async () => {
    // Validació simple: no enviem si està buit
    if (!newCustomer.value.firstName || !newCustomer.value.email) return;
    
    await customerStore.addCustomer(newCustomer.value);
    // Netegem el formulari després d'enviar
    newCustomer.value = { firstName: '', lastName: '', email: '' };
};
</script>

<template>
    <form @submit.prevent="handleSubmit" class="add-form">
        <input v-model="newCustomer.firstName" placeholder="Nom" required>
        <input v-model="newCustomer.lastName" placeholder="Cognom" required>
        <input v-model="newCustomer.email" type="email" placeholder="Email" required>
        <button type="submit">Afegir</button>
    </form>
</template>

<style scoped>
/* Un parell de regles per fer-ho net */
.add-form {
    display: flex;
    gap: 10px;
    margin-bottom: 2rem;
    padding: 1rem;
    background: #f8f9fa;
    border-radius: 8px;
}
.add-form input {
    flex: 1 1 200px;    /* MÀGIA: Creix, s'encull i té una base de 200px */
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    min-width: 0;       /* Evita que l'input desbordi el seu pare */
}

.add-form button {
    flex: 1 1 20%;     /* El botó ocuparà tota la línia per destacar */
    background: #4f46e5;
    color: white;
    border: none;
    padding: 12px;
    cursor: pointer;
    font-weight: bold;
}
</style>