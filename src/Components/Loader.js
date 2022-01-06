import ClipLoader from "react-spinners/ClipLoader";

const Loader = () => {
    return (
        <div className="loader">
            <ClipLoader color={"#FFA533"}></ClipLoader>
            <h1>Fetching data</h1>
        </div>
    )
}

export default Loader
