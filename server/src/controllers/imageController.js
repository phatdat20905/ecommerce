import { uploadImageForDescription } from '../services/imageService.js';

export const uploadImage = async (req, res) => {
    try {
        const result = await uploadImageForDescription(req.file);
        if (result.errCode !== 0) {
            return res.status(400).json(result);
        }
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({
            errCode: -1,
            errMessage: `Server error: ${error.message}`,
        });
    }
};