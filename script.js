function scrollToSection(id) {
  const section = document.getElementById(id);
  section.scrollIntoView({ behavior: 'smooth' });
}
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, {
  threshold: 0.1
});
document.querySelectorAll('.section').forEach(section => {
  observer.observe(section);
});
document.addEventListener('DOMContentLoaded', () => {
  const ctx1 = document.getElementById('chart1').getContext('2d');
  new Chart(ctx1, {
    type: 'line',
    data: {
      labels: ['2017', '2018', '2019', '2020', '2021'],
      datasets: [{
        label: 'Overdose Deaths in the U.S.',
        data: [70000, 67000, 71000, 93000, 107000],
        backgroundColor: 'rgba(231, 76, 60, 0.2)',
        borderColor: 'rgba(231, 76, 60, 1)',
        borderWidth: 2,
        fill: true,
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: 'top'
        }
      }
    }
  });
  const ctx2 = document.getElementById('chart2').getContext('2d');
  new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: ['Complete Rehab', 'Relapse After Rehab'],
      datasets: [{
        label: 'Percentage (%)',
        data: [43, 60],
        backgroundColor: [
          'rgba(52, 152, 219, 0.7)',
          'rgba(231, 76, 60, 0.7)'
        ],
        borderColor: [
          'rgba(52, 152, 219, 1)',
          'rgba(231, 76, 60, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          max: 100
        }
      }
    }
  });
  const toggle = document.createElement('button');
  toggle.innerText = '🌓 Toggle Dark Mode';
  toggle.style.position = 'fixed';
  toggle.style.bottom = '20px';
  toggle.style.right = '20px';
  toggle.style.zIndex = '1000';
  toggle.style.padding = '0.5rem 1rem';
  toggle.style.background = '#222';
  toggle.style.color = '#fff';
  toggle.style.border = 'none';
  toggle.style.borderRadius = '5px';
  toggle.style.cursor = 'pointer';
  toggle.onclick = () => {
    document.body.classList.toggle('dark');
  };
  document.body.appendChild(toggle);
});
