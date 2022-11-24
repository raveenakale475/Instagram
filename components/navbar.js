let navbar = () => {
  return `<div class="nav-wrapper">
  <a href="index.html"><img src="img/logo.PNG" class="brand-img" alt="" /></a>
        <input type="text" class="search-box" placeholder="Search" />
        <div class="nav-items">
        <a href="index.html"><img src="img/home.PNG" class="icon" alt="" /></a>
          <img src="img/messenger.PNG" class="icon" alt="" />
          <a href="createpost.html"> <img src="img/add.PNG" class="icon" alt="" /></a>
          <img src="img/explore.PNG" class="icon" alt="" />
          <img src="img/like.PNG" class="icon" alt="" />
          <a href="signup.html"><div class="icon user-profile"></div></a>
        </div>
      </div>`;
};

export default navbar;
