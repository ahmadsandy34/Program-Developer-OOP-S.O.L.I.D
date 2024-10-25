// Single Responsibility Principle (SRP): Setiap class hanya menangani satu tanggung jawab tertentu.
// Class Developer hanya memiliki satu tanggung jawab yaitu mengembangkan website
class Developer {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }
  createUI() {
    console.log(`${this.name} is Creating User Interface...`);
  }
  createDb() {
    console.log(`${this.name} is Creating Database...`);
  }
  createDesign() {
    console.log(`${this.name} is Creating User Interface Design...`);
  }
  createGit() {
    console.log(`${this.name} is Creating Git Repository...`);
  }
  testing() {
    console.log(`${this.name} is Testing...`);
  }
  debugging() {
    console.log(`${this.name} is Debugging...`);
  }
  deploy() {
    console.log(`${this.name} is Deploying Website...`);
  }
}

// Open/Closed Principle (OCP): Kelas harus terbuka untuk ekstensi tetapi tertutup untuk modifikasi.
// Class FrontendDeveloper bisa menambahkan fungsi baru tanpa mengubah perilaku dari class Developer
class FrontendDeveloper extends Developer {
  constructor(name) {
    super(name, "Frontend Developer");
  }
  createResponsiveUI() {
    console.log(`${this.name} is Creating Responsive UI...`);
  }
  websiteOptimization() {
    console.log(`${this.name} is Optimizing Website Performance and Speed...`);
  }
  apiIntegration() {
    console.log(`${this.name} is Integrating API from Backend to Website...`);
  }
  testing() {
    console.log(
      `${this.name} is Testing UI Functionality, Responsiveness, and Accesibility...`,
    );
  }
  deploy() {
    console.log(`${this.name} is Deploying Changes to Website...`);
  }
}

// Liskov Substitution Principle (LSP): Kelas turunan harus dapat menggantikan kelas induknya tanpa memengaruhi fungsionalitasnya.
// class BackendDeveloper dapat menggantikan function dari class Developer yaitu testing() dan deploy() dengan outputnya sendiri tanpa mengubah perilaku dari class developer
class BackendDeveloper extends Developer {
  constructor(name) {
    super(name, "Backend Developer");
  }
  createAPI() {
    console.log(`${this.name} is Creating API...`);
  }
  manageDb() {
    console.log(`${this.name} is Managing Database...`);
  }
  thirdPartyServiceIntegration() {
    console.log(`${this.name} is Connecting Website with External Services...`);
  }
  testing() {
    console.log(
      `${this.name} is Testing API Functionality, Database Performance, and Security...`,
    );
  }
  deploy() {
    console.log(`${this.name} is Deploying Changes to Website...`);
  }
}

class ProjectManager extends Developer {
  constructor(name, teamSize) {
    super(name, "Project Manager");
    this.teamSize = teamSize;
  }
  createProjectPlan() {
    console.log(`${this.name} is Creating The Project Plan...`);
  }
  manageBudget() {
    console.log(`${this.name} is Managing Project Budget...`);
  }
  communicateProjectPlan() {
    console.log(`${this.name} is Conveying The Project Plan to the Team...`);
  }
}

// Interface Segregation Principle (ISP): Jika ada fitur khusus, buat interface yang spesifik dan hanya diterapkan pada class yang membutuhkannya.
// Daripada menjadikan project menjadi satu class utuh, class project dipecah menjadi 4 class yang masing-masing memiliki tugas yang spesifik
class ProjectPlan {
  constructor(developer) {
    this.developer = developer;
  }
  plan() {
    this.developer.createProjectPlan();
    this.developer.manageBudget();
    this.developer.communicateProjectPlan();
  }
}

// Dependency Inversion Principle (DIP): Class tidak boleh bergantung langsung pada class lain; gunakan dependency injection untuk menyuntikkan dependensi.
// Class Project tidak bergantung langsung pada suatu class, melainkan menggunakan dependency injection (this.developer = developer)
class Project {
  constructor(developer) {
    this.developer = developer;
  }
  build() {
    this.developer.createUI();
    this.developer.createDb();
    this.developer.createDesign();
    this.developer.createGit();
    this.developer.testing();
    this.developer.debugging();
    this.developer.deploy();
  }
}

class ProjectImprovementFrontendSide {
  constructor(developer) {
    this.developer = developer;
  }
  improve() {
    this.developer.createResponsiveUI();
    this.developer.websiteOptimization();
    this.developer.apiIntegration();
    this.developer.testing();
    this.developer.debugging();
    this.developer.deploy();
  }
}

class ProjectImprovementBackendSide {
  constructor(developer) {
    this.developer = developer;
  }
  improve() {
    this.developer.createAPI();
    this.developer.manageDb();
    this.developer.thirdPartyServiceIntegration();
    this.developer.testing();
    this.developer.debugging();
    this.developer.deploy();
  }
}

const projectManager = new ProjectManager("Bob", 10);
const developer = new Developer("Carl", "Developer");
const frontendDev = new FrontendDeveloper("John");
const backendDev = new BackendDeveloper("Jane");

const websiteProjectPlan = new ProjectPlan(projectManager);
websiteProjectPlan.plan();
console.log("");

const websiteProject = new Project(developer);
websiteProject.build();
console.log("");

const websiteFrontend = new ProjectImprovementFrontendSide(frontendDev);
websiteFrontend.improve();
console.log("");

const websiteBackend = new ProjectImprovementBackendSide(backendDev);
websiteBackend.improve();
