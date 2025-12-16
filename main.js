const LIFF_ID = "YOUR_LIFF_ID";

window.onload = async () => {
  await liff.init({ liffId: LIFF_ID });
  if (!liff.isLoggedIn()) {
    liff.login();
    return;
  }

  const profile = await liff.getProfile();
  document.getElementById("username").value = profile.displayName;
  window.lineUserId = profile.userId;
};

function submitForm() {
  fetch("YOUR_GOOGLE_SCRIPT_URL", {
    method: "POST",
    body: JSON.stringify({
      userId: window.lineUserId,
      username: document.getElementById("username").value,
      project: document.getElementById("project").value,
      material: document.getElementById("material").value,
      date: document.getElementById("date").value
    })
  })
}
