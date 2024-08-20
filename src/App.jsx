import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function App() {
  return (
    <div className=" flex flex-col gap-4 justify-center items-center h-screen w-full">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button>Click me</Button>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
}
