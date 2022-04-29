import express, { Request, Response } from "express";
import { UserCreateDTO } from "../interfaces/user/UserCreateDTO";
import statusCode from "../modules/statusCode";
import responseMessage from "../modules/responseMessage";
import util from "../modules/util";
import { UserService } from "../services";
import { UserUpdateDTO } from "../interfaces/user/UserUpdateDTO";
import { UserResponseDTO } from "../interfaces/user/UserResponseDto";

/**
 *  @route GET /user
 *  @desc Read User All
 *  @access Public
 */
const readUsers = async (req: Request, res: Response) => {
  const data = await UserService.readUsers();
  return res
    .status(statusCode.OK)
    .send(util.success(statusCode.OK, responseMessage.READ_USER_SUCCESS, data));
};

/**
 *  @route GET /user/:userId
 *  @desc Read User One
 *  @access Public
 */
const readUser = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const data = await UserService.readUser(userId);
  res
    .status(statusCode.OK)
    .send(util.success(statusCode.OK, responseMessage.READ_USER_SUCCESS, data));
};

/**
 *  @route POST /user
 *  @desc Create User
 *  @access Public
 */
const createUser = async (req: Request, res: Response) => {
  const userCreateDTO: UserCreateDTO = req.body; // User Create Dto로 req.body를 받아오기

  try {
    const data = await UserService.createUser(userCreateDTO);

    res
      .status(statusCode.OK)
      .send(
        util.success(
          statusCode.OK,
          responseMessage.CREATE_USER_SUCCESS,
          data
        )
      );
  } catch (error) {
    console.log(error);
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(
        util.fail(
          statusCode.INTERNAL_SERVER_ERROR,
          responseMessage.INTERNAL_SERVER_ERROR
        )
      );
  }
};

/**
 *  @route PUT /user/:userId
 *  @desc Update User
 *  @access Public
 */
const updateUser = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const userUpdateDTO: UserUpdateDTO = req.body; // User Create Dto로 req.body를 받아오기

  try {
    await UserService.updateUser(userId, userUpdateDTO);

    res
      .status(statusCode.CREATED)
      .send(
        util.success(statusCode.CREATED, responseMessage.UPDATE_USER_SUCCESS)
      );
  } catch (error) {
    console.log(error);
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(
        util.fail(
          statusCode.INTERNAL_SERVER_ERROR,
          responseMessage.INTERNAL_SERVER_ERROR
        )
      );
  }
};

/**
 *  @route PUT /user/:userId
 *  @desc Update User
 *  @access Public
 */
const deleteUser = async (req: Request, res: Response) => {
  const { userId } = req.params;

  try {
    await UserService.deleteUser(userId);

    res
      .status(statusCode.OK)
      .send(util.success(statusCode.OK, responseMessage.DELETE_USER_SUCCESS));
  } catch (error) {
    console.log(error);
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(
        util.fail(
          statusCode.INTERNAL_SERVER_ERROR,
          responseMessage.INTERNAL_SERVER_ERROR
        )
      );
  }
};

export default {
  createUser,
  readUsers,
  readUser,
  updateUser,
  deleteUser,
};
