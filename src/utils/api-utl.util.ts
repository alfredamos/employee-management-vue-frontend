
const authBaseUrl = "https:localhost:7253/api/auth";

interface AuthUrl{
      changePasswordUrl: string;
      editProfileUrl: string;
      loginUrl: string;
      signupUrl: string;

}

const authUrl: AuthUrl = {
      changePasswordUrl: `${authBaseUrl}/change-password`,
      editProfileUrl: `${authBaseUrl}/edit-profile`,
      loginUrl: `${authBaseUrl}/login`,
      signupUrl: `${authBaseUrl}/signup`,
}

export default authUrl