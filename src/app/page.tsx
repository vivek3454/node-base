"use client";

import { Button } from "@/components/ui/button";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import LogoutButton from "./logout-button";
import { useTRPC } from "@/trpc/client";

const Page = () => {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const { data } = useQuery(trpc.getWorkflows.queryOptions());
  const create = useMutation(trpc.createWorkflow.mutationOptions({onSuccess:()=>{
queryClient.invalidateQueries(trpc.getWorkflows.queryOptions())
  }}));

  return (
    <div className="min-h-screen min-w-screen flex flex-col gap-6 items-center justify-center">
      Protected server component
      <div>

      {JSON.stringify(data, null, 2)}
      </div>
      <LogoutButton />
      <Button disabled={create.isPending} onClick={() => create.mutate()}>
        Create workflow
      </Button>
    </div>
  );
};

export default Page;
