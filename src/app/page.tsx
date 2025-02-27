import React from "react";
import Link from "next/link";
import DefaultLayout from "@/template/Template";

const Home = () => {
  return (
    <div>
      <h1>
          <DefaultLayout showAsideLeft showAsideRight classPage={''}>
              <h1>Welcome to Pokémon List</h1>
              <Link href="/pokemon">
                  <button className="btn btn-outline-primary navigate-btn">Let&apos;s Catch Them All! Pokémon</button>
              </Link>
          </DefaultLayout>
        </h1>
    </div>
  );
};

export default Home;
