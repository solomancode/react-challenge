import { QueryClient, QueryClientProvider } from "react-query";
import { EmployeesContainer } from "./components/Employees/EmployeesContainer";

const client = new QueryClient();

export function App() {
    return (
        <QueryClientProvider client={client}>
            <EmployeesContainer />
        </QueryClientProvider>
    )
}