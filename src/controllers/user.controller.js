import { asyncHandler } from "../utils/asyncHandler.js";

//method
const registerUser = asyncHandler( async (req, res) => {
    res.status(200).json({
        message: "ok"
    })
} )

export {registerUser,}