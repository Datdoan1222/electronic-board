import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAdmin } from '../../services/authServices';

export const getUserInfor = createAsyncThunk(
    'getUserInfor',
    async () => {
        const user = await getAdmin();
        return user.data;
    }
)