import img from "../assets/Charles.jpg";

export const Third= () => {
    return (
        <div className="container mt-3">
            <h2>Charles Leclerc</h2>
            <p>Monégasque Race Car Driver</p>
            <div className="card" style={{width:"400px"}}>
                <img className="card-img-top" src={img} alt="Card image" style={{width:"100%"}} />
                <div className="card-body">
                    <h4 className="card-title">Charles Leclerc</h4>
                    <p className="card-text">Charles Leclerc is a racing driver from Monaco.Best Ferrari Driver.BANANA LECLERC</p>
                    <a href="#" className="btn btn-primary">See Profile</a>
                </div>
            </div>
        </div>
    )
}