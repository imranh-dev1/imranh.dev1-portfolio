import { createSlice } from "@reduxjs/toolkit";
import { experienceData, type Experience } from "@/lib/data/experience";

interface ExperienceState {
  items: Experience[];
}

const initialState: ExperienceState = {
  items: experienceData,
};

const experienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {},
});

export default experienceSlice.reducer;
