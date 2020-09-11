import axios from "axios";

export default {
  //================================================/
  // USERS
  //==============================================/
  getCurrentUser: function () {
    return axios.get("/user");
  },

  signUp: function (userInfo) {
    return axios.post("/register", userInfo);
  },
  logIn: function (userInfo) {
    return axios.post("/login", userInfo);
  },
  // Updates user allergies, or dietaryRestrictions given user **ID** (not name)
  updateUser: function (id, allergies, dietaryRestrictions) {
    return axios.post({
      url: "/user/update",
      data: {
        id: id,
        allergies: allergies,
        dietaryRestrictions: dietaryRestrictions,
      },
    });
  },

  //===============================================/
  // FAVOURITES
  //=============================================/
  // API.getFavourites(user).then((resp) => { //code })
  getFavourites: function (user) {
    return axios.get(`/favourite/getall/${user}`);
  },

  // API.getSpecFavourite(favouriteId).then((resp) => { //code })
  getSpecFavourite: function (favouriteId) {
    return axios.get(`/favourite/get/${favouriteId}`);
  },

  // API.addFavourite(user, shop, category, name).then((resp) => { //code })
  addFavourite: function (user, shop, category, name, specialInstructions) {
    return axios.post({
      url: "/favourite/add",
      data: {
        owner: user,
        shop: shop,
        category: category,
        name: name,
        specialInstructions: specialInstructions,
      },
    });
  },

  // API.updateFavourite(itemID, shop, category, name, specialInstructions).then((resp) => { //code })
  updateFavourite: function (
    itemID,
    shop,
    category,
    name,
    specialInstructions
  ) {
    return axios.post({
      url: `/favourite/update/${itemID}`,
      data: {
        shop: shop,
        category: category,
        name: name,
        specialInstructions: specialInstructions,
      },
    });
  },

  // API.deleteFavourite(trashID).then((resp) => { //code })
  deleteFavourite: function (trashID) {
    return axios.post(`/favourite/delete/${trashID}`);
  },

  //===============================================/
  // FRIENDS
  //=============================================/
  // API.addFriend(userID, friendID).then((resp) => { //code })
  addFriend: function (userID, friendID) {
    return axios.post({
      url: "/friend/add",
      data: {
        userID: userID,
        friendID: friendID,
      },
    });
  },

  //  API.deleteFriend(userID, friendID).then((resp) => { //code })
  deleteFriend: function (userID, friendID) {
    return axios.post({
      url: "/friend/delete",
      data: {
        userID: userID,
        friendID: friendID,
      },
    });
  },
};
