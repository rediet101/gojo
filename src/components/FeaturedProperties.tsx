import { FEATURED_PROPERTIES } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";

const FeaturedProperties = () => {
  return (
    <div className="container mx-auto border-b py-6 pb-10 ">
        <h2 className="text-center text-3xl tracking-tighter sm:text-4xl lg:text-5xl">
                Featured Properties
        </h2>
        <div className="flex flex-wrap">
            {FEATURED_PROPERTIES.map((properties,index)=>
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                <Link href="#" className="m-2 inline-block">
                <div className="p-8">
                   <Image 
                                   className="mb-8 rounded-md object-cover" 
                                   src={properties.image}
                                   width={300}
                                   height={300} 
                                   alt={properties.name}/>
                                   <div className="text-center">
                                    <h6 className="mb-5 mt-2 font-medium ">{properties.name}</h6>
                                    <span className="mb-5 mt-2">${properties.price}</span>
                                    <div className="mt-2 flex items-center justify-center">
                                        <Star fill="gold" strokeWidth={0} className="mr-2"/>
                                        <span className="text-sm ">
                                            {properties.rating}({properties.reviews} reviews )
                                        </span>
                                    </div>

                                   </div>
                </div>
                </Link>
            </div>
            )}
        </div>
    </div> 
  )
}

export default FeaturedProperties