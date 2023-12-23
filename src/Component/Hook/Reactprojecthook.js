import { useQuery } from "@tanstack/react-query";


export const ReactProjecthook = () => {
    const {data: reactprojects = [],refetch,isLoading} = useQuery({
        queryKey: ['reactprojects'],
        queryFn: async() =>{
            const res = await fetch(`https://server-side-beta.vercel.app/portfolio`)
            const data = await res.json();
            return data?.data;
           
        }
    });
    return [reactprojects,isLoading];
};