import { createAsyncThunk } from '@reduxjs/toolkit';
import { getImageCons, getLogo } from '../../services/imageServices'
import Notiflix from 'notiflix';

export const getImgCons = createAsyncThunk(
    'getImgCons',
    async ({ imageName }) => {
        try {
            const imageCons = await getImageCons({ imageName });
            return imageCons.request.responseURL;
        } catch (error) {
            if (error) {
                Notiflix.Notify.failure('Không có ảnh hiển thị');
            }
            else {
                Notiflix.Notify.failure('Failed to get image');
            }
        }
    }
)

export const getLogoUser = createAsyncThunk(
    'getLogoUser',
    async ({ imageName }) => {
        try {
            const logo = await getLogo({ imageName });
            return logo.request.responseURL;
        } catch (error) {
            if (error) {
                Notiflix.Notify.failure('Không có ảnh hiển thị');
            }
            else {
                Notiflix.Notify.failure('Failed to get image');
            }
        }
    }
)