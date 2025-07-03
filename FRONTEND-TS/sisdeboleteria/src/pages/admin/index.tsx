import { Api } from "../../services/Api";
import AdminLayout from "../layout/Index";
import { useEffect, useState } from "react";

const Index = () => {
  const [totalUser, setTotalUser] = useState<number>(0);
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
  const token = localStorage.getItem("token");
  if (!token) {
    console.error("No hay token de autenticación");
    return;
  }
    const storedUser = localStorage.getItem("user");
      if (storedUser) {
        try {
          const userObj = JSON.parse(storedUser);
          setUsername(userObj.name || null);
        } catch {
          setUsername(null);
      }
    }

  Api.get("/admin/users", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => setTotalUser(response.data.users.length))
    .catch((err) => {
      console.error("Error al obtener usuarios:", err);
    });
}, []);
  return (
    <div>
      <AdminLayout>
        <div className="row">
            <h1><b>Bienvendo: {username}</b></h1>
        </div>
        <hr />
        <div className="row">
          <div className="col-lg-3 col-6">
            <div className="small-box bg-info">
              <div className="inner">
                <h3>{totalUser}</h3>
                <p>Usuarios</p>
              </div>
              <div className="icon">
                <i className="fas bi bi-file-person" />
              </div>
              <a href="/admin/users" className="small-box-footer">Más información <i className="fas bi bi-file-person" /></a>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="small-box bg-primary">
              <div className="inner">
                <h3>{totalUser}</h3>
                <p>Proveedores</p>
              </div>
              <div className="icon">
                <i className="fas bi bi-person-circle" />
              </div>
              <a href="/admin/providers" className="small-box-footer">Más información <i className="fas bi bi-person-circle" /></a>
            </div>
          </div>
        </div>
      </AdminLayout>
    </div>
  )
}

export default Index;