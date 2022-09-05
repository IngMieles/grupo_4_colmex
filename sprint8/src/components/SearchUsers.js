import React from 'react';
import '../style.css';

function SearchUsers() {
    const [users, setUsers] = React.useState([]);
    const [products, setProducts] = React.useState([]);
    const [categories, setCategories] = React.useState([]);
    const [productID, setProductID] = React.useState([]);

    const fetchApiUsers = () => {
        return new Promise((resolve, reject) => {
            return fetch('http://localhost:3001/api/users/')
                .then(res => res.json())
                .then(res => resolve(res.users))
                .catch(err => reject(err));
        });
    }

    const fetchApiProducts = () => {
        return new Promise((resolve, reject) => {
            return fetch('http://localhost:3001/api/products/')
                .then(res => res.json())
                .then(res => resolve(res.products))
                .catch(err => reject(err));
        });
    }

    const fetchApiCategories = () => {
        return new Promise((resolve, reject) => {
            return fetch('http://localhost:3001/api/products/categories')
                .then(res => res.json())
                .then(res => resolve(res.categories))
                .catch(err => reject(err));
        });
    }

    let id = products.length-1;
    const fetchApiProductsID = () => {
        return new Promise((resolve, reject) => {
            return fetch(`http://localhost:3001/api/products/${id}`)
                .then(res => res.json())
                .then(res => resolve(res.product))
                .catch(err => reject(err));
        });
    }

    React.useEffect(() => {
        fetchApiUsers()
            .then(data => {
                setUsers(data);
            })
            .catch(err => console.error(err));
    }, []);

    React.useEffect(() => {
        fetchApiProducts()
            .then(data => {
                setProducts(data);
            })
            .catch(err => console.error(err));
    }, []);

    React.useEffect(() => {
        fetchApiCategories()
            .then(data => {
                setCategories(data);
            })
            .catch(err => console.error(err));
    }, []);

    React.useEffect(() => {
        fetchApiProductsID()
            .then(data => {
                setProductID(data);
            })
            .catch(err => console.error(err));
    // }, []);
    });

    return (
        <div id="container">
            <div id="header">
                <div id='branding'>
                    <h1>Dashboard en React</h1>
                    {/* <p>{users.length}</p> */}
                </div>
                <div id='user-tools'>
                    Bienvenido, 
                    <strong> username_00</strong>. 
                    <a href="http://localhost:3001/">Ir al sitio COLMEX</a> 
                    /
                    <a href="/">Log-out</a>
                    {/* <p>{users.length}</p> */}
                </div>
            </div>
            <div className="main">
                    <div id="content" className='content'>
                        <div className='colMS'>
                            <h1>Sitio de Administración COLMEX</h1>
                            <div id='content-main'>
                                <div className='module'>
                                    <table>
                                        <caption>
                                        <a href="/" className="section">Totales</a>
                                        </caption>
                                        <tbody>
                                            <tr>
                                                <th>
                                                    <a href="/">Total de usuarios</a>
                                                </th>
                                                <td>
                                                    <a href="/" className="addlink">{users.length}</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <a href="/">Total de productos</a>
                                                </th>
                                                <td>
                                                    <a href="/" className="addlink">{products.length}</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <a href="/">Total de categorias</a>
                                                </th>
                                                <td>
                                                    <a href="/" className="addlink">{categories.length}</a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    {/* Panel de los detalles */}
                                    <table>
                                        <caption>
                                        <a href="/" className="section">Detalle del último producto creado</a>
                                        </caption>
                                        <tbody>
                                            <tr>
                                                <th>
                                                    <a href="/">Nombre:</a>
                                                </th>
                                                <td>
                                                    <a href="/" className="addlink">{productID.name}</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <a href="/">Descripción</a>
                                                </th>
                                                <td>
                                                    <a href="/" className="addlink">{productID.description}</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <a href="/">URL de la imagen</a>
                                                </th>
                                                <td>
                                                    <a href="/" className="addlink">{productID.url_img}</a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    {/* Panel de categorias */}
                                    <table>
                                        <caption>
                                            <a href="/" className="section">Categorias</a>
                                        </caption>
                                        <tbody>
                                            {
                                                categories.map((categoria, i) => {
                                                    return (
                                                        <tr key={i}>
                                                            <th>
                                                                <a href="/">{i+1}</a>
                                                            </th>
                                                            <td>
                                                                <a href="/" className="addlink">{categoria.category}</a>
                                                            </td>
                                                            <td>
                                                                <a href="/" className="addlink">Total de productos: {categoria.total}</a>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                    {/* Panel de listado de productos */}
                                    <table>
                                        <caption>
                                            <a href="/" className="section">Panel de listado de productos</a>
                                        </caption>
                                        <tbody>
                                            {
                                                products.map((product, i) => {
                                                    return (
                                                        <tr key={i}>
                                                            <th>
                                                                <a href="/">Nombre:</a>
                                                                <br></br>
                                                                <a href="/">Precio:</a>
                                                                <br></br>
                                                                <a href="/">Categoria:</a>
                                                                <br></br>
                                                                <a href="/">Description:</a>
                                                                <br></br>
                                                                <a href="/">Detalles:</a>
                                                            </th>
                                                            <td>
                                                                <a href="/" className="addlink">{product.name}</a>
                                                                <br></br>
                                                                <a href="/" className="addlink">${product.precio}</a>
                                                                <br></br>
                                                                <a href="/" className="addlink">{product.categoria}</a>
                                                                <br></br>
                                                                <a href="/" className="addlink">{product.description}</a>
                                                                <br></br>
                                                                <a href="/" className="addlink">{product.detail}</a>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div id='content-related'>
                                <div className='module'>
                                    <h2>Acciones recientes</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default SearchUsers;