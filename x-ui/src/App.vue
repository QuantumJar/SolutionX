<script setup>
const navItems = ['Dashboard', 'Users', 'Orders', 'Reports', 'Settings']

const stats = [
  { label: 'Active Users', value: '12,480', delta: '+8.2%' },
  { label: 'Orders Today', value: '1,286', delta: '+3.6%' },
  { label: 'Revenue', value: '$84,920', delta: '+12.4%' },
  { label: 'Open Tickets', value: '37', delta: '-5.1%' },
]

const activities = [
  { user: 'Sophia Chen', action: 'Approved refund request', time: '09:24' },
  { user: 'Marcus Lee', action: 'Updated product inventory', time: '10:12' },
  { user: 'Nina Patel', action: 'Published monthly report', time: '11:06' },
  { user: 'Admin', action: 'Synced backend permissions', time: '12:30' },
]
</script>

<template>
  <main class="admin-shell">
    <aside class="sidebar">
      <div class="brand">
        <span class="brand-mark">X</span>
        <span>SolutionX</span>
      </div>

      <nav class="nav-list" aria-label="Main navigation">
        <button
          v-for="item in navItems"
          :key="item"
          class="nav-item"
          :class="{ active: item === 'Dashboard' }"
          type="button"
        >
          {{ item }}
        </button>
      </nav>
    </aside>

    <section class="workspace">
      <header class="topbar">
        <div>
          <p class="eyebrow">Admin Console</p>
          <h1>Dashboard</h1>
        </div>
        <div class="topbar-actions">
          <button class="icon-button" type="button" aria-label="Search">⌕</button>
          <button class="primary-button" type="button">New Report</button>
        </div>
      </header>

      <section class="stat-grid" aria-label="Key metrics">
        <article v-for="stat in stats" :key="stat.label" class="stat-card">
          <p>{{ stat.label }}</p>
          <strong>{{ stat.value }}</strong>
          <span>{{ stat.delta }}</span>
        </article>
      </section>

      <section class="content-grid">
        <article class="panel">
          <div class="panel-header">
            <h2>Recent Activity</h2>
            <button class="text-button" type="button">View all</button>
          </div>
          <div class="activity-list">
            <div v-for="activity in activities" :key="activity.user + activity.time" class="activity-row">
              <div>
                <strong>{{ activity.user }}</strong>
                <p>{{ activity.action }}</p>
              </div>
              <time>{{ activity.time }}</time>
            </div>
          </div>
        </article>

        <article class="panel">
          <div class="panel-header">
            <h2>Service Health</h2>
            <span class="status-pill">Online</span>
          </div>
          <div class="health-list">
            <div>
              <span>API Gateway</span>
              <meter min="0" max="100" value="96">96%</meter>
            </div>
            <div>
              <span>Database</span>
              <meter min="0" max="100" value="88">88%</meter>
            </div>
            <div>
              <span>Cache</span>
              <meter min="0" max="100" value="91">91%</meter>
            </div>
          </div>
        </article>
      </section>
    </section>
  </main>
</template>
