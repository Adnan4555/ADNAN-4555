import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, doc, setDoc } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcCR3upbuvG1fQFUOE9qLnITa8tk41cXI",
  authDomain: "crm-gpt-2026.firebaseapp.com",
  projectId: "crm-gpt-2026",
  storageBucket: "crm-gpt-2026.firebasestorage.app",
  messagingSenderId: "1041174966108",
  appId: "1:1041174966108:web:171f4acd2017d0256c5b99",
  measurementId: "G-43ZZ93G0VT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Sample data from mockData.ts
const sampleTenders = [
  { 
    id: '1', 
    name: 'Government Portal Development', 
    company: 'Ministry of Technology', 
    belongsTo: 'Grow Plus Technologies', 
    status: 'open', 
    assignedTo: '1', 
    assignedToName: 'Mohamed Ismayil', 
    deadline: '2024-03-25', 
    document: 'tender_specs.pdf', 
    description: 'E-government portal development',
    createdAt: new Date()
  },
  { 
    id: '2', 
    name: 'Smart City Infrastructure', 
    company: 'Dubai Municipality', 
    belongsTo: 'Sadeem Energy', 
    status: 'submitted', 
    assignedTo: '2', 
    assignedToName: 'Mohamed Ajumal', 
    deadline: '2024-04-15', 
    document: 'smart_city.pdf', 
    description: 'IoT infrastructure for smart city',
    createdAt: new Date()
  },
  { 
    id: '3', 
    name: 'Healthcare Management System', 
    company: 'DHA', 
    belongsTo: 'Grow Plus Technologies', 
    status: 'awarded', 
    assignedTo: '2', 
    assignedToName: 'Mohamed Ajumal', 
    deadline: '2024-05-01', 
    description: 'Hospital management software',
    createdAt: new Date()
  },
  { 
    id: '4', 
    name: 'Banking Software Upgrade', 
    company: 'National Bank', 
    belongsTo: 'Sadeem Energy', 
    status: 'closed', 
    assignedTo: '1', 
    assignedToName: 'Mohamed Ismayil', 
    deadline: '2024-02-20', 
    description: 'Core banking system upgrade',
    createdAt: new Date()
  },
  { 
    id: '5', 
    name: 'Education Platform', 
    company: 'Ministry of Education', 
    belongsTo: 'Grow Plus Technologies', 
    status: 'open', 
    assignedTo: '1', 
    assignedToName: 'Mohamed Ismayil', 
    deadline: '2024-04-30', 
    description: 'E-learning platform development',
    createdAt: new Date()
  }
];

const sampleEmployees = [
  { 
    id: '1', 
    name: 'Mohamed Ismayil', 
    email: 'mmismayil2003@gmail.com', 
    department: 'Engineering', 
    position: 'AI Engineer', 
    phone: '+971 50 123 4567', 
    joinDate: '2022-03-15', 
    status: 'active',
    createdAt: new Date()
  },
  { 
    id: '2', 
    name: 'Mohamed Ajumal', 
    email: 'ajumal@gptechnologies.ae', 
    department: 'Sales', 
    position: 'AI Engineer', 
    phone: '+971 50 234 5678', 
    joinDate: '2021-08-20', 
    status: 'active',
    createdAt: new Date()
  }
];

// Seed function
const seedFirestore = async () => {
  try {
    console.log('Starting to seed Firestore...');
    
    // Add employees
    for (const employee of sampleEmployees) {
      await setDoc(doc(db, 'employees', employee.id), employee);
      console.log(`Added employee: ${employee.name}`);
    }
    
    // Add tenders
    for (const tender of sampleTenders) {
      await setDoc(doc(db, 'tenders', tender.id), tender);
      console.log(`Added tender: ${tender.name}`);
    }
    
    console.log('Firestore seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding Firestore:', error);
  }
};

// Run the seeding
seedFirestore();
