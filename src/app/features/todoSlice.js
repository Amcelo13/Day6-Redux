import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  users: [
    {
      id: 1,
      name: "Chetan",
      imgurl:
        "https://cdn.dribbble.com/users/2364329/screenshots/10481283/media/f013d5235bfcf1753d56cad154f11a67.jpg",
      task: [],
    },
    {
      id: 2,
      name: "Deepak",
      imgurl:
        "https://static.vecteezy.com/system/resources/previews/003/480/835/original/human-avatar-isolated-faceless-male-portrait-of-a-cartoon-character-flat-vector.jpg",
      task: [],
    },
    {
      id: 3,
      name: "Satyam",
      imgurl:
        "https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027365_1280.png",
      task: [],
    },
    {
      id: 4,
      name: "Alexa",
      imgurl:
        "https://img.freepik.com/premium-vector/happy-smiling-young-man-avatar-3d-portrait-man-cartoon-character-people-vector-illustration_653240-187.jpg",
      task: [],
    },
  ],
  TODO: [],
};
export const todoSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setTodo: (state, action) => {
      const { assigned_to, Description, deadline } = action.payload;

      const existingTask = state.TODO.find((task) => task.name === assigned_to && task.desc === Description 
          && task.deadDay === deadline.$D
          && task.deadMonth === deadline.$M
          && task.deadYear === deadline.$y
      );
      if (!existingTask) {
        state.TODO.push({
          name: assigned_to,
          desc: Description,
          deadDay: deadline.$D,
          deadMonth: deadline.$M,
          deadYear: deadline.$y,
        });

        for (let user of state.users) {
          if (user.name === assigned_to) {
            user.task.push(action.payload);
            break;
          }
        }
      }
    },
    
  },
});
// Action creators are generated for each case reducer function
export const { setTodo } = todoSlice.actions;
export default todoSlice.reducer;
