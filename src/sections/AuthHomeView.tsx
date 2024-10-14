// src/sections/AuthHomeView.tsx

import Link from "next/link";

const AuthHomeView = () => {
  return (
    <div>
      <h1>vitjate naspat</h1>
      <p>vas kontent</p>
      <Link href="/profil">View Your Profile</Link>
      <br />
      <Link href="/pridat">Add a New Post</Link>
    </div>
  );
};

export default AuthHomeView;