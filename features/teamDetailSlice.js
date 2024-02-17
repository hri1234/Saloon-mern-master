import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//create action
export const createTeam = createAsyncThunk(
  "createTeam",
  async (data, { rejectWithValue }) => {
    console.log("data", data);
    const response = await fetch(
      "https://barbershope-backend.onrender.com/api/employees",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    

    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//read action
export const showTeam = createAsyncThunk(
  "showTeam",
  async (args, { rejectWithValue }) => {
    const response = await fetch(
      "https://barbershope-backend.onrender.com/api/employees"
    );

    try {
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
//delete action
export const deleteTeam = createAsyncThunk(
  "deleteTeam",
  async (_id, { rejectWithValue }) => {
    const response = await fetch(
      `https://barbershope-backend.onrender.com/api/employees/${_id}`,
      { method: "DELETE" }
    );

    try {
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//update action
export const updateTeam = createAsyncThunk(
  "updateTeam",
  async (data, { rejectWithValue }) => {
    console.log("updated data", data);
    const response = await fetch(
      `https://barbershope-backend.onrender.com/api/employees/${data._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const TeamDetail = createSlice({
  name: "TeamDetail",
  initialState: {
    Teams: [],
    loading: false,
    error: null,
    searchData: [],
  },

  reducers: {
    searchTeam: (state, action) => {
      console.log(action.payload);
      state.searchData = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
    //   .addCase(fetchTeams.pending, (state) => {
    //     state.loading = true;
    //   })
    //   .addCase(fetchTeams.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.Teams = action.payload;
    //   })
    //   .addCase(fetchTeams.rejected, (state, action) => {
    //     state.loading = false;
    //     state.error = action.payload.message;
    //   })
      .addCase(createTeam.pending, (state) => {
        state.loading = true;
      })
      .addCase(createTeam.fulfilled, (state, action) => {
        state.loading = false;
        state.Teams.push(action.payload);
      })
      .addCase(createTeam.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(showTeam.pending, (state) => {
        state.loading = true;
      })
      .addCase(showTeam.fulfilled, (state, action) => {
        state.loading = false;
        state.Teams = action.payload;
      })
      .addCase(showTeam.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(deleteTeam.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteTeam.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.Teams.findIndex((team) => team._id === action.payload._id);
        state.Teams.splice(index, 1);
      })
      .addCase(deleteTeam.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(updateTeam.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateTeam.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.Teams.findIndex((team) => team._id === action.payload._id);
        state.Teams[index] = action.payload;
      })
      .addCase(updateTeam.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export default TeamDetail.reducer;
export const selectTeamById = (_id) => (state) =>
  state.TeamDetail.Teams.find((team) => team._id === _id);

export const { searchTeam } = TeamDetail.actions;
