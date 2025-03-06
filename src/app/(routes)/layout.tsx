import Navbar from "../../components/Navbar";  // Adjust the import path based on where your Navbar component is located
import Sidebar from "../../components/Sidebar";

export default function RoutesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <Sidebar/>
      {children}
    </>
  )
}