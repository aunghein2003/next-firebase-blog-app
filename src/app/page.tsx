import Button from "@/components/ui/Button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="py-5 px-7 mx-auto max-w-7xl">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-3xl md:text-5xl font-semibold">Logo</h1>
          <div className="flex items-center gap-x-3 md:gap-x-5">
            <Link href={`/create`}>
              <Button>Create</Button>
            </Link>
            <Button variant="secondary" outline>
              Edit Tags
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
