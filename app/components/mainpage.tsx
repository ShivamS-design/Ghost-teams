import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import React, { useState } from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


import './style.css';
import ProductCard from "./tasks"
import {IoMdHome} from "react-icons/io"
import { MdCalendarToday } from "react-icons/md";
import { LuSettings2 } from "react-icons/lu";
import { LuChevronsUpDown } from "react-icons/lu";
import { FaCommentAlt } from "react-icons/fa";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"


export function MainHome() {
  const frameworks = [
  
  ]
  


  
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="max"
    >
      <ResizablePanel defaultSize={9}>
        <div className="flex h-[100vh] p-6 left_pane">
<div>
<Card className="w-[170px] h-[40px]">
  
    <CardContent>
    <Popover >
    <PopoverTrigger asChild>
<div className="button_view">
<div className="box_green"></div>
  <Button
        role="combobox"
        className="top_pane_button"
      >
       <h4 className="mt-[1px]">Echoverse</h4>
      </Button>
      <LuChevronsUpDown className="absolute ml-[123px] mt-[-20px]"/>

      <div>
      </div>
  </div>        
    </PopoverTrigger>
    <PopoverContent className="w-[200px] p-0">
      <Command>
        <CommandList>
          <CommandEmpty>No Data found.</CommandEmpty>
          
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>
    </CardContent>
  
  </Card>

  <div className="mt-[30px]">
    <ul>
    <li><div className="menu-item active"><IoMdHome /> <p className="menu-text ml-[20px]">Dashboard</p></div></li>
    <li><div className="menu-item inactive"><MdCalendarToday  /> <p className="menu-text ml-[20px]">Billing</p></div></li>
    <li><div className="menu-item inactive"><LuSettings2 /> <p className="menu-text ml-[20px]">Settings</p></div></li>

    </ul>

    <p className="team-text">Teams</p>

    <ul>
    <li><div className="menu-item inactive"> <Avatar  className="absolute w-[20px] h-[20px] mt-[-4px]  avatar-border">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback></AvatarFallback>
    </Avatar>  <p className="menu-text ml-[27px] mt-[-2px]">Sophia Carter</p><FaCommentAlt className="ml-[120px] w-[11px] h-[11px] mt-[2px]" />
</div></li>

<li><div className="menu-item inactive"> <Avatar  className="absolute w-[20px] h-[20px] mt-[-4px]  avatar-border">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback></AvatarFallback>
    </Avatar>  <p className="menu-text ml-[27px] mt-[-2px]">Emmy Don</p><FaCommentAlt className="ml-[120px] w-[11px] h-[11px] mt-[2px]" />
</div></li>

<li><div className="menu-item inactive"> <Avatar  className="absolute w-[20px] h-[20px] mt-[-4px]  avatar-border">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback></AvatarFallback>
    </Avatar>  <p className="menu-text ml-[27px] mt-[-2px]">Dickson Codes</p><FaCommentAlt className="ml-[120px] w-[11px] h-[11px] mt-[2px]" />
</div></li>
<li><div className="menu-item inactive"> <Avatar  className="absolute w-[20px] h-[20px] mt-[-4px]  avatar-border">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback></AvatarFallback>
    </Avatar>  <p className="menu-text ml-[27px] mt-[-2px]">Sophia Carter</p><FaCommentAlt className="ml-[120px] w-[11px] h-[11px] mt-[2px]" />
</div></li>
   
    </ul>
  </div>
</div>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={9}>
            <div className="flex h-full wi-[100vh] p-6 bg_gray top-barx">
                <h3 className="top_bar">Kanban</h3>
                

                <div className=" absolute w-[100px] h-[40px] mt-[-8px] button-left-top">
                <Button className="btn-top-left2"><LuSettings2 /> <p className="ml-[10px]">Display</p></Button>

                  <Button className="btn-top-left ml-[20px] mt-[-1px]">New Task <div className="n-view ml-[10px]" ><p>N</p></div></Button>
                </div>

              </div>
          </ResizablePanel>

          
          <ResizableHandle />
          <ResizablePanel defaultSize={75}>
            <div className="flex h-full p-6 bg_gray">
   <ProductCard/>


            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
