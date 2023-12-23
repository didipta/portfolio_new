import { useQuery } from "@tanstack/react-query";


export const Projecthook = () => {
    const {data: projects = [],refetch,isLoading} = useQuery({
        queryKey: ['projects'],
        queryFn: async() =>{
            const res = await fetch(`https://server-side-beta.vercel.app/portfolio-project`)
            const data = await res.json();
            return data?.data;
           
        }
    });
    return [projects,isLoading];
};

