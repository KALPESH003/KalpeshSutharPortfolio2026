export type EducationStatus =
  | "RECENTLY COMPLETED"
  | "COMPLETED"
  | "PROFESSIONAL DEVELOPMENT";

export interface EducationSectionItem {
  id: string;
  index: string;

  status: EducationStatus;

  institution: string;

  degree: string;

  duration: string;

  description: string;

  skills: string[];

  achievements: string[];

  accent: string;
}