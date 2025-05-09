import UserTable from "@/components/organisms/UserTable";
import { getUsers } from "@/services/userService";

interface HomeProps {
  searchParams: Promise<{ page?: string; limit?: string }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const { page, limit } = await searchParams;

  const pageNumber = Number(page ?? "1");
  const limitNumber = Number(limit ?? "10");

  const safePage = Math.max(1, pageNumber);
  const safeLimit = Math.max(1, limitNumber);

  const userData = await getUsers(safePage, safeLimit);

  return (
    <div>
      <UserTable users={userData.data} totalRecord={userData.totalCount} />
    </div>
  );
}
