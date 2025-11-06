import { useQueryStates, parseAsFloat } from "nuqs";
import { workflowsParams } from "../params";

export const useWorkflowsParams = ()=>{
    return useQueryStates(workflowsParams)
}