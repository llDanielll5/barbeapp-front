import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
  return (
    <Card>
      <CardContent className="px-5 py-8 flex justify-between flex-row items-center">
        <Image
          src="/images/logo.png"
          alt="BarbeApp Logo"
          height={22}
          width={120}
        />
        <Button variant="outline" size="icon">
          <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  );
};

export default Header;
