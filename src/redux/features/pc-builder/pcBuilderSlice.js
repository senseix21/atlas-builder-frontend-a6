const { createSlice } = require("@reduxjs/toolkit");
import { createSelector } from '@reduxjs/toolkit';

const initialState = {
    Processor: [],
    Motherboard: [],
    RAM: [],
    PowerSupplyUnit: [],
    Storage: [],
    Monitor: [],
    Others: [],
};

const pcBuilderSlice = createSlice({
    name: 'PCBuilder',
    initialState,
    reducers: {
        addToPcBuilder: (state, action) => {
            const { category, component } = action.payload;
            const existingComponent = state[category].find((c) => c._id === component._id);

            if (!existingComponent) {
                state[category].push({ ...component });
            }
        },
        removeFromPcBuilder: (state, action) => {
            const { category, componentId } = action.payload;
            state[category] = state[category].filter((c) => c._id !== componentId);
        },
    },
});

// Extract the actions
export const { addToPcBuilder, removeFromPcBuilder } = pcBuilderSlice.actions;

// Selector to check if all required components are added
export const isAllComponentsAddedSelector = createSelector(
    (state) => state.PCBuilder,
    (pcBuilder) => {
        return (
            pcBuilder.Processor.length > 0 &&
            pcBuilder.RAM.length > 0 &&
            pcBuilder.PowerSupplyUnit.length > 0 &&
            pcBuilder.Storage.length > 0 &&
            pcBuilder.Motherboard.length > 0 &&
            pcBuilder.Others.length > 0
        );
    }
);

// Export the reducer
export default pcBuilderSlice.reducer;
