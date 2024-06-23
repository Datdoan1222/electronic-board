import { createSlice } from '@reduxjs/toolkit'
import { getImgCons, getLogoUser } from '../cons/consThunk'

const initialState = {
    cons: null,
    render: null,
    image: null,
    imageActual: null,
    image3d: null,
    imageId: null,
}

const consSlice = createSlice({
    name: 'cons',
    initialState,
    reducers: {
        setRender(state, action) {
            state.render = action.payload
        },
        setImgActual(state, action) {
            state.imageActual = action.payload
        },
        setImg3d(state, action) {
            state.image3d = action.payload
        },
        setImgId(state, action) {
            state.imageId = action.payload
        },
        resetImageCons: (state) => {
            state.imageCons = [];
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getImgCons.fulfilled, (state, action) => {
            state.image = action.payload
        })
        builder.addCase(getLogoUser.fulfilled, (state, action) => {
            state.image = action.payload
        })
    }
})

export const { setRender, setImg3d, setImgActual, setImgId, resetImageCons } = consSlice.actions
export default consSlice.reducer;