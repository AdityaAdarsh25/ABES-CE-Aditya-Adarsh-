import img from "../assets/Oscar.jpg";

export const Second= () => {
    return (
        <div className="container mt-3">
            <h2>Oscar Piastri</h2>
            <p>Australian Race Car Driver</p>
            <div className="card" style={{width:"400px"}}>
                <img className="card-img-top" src={img} alt="Card image" style={{width:"100%"}} />
                <div className="card-body">
                    <h4 className="card-title">Oscar Piastri</h4>
                    <p className="card-text">Oscar Piastri is a racing driver from Australia.Best Mclaren Driver. Lando sucks lol</p>
                    <a href="#" className="btn btn-primary">See Profile</a>
                </div>
            </div>
        </div>
    )
}