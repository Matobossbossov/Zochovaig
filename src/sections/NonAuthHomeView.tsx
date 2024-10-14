// src/sections/NonAuthHomeView.tsx

import Link from "next/link";

const NonAuthHomeView = () => {
  return (
    <div>
      <h1>vitajte na dtudentskom instagrame!</h1>
      <p>prihlaste sa prosim.</p>
      <Link href="/auth/prihlasenie">PRIHLASENIE</Link>
      <br />
      <Link href="/o-nas">NAUC SA O NAS VIAC</Link>
    </div>
  );
};

export default NonAuthHomeView;