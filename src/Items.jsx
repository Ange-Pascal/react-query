import { useQuery } from '@tanstack/react-query';
import SingleItem from './SingleItem';
import customFetch from './Utils';
const Items = () => { 
  const {isLoading, data, isError, error} = useQuery({
    queryKey: ['tasks'], 
    queryFn: async () =>{
      const {data} = await customFetch.get('/')
      return data
    } 
  }) 

  if (isLoading){
    return <p style={{ marginTop: "1rem" }}> Loadind...</p>
  }
  if (isError){
    return <p style={{ marginTop: "1rem" }}> There was an error...</p>
  }
  return (
    <div className='items'>
      {data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
