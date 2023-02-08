import { Link, useLoaderData } from "@remix-run/react";
import { redirect } from "@remix-run/server-runtime";
import Body from "~/components/Body";
import LiveOpportunities from "~/components/LiveOpportunities";
import Opportunities from "~/components/Opportunities"
import { useOptionalUser } from "~/utils";
import Navbar from "../components/Navbar"
import indexCss from "../styles/index.css"


export function links() {
  return [
    {
      rel: "stylesheet",
      href: indexCss,
    },
  ];
}
// export async function loader() {
//   let data
//   let res = await fetch("http://localhost:3300/home-page",{method:"GET"})
 
//   return res;
// }
export default function Index() {
  const user = useOptionalUser();
  const loaderData = useLoaderData()
  console.log(loaderData)
  return (
    <>
      <Navbar/>
      {/* <h1>{loaderData}</h1> */}
      <Body/>
      <Opportunities  />
      <LiveOpportunities />

    </>
  );
}
