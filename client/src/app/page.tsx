import Home from "@/components/organisms/Home";
import { Suspense } from "react";
interface HomeProps {
  searchParams: Promise<{ page?: string; limit?: string }>;
}

export default function PageWrapper(props: HomeProps) {
  return (
    <Suspense fallback={<div>Cargando usuarios...</div>}>
      <Home {...props} />
    </Suspense>
  );
}
