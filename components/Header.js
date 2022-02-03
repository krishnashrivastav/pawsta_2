import Image from "next/image";

function Header() {
  return (
    <div>
        <div className="flex justify-between max-w-6xl">
            {/* left */}
            <div className="relative hidden lg:inline-grid h-24 w-24 cursor-pointer" >
                <Image
                    src="/pawsta logo 1.png"
                    layout="fill"
                    objectFit="contain" /> 
            </div>

            <div className="relative w-10 h-10 lg:hidden flex-shrink-0 cursor-pointer">
                <Image
                    src="/pawsta paw logo.png"
                    layout="fill"
                    objectFit="contain" /> 
            </div>

            {/* middle */}
            <h1>heyyyy</h1>
            {/* right */}            
        </div>
    </div>
  ) 
}

export default Header;
