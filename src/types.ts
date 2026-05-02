/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Acupoint {
  name: string;
  location: string;
  indication: string;
  operation?: string;
  imageUrl?: string;
}

export interface Meridian {
  id: string;
  name: string;
  points: Acupoint[];
  route: string;
  diagramUrl?: string;
}

export interface Technique {
  id: string;
  name: string;
  category: '放松类' | '温通类';
  description: string;
  effect: string;
}

export interface Principle {
  id: string;
  name: string;
  concept: string;
  techniques: string[];
}

export interface CaseStudy {
  id: string;
  category: string;
  name: string;
  diagnosis: string;
  treatment: string;
  points: string[];
  techniques: string[];
  operation: string;
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correct: number;
}

export interface QuizHistory {
  date: string;
  score: number;
  completed: boolean;
}

export interface Expert {
  name: string;
  title: string;
  motto: string;
  concepts: string[];
}

export type Role = 'student' | 'manager';

export interface User {
  id: string;
  name: string;
  role: Role;
  password?: string;
  quizHistory?: QuizHistory[];
}

export interface ScoreRecord {
  studentId: string;
  date: string;
  score: number;
  comments: string;
  assessor: string;
}

export interface AppState {
  currentUser: User | null;
  records: ScoreRecord[];
}
