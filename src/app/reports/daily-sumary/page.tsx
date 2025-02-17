import { api } from "@/trpc/server";
import ReportTemplate from "./_components/template";

type Props = {
  searchParams: {
    date: string;
  };
};

export default async function Page({ searchParams }: Props) {
  const items = await api.dashboard.dailyReport({
    date: searchParams.date ? new Date(searchParams.date) : new Date(),
  });
  return (
    <div>
      <ReportTemplate items={items} />
    </div>
  );
}
