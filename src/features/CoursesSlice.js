import { createSlice } from "@reduxjs/toolkit";
import Data from '../data/Data';


const initialState = {
    courses: Data,
};

const coursesSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {
        addToPanier(state, action) {
            state.courses.find((item)=>action.payload === item.id).selected = true;
        },
        removeCourse(state, action) {
            state.courses.find((item)=>action.payload === item.id).selected = false;
        },
        removeAllCourses(state) {
            state.courses.forEach((item)=>item.selected = false);
        }
    },
});

export const { addToPanier, removeCourse , removeAllCourses} = coursesSlice.actions;

export default coursesSlice.reducer;