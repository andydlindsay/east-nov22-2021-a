import useRequest from "../hooks/useRequest";

const Request = () => {
  const url = 'http://my-json-server.typicode.com/andydlindsay/chef-andy/recipes';
  const {data, loading, errorMsg} = useRequest(url);

  return (
    <div>
      <h2>Making a request.</h2>

      { data && <p>Data: {data.length}</p> }
      { loading && <p>Loading...</p> }
      { errorMsg && <p>Darn! Something went wrong!!</p> }
    </div>
  );
};

export default Request;
