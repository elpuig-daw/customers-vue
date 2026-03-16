<script setup>
import { useRoute } from 'vue-router';
import { useCustomerStore } from '../stores/customer';
import { onMounted, ref } from 'vue';
import HeaderComponent from '../components/HeaderComponent.vue';


const customerStore = useCustomerStore();
const route = useRoute();
const customer = ref(null);
const loadingCustomer = ref(false);

onMounted(async () => {
    const id = route.params.id;
    loadingCustomer.value = true;

    customer.value = customerStore.customers.find((c) => c.id == id);

    if (!customer.value) {
        customer.value = await customerStore.getCustomerById(id);
    }

    loadingCustomer.value = false;
});
</script>

<template>
  <HeaderComponent />
  <section class="detail-page">
    <div v-if="loadingCustomer" class="state-card">Carregant detall del client...</div>

    <div v-else-if="customer" class="detail-container">
      <button class="back-btn" @click="$router.back()">Torna</button>

      <article class="info-card">
        <header class="card-head">
          <p class="eyebrow">Fitxa de client</p>
          <h1 class="title">{{ customer.firstName }} {{ customer.lastName }}</h1>
        </header>

        <dl class="meta-grid">
          <div class="meta-item">
            <dt>ID</dt>
            <dd>#{{ customer.id }}</dd>
          </div>
          <div class="meta-item">
            <dt>Email</dt>
            <dd>{{ customer.email }}</dd>
          </div>
        </dl>

        <section class="issues">
          <h2>Incidencies</h2>
          <ul v-if="customer.incidencies?.length" class="issues-list">
            <li v-for="inc in customer.incidencies" :key="inc.id" class="issue-row">
              <span class="issue-title">{{ inc.titol }}</span>
              <span class="status">{{ inc.estat }}</span>
            </li>
          </ul>
          <p v-else class="empty">Aquest client no te incidencies assignades.</p>
        </section>
      </article>
    </div>

    <div v-else class="state-card">No s'ha trobat el client.</div>
  </section>

</template>

<style scoped>
.detail-page {
    padding: 1.5rem;
}

.detail-container {
    margin: 0 auto;
    max-width: 900px;
}

.back-btn {
    background: #f8fafc;
    border: 1px solid #d6deeb;
    border-radius: 10px;
    color: #0f172a;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 0.9rem;
    padding: 0.5rem 0.8rem;
    transition: background-color 180ms ease, border-color 180ms ease;
}

.back-btn:hover {
    background-color: #f1f5f9;
    border-color: #bfcce0;
}

.back-btn:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(52, 211, 153, 0.2);
}

.info-card {
    background: linear-gradient(160deg, #ffffff 0%, #fbfdff 100%);
    border: 1px solid #d8e0ee;
    border-radius: 14px;
    box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);
    padding: 1.2rem;
}

.card-head {
    border-bottom: 1px solid #e6edf7;
    margin-bottom: 1rem;
    padding-bottom: 0.8rem;
}

.eyebrow {
    color: #6b7892;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    margin: 0;
    text-transform: uppercase;
}

.title {
    color: #0f172a;
    font-size: clamp(1.15rem, 1rem + 1vw, 1.6rem);
    margin: 0.2rem 0 0;
}

.meta-grid {
    display: grid;
    gap: 0.8rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin: 0;
}

.meta-item {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    padding: 0.7rem;
}

.meta-item dt {
    color: #6b7892;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
}

.meta-item dd {
    color: #334155;
    margin: 0.2rem 0 0;
}

.issues {
    margin-top: 1.2rem;
}

.issues h2 {
    color: #0f172a;
    font-size: 1rem;
    margin: 0 0 0.7rem;
}

.issues-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    list-style: none;
    margin: 0;
    padding: 0;
}

.issue-row {
    align-items: center;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    gap: 0.75rem;
    padding: 0.6rem 0.7rem;
}

.issue-title {
    color: #334155;
    overflow-wrap: anywhere;
}

.status {
    background-color: rgba(52, 211, 153, 0.12);
    border-radius: 999px;
    color: #047857;
    font-size: 0.78rem;
    font-weight: 700;
    padding: 0.12rem 0.5rem;
}

.state-card {
    background: #ffffff;
    border: 1px solid #d8e0ee;
    border-radius: 12px;
    color: #475569;
    margin: 0 auto;
    max-width: 900px;
    padding: 1rem;
}

.empty {
    color: #64748b;
    margin: 0;
}

@media (max-width: 640px) {
    .detail-page {
        padding: 1rem;
    }

    .meta-grid {
        grid-template-columns: 1fr;
    }

    .issue-row {
        align-items: flex-start;
        flex-direction: column;
    }
}
</style>