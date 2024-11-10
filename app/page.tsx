import Image from "next/image";
import { Button } from "./_components/ui/button";

export default function Home() {
  return (
    <div>
      <h1 className="text-green-500">Olá mundo!</h1>
      <Button>hello world</Button>
    </div>
  );
}
