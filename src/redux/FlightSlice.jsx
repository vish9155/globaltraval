import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
export let fetchFlights = createAsyncThunk("flights/search", async (payload, { rejectWithValue }) => {
    try {
        let resp = await fetch("http://localhost:5000/api/flights/", {
            method: "POST", headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(payload)
        })
        console.log(resp)
        let fligtdata = await resp.json()
        console.log(fligtdata)
        return fligtdata.data

    } catch (error) {
        return rejectWithValue(error.message)
    }
})

let initialState = {
    data: [],
    error: null,
    loading: false,
}

 let flightSlice = createSlice({
    name: "flight-search",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchFlights.pending, (state, action) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchFlights.fulfilled, (state, action) => {
                state.loading = false
                state.data=action.payload
            })
            .addCase(fetchFlights.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    }
})

export default flightSlice.reducer