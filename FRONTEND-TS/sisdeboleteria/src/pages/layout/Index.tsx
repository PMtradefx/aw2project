import React, { useState } from "react";
import Header from "../template/Header";
import Footer from "../template/Footer";
import { Link, useNavigate } from "react-router-dom";

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("user"); 
    navigate("/Login");
  };

  return (
    <div className="wrapper">
      <Header />
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <a href="#" className="brand-link" style={{ textDecoration: "none" }}>
          <img src="/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" />
          <span className="brand-text font-weight-light">SYS Reservas</span>
        </a>
        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="info">
              <a href="/admin" className="d-block" style={{ textDecoration: "none", marginLeft: 60, fontSize: 18, color: "white", fontWeight:800 }}>INICIO</a>
            </div>
          </div>
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" role="menu">
              <li className={`nav-item has-treeview ${isUserMenuOpen ? 'menu-open' : ''}`}>
                <a className="nav-link active" style={{ cursor: "pointer" }} onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}>
                  <i className="nav-icon fas bi bi-people-fill"></i>
                  <p>
                    Usuarios
                    <i className="right fas fa-angle-left"></i>
                  </p>
                </a>

                <ul className="nav nav-treeview" style={{ display: isUserMenuOpen ? "block" : "none" }}>
                  <li className="nav-item">
                    <Link to="/admin/users/create" className="nav-link active">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Resgistrar usuario</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/admin/users" className="nav-link active">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Lista de Usuarios</p>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/" onClick={handleLogout}>
                  <i className="nav-icon fas fa-door-closed" />
                  <span style={{ marginLeft: 5 }}>Salir</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      <div className="content-wrapper" style={{ minHeight: "86vh" }}>
        <div className="container">
          <section className="content pt-4 px-3">
            {children}
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminLayout;