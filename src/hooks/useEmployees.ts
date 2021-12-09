import { useMutation, useQuery, useQueryClient } from "react-query";
import { getEmployees, patchEmployee, postEmployee } from "../api/employees";

const Id = 'employees';

export function useEmployees() {
    const queryClient = useQueryClient();
    const employees = useQuery(Id, getEmployees)
    const patchEmployeeMutation = useMutation(patchEmployee, {
        onSuccess: () => {
            queryClient.invalidateQueries(Id);
        }
    });
    const postEmployeeMutation = useMutation(postEmployee, {
        onSuccess: () => {
            queryClient.invalidateQueries(Id);
        }
    });
    return {
        employees,
        patchEmployee: patchEmployeeMutation.mutate,
        postEmployee: postEmployeeMutation.mutate
    }
}