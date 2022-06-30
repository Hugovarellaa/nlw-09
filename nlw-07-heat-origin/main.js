const link = {
  github: "hugovarellaa",
  facebook: "hugo.alves.180/",
  instagram: "hugo.alves__/",
  twitter: "HVarealla",
  youtube: "rocketseat"
};

function change() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute("class");
    li.children[0].href = `https://${social}.com/${link[social]}`;
  }
}

change();

function getGithubProfileInfos() {
  const url = "https://api.github.com/users/Hugovarellaa";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      userName.textContent = data.name
      linkName.textContent = data.login;
      bio.textContent = data.bio;
      avatarImage.src = data.avatar_url
    });
}

getGithubProfileInfos();
