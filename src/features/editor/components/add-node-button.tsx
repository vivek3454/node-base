"use client";

import { Button } from "@/components/ui/button";
import { memo } from "react";

const { PlusIcon } = require("lucide-react");

export const AddNodeButton = memo(() => {
  return (
    <Button
      onClick={() => {}}
      size="icon"
      variant="outline"
      className="bg-background"
    >
      <PlusIcon />
    </Button>
  );
});

AddNodeButton.displayName = "AddNodeButton";
