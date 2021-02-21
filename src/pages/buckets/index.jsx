import Table from '../../components/table';
import Nav from '../../components/nav';
import CreateList from '../../components/create';
const BucketPage = () => {
  return (
    <div>
      <Nav />
      {/* Main content body */}
      <main className="container __margin--ylg">
        {/* Add new bucket section */}
        <CreateList label="Create new bucket" />
        {/* Buckets table */}
        <div className="section table __shadow--sm">
          <Table />
        </div>
      </main>
    </div>
  );
};

export default BucketPage;
