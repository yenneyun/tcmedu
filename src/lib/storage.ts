import { AppState, User, ScoreRecord } from '../types';

const STORAGE_KEY = 'shengshou_app_state_v2';

const defaultUsers: User[] = [
  { id: 'manager', name: 'Yenne', role: 'manager', password: 'm123' },
  { id: 'student1', name: '王明远', role: 'student', password: '111', quizHistory: [] },
  { id: 'student2', name: '李慧敏', role: 'student', password: '111', quizHistory: [] },
  { id: 'wing', name: 'Wing', role: 'student', password: 'Wing', quizHistory: [] }
];

export function getLocalState(): AppState & { users: User[] } {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    return JSON.parse(saved);
  }
  return {
    currentUser: null,
    records: [],
    users: defaultUsers
  };
}

export function saveLocalState(state: AppState & { users: User[] }) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function validateLogin(users: User[], id: string, pass: string): User | null {
  const user = users.find(u => u.id === id && u.password === pass);
  return user || null;
}
