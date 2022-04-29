import mongoose from "mongoose";
// GET

// POST -> id 반환

interface PostBaseResponseDTO {
    id: mongoose.Schema.Types.ObjectId
}

export default PostBaseResponseDTO;