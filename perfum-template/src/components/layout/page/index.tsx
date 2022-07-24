import Footer from "../footer";
import Navbar from "../navbar";

export const Page = ({ className, children, color }: PageProps) => {
  return (
    <>
      <div style={color ? { backgroundColor: color } : {}} className='absolute h-screen w-screen -z-10' />
      <div
        className={`
        flex flex-col items-center justify-center 
        flex-grow relative w-full
        animate__animated animate__fadeIn animate__fast
        ${className}  
      `}
      >
         <Navbar /> 
        <>{children}</>
        <Footer />
      </div>
    </>
  );
};

interface PageProps {
  className?: string;
  children: React.ReactNode;
  color?: string;
}

export default Page;
