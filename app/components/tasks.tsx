import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
  import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
 
  
  export default function ProductCard() {
    return (
        <div className="container mx-auto my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 h-[430px]">
        {/* Product Card 1 */}
        <Card className="bg-white max-w-sm rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
          <CardHeader className="relative">
           
            <div className="absolute top-0 left-0 ml-[2px] p-2 text-black date_compo">
              <p>1 Jun -- 5 Jun</p>
            </div>

            <div className="absolute top-6 left-2 p-2 text-black">
              <b className="text-bold">Design Homepage</b>
            </div>
          </CardHeader>
          <CardContent className="p-4">
            
            <CardDescription className="text-gray-600 left-5 mb-4 ml-[-9px] text_desc">
             Create a modern visual appealing and responsive homepage design that captures users attention
            </CardDescription>
          </CardContent>
          <CardFooter className="p-4">

            <div className="mt-[-58px]">
            <Avatar  className="absolute w-[26px] h-[26px] avatar-border">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback></AvatarFallback>
    </Avatar> 

    <Avatar  className="absolute w-[26px] h-[26px] ml-[20px] avatar-border">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback></AvatarFallback>
    </Avatar> 

    <div className="absolute w-[26px] h-[26px] ml-[40px] avatar-border plus-avatar">
      +
    </div>
    
     
    
      
             </div>

     <div className="absolute ml-[60px] w-[200px] mt-[-29px]">
      <p className="ml-[12px]">32pts</p>
      <p className="estimate_value mt-[-24px] ml-[70px]">$2,100 estimate</p>
      </div>           
          </CardFooter>
        </Card>
  
        <Card className="bg-white max-w-sm rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
          <CardHeader className="relative">
           
            <div className="absolute top-0 left-0 ml-[2px] p-2 text-black date_compo">
              <p>1 Jun -- 5 Jun</p>
            </div>

            <div className="absolute top-6 left-2 p-2 text-black">
              <b className="text-bold">Design Homepage</b>
            </div>
          </CardHeader>
          <CardContent className="p-4">
            
            <CardDescription className="text-gray-600 left-5 mb-4 ml-[-9px] text_desc">
             Create a modern visual appealing and responsive homepage design that captures users attention
            </CardDescription>
          </CardContent>
          <CardFooter className="p-4">

            <div className="mt-[-58px]">
            <Avatar  className="absolute w-[26px] h-[26px] avatar-border">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback></AvatarFallback>
    </Avatar> 

    <Avatar  className="absolute w-[26px] h-[26px] ml-[20px] avatar-border">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback></AvatarFallback>
    </Avatar> 

    <div className="absolute w-[26px] h-[26px] ml-[40px] avatar-border plus-avatar">
      +
    </div>
    
     
    
      
             </div>

     <div className="absolute ml-[60px] w-[200px] mt-[-29px]">
      <p className="ml-[12px]">32pts</p>
      <p className="estimate_value mt-[-24px] ml-[70px]">$2,100 estimate</p>
      </div>           
          </CardFooter>
        </Card>


        <Card className="bg-white max-w-sm rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
          <CardHeader className="relative">
           
            <div className="absolute top-0 left-0 ml-[2px] p-2 text-black date_compo">
              <p>1 Jun -- 5 Jun</p>
            </div>

            <div className="absolute top-6 left-2 p-2 text-black">
              <b className="text-bold">Design Homepage</b>
            </div>
          </CardHeader>
          <CardContent className="p-4">
            
            <CardDescription className="text-gray-600 left-5 mb-4 ml-[-9px] text_desc">
             Create a modern visual appealing and responsive homepage design that captures users attention
            </CardDescription>
          </CardContent>
          <CardFooter className="p-4">

            <div className="mt-[-58px]">
            <Avatar  className="absolute w-[26px] h-[26px] avatar-border">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback></AvatarFallback>
    </Avatar> 

    <Avatar  className="absolute w-[26px] h-[26px] ml-[20px] avatar-border">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback></AvatarFallback>
    </Avatar> 

    <div className="absolute w-[26px] h-[26px] ml-[40px] avatar-border plus-avatar">
      +
    </div>
    
     
    
      
             </div>

     <div className="absolute ml-[60px] w-[200px] mt-[-29px]">
      <p className="ml-[12px]">32pts</p>
      <p className="estimate_value mt-[-24px] ml-[70px]">$2,100 estimate</p>
      </div>           
          </CardFooter>
        </Card>

        <Card className="bg-white max-w-sm rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
          <CardHeader className="relative">
           
            <div className="absolute top-0 left-0 ml-[2px] p-2 text-black date_compo">
              <p>1 Jun -- 5 Jun</p>
            </div>

            <div className="absolute top-6 left-2 p-2 text-black">
              <b className="text-bold">Design Homepage</b>
            </div>
          </CardHeader>
          <CardContent className="p-4">
            
            <CardDescription className="text-gray-600 left-5 mb-4 ml-[-9px] text_desc">
             Create a modern visual appealing and responsive homepage design that captures users attention
            </CardDescription>
          </CardContent>
          <CardFooter className="p-4">

            <div className="mt-[-58px]">
            <Avatar  className="absolute w-[26px] h-[26px] avatar-border">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback></AvatarFallback>
    </Avatar> 

    <Avatar  className="absolute w-[26px] h-[26px] ml-[20px] avatar-border">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar> 

    <div className="absolute w-[26px] h-[26px] ml-[40px] avatar-border plus-avatar">
      +
    </div>
    
     
    
      
             </div>

     <div className="absolute ml-[60px] w-[200px] mt-[-29px]">
      <p className="ml-[12px]">32pts</p>
      <p className="estimate_value mt-[-24px] ml-[70px]">$2,100 estimate</p>
      </div>           
          </CardFooter>
        </Card>





           <Card className="bg-white max-w-sm rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
          <CardHeader className="relative">
           
            <div className="absolute top-0 left-0 ml-[2px] p-2 text-black date_compo">
              <p>1 Jun -- 5 Jun</p>
            </div>

            <div className="absolute top-6 left-2 p-2 text-black">
              <b className="text-bold">Design Homepage</b>
            </div>
          </CardHeader>
          <CardContent className="p-4">
            
            <CardDescription className="text-gray-600 left-5 mb-4 ml-[-9px] text_desc">
             Create a modern visual appealing and responsive homepage design that captures users attention
            </CardDescription>
          </CardContent>
          <CardFooter className="p-4">

            <div className="mt-[-58px]">
            <Avatar  className="absolute w-[26px] h-[26px] avatar-border">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar> 

    <Avatar  className="absolute w-[26px] h-[26px] ml-[20px] avatar-border">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback></AvatarFallback>
    </Avatar> 

    <div className="absolute w-[26px] h-[26px] ml-[40px] avatar-border plus-avatar">
      +
    </div>
    
     
    
      
             </div>

     <div className="absolute ml-[60px] w-[200px] mt-[-29px]">
      <p className="ml-[12px]">32pts</p>
      <p className="estimate_value mt-[-24px] ml-[70px]">$2,100 estimate</p>
      </div>           
          </CardFooter>
        </Card>



           <Card className="bg-white max-w-sm rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
          <CardHeader className="relative">
           
            <div className="absolute top-0 left-0 ml-[2px] p-2 text-black date_compo">
              <p>1 Jun -- 5 Jun</p>
            </div>

            <div className="absolute top-6 left-2 p-2 text-black">
              <b className="text-bold">Design Homepage</b>
            </div>
          </CardHeader>
          <CardContent className="p-4">
            
            <CardDescription className="text-gray-600 left-5 mb-4 ml-[-9px] text_desc">
             Create a modern visual appealing and responsive homepage design that captures users attention
            </CardDescription>
          </CardContent>
          <CardFooter className="p-4">

            <div className="mt-[-58px]">
            <Avatar  className="absolute w-[26px] h-[26px] avatar-border">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar> 

    <Avatar  className="absolute w-[26px] h-[26px] ml-[20px] avatar-border">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar> 

    <div className="absolute w-[26px] h-[26px] ml-[40px] avatar-border plus-avatar">
      +
    </div>
    
     
    
      
             </div>

     <div className="absolute ml-[60px] w-[200px] mt-[-29px]">
      <p className="ml-[12px]">32pts</p>
      <p className="estimate_value mt-[-24px] ml-[70px]">$2,100 estimate</p>
      </div>           
          </CardFooter>
        </Card>
       
      </div>

      
    )
  }
