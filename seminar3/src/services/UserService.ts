import PostBaseResponseDTO from "../interfaces/PostBaseResponseDTO";
import { UserCreateDTO } from "../interfaces/user/UserCreateDTO";
import { UserResponseDTO } from "../interfaces/user/UserResponseDto";
import { UserUpdateDTO } from "../interfaces/user/UserUpdateDTO";
import User from "../models/User";

const readUsers = async (): Promise<Array<UserResponseDTO>> => {
  try {
    const data: Array<UserResponseDTO> = await User.find();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const readUser = async (userId: string): Promise<UserResponseDTO | null> => {
  try {
    const user: UserResponseDTO | null = await User.findById(userId);
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const createUser = async (
  userCreateDto: UserCreateDTO
): Promise<PostBaseResponseDTO> => {
  try {
    const user = new User(userCreateDto);

    await user.save();

    const data: PostBaseResponseDTO = {
      _id: user._id,
    };

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateUser = async (userId: string, userUpdateDto: UserUpdateDTO) => {
  try {
    await User.findByIdAndUpdate(userId, userUpdateDto);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const deleteUser = async (userId: string) => {
  try {
    await User.findByIdAndDelete(userId);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default {
  readUsers,
  readUser,
  createUser,
  updateUser,
  deleteUser,
};
