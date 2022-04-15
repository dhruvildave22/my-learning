import { useState } from "react"
import { useSuperHeroesData } from "../hooks/useSuperHeroes";
export const RQSuperHeroesPage = () => {
  const [timer, setTimer] = useState(3000)
  const [counter, setCounter] = useState(0)

  const onSuccess = (data) => {
    if(timer < 10000){
      console.log('Perform side effect after data fetching', data, timer, counter)
      setTimer(timer+3000)
      setCounter(counter+1)
    } else {
      console.log('timer finished', timer, counter)
    }
  }

  const onError = (error) => {
    console.log('Perform side effect after encountering error', error)
  }
  const { isLoading, data, error, isError, isFetching, refetch } = useSuperHeroesData(onSuccess, onError)



  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <>
      <h2>RQSuperHeroes Page</h2> 
      {/* {data?.data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })} */}
      {
        data.map((heroName) => {
          return <div key={heroName}>{heroName}</div>
        })
      }
    </>
  );
};
