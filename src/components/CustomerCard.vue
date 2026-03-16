<script setup>
const props = defineProps( {
  customer: {
    type: Object,
    required: true
  }
});

</script>

<template>
  <article class="customer-card" v-if="props.customer">
    <div class="card-header">
      <div class="avatar">
        {{ props.customer?.firstName.charAt(0) }}{{ props.customer?.lastName.charAt(0) }}
      </div>
      <div class="header-info">
        <h3>{{ props.customer?.firstName }} {{ props.customer?.lastName }}</h3>
        <span class="id-badge">ID: #{{ props.customer?.id }}</span>
      </div>
    </div>

    <div class="card-body">
      <div class="info-item">
        <span class="label">Email</span>
        <span class="value">{{ props.customer?.email }}</span>
      </div>
      <div class="info-item">
        <span class="label">Incidències</span>
        <span :class="['status-tag', props.customer.incidencies?.length > 0 ? 'active' : 'empty']">
          {{ props.customer.incidencies?.length || 0 }} assignades
        </span>
      </div>
    </div>

    <div class="card-footer">
      <router-link class="detail-link" :to="{ name: 'customer-detail', params: { id: props.customer.id } }">
        Veure detalls
      </router-link>
    </div>
  </article>

</template>

<style scoped>
.customer-card {
  --card-bg: #ffffff;
  --card-text: #0f172a;
  --card-muted: #55627a;
  --card-border: #d8e0ee;
  --card-soft: #eef3fb;
  --card-accent: #34d399;

  background: linear-gradient(160deg, #ffffff 0%, #fbfdff 100%);
  border: 1px solid var(--card-border);
  border-radius: 14px;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);
  color: var(--card-text);
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  height: 100%;
  padding: 1.2rem;
  transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
}

.customer-card:hover {
  border-color: #c7d3e6;
  box-shadow: 0 14px 34px rgba(15, 23, 42, 0.12);
  transform: translateY(-3px);
}

.card-header {
  align-items: center;
  display: flex;
  gap: 1rem;
}

.avatar {
  align-items: center;
  background: radial-gradient(circle at 30% 20%, #3dd7a3 0%, #0f9f76 100%);
  border-radius: 50%;
  color: #ecfdf5;
  display: flex;
  font-size: 1rem;
  font-weight: 700;
  justify-content: center;
  min-height: 2.9rem;
  min-width: 2.9rem;
}

.header-info h3 {
  font-size: 1.03rem;
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
}

.id-badge {
  background: var(--card-soft);
  border: 1px solid #dce5f2;
  border-radius: 999px;
  color: #5a6680;
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 600;
  margin-top: 0.35rem;
  padding: 0.15rem 0.55rem;
}

.card-body {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.label {
  color: #7a869e;
  font-size: 0.72rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.value {
  color: var(--card-muted);
  font-size: 0.94rem;
  overflow-wrap: anywhere;
}

.status-tag {
  border-radius: 999px;
  display: inline-block;
  font-size: 0.79rem;
  font-weight: 600;
  margin-top: 0.1rem;
  padding: 0.15rem 0.5rem;
}

.status-tag.active {
  background-color: rgba(52, 211, 153, 0.12);
  color: #047857;
}

.status-tag.empty {
  background-color: #f1f5f9;
  color: #64748b;
}

.card-footer {
  margin-top: auto;
}

.detail-link {
  background: #f8fafc;
  border: 1px solid #d6deeb;
  border-radius: 10px;
  box-sizing: border-box;
  color: #0f172a;
  display: inline-flex;
  font-size: 0.9rem;
  font-weight: 600;
  justify-content: center;
  max-width: 100%;
  padding: 0.58rem 0.9rem;
  text-decoration: none;
  transition: background-color 180ms ease, border-color 180ms ease, transform 180ms ease;
  width: 100%;
}

.detail-link:hover {
  background-color: #f1f5f9;
  border-color: #bfcce0;
  transform: translateY(-1px);
}

.detail-link:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px rgba(52, 211, 153, 0.2);
  border-color: rgba(52, 211, 153, 0.55);
}

@media (max-width: 640px) {
  .customer-card {
    padding: 1rem;
  }

  .card-header {
    gap: 0.75rem;
  }
}
</style>