export interface Unit {
  title: string;
  content: string[];
}

export interface Subject {
  code: string;
  title: string;
  objective: string;
  units: Unit[];
  practicals?: string[];
}

export interface Semester {
  id: number;
  title: string;
  subjects: Subject[];
  totalCredits: string;
}

export interface Note {
  id: string;
  title: string;
  content: string;
  subjectCode: string;
  unitTitle: string;
  createdAt: Date;
  updatedAt: Date;
  tags?: string[];
}

export interface Tab {
  id: string;
  title: string;
  type: 'subject' | 'note' | 'reader' | 'notes-list';
  data: any;
  isActive: boolean;
}