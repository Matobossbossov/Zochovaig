// src/app/page.tsx

import Typography from "@mui/material/Typography";
import { getServerSession } from "next-auth";
import NonAuthHomeView from "@/sections/NonAuthHomeView";
import AuthHomeView from "@/sections/AuthHomeView";

export const metadata = { title: 'Domov | ZoskaSnap' };

export default async function Home() {
  // Get the session on the server side
  const session = await getServerSession(authOptions);

  // Check if the user is authenticated
  if (session) {
    // Render the authenticated view if the user is signed in
    return <AuthHomeView />;
  } else {
    // Render the non-authenticated view if the user is not signed in
    return (
      <>
        <Typography>Domovska stranka</Typography>
        <NonAuthHomeView />
      </>
    );
  }
}
