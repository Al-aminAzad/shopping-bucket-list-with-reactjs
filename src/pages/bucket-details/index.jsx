import CreateList from '../../components/create';
import Nav from '../../components/nav';
import Table from '../../components/table';
const BucketDetails = () => {
  return (
    <div>
      {/* Navbar */}
      <Nav />

      {/* Main content body */}
      <main className="container __margin--ylg">
        {/* Create new item */}
        <CreateList extra label="Add new item" />
        {/* Item Table Completed */}
        <section className="section table __shadow--sm">
          <Table/>
        </section>

        <section className="section table table--success __shadow--sm">
         <Table/>
        </section>
      </main>
    </div>
  );
};

export default BucketDetails;
