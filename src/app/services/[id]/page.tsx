import dynamic from "next/dynamic";
import Loading from "@/components/Loading";

const ServiceDetailed = dynamic(() => import("@/components/ServiceDetailed"), {
  loading: () => <Loading />,
});

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const slug = (await params).id;
  return <ServiceDetailed id={slug} />;
}
