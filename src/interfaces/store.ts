import { Action } from "@/constants/inventory";

export interface Project {
  name: string;
  description?: string;
}

export interface EditProject {
  project: Project;
  index: number;
}

export interface InventoryState {
  actionsSelected: Action[];
}

export interface ProjectState {
  projects: Project[];
}
