export const API_ENDPOINTS = "http://localhost:8080/api/fishing-defect"
export const Statistics_ENDPOINTS = "http://localhost:8080/defect_statistics"
export const User_ENDPOINTS = {
  BASE: "http://localhost:8080/api/user",
  REGISTER: "http://localhost:8080/api/user/signup",
  LOGIN: "http://localhost:8080/api/user/singin",
  UPDATE_PROFILE: "http://localhost:8080/api/user/update-profile",
  UPDATE_AVATAR: "http://localhost:8080/api/user/update-image-profile",
  GET_AVATAR: "http://localhost:8080/api/user/get-image-profile",
  GET_USER_SESSION: "http://localhost:8080/api/user/get-user-session",
  CHANGE_PASSWORD: "http://localhost:8080/api/user/change-password",
}
export const Notification_ENDPOINTS = {
  BASE: "http://localhost:8080/api/notification",
  ADD: "http://localhost:8080/api/notification/add",
  DELETE: "http://localhost:8080/api/notification/delete",
  GET_ALL: "http://localhost:8080/api/notification/getAll",
  GET_BY_USER: "http://localhost:8080/api/notification/getByUserId",
  EDIT: "http://localhost:8080/api/notification/edit",
}
