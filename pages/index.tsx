import Layout from "@/components/common/Layout";
import PageSEO from "@/components/common/PageSEO";
import Clientsay from "@/components/home/Clientsay";
import Core from "@/components/home/Core";
import Faq from "@/components/home/Faq";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import Wallet from "@/components/home/Wallet";
import React from "react";

export default function Home() {
  return (
    <>
      <PageSEO title="Home page" />
      <Layout>
        <Hero />
        <Features />
        <Core />
        <Wallet />
        <Clientsay />
        <Faq />
      </Layout>
    </>
  );
}
