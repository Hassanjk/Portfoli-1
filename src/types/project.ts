export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  link: string;
  year?: string;
  client?: string;
  duration?: string;
  fullDescription?: string;
  images?: string[];
  features?: string[];
  challenges?: string;
  solution?: string;
  results?: string[];
  technologies?: string[];
  liveUrl?: string;
  githubUrl?: string;
}