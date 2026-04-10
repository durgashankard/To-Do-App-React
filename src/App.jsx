import { Link, Outlet } from "react-router-dom";

function App() {

  return (
    <div className=" container-fluid" >
      <header className="bg-light d-flex justify-content-between align-items-center">
        <div className="fs-3 fw-bold">
          <Link to="/" className='text-decoration-none'><span className='bi bi-check2-square'> Task Manager</span></Link>

        </div>

        <div className="fs-5">
          <span>Products</span>
          <span className="mx-4">Features</span>
          <span>Pricing</span>
          <span className="mx-4">EnterPrice</span>

        </div>

        <div>
          <button className="btn"> Login </button>
          <button className="btn btn-primary mx-3"> Get Started </button>

        </div>

      </header>
      <section className="mt-4">
        <Outlet />
      </section>
    </div >
  )
}

export default App;
