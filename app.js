const chartDays = ["Dush", "Sesh", "Chor", "Pay", "Jum", "Shan", "Yak"];

let chartIncome = [6.2, 7.8, 5.4, 8.1, 9.3, 4.5, 3.2];
let chartExpense = [2.1, 3.4, 1.8, 2.9, 3.5, 1.2, 0.8];

const appointments = [
  {
    name: "Nodira Usmonova",
    time: "09:00",
    service: "Tish tozalash",
    status: "done"
  },
  {
    name: "Sardor Toshmatov",
    time: "09:30",
    service: "Tish plomba",
    status: "done"
  },
  {
    name: "Malika Rahimova",
    time: "10:00",
    service: "Tort tortish",
    status: "progress"
  },
  {
    name: "Jasur Karimov",
    time: "10:30",
    service: "Implantatsiya",
    status: "progress"
  },
  {
    name: "Dilnoza Xolova",
    time: "11:00",
    service: "Tish oqartirish",
    status: "arrived"
  },
  {
    name: "Bobur Aliyev",
    time: "11:30",
    service: "Konsultatsiya",
    status: "arrived"
  },
  {
    name: "Gulnora Saidova",
    time: "12:00",
    service: "Tish protez",
    status: "waiting"
  },
  {
    name: "Anvar Normatov",
    time: "14:00",
    service: "Tish chiqarish",
    status: "waiting"
  }
];

const patients = [
  {
    name: "Nodira Usmonova",
    phone: "+998 90 123 45 67",
    service: "Tish tozalash",
    payment: "500 000",
    status: "paid"
  },
  {
    name: "Sardor Toshmatov",
    phone: "+998 91 234 56 78",
    service: "Tish plomba",
    payment: "1 200 000",
    status: "paid"
  },
  {
    name: "Malika Rahimova",
    phone: "+998 93 345 67 89",
    service: "Tort tortish",
    payment: "3 500 000",
    status: "partial"
  },
  {
    name: "Jasur Karimov",
    phone: "+998 94 456 78 90",
    service: "Implantatsiya",
    payment: "8 000 000",
    status: "debt"
  },
  {
    name: "Dilnoza Xolova",
    phone: "+998 95 567 89 01",
    service: "Tish oqartirish",
    payment: "1 500 000",
    status: "paid"
  },
  {
    name: "Bobur Aliyev",
    phone: "+998 97 678 90 12",
    service: "Konsultatsiya",
    payment: "200 000",
    status: "paid"
  },
  {
    name: "Gulnora Saidova",
    phone: "+998 98 789 01 23",
    service: "Tish protez",
    payment: "5 000 000",
    status: "partial"
  },
  {
    name: "Anvar Normatov",
    phone: "+998 99 890 12 34",
    service: "Tish chiqarish",
    payment: "800 000",
    status: "paid"
  }
];

const doctors = [
  {
    name: "Dr. Bahodir Ismoilov",
    spec: "Ortodont",
    patients: 24,
    color: "#0e7490"
  },
  {
    name: "Dr. Zulfiya Xasanova",
    spec: "Xirurg",
    patients: 18,
    color: "#14b8a6"
  },
  {
    name: "Dr. Rustam Qodirov",
    spec: "Terapevt",
    patients: 32,
    color: "#0d9488"
  },
  {
    name: "Dr. Nargiza Po‘latova",
    spec: "Ortoped",
    patients: 21,
    color: "#0891b2"
  },
  {
    name: "Dr. Mirzo Umarov",
    spec: "Parodontolog",
    patients: 15,
    color: "#059669"
  },
  {
    name: "Dr. Shahlo Turgunova",
    spec: "Endodontist",
    patients: 19,
    color: "#0e7490"
  }
];

const statusLabels = {
  waiting: "Kutilmoqda",
  arrived: "Keldi",
  progress: "Jarayonda",
  done: "Tugadi"
};

const paymentLabels = {
  paid: "To‘langan",
  partial: "Qisman",
  debt: "Qarz"
};

const sidebar = document.getElementById("sidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");
const menuBtn = document.getElementById("menuBtn");
const pageTitle = document.getElementById("pageTitle");
const searchInput = document.getElementById("searchInput");
const refreshChartBtn = document.getElementById("refreshChartBtn");

function renderChart() {
  const chartContainer = document.getElementById("chartContainer");
  const maxValue = Math.max(...chartIncome, ...chartExpense);

  chartContainer.innerHTML = chartDays
    .map((day, index) => {
      const incomeHeight = (chartIncome[index] / maxValue) * 100;
      const expenseHeight = (chartExpense[index] / maxValue) * 100;

      return `
        <div class="chart-day">
          <div class="chart-bars">
            <div class="chart-bar income" style="height: ${incomeHeight}%">
              <span>${chartIncome[index]}m</span>
            </div>
            <div class="chart-bar expense" style="height: ${expenseHeight}%">
              <span>${chartExpense[index]}m</span>
            </div>
          </div>
          <div class="chart-label">${day}</div>
        </div>
      `;
    })
    .join("");
}

function refreshChart() {
  chartIncome = chartIncome.map(() => +(Math.random() * 9 + 1).toFixed(1));
  chartExpense = chartExpense.map(() => +(Math.random() * 4 + 0.5).toFixed(1));
  renderChart();
}

function renderAppointments() {
  const appointmentList = document.getElementById("appointmentList");

  appointmentList.innerHTML = appointments
    .map((item) => {
      return `
        <div class="appointment-item">
          <div class="appointment-time">${item.time}</div>

          <div class="appointment-info">
            <h4>${item.name}</h4>
            <p>${item.service}</p>
          </div>

          <span class="status ${item.status}">
            ${statusLabels[item.status]}
          </span>
        </div>
      `;
    })
    .join("");
}

function renderPatients(data = patients) {
  const patientsBody = document.getElementById("patientsBody");

  if (!data.length) {
    patientsBody.innerHTML = `
      <tr>
        <td colspan="5" style="text-align:center; padding:24px; color:#6b7280;">
          Bemor topilmadi
        </td>
      </tr>
    `;
    return;
  }

  patientsBody.innerHTML = data
    .map((patient) => {
      return `
        <tr>
          <td><strong>${patient.name}</strong></td>
          <td>${patient.phone}</td>
          <td>${patient.service}</td>
          <td>${patient.payment} so‘m</td>
          <td>
            <span class="payment-status ${patient.status}">
              ${paymentLabels[patient.status]}
            </span>
          </td>
        </tr>
      `;
    })
    .join("");
}

function renderDoctors() {
  const doctorGrid = document.getElementById("doctorGrid");

  doctorGrid.innerHTML = doctors
    .map((doctor) => {
      const initials = doctor.name
        .replace("Dr. ", "")
        .split(" ")
        .map((word) => word[0])
        .join("")
        .slice(0, 2);

      return `
        <div class="doctor-card">
          <div class="doctor-avatar" style="background:${doctor.color}">
            ${initials}
          </div>

          <div>
            <h4>${doctor.name}</h4>
            <p>${doctor.spec}</p>
            <span>${doctor.patients} bemor bugun</span>
          </div>
        </div>
      `;
    })
    .join("");
}

function toggleSidebar() {
  sidebar.classList.toggle("open");
  sidebarOverlay.classList.toggle("show");
}

function closeSidebar() {
  sidebar.classList.remove("open");
  sidebarOverlay.classList.remove("show");
}

function activateMenuItem(clickedItem) {
  const navItems = document.querySelectorAll(".nav-item");

  navItems.forEach((item) => {
    item.classList.remove("active");
  });

  clickedItem.classList.add("active");
  pageTitle.textContent = clickedItem.dataset.title;

  if (window.innerWidth <= 820) {
    closeSidebar();
  }
}

function searchPatients() {
  const query = searchInput.value.toLowerCase().trim();

  if (!query) {
    renderPatients();
    return;
  }

  const filteredPatients = patients.filter((patient) => {
    return (
      patient.name.toLowerCase().includes(query) ||
      patient.phone.toLowerCase().includes(query) ||
      patient.service.toLowerCase().includes(query)
    );
  });

  renderPatients(filteredPatients);
}

document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", () => activateMenuItem(item));
});

menuBtn.addEventListener("click", toggleSidebar);
sidebarOverlay.addEventListener("click", closeSidebar);
searchInput.addEventListener("input", searchPatients);
refreshChartBtn.addEventListener("click", refreshChart);

renderChart();
renderAppointments();
renderPatients();
renderDoctors();