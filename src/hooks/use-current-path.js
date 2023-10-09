import { usePathname } from "next/navigation";

export default function useCurrentPath() {
  const pathName = usePathname();
  console.log(pathName);

  return pathName;
}
