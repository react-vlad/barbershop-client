import React from "react";
import Image from "next/image";
import logo from "../../assets/logo.png"
import { log } from "console";
import { VscAccount } from "react-icons/vsc";
import { VscSearch } from "react-icons/vsc";
import { VscArchive } from "react-icons/vsc";
import { Button } from "../ui/button";

export default function Header() {
    return <div className="header bg-black">
        <div className="container mx-auto flex items-center justify-between">
            <div className="header-left text-white">
                <div className="phone font-bold tracking-wide">0-800-752-888</div>
                <div className="text tracking-wide">Пн-Сб з <strong>10:00 </strong>до <strong>20:00 </strong></div>
            </div>
            <div className="logo">
                <Image src={logo} alt="logo" width={100} height={100} />
            </div>
            <div className="header-right cursor-pointer text-white flex items-center gap-5">
                <VscAccount />
                <VscSearch />
                <Button variant={"outline"} className="font-bold flex items-center gap-3 text-lg px-6 py-5">
                    <VscArchive />
                    Кошик
                </Button>
            </div>
        </div>
    </div>
}