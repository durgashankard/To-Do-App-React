import { configureStore } from "@reduxjs/toolkit";
import TaskSlicer from '../slicers/task-slicers'

export default configureStore({
    reducer: TaskSlicer,
})