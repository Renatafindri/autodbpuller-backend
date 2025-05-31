
function uploadCSV() {
  const input = document.getElementById('csvInput');
  if (!input.files.length) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const lines = e.target.result.split('\n');
    lines.forEach(line => {
      const [name, email] = line.split(',');
      if (name && email) {
        fetch('/upload', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email })
        }).then(() => loadData());
      }
    });
  };
  reader.readAsText(input.files[0]);
}

function loadData() {
  fetch('/data')
    .then(res => res.json())
    .then(data => {
      const tbody = document.querySelector('#dataTable tbody');
      tbody.innerHTML = '';
      data.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td class="border px-2">${row.name}</td><td class="border px-2">${row.email}</td>`;
        tbody.appendChild(tr);
      });
    });
}

window.onload = loadData;
