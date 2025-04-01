import { EditProject, Project, ProjectState } from "@/interfaces/store";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ProjectState = {
  projects: [],
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProject(state, { payload }: { payload: Project }) {
      state.projects.push(payload);
    },
    editProject(state, { payload }: { payload: EditProject }) {
      const project = selectProjectByIndex(state, payload.index);

      if (project.index != -1) {
        state.projects[payload.index] = payload.project;
      }
    },
    removeProject(state, { payload }: { payload: number }) {
      const project = selectProjectByIndex(state, payload);

      if (project.index != -1) {
        state.projects.splice(project.index, 1);
      }
    },
  },
});

export const { addProject, removeProject, editProject } = projectsSlice.actions;

export default projectsSlice.reducer;

export const selectProjectByIndex = (state: ProjectState, index: number) => {
  return {
    project: state.projects[index],
    index
  }
};