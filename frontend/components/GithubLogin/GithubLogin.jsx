const GithubLogin = () => {
    const handleGithubLogin = () => {
      window.location.href = 'http://127.0.0.1:8000/accounts/github/login/';
    };
  
    return (
      <button onClick={handleGithubLogin}>
        Login with GitHub
      </button>
    );
  };
  
  export default GithubLogin;
  